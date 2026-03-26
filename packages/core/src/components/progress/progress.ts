import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { progressStyles } from './progress.styles.js';

export type ProgressVariant = 'linear' | 'circular';

@customElement('chassis-progress')
export class ChassisProgress extends ChassisElement {
  static styles = [resetStyles, progressStyles];

  @property({ type: Number })
  value = 0;

  @property({ type: Number })
  max = 100;

  @property({ type: String, reflect: true })
  variant: ProgressVariant = 'linear';

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  private get _percentage() {
    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  }

  render() {
    if (this.variant === 'circular') {
      return this._renderCircular();
    }
    return this._renderLinear();
  }

  _renderLinear() {
    const classes = { progress: true, linear: true, indeterminate: this.indeterminate };
    return html`
      <div
        part="base"
        class=${classMap(classes)}
        role="progressbar"
        aria-valuenow=${this.indeterminate ? nothing : this.value}
        aria-valuemin="0"
        aria-valuemax=${this.max}
      >
        <div part="track" class="track">
          <div
            part="indicator"
            class="indicator"
            style=${this.indeterminate ? '' : `width: ${this._percentage}%`}
          ></div>
        </div>
        ${!this.indeterminate
          ? html`<span part="label" class="label">${Math.round(this._percentage)}%</span>`
          : nothing}
      </div>
    `;
  }

  _renderCircular() {
    const circumference = 2 * Math.PI * 20;
    const offset = circumference - (this._percentage / 100) * circumference;
    const classes = { progress: true, circular: true, indeterminate: this.indeterminate };

    return html`
      <div
        part="base"
        class=${classMap(classes)}
        role="progressbar"
        aria-valuenow=${this.indeterminate ? nothing : this.value}
        aria-valuemin="0"
        aria-valuemax=${this.max}
      >
        <svg viewBox="0 0 50 50">
          <circle part="track" class="circular-track" cx="25" cy="25" r="20" />
          <circle
            part="indicator"
            class="circular-indicator"
            cx="25"
            cy="25"
            r="20"
            style=${this.indeterminate ? '' : `stroke-dashoffset: ${offset}`}
            stroke-dasharray=${circumference}
          />
        </svg>
        ${!this.indeterminate
          ? html`<span part="label" class="circular-label">${Math.round(this._percentage)}%</span>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-progress': ChassisProgress;
  }
}
