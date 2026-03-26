import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { switchStyles } from './switch.styles.js';

@customElement('chassis-switch')
export class ChassisSwitch extends ChassisElement {
  static styles = [resetStyles, switchStyles];

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: String })
  name = '';

  @property({ type: String })
  value = 'on';

  @property({ type: String })
  label = '';

  private _toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      this._toggle();
    }
  }

  render() {
    return html`
      <div
        part="base"
        role="switch"
        tabindex=${this.disabled ? -1 : 0}
        aria-checked=${this.checked}
        aria-disabled=${this.disabled}
        aria-label=${this.label || nothing}
        @click=${this._toggle}
        @keydown=${this._handleKeyDown}
      >
        <span part="track" class="track">
          <span part="thumb" class="thumb"></span>
        </span>
        ${this.label
          ? html`<span part="label" class="label-text">${this.label}</span>`
          : html`<slot></slot>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-switch': ChassisSwitch;
  }
}
