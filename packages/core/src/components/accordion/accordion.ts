import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { SlotMixin } from '../../base/mixins/slot-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { accordionStyles } from './accordion.styles.js';

@customElement('chassis-accordion')
export class ChassisAccordion extends SlotMixin(ChassisElement) {
  static styles = [resetStyles, accordionStyles];

  @property({ type: Boolean, reflect: true })
  multiple = false;

  _onItemToggle(e: CustomEvent) {
    if (this.multiple) return;
    const items = this._getSlottedElements();
    const toggled = e.target as Element;
    items.forEach((item) => {
      if (item !== toggled && item.hasAttribute('open')) {
        item.removeAttribute('open');
      }
    });
  }

  render() {
    return html`
      <div part="base" class="accordion" role="presentation" @chassis-accordion-toggle=${this._onItemToggle}>
        <slot @slotchange=${this._onSlotChange}></slot>
      </div>
    `;
  }
}

@customElement('chassis-accordion-item')
export class ChassisAccordionItem extends ChassisElement {
  static styles = [resetStyles, accordionStyles];

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Boolean, reflect: true })
  override disabled = false;

  render() {
    const classes = {
      item: true,
      open: this.open,
      disabled: this.disabled,
    };

    return html`
      <div part="base" class=${classMap(classes)}>
        <button
          part="trigger"
          class="trigger"
          aria-expanded=${this.open}
          ?disabled=${this.disabled}
          @click=${this._toggle}
        >
          <slot name="trigger"></slot>
          <svg part="icon" class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
          </svg>
        </button>
        <div part="content" class="content" role="region">
          <div class="content-inner">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  _toggle() {
    if (this.disabled) return;
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent('chassis-accordion-toggle', {
      bubbles: true,
      composed: true,
      detail: { open: this.open },
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-accordion': ChassisAccordion;
    'chassis-accordion-item': ChassisAccordionItem;
  }
}
