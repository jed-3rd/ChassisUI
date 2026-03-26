import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { SlotMixin } from '../../base/mixins/slot-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { breadcrumbStyles } from './breadcrumb.styles.js';

@customElement('chassis-breadcrumb')
export class ChassisBreadcrumb extends SlotMixin(ChassisElement) {
  static styles = [resetStyles, breadcrumbStyles];

  @property({ type: String })
  separator = '/';

  @state()
  _items: Element[] = [];

  private _updating = false;

  render() {
    return html`
      <nav part="base" class="breadcrumb" aria-label="Breadcrumb">
        <ol class="list">
          <slot @slotchange=${this._onItemsChange}></slot>
        </ol>
      </nav>
    `;
  }

  _onItemsChange() {
    if (this._updating) return;
    this._updating = true;

    // Remove previously inserted separators
    this.querySelectorAll('.chassis-breadcrumb-sep').forEach((s) => s.remove());

    this._items = this._getSlottedElements().filter(
      (el) => !el.classList.contains('chassis-breadcrumb-sep'),
    );

    this._items.forEach((item, i) => {
      const isLast = i === this._items.length - 1;
      item.setAttribute('role', 'listitem');
      if (isLast) {
        item.setAttribute('aria-current', 'page');
        item.classList.add('current');
      } else {
        item.removeAttribute('aria-current');
        item.classList.remove('current');
        // Insert a separator span after this item in the light DOM
        const sep = document.createElement('span');
        sep.className = 'chassis-breadcrumb-sep';
        sep.textContent = this.separator;
        sep.setAttribute('aria-hidden', 'true');
        item.after(sep);
      }
    });

    // Release the guard after microtask to allow slotchange to settle
    queueMicrotask(() => { this._updating = false; });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-breadcrumb': ChassisBreadcrumb;
  }
}
