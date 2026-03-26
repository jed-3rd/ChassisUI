import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChassisElement } from '../../base/base-element.js';
import { PopoverMixin } from '../../base/mixins/popover-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { tooltipStyles } from './tooltip.styles.js';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

@customElement('chassis-tooltip')
export class ChassisTooltip extends PopoverMixin(ChassisElement) {
  static styles = [resetStyles, tooltipStyles];

  @property({ type: String })
  content = '';

  private _triggerEl: HTMLElement | null = null;
  private _contentEl: HTMLElement | null = null;

  private _show() {
    this.open = true;
    this._updatePosition();
  }

  private _hide() {
    this.open = false;
    this.stopAutoUpdate();
  }

  private _updatePosition() {
    if (!this._triggerEl || !this._contentEl) return;
    this.applyPosition(this._contentEl, this._triggerEl);
    this.startAutoUpdate(this._contentEl, this._triggerEl);
  }

  protected firstUpdated(): void {
    this._triggerEl = this.shadowRoot?.querySelector('.trigger') as HTMLElement;
    this._contentEl = this.shadowRoot?.querySelector('.content') as HTMLElement;
  }

  protected updated(changed: Map<string, unknown>): void {
    super.updated(changed);
    if (changed.has('open') && this.open) {
      this._updatePosition();
    }
  }

  render() {
    return html`
      <div
        part="base"
        @mouseenter=${this._show}
        @mouseleave=${this._hide}
        @focusin=${this._show}
        @focusout=${this._hide}
      >
        <span part="trigger" class="trigger">
          <slot></slot>
        </span>
        <span
          part="content"
          class="content"
          role="tooltip"
          aria-hidden=${!this.open}
        >
          ${this.content}
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-tooltip': ChassisTooltip;
  }
}
