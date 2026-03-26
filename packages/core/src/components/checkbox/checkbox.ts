import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { FormMixin } from '../../base/mixins/form-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { checkboxStyles } from './checkbox.styles.js';

@customElement('chassis-checkbox')
export class ChassisCheckbox extends FormMixin(ChassisElement) {
  static styles = [resetStyles, checkboxStyles];

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: String })
  label = '';

  private handleClick(): void {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.indeterminate = false;
    this.internals.setFormValue(this.checked ? this.value || 'on' : null);
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      this.handleClick();
    }
  }

  render() {
    return html`
      <div
        part="base"
        class="checkbox-wrapper"
        @click=${this.handleClick}
      >
        <div
          part="control"
          class="control"
          role="checkbox"
          tabindex=${this.disabled ? nothing : '0'}
          aria-checked=${this.indeterminate ? 'mixed' : this.checked ? 'true' : 'false'}
          aria-disabled=${this.disabled ? 'true' : nothing}
          aria-label=${this.label || nothing}
          @keydown=${this.handleKeyDown}
        ></div>
        ${this.label
          ? html`<label part="label">${this.label}</label>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-checkbox': ChassisCheckbox;
  }
}
