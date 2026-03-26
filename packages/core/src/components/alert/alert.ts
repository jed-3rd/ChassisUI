import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { alertStyles } from './alert.styles.js';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

const ALERT_ICONS: Record<AlertVariant, string> = {
  info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  success: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  warning: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
  error: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
};

@customElement('chassis-alert')
export class ChassisAlert extends ChassisElement {
  static styles = [resetStyles, alertStyles];

  @property({ type: String, reflect: true })
  variant: AlertVariant = 'info';

  @property({ type: Boolean, reflect: true })
  dismissible = false;

  @property({ type: String })
  icon = '';

  render() {
    const classes = {
      alert: true,
      [`variant-${this.variant}`]: true,
    };

    const iconPath = ALERT_ICONS[this.variant];

    return html`
      <div
        part="base"
        class=${classMap(classes)}
        role="alert"
      >
        <svg part="icon" class="icon" viewBox="0 0 24 24" fill="currentColor">
          <path d=${iconPath} />
        </svg>
        <div part="message" class="message">
          <slot></slot>
        </div>
        ${this.dismissible
          ? html`
            <button
              part="dismiss"
              class="dismiss"
              aria-label="Dismiss"
              @click=${this._onDismiss}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          `
          : nothing}
      </div>
    `;
  }

  _onDismiss() {
    this.dispatchEvent(new CustomEvent('chassis-dismiss', { bubbles: true, composed: true }));
    this.remove();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-alert': ChassisAlert;
  }
}
