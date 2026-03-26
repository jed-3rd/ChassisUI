import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { dialogStyles } from './dialog.styles.js';

@customElement('chassis-dialog')
export class ChassisDialog extends ChassisElement {
  static styles = [resetStyles, dialogStyles];

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Boolean })
  modal = true;

  show() {
    this.open = true;
    this.dispatchEvent(new Event('chassis-open', { bubbles: true, composed: true }));
    this._trapFocus();
  }

  hide() {
    this.open = false;
    this.dispatchEvent(new Event('chassis-close', { bubbles: true, composed: true }));
  }

  private _handleOverlayClick(e: Event) {
    if (e.target === e.currentTarget) {
      this.hide();
    }
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.hide();
    }
  }

  private _trapFocus() {
    requestAnimationFrame(() => {
      const focusable = this.shadowRoot?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      focusable?.focus();
    });
  }

  private _boundKeyDown = this._handleKeyDown.bind(this);

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('keydown', this._boundKeyDown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._boundKeyDown);
  }

  render() {
    return html`
      <div
        part="overlay"
        class="overlay"
        @click=${this._handleOverlayClick}
        aria-hidden=${!this.open}
      >
        <div
          part="panel"
          class="panel"
          role="dialog"
          aria-modal=${this.modal ? 'true' : nothing}
        >
          <div part="header" class="header">
            <slot name="header"></slot>
          </div>
          <div part="body" class="body">
            <slot></slot>
          </div>
          <div part="footer" class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-dialog': ChassisDialog;
  }
}
