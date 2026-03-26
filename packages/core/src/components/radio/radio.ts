import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { radioStyles, radioGroupStyles } from './radio.styles.js';

@customElement('chassis-radio')
export class ChassisRadio extends ChassisElement {
  static styles = [resetStyles, radioStyles];

  @property({ type: String })
  value = '';

  @property({ type: String })
  label = '';

  @property({ type: Boolean, reflect: true })
  checked = false;

  private _handleClick() {
    if (this.disabled) return;
    this.checked = true;
    this.dispatchEvent(
      new CustomEvent('chassis-radio-select', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === ' ') {
      e.preventDefault();
      this._handleClick();
    }
  }

  render() {
    return html`
      <div
        part="base"
        role="radio"
        tabindex=${this.disabled ? -1 : 0}
        aria-checked=${this.checked}
        aria-disabled=${this.disabled || nothing}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        <span part="control" class="control"></span>
        ${this.label
          ? html`<span part="label" class="label-text">${this.label}</span>`
          : html`<slot></slot>`}
      </div>
    `;
  }
}

@customElement('chassis-radio-group')
export class ChassisRadioGroup extends ChassisElement {
  static styles = [resetStyles, radioGroupStyles];

  @property({ type: String })
  name = '';

  @property({ type: String })
  value = '';

  @property({ type: String })
  label = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('chassis-radio-select', this._handleRadioSelect as EventListener);
    this.addEventListener('keydown', this._handleKeyDown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('chassis-radio-select', this._handleRadioSelect as EventListener);
    this.removeEventListener('keydown', this._handleKeyDown);
  }

  private _handleRadioSelect = (e: CustomEvent) => {
    this.value = e.detail.value;
    this._updateRadios();
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  };

  private _handleKeyDown = (e: KeyboardEvent) => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    e.preventDefault();

    const radios = this._getRadios();
    const currentIndex = radios.findIndex((r) => r.checked);
    let nextIndex: number;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      nextIndex = currentIndex < radios.length - 1 ? currentIndex + 1 : 0;
    } else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : radios.length - 1;
    }

    const nextRadio = radios[nextIndex];
    if (nextRadio && !nextRadio.disabled) {
      this.value = nextRadio.value;
      this._updateRadios();
      nextRadio.focus();
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }
  };

  private _getRadios(): ChassisRadio[] {
    return Array.from(this.querySelectorAll('chassis-radio'));
  }

  private _updateRadios() {
    this._getRadios().forEach((radio) => {
      radio.checked = radio.value === this.value;
    });
  }

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('value')) {
      this._updateRadios();
    }
  }

  render() {
    return html`
      <div part="base" role="radiogroup" aria-label=${this.label || nothing}>
        ${this.label ? html`<div class="label">${this.label}</div>` : nothing}
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-radio': ChassisRadio;
    'chassis-radio-group': ChassisRadioGroup;
  }
}
