import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { PopoverMixin } from '../../base/mixins/popover-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { selectStyles } from './select.styles.js';

@customElement('chassis-select')
export class ChassisSelect extends PopoverMixin(ChassisElement) {
  static styles = [resetStyles, selectStyles];

  @property({ type: String })
  value = '';

  @property({ type: String })
  placeholder = 'Select an option';

  @property({ type: String })
  label = '';

  @property({ type: String })
  error = '';

  @property({ type: Boolean, reflect: true })
  required = false;

  @state()
  private _displayValue = '';

  private _triggerEl: HTMLElement | null = null;
  private _listboxEl: HTMLElement | null = null;

  private _toggle() {
    if (this.disabled) return;
    if (this.open) {
      this._close();
    } else {
      this._open();
    }
  }

  private _open() {
    this.open = true;
    this._updatePosition();
  }

  private _close() {
    this.open = false;
    this.stopAutoUpdate();
  }

  private _updatePosition() {
    if (!this._triggerEl || !this._listboxEl) return;
    this.applyPosition(this._listboxEl, this._triggerEl);
    // Match trigger width
    this._listboxEl.style.width = `${this._triggerEl.getBoundingClientRect().width}px`;
    this.startAutoUpdate(this._listboxEl, this._triggerEl);
  }

  private _handleKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        this._toggle();
        break;
      case 'Escape':
        this._close();
        break;
    }
  }

  private _handleSlotChange() {
    this._updateDisplayValue();
  }

  private _updateDisplayValue() {
    const slot = this.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement;
    if (!slot) return;
    const options = slot.assignedElements() as HTMLElement[];
    const selected = options.find(
      (el) => el.getAttribute('value') === this.value || el.getAttribute('data-value') === this.value || el.textContent?.trim() === this.value,
    );
    this._displayValue = selected?.textContent?.trim() || '';
  }

  private _boundDocClick = (e: Event) => {
    if (!this.open) return;
    if (!e.composedPath().includes(this)) {
      this._close();
    }
  };

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this._boundDocClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this._boundDocClick);
  }

  protected firstUpdated(): void {
    this._triggerEl = this.shadowRoot?.querySelector('.trigger') as HTMLElement;
    this._listboxEl = this.shadowRoot?.querySelector('.listbox') as HTMLElement;
  }

  protected updated(changed: Map<string, unknown>): void {
    super.updated(changed);
    if (changed.has('open') && this.open) {
      this._updatePosition();
    }
  }

  render() {
    return html`
      ${this.label ? html`<label part="label" class="label">${this.label}</label>` : nothing}
      <div
        part="trigger"
        class="trigger"
        role="combobox"
        tabindex=${this.disabled ? -1 : 0}
        aria-expanded=${this.open}
        aria-haspopup="listbox"
        aria-disabled=${this.disabled || nothing}
        @click=${this._toggle}
        @keydown=${this._handleKeyDown}
      >
        <span class=${this._displayValue ? '' : 'placeholder'}>
          ${this._displayValue || this.placeholder}
        </span>
        <span class="arrow"></span>
      </div>
      <div part="listbox" class="listbox" role="listbox" @click=${this._onOptionClick}>
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
      ${this.error ? html`<span part="error" class="error-text">${this.error}</span>` : nothing}
    `;
  }

  private _onOptionClick(e: Event) {
    const target = e.target as HTMLElement;
    const value = target.getAttribute('value') || target.getAttribute('data-value') || target.textContent?.trim() || '';
    this.value = value;
    this._displayValue = target.textContent?.trim() || value;
    this._close();
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-select': ChassisSelect;
  }
}
