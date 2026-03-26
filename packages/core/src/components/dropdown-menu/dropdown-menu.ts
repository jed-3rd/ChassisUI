import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { PopoverMixin } from '../../base/mixins/popover-mixin.js';
import { SlotMixin } from '../../base/mixins/slot-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { dropdownMenuStyles } from './dropdown-menu.styles.js';

@customElement('chassis-dropdown-menu')
export class ChassisDropdownMenu extends PopoverMixin(SlotMixin(ChassisElement)) {
  static styles = [resetStyles, dropdownMenuStyles];

  private _triggerEl: HTMLElement | null = null;
  private _menuEl: HTMLElement | null = null;
  private _focusIndex = -1;

  show() {
    this.open = true;
    this._updatePosition();
    this._focusIndex = -1;
    this.dispatchEvent(new Event('chassis-open', { bubbles: true, composed: true }));
  }

  hide() {
    this.open = false;
    this.stopAutoUpdate();
    this._focusIndex = -1;
    this.dispatchEvent(new Event('chassis-close', { bubbles: true, composed: true }));
  }

  toggle() {
    if (this.open) this.hide();
    else this.show();
  }

  private _getMenuItems(): HTMLElement[] {
    return this._getSlottedElements()
      .filter((el) => el.getAttribute('role') === 'menuitem' && el.getAttribute('aria-disabled') !== 'true') as HTMLElement[];
  }

  private _updatePosition() {
    if (!this._triggerEl || !this._menuEl) return;
    this.applyPosition(this._menuEl, this._triggerEl);
    this.startAutoUpdate(this._menuEl, this._triggerEl);
  }

  private _onTriggerClick() {
    this.toggle();
  }

  private _onTriggerKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.show();
      requestAnimationFrame(() => {
        const items = this._getMenuItems();
        if (items.length) {
          this._focusIndex = 0;
          items[0].focus();
        }
      });
    }
  }

  private _onMenuKeyDown(e: KeyboardEvent) {
    const items = this._getMenuItems();
    if (!items.length) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this._focusIndex = (this._focusIndex + 1) % items.length;
        items[this._focusIndex].focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        this._focusIndex = (this._focusIndex - 1 + items.length) % items.length;
        items[this._focusIndex].focus();
        break;
      case 'Home':
        e.preventDefault();
        this._focusIndex = 0;
        items[0].focus();
        break;
      case 'End':
        e.preventDefault();
        this._focusIndex = items.length - 1;
        items[items.length - 1].focus();
        break;
      case 'Escape':
        this.hide();
        this._triggerEl?.focus();
        break;
      case 'Tab':
        this.hide();
        break;
    }
  }

  private _onItemClick(e: Event) {
    const item = (e.target as Element).closest('[role="menuitem"]');
    if (item && item.getAttribute('aria-disabled') !== 'true') {
      this.dispatchEvent(new CustomEvent('chassis-select', {
        bubbles: true,
        composed: true,
        detail: { value: item.getAttribute('data-value') || item.textContent?.trim() },
      }));
      this.hide();
    }
  }

  private _boundDocClick = (e: MouseEvent) => {
    if (this.open && !this.contains(e.target as Node)) {
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
    this._menuEl = this.shadowRoot?.querySelector('.menu') as HTMLElement;
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
        @click=${this._onTriggerClick}
        @keydown=${this._onTriggerKeyDown}
      >
        <slot name="trigger"></slot>
      </div>
      <div
        part="menu"
        class="menu"
        role="menu"
        @keydown=${this._onMenuKeyDown}
        @click=${this._onItemClick}
      >
        <slot @slotchange=${this._onSlotChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-dropdown-menu': ChassisDropdownMenu;
  }
}
