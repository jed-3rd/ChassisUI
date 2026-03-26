import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { PopoverMixin } from '../../base/mixins/popover-mixin.js';
import { FormMixin } from '../../base/mixins/form-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { datePickerStyles } from './date-picker.styles.js';

@customElement('chassis-date-picker')
export class ChassisDatePicker extends PopoverMixin(FormMixin(ChassisElement)) {
  static styles = [resetStyles, datePickerStyles];

  @property({ type: String })
  min = '';

  @property({ type: String })
  max = '';

  @property({ type: Boolean })
  range = false;

  @property({ type: String })
  locale = 'en-US';

  @property({ type: String, attribute: 'value-end' })
  valueEnd = '';

  @state() private _viewYear = new Date().getFullYear();
  @state() private _viewMonth = new Date().getMonth();

  private _triggerEl: HTMLElement | null = null;
  private _calendarEl: HTMLElement | null = null;

  private get _monthName(): string {
    return new Date(this._viewYear, this._viewMonth).toLocaleString(this.locale, { month: 'long', year: 'numeric' });
  }

  private get _weekdays(): string[] {
    const d = new Date(2024, 0, 1); // Monday
    return Array.from({ length: 7 }, (_, i) => {
      d.setDate(i - d.getDay() + 1);
      return d.toLocaleString(this.locale, { weekday: 'narrow' });
    });
  }

  private _getDays(): { date: Date; outside: boolean }[] {
    const firstDay = new Date(this._viewYear, this._viewMonth, 1);
    const startDay = firstDay.getDay();
    const days: { date: Date; outside: boolean }[] = [];

    // Fill in previous month days
    for (let i = startDay - 1; i >= 0; i--) {
      const d = new Date(this._viewYear, this._viewMonth, -i);
      days.push({ date: d, outside: true });
    }

    // Current month
    const daysInMonth = new Date(this._viewYear, this._viewMonth + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(this._viewYear, this._viewMonth, i), outside: false });
    }

    // Fill remaining to complete grid (6 rows)
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ date: new Date(this._viewYear, this._viewMonth + 1, i), outside: true });
    }

    return days;
  }

  private _toDateStr(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  private _parseDate(s: string): Date | null {
    if (!s) return null;
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  private _isDisabled(date: Date): boolean {
    const str = this._toDateStr(date);
    if (this.min && str < this.min) return true;
    if (this.max && str > this.max) return true;
    return false;
  }

  private _isToday(date: Date): boolean {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
  }

  private _isSelected(date: Date): boolean {
    const str = this._toDateStr(date);
    return str === this.value || str === this.valueEnd;
  }

  private _isInRange(date: Date): boolean {
    if (!this.range || !this.value || !this.valueEnd) return false;
    const str = this._toDateStr(date);
    return str > this.value && str < this.valueEnd;
  }

  show() {
    this.open = true;
    if (this.value) {
      const d = this._parseDate(this.value);
      if (d) {
        this._viewYear = d.getFullYear();
        this._viewMonth = d.getMonth();
      }
    }
    this._updatePosition();
  }

  hide() {
    this.open = false;
    this.stopAutoUpdate();
  }

  private _updatePosition() {
    if (!this._triggerEl || !this._calendarEl) return;
    this.applyPosition(this._calendarEl, this._triggerEl);
    this.startAutoUpdate(this._calendarEl, this._triggerEl);
  }

  private _onTriggerClick() {
    if (this.open) this.hide(); else this.show();
  }

  private _prevMonth() {
    if (this._viewMonth === 0) {
      this._viewMonth = 11;
      this._viewYear--;
    } else {
      this._viewMonth--;
    }
  }

  private _nextMonth() {
    if (this._viewMonth === 11) {
      this._viewMonth = 0;
      this._viewYear++;
    } else {
      this._viewMonth++;
    }
  }

  private _selectDay(date: Date) {
    if (this._isDisabled(date)) return;
    const str = this._toDateStr(date);

    if (this.range) {
      if (!this.value || (this.value && this.valueEnd)) {
        this.value = str;
        this.valueEnd = '';
      } else {
        if (str < this.value) {
          this.valueEnd = this.value;
          this.value = str;
        } else {
          this.valueEnd = str;
        }
        this.hide();
      }
    } else {
      this.value = str;
      this.hide();
    }

    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: this.range ? { value: this.value, valueEnd: this.valueEnd } : { value: this.value },
    }));
  }

  private _getDisplayValue(): string {
    if (!this.value) return 'Select date';
    if (this.range && this.valueEnd) {
      return `${this.value} — ${this.valueEnd}`;
    }
    return this.value;
  }

  private _boundDocClick = (e: MouseEvent) => {
    if (this.open && !this.contains(e.target as Node)) {
      this.hide();
    }
  };

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this._boundDocClick, true);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this._boundDocClick, true);
  }

  protected firstUpdated(): void {
    this._triggerEl = this.shadowRoot?.querySelector('.trigger') as HTMLElement;
    this._calendarEl = this.shadowRoot?.querySelector('.calendar') as HTMLElement;
  }

  protected updated(changed: Map<string, unknown>): void {
    super.updated(changed);
    if (changed.has('open') && this.open) {
      this._updatePosition();
    }
  }

  render() {
    const days = this._getDays();

    return html`
      <button
        part="trigger"
        class="trigger"
        @click=${this._onTriggerClick}
        aria-haspopup="dialog"
        aria-expanded=${this.open}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
        </svg>
        <span>${this._getDisplayValue()}</span>
      </button>

      <div part="calendar" class="calendar" role="dialog" aria-label="Date picker">
        <div part="header" class="calendar-header">
          <button class="nav-btn" @click=${this._prevMonth} aria-label="Previous month">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <span class="month-label">${this._monthName}</span>
          <button class="nav-btn" @click=${this._nextMonth} aria-label="Next month">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
        </div>

        <div class="weekdays">
          ${this._weekdays.map((d) => html`<span>${d}</span>`)}
        </div>

        <div class="days">
          ${days.map(({ date, outside }) => {
            const dateStr = this._toDateStr(date);
            const classes = {
              day: true,
              outside,
              today: this._isToday(date),
              selected: this._isSelected(date),
              'in-range': this._isInRange(date),
              'range-start': this.range && dateStr === this.value,
              'range-end': this.range && dateStr === this.valueEnd,
              disabled: this._isDisabled(date),
            };
            return html`
              <button
                part="day"
                class=${classMap(classes)}
                @click=${() => this._selectDay(date)}
                ?disabled=${this._isDisabled(date)}
                aria-label=${date.toLocaleDateString(this.locale)}
                aria-selected=${this._isSelected(date)}
              >${date.getDate()}</button>
            `;
          })}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-date-picker': ChassisDatePicker;
  }
}
