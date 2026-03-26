import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { SlotMixin } from '../../base/mixins/slot-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { toggleGroupStyles } from './toggle-group.styles.js';

@customElement('chassis-toggle-group')
export class ChassisToggleGroup extends SlotMixin(ChassisElement) {
  static styles = [resetStyles, toggleGroupStyles];

  @property({ type: String, reflect: true })
  value = '';

  @property({ type: Boolean })
  multiple = false;

  private _getValues(): string[] {
    return this.value ? this.value.split(',').map((v) => v.trim()) : [];
  }

  private _setValues(values: string[]) {
    this.value = values.join(',');
  }

  private _updateItems() {
    const values = this._getValues();
    const items = this._getSlottedElements() as HTMLElement[];
    items.forEach((item) => {
      const val = item.getAttribute('data-value') || item.textContent?.trim() || '';
      const selected = values.includes(val);
      item.setAttribute('aria-pressed', String(selected));
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', String(selected));
    });
  }

  private _onItemClick(e: Event) {
    const item = (e.target as Element).closest('[data-value], button') as HTMLElement;
    if (!item || item.hasAttribute('disabled') || item.getAttribute('aria-disabled') === 'true') return;

    const val = item.getAttribute('data-value') || item.textContent?.trim() || '';
    const values = this._getValues();

    if (this.multiple) {
      const idx = values.indexOf(val);
      if (idx >= 0) values.splice(idx, 1);
      else values.push(val);
      this._setValues(values);
    } else {
      this.value = val;
    }

    this._updateItems();
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: { value: this.multiple ? this._getValues() : this.value },
    }));
  }

  private _onKeyDown(e: KeyboardEvent) {
    const items = this._getSlottedElements() as HTMLElement[];
    if (!items.length) return;

    const current = items.indexOf(e.target as HTMLElement);
    let next = current;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        next = (current + 1) % items.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        next = (current - 1 + items.length) % items.length;
        break;
      case 'Home':
        e.preventDefault();
        next = 0;
        break;
      case 'End':
        e.preventDefault();
        next = items.length - 1;
        break;
      default:
        return;
    }

    items[next].focus();
  }

  protected firstUpdated(): void {
    this._updateItems();
  }

  protected updated(changed: Map<string, unknown>): void {
    super.updated(changed);
    if (changed.has('value')) this._updateItems();
  }

  render() {
    return html`
      <div
        part="base"
        class="toggle-group"
        role="group"
        @click=${this._onItemClick}
        @keydown=${this._onKeyDown}
      >
        <slot @slotchange=${() => this._updateItems()}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-toggle-group': ChassisToggleGroup;
  }
}
