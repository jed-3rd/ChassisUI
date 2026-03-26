import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { FormMixin } from '../../base/mixins/form-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { sliderStyles } from './slider.styles.js';

@customElement('chassis-slider')
export class ChassisSlider extends FormMixin(ChassisElement) {
  static styles = [resetStyles, sliderStyles];

  @property({ type: Number })
  min = 0;

  @property({ type: Number })
  max = 100;

  @property({ type: Number })
  step = 1;

  @property({ type: Boolean })
  dual = false;

  @property({ type: Number, attribute: 'value-end' })
  valueEnd = 100;

  @state()
  private _dragging: 'start' | 'end' | null = null;

  private get _numValue(): number {
    return Number(this.value) || this.min;
  }

  private _percent(val: number): number {
    return ((val - this.min) / (this.max - this.min)) * 100;
  }

  private _clamp(val: number): number {
    const stepped = Math.round(val / this.step) * this.step;
    return Math.max(this.min, Math.min(this.max, stepped));
  }

  private _getValueFromEvent(e: MouseEvent | TouchEvent): number {
    const track = this.shadowRoot?.querySelector('.track') as HTMLElement;
    if (!track) return this.min;
    const rect = track.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return this._clamp(this.min + percent * (this.max - this.min));
  }

  private _onTrackClick(e: MouseEvent) {
    if (this.disabled) return;
    const val = this._getValueFromEvent(e);
    if (this.dual) {
      const distStart = Math.abs(val - this._numValue);
      const distEnd = Math.abs(val - this.valueEnd);
      if (distStart <= distEnd) {
        this.value = String(val);
      } else {
        this.valueEnd = val;
      }
    } else {
      this.value = String(val);
    }
    this._fireChange();
  }

  private _onThumbDown(which: 'start' | 'end') {
    return (e: MouseEvent | TouchEvent) => {
      if (this.disabled) return;
      e.preventDefault();
      this._dragging = which;
      const onMove = (ev: MouseEvent | TouchEvent) => {
        const val = this._getValueFromEvent(ev);
        if (this._dragging === 'start') {
          const clamped = this.dual ? Math.min(val, this.valueEnd) : val;
          this.value = String(clamped);
        } else if (this._dragging === 'end') {
          this.valueEnd = Math.max(val, this._numValue);
        }
      };
      const onUp = () => {
        this._dragging = null;
        this._fireChange();
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('touchend', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      document.addEventListener('touchmove', onMove);
      document.addEventListener('touchend', onUp);
    };
  }

  private _onKeyDown(which: 'start' | 'end') {
    return (e: KeyboardEvent) => {
      if (this.disabled) return;
      let val = which === 'start' ? this._numValue : this.valueEnd;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          e.preventDefault();
          val = this._clamp(val + this.step);
          break;
        case 'ArrowLeft':
        case 'ArrowDown':
          e.preventDefault();
          val = this._clamp(val - this.step);
          break;
        case 'Home':
          e.preventDefault();
          val = this.min;
          break;
        case 'End':
          e.preventDefault();
          val = this.max;
          break;
        default:
          return;
      }
      if (which === 'start') {
        this.value = String(this.dual ? Math.min(val, this.valueEnd) : val);
      } else {
        this.valueEnd = Math.max(val, this._numValue);
      }
      this._fireChange();
    };
  }

  private _fireChange() {
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: this.dual
        ? { value: this._numValue, valueEnd: this.valueEnd }
        : { value: this._numValue },
    }));
  }

  render() {
    const startPercent = this._percent(this._numValue);
    const endPercent = this.dual ? this._percent(this.valueEnd) : startPercent;
    const fillLeft = this.dual ? startPercent : 0;
    const fillWidth = this.dual ? endPercent - startPercent : startPercent;

    return html`
      <div
        part="base"
        class=${classMap({ slider: true, disabled: this.disabled })}
        @click=${this._onTrackClick}
      >
        <div part="track" class="track"></div>
        <div
          part="fill"
          class="fill"
          style="left: ${fillLeft}%; width: ${fillWidth}%"
        ></div>
        <div
          part="thumb"
          class="thumb"
          role="slider"
          tabindex=${this.disabled ? -1 : 0}
          aria-valuemin=${this.min}
          aria-valuemax=${this.dual ? this.valueEnd : this.max}
          aria-valuenow=${this._numValue}
          aria-label=${this.dual ? 'Range start' : 'Value'}
          style="left: ${startPercent}%"
          @mousedown=${this._onThumbDown('start')}
          @touchstart=${this._onThumbDown('start')}
          @keydown=${this._onKeyDown('start')}
        ></div>
        ${this.dual ? html`
          <div
            part="thumb"
            class="thumb"
            role="slider"
            tabindex=${this.disabled ? -1 : 0}
            aria-valuemin=${this._numValue}
            aria-valuemax=${this.max}
            aria-valuenow=${this.valueEnd}
            aria-label="Range end"
            style="left: ${endPercent}%"
            @mousedown=${this._onThumbDown('end')}
            @touchstart=${this._onThumbDown('end')}
            @keydown=${this._onKeyDown('end')}
          ></div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-slider': ChassisSlider;
  }
}
