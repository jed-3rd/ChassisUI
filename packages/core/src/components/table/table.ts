import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { tableStyles } from './table.styles.js';

@customElement('chassis-table')
export class ChassisTable extends ChassisElement {
  static styles = [resetStyles, tableStyles];

  @property({ type: Boolean, reflect: true })
  sortable = false;

  @property({ type: Boolean, reflect: true })
  striped = false;

  @property({ type: Boolean, attribute: 'sticky-header', reflect: true })
  stickyHeader = false;

  @state()
  _sortColumn = '';

  @state()
  _sortDirection: 'asc' | 'desc' = 'asc';

  render() {
    return html`
      <div part="base" class="table-wrapper" @click=${this._onHeaderClick}>
        <slot></slot>
      </div>
    `;
  }

  _onHeaderClick(e: Event) {
    if (!this.sortable) return;
    const th = (e.target as Element).closest('th[data-sort]');
    if (!th) return;

    const column = th.getAttribute('data-sort') || '';
    if (this._sortColumn === column) {
      this._sortDirection = this._sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this._sortColumn = column;
      this._sortDirection = 'asc';
    }

    this.dispatchEvent(new CustomEvent('chassis-sort', {
      bubbles: true,
      composed: true,
      detail: { column: this._sortColumn, direction: this._sortDirection },
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-table': ChassisTable;
  }
}
