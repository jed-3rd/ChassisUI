import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { FormMixin } from '../../base/mixins/form-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { textareaStyles } from './textarea.styles.js';

export type TextareaResize = 'none' | 'vertical' | 'auto';

@customElement('chassis-textarea')
export class ChassisTextarea extends FormMixin(ChassisElement) {
  static styles = [resetStyles, textareaStyles];

  @property({ type: Number })
  rows = 3;

  @property({ type: Number })
  maxlength = 0;

  @property({ type: String, reflect: true })
  resize: TextareaResize = 'vertical';

  @property({ type: String })
  placeholder = '';

  @property({ type: String })
  label = '';

  @property({ type: String })
  error = '';

  @property({ type: String, attribute: 'helper-text' })
  helperText = '';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: String })
  value = '';

  render() {
    const classes = {
      wrapper: true,
      'has-error': !!this.error,
      disabled: this.disabled,
    };

    const charCount = this.maxlength > 0 ? `${this.value.length}/${this.maxlength}` : '';

    return html`
      <div class=${classMap(classes)}>
        ${this.label
          ? html`<label part="label" class="label">${this.label}${this.required ? html`<span class="required">*</span>` : nothing}</label>`
          : nothing}
        <textarea
          part="textarea"
          class="textarea resize-${this.resize}"
          .value=${this.value}
          rows=${this.rows}
          maxlength=${this.maxlength > 0 ? this.maxlength : nothing}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${this.error ? 'true' : 'false'}
          @input=${this._onInput}
        ></textarea>
        <div class="footer">
          ${this.error
            ? html`<span part="helper" class="helper error-text">${this.error}</span>`
            : this.helperText
              ? html`<span part="helper" class="helper">${this.helperText}</span>`
              : html`<span></span>`}
          ${charCount
            ? html`<span part="counter" class="counter">${charCount}</span>`
            : nothing}
        </div>
      </div>
    `;
  }

  _onInput(e: Event) {
    const textarea = e.target as HTMLTextAreaElement;
    this.value = textarea.value;

    if (this.resize === 'auto') {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    this.dispatchEvent(new CustomEvent('input', { bubbles: true, composed: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-textarea': ChassisTextarea;
  }
}
