import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { buttonStyles } from './button.styles.js';

export type ButtonVariant = 'primary' | 'secondary' | 'link';

@customElement('chassis-button')
export class ChassisButton extends ChassisElement {
  static styles = [resetStyles, buttonStyles];

  @property({ type: String, reflect: true })
  variant: ButtonVariant = 'primary';

  @property({ type: String })
  type: 'button' | 'submit' | 'reset' = 'button';

  @property({ type: Boolean, reflect: true })
  loading = false;

  render() {
    const classes = {
      [`variant-${this.variant}`]: true,
      [`size-${this.size}`]: true,
      'is-loading': this.loading,
    };

    return html`
      <button
        part="base"
        class=${classMap(classes)}
        ?disabled=${this.disabled || this.loading}
        type=${this.type}
        aria-busy=${this.loading ? 'true' : nothing}
        aria-disabled=${this.disabled ? 'true' : nothing}
      >
        <span part="prefix" class="prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="label">
          <slot></slot>
        </span>
        <span part="suffix" class="suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.loading
          ? html`<span part="spinner" class="spinner" aria-hidden="true"></span>`
          : nothing}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-button': ChassisButton;
  }
}
