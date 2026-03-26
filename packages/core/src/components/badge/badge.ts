import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { badgeStyles } from './badge.styles.js';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

@customElement('chassis-badge')
export class ChassisBadge extends ChassisElement {
  static styles = [resetStyles, badgeStyles];

  @property({ type: String, reflect: true })
  variant: BadgeVariant = 'default';

  @property({ type: String })
  value = '';

  @property({ type: Boolean, reflect: true })
  dot = false;

  render() {
    const classes = {
      badge: true,
      [`variant-${this.variant}`]: true,
      dot: this.dot,
    };

    return html`
      <span part="base" class=${classMap(classes)}>
        ${this.dot ? nothing : this.value || html`<slot></slot>`}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-badge': ChassisBadge;
  }
}
