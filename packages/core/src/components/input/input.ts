import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { ChassisElement } from '../../base/base-element.js';
import { FormMixin } from '../../base/mixins/form-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { inputStyles } from './input.styles.js';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

@customElement('chassis-input')
export class ChassisInput extends FormMixin(ChassisElement) {
  static styles = [resetStyles, inputStyles];

  @property({ type: String, reflect: true })
  type: InputType = 'text';

  @property({ type: String })
  placeholder = '';

  @property({ type: String })
  label = '';

  @property({ type: String, attribute: 'helper-text' })
  helperText = '';

  @property({ type: String, reflect: true })
  error = '';

  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: Boolean, reflect: true })
  readonly = false;

  private handleInput(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  }

  private handleChange(): void {
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  render() {
    const classes = {
      'input-wrapper': true,
      [`size-${this.size}`]: true,
      'has-error': !!this.error,
    };

    return html`
      <div part="base" class=${classMap(classes)}>
        ${this.label
          ? html`<label part="label" for="input">${this.label}</label>`
          : nothing}
        <input
          part="input"
          id="input"
          type=${this.type}
          .value=${live(this.value)}
          placeholder=${ifDefined(this.placeholder || undefined)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          aria-invalid=${this.error ? 'true' : nothing}
          aria-describedby=${this.error
            ? 'error'
            : this.helperText
              ? 'helper'
              : nothing}
          @input=${this.handleInput}
          @change=${this.handleChange}
        />
        ${this.helperText && !this.error
          ? html`<span part="helper" id="helper" class="helper-text"
              >${this.helperText}</span
            >`
          : nothing}
        ${this.error
          ? html`<span part="error" id="error" class="error-text" role="alert"
              >${this.error}</span
            >`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-input': ChassisInput;
  }
}
