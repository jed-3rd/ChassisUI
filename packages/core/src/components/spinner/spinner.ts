import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { spinnerStyles } from './spinner.styles.js';

export type SpinnerSize = 'sm' | 'md' | 'lg';

@customElement('chassis-spinner')
export class ChassisSpinner extends ChassisElement {
  static styles = [resetStyles, spinnerStyles];

  @property({ type: String, reflect: true })
  size: SpinnerSize = 'md';

  render() {
    return html`
      <span
        part="base"
        class="spinner size-${this.size}"
        role="progressbar"
        aria-label="Loading"
      >
        <svg viewBox="0 0 50 50" part="track">
          <circle class="track" cx="25" cy="25" r="20" />
          <circle class="indicator" cx="25" cy="25" r="20" part="indicator" />
        </svg>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-spinner': ChassisSpinner;
  }
}
