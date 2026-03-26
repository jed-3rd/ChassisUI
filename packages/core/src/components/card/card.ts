import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { cardStyles } from './card.styles.js';

@customElement('chassis-card')
export class ChassisCard extends ChassisElement {
  static styles = [resetStyles, cardStyles];

  @property({ type: Boolean, reflect: true })
  elevated = false;

  @property({ type: Boolean, reflect: true })
  outlined = false;

  render() {
    const classes = {
      card: true,
      elevated: this.elevated,
      outlined: this.outlined,
    };

    return html`
      <div part="base" class=${classMap(classes)}>
        <div part="header" class="header">
          <slot name="header"></slot>
        </div>
        <div part="body" class="body">
          <slot></slot>
        </div>
        <div part="footer" class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-card': ChassisCard;
  }
}
