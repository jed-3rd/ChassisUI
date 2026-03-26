import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { skeletonStyles } from './skeleton.styles.js';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular';

@customElement('chassis-skeleton')
export class ChassisSkeleton extends ChassisElement {
  static styles = [resetStyles, skeletonStyles];

  @property({ type: String, reflect: true })
  variant: SkeletonVariant = 'text';

  @property({ type: String })
  width = '';

  @property({ type: String })
  height = '';

  @property({ type: Number })
  lines = 1;

  render() {
    if (this.variant === 'text' && this.lines > 1) {
      return html`${Array.from({ length: this.lines }, (_, i) =>
        html`<div
          part="base"
          class=${classMap({ skeleton: true, text: true, 'last-line': i === this.lines - 1 })}
          style=${this.width ? `width: ${this.width}` : ''}
        ></div>`
      )}`;
    }

    const style = [
      this.width ? `width: ${this.width}` : '',
      this.height ? `height: ${this.height}` : '',
    ].filter(Boolean).join('; ');

    return html`
      <div
        part="base"
        class=${classMap({ skeleton: true, [this.variant]: true })}
        style=${style}
        aria-hidden="true"
      ></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-skeleton': ChassisSkeleton;
  }
}
