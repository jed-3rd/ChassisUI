import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { paginationStyles } from './pagination.styles.js';

@customElement('chassis-pagination')
export class ChassisPagination extends ChassisElement {
  static styles = [resetStyles, paginationStyles];

  @property({ type: Number })
  total = 1;

  @property({ type: Number, reflect: true })
  current = 1;

  @property({ type: Number })
  siblings = 1;

  @property({ type: Boolean, attribute: 'show-edges' })
  showEdges = true;

  private get _pages(): (number | 'ellipsis')[] {
    const pages: (number | 'ellipsis')[] = [];
    const total = this.total;
    const current = this.current;
    const siblings = this.siblings;

    if (total <= (siblings * 2 + 5)) {
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }

    if (this.showEdges) pages.push(1);

    const leftBound = Math.max(2, current - siblings);
    const rightBound = Math.min(total - 1, current + siblings);

    if (leftBound > 2) pages.push('ellipsis');
    for (let i = leftBound; i <= rightBound; i++) pages.push(i);
    if (rightBound < total - 1) pages.push('ellipsis');

    if (this.showEdges) pages.push(total);
    return pages;
  }

  render() {
    return html`
      <nav part="base" class="pagination" aria-label="Pagination">
        <button
          part="prev"
          class="page-btn prev"
          ?disabled=${this.current <= 1}
          @click=${() => this._goTo(this.current - 1)}
          aria-label="Previous page"
        >
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
        </button>
        ${this._pages.map((page) =>
          page === 'ellipsis'
            ? html`<span part="ellipsis" class="ellipsis">&hellip;</span>`
            : html`
              <button
                part="page"
                class=${classMap({ 'page-btn': true, active: page === this.current })}
                aria-current=${page === this.current ? 'page' : nothing}
                @click=${() => this._goTo(page)}
              >${page}</button>
            `
        )}
        <button
          part="next"
          class="page-btn next"
          ?disabled=${this.current >= this.total}
          @click=${() => this._goTo(this.current + 1)}
          aria-label="Next page"
        >
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
        </button>
      </nav>
    `;
  }

  _goTo(page: number) {
    if (page < 1 || page > this.total || page === this.current) return;
    this.current = page;
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: { page },
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-pagination': ChassisPagination;
  }
}
