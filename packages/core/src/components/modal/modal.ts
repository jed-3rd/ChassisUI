import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { modalStyles } from './modal.styles.js';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

@customElement('chassis-modal')
export class ChassisModal extends ChassisElement {
  static styles = [resetStyles, modalStyles];

  @property({ type: String })
  modalTitle = '';

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String, attribute: 'modal-size' })
  modalSize: ModalSize = 'md';

  @property({ type: Boolean })
  closable = true;

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
    if (e.target === e.currentTarget && this.closable) {
      this.hide();
    }
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.closable) {
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
    const panelClasses = {
      panel: true,
      [this.modalSize]: true,
    };

    return html`
      <div
        part="overlay"
        class="overlay"
        @click=${this._handleOverlayClick}
        aria-hidden=${!this.open}
      >
        <div
          part="panel"
          class=${classMap(panelClasses)}
          role="dialog"
          aria-modal="true"
          aria-labelledby=${this.modalTitle ? 'modal-title' : nothing}
        >
          <div part="header" class="header">
            ${this.modalTitle ? html`<h2 id="modal-title" class="title">${this.modalTitle}</h2>` : html`<slot name="header"></slot>`}
            ${this.closable ? html`
              <button
                part="close"
                class="close-btn"
                @click=${this.hide}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            ` : nothing}
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
    'chassis-modal': ChassisModal;
  }
}
