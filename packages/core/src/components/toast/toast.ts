import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { toastStyles } from './toast.styles.js';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';
export type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';

const TOAST_ICONS: Record<ToastVariant, string> = {
  info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  success: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  warning: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
  error: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
};

@customElement('chassis-toast')
export class ChassisToast extends ChassisElement {
  static styles = [resetStyles, toastStyles];

  @property({ type: String, reflect: true })
  variant: ToastVariant = 'info';

  @property({ type: Number })
  duration = 5000;

  @property({ type: Boolean, reflect: true })
  dismissible = true;

  @state()
  _visible = false;

  _timeout: ReturnType<typeof setTimeout> | null = null;

  connectedCallback() {
    super.connectedCallback();
    requestAnimationFrame(() => {
      this._visible = true;
    });
    if (this.duration > 0) {
      this._timeout = setTimeout(() => this._dismiss(), this.duration);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._timeout) clearTimeout(this._timeout);
  }

  render() {
    const classes = {
      toast: true,
      [`variant-${this.variant}`]: true,
      visible: this._visible,
    };

    const iconPath = TOAST_ICONS[this.variant];

    return html`
      <div
        part="base"
        class=${classMap(classes)}
        role="alert"
        aria-live="polite"
      >
        <svg part="icon" class="icon" viewBox="0 0 24 24" fill="currentColor">
          <path d=${iconPath} />
        </svg>
        <div part="message" class="message">
          <slot></slot>
        </div>
        <slot name="action" part="action"></slot>
        ${this.dismissible
          ? html`
            <button
              part="dismiss"
              class="dismiss"
              aria-label="Dismiss"
              @click=${this._dismiss}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          `
          : nothing}
      </div>
    `;
  }

  _dismiss() {
    if (this._timeout) clearTimeout(this._timeout);
    this._visible = false;
    setTimeout(() => {
      this.dispatchEvent(new CustomEvent('chassis-dismiss', { bubbles: true, composed: true }));
      this.remove();
    }, 200);
  }
}

/**
 * Static manager for creating and stacking toasts.
 */
export class ToastManager {
  private static _containers = new Map<string, HTMLElement>();

  static show(message: string, options: {
    variant?: ToastVariant;
    duration?: number;
    position?: ToastPosition;
    dismissible?: boolean;
  } = {}) {
    const {
      variant = 'info',
      duration = 5000,
      position = 'top-right',
      dismissible = true,
    } = options;

    const container = ToastManager._getContainer(position);
    const toast = document.createElement('chassis-toast') as ChassisToast;
    toast.variant = variant;
    toast.duration = duration;
    toast.dismissible = dismissible;
    toast.textContent = message;
    container.appendChild(toast);
    return toast;
  }

  private static _getContainer(position: ToastPosition): HTMLElement {
    let container = ToastManager._containers.get(position);
    if (container && document.body.contains(container)) return container;

    container = document.createElement('div');
    container.className = `chassis-toast-container chassis-toast-${position}`;
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'false');

    const style = container.style;
    style.position = 'fixed';
    style.zIndex = 'var(--chassis-z-index-toast, 1400)';
    style.display = 'flex';
    style.flexDirection = 'column';
    style.gap = '0.5rem';
    style.padding = '1rem';
    style.pointerEvents = 'none';
    style.maxWidth = '420px';
    style.width = '100%';

    if (position.startsWith('top')) style.top = '0';
    else style.bottom = '0';

    if (position.endsWith('right')) style.right = '0';
    else if (position.endsWith('left')) style.left = '0';
    else {
      style.left = '50%';
      style.transform = 'translateX(-50%)';
    }

    document.body.appendChild(container);
    ToastManager._containers.set(position, container);
    return container;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-toast': ChassisToast;
  }
}
