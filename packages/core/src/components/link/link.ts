import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { FocusMixin } from '../../base/mixins/focus-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { linkStyles } from './link.styles.js';

export type LinkVariant = 'default' | 'subtle';
export type LinkUnderline = 'always' | 'hover' | 'none';

@customElement('chassis-link')
export class ChassisLink extends FocusMixin(ChassisElement) {
  static styles = [resetStyles, linkStyles];

  @property({ type: String })
  href = '';

  @property({ type: String })
  target = '';

  @property({ type: String, reflect: true })
  variant: LinkVariant = 'default';

  @property({ type: String, reflect: true })
  underline: LinkUnderline = 'always';

  render() {
    const classes = {
      link: true,
      [`variant-${this.variant}`]: true,
      [`underline-${this.underline}`]: true,
    };

    return html`
      <a
        part="base"
        class=${classMap(classes)}
        href=${this.href}
        target=${this.target || ''}
        rel=${this.target === '_blank' ? 'noopener noreferrer' : ''}
      >
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-link': ChassisLink;
  }
}
