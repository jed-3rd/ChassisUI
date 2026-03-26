import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { chipStyles } from './chip.styles.js';

export type ChipVariant = 'filter' | 'choice' | 'input';

@customElement('chassis-chip')
export class ChassisChip extends ChassisElement {
  static styles = [resetStyles, chipStyles];

  @property({ type: String, reflect: true })
  variant: ChipVariant = 'filter';

  @property({ type: Boolean, reflect: true })
  selected = false;

  @property({ type: Boolean, reflect: true })
  removable = false;

  @property({ type: Boolean, reflect: true })
  override disabled = false;

  render() {
    const classes = {
      chip: true,
      [`variant-${this.variant}`]: true,
      selected: this.selected,
      disabled: this.disabled,
    };

    return html`
      <button
        part="base"
        class=${classMap(classes)}
        ?disabled=${this.disabled}
        role=${this.variant === 'choice' ? 'radio' : 'button'}
        aria-pressed=${this.variant === 'filter' ? String(this.selected) : nothing}
        aria-checked=${this.variant === 'choice' ? String(this.selected) : nothing}
        @click=${this._onClick}
      >
        <slot name="icon" part="icon"></slot>
        <span part="label" class="label"><slot></slot></span>
        ${this.removable
          ? html`
            <span
              part="remove"
              class="remove"
              role="button"
              aria-label="Remove"
              @click=${this._onRemove}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </span>
          `
          : nothing}
      </button>
    `;
  }

  _onClick() {
    if (this.disabled) return;
    if (this.variant === 'filter' || this.variant === 'choice') {
      this.selected = !this.selected;
    }
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: { selected: this.selected },
    }));
  }

  _onRemove(e: Event) {
    e.stopPropagation();
    const event = new CustomEvent('chassis-remove', {
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    const allowed = this.dispatchEvent(event);
    if (allowed) {
      this.remove();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-chip': ChassisChip;
  }
}
