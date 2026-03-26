import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { PopoverMixin } from '../../base/mixins/popover-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { popoverStyles } from './popover.styles.js';

export type PopoverTrigger = 'click' | 'hover' | 'manual';

@customElement('chassis-popover')
export class ChassisPopover extends PopoverMixin(ChassisElement) {
  static styles = [resetStyles, popoverStyles];

  @property({ type: String })
  trigger: PopoverTrigger = 'click';

  @property({ type: Boolean })
  arrow = false;

  private _triggerEl: HTMLElement | null = null;
  private _contentEl: HTMLElement | null = null;

  show() {
    this.open = true;
    this._updatePosition();
    this.dispatchEvent(new Event('chassis-open', { bubbles: true, composed: true }));
  }

  hide() {
    this.open = false;
    this.stopAutoUpdate();
    this.dispatchEvent(new Event('chassis-close', { bubbles: true, composed: true }));
  }

  toggle() {
    if (this.open) this.hide();
    else this.show();
  }

  private _updatePosition() {
    if (!this._triggerEl || !this._contentEl) return;
    this.applyPosition(this._contentEl, this._triggerEl);
    this.startAutoUpdate(this._contentEl, this._triggerEl);
  }

  private _onClick() {
    if (this.trigger === 'click') this.toggle();
  }

  private _onMouseEnter() {
    if (this.trigger === 'hover') this.show();
  }

  private _onMouseLeave() {
    if (this.trigger === 'hover') this.hide();
  }

  private _onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.open) {
      this.hide();
    }
  }

  private _boundDocClick = (e: MouseEvent) => {
    if (this.trigger === 'click' && this.open && !this.contains(e.target as Node)) {
      this.hide();
    }
  };

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this._boundDocClick, true);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this._boundDocClick, true);
  }

  protected firstUpdated(): void {
    this._triggerEl = this.shadowRoot?.querySelector('.trigger') as HTMLElement;
    this._contentEl = this.shadowRoot?.querySelector('.content') as HTMLElement;
  }

  protected updated(changed: Map<string, unknown>): void {
    super.updated(changed);
    if (changed.has('open') && this.open) {
      this._updatePosition();
    }
  }

  render() {
    return html`
      <div
        class="trigger"
        @click=${this._onClick}
        @mouseenter=${this._onMouseEnter}
        @mouseleave=${this._onMouseLeave}
        @keydown=${this._onKeyDown}
      >
        <slot name="trigger"></slot>
      </div>
      <div
        part="content"
        class="content"
        role="tooltip"
        @mouseenter=${this._onMouseEnter}
        @mouseleave=${this._onMouseLeave}
      >
        ${this.arrow ? html`<div class="arrow" part="arrow"></div>` : nothing}
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-popover': ChassisPopover;
  }
}
