import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { dividerStyles } from './divider.styles.js';

export type DividerOrientation = 'horizontal' | 'vertical';

@customElement('chassis-divider')
export class ChassisDivider extends ChassisElement {
  static styles = [resetStyles, dividerStyles];

  @property({ type: String, reflect: true })
  orientation: DividerOrientation = 'horizontal';

  @property({ type: String })
  label = '';

  render() {
    return html`
      <div
        part="base"
        class="divider ${this.orientation}"
        role="separator"
        aria-orientation=${this.orientation}
      >
        ${this.label
          ? html`<span part="label" class="label">${this.label}</span>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-divider': ChassisDivider;
  }
}
