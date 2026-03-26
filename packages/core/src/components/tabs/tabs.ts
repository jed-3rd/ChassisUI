import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { SlotMixin } from '../../base/mixins/slot-mixin.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { tabsStyles } from './tabs.styles.js';

export type TabsVariant = 'underline' | 'contained';

@customElement('chassis-tabs')
export class ChassisTabs extends SlotMixin(ChassisElement) {
  static styles = [resetStyles, tabsStyles];

  @property({ type: String, reflect: true })
  value = '';

  @property({ type: String, reflect: true })
  variant: TabsVariant = 'underline';

  @state()
  _panels: Element[] = [];

  render() {
    const classes = {
      tabs: true,
      [`variant-${this.variant}`]: true,
    };

    return html`
      <div part="base" class=${classMap(classes)}>
        <div part="tab-list" class="tab-list" role="tablist" @click=${this._onTabClick} @keydown=${this._onKeyDown}>
          <slot name="tab" @slotchange=${this._onTabSlotChange}></slot>
          <div part="indicator" class="indicator"></div>
        </div>
        <div class="panels">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </div>
    `;
  }

  _onTabSlotChange() {
    this._updateTabs();
  }

  _updateTabs() {
    const tabs = this._getSlottedElements('tab');
    const panels = this._getSlottedElements();

    tabs.forEach((tab) => {
      const tabValue = tab.getAttribute('value') || '';
      const isSelected = tabValue === this.value;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', String(isSelected));
      tab.setAttribute('tabindex', isSelected ? '0' : '-1');
      tab.classList.toggle('active', isSelected);
    });

    panels.forEach((panel) => {
      const panelValue = panel.getAttribute('value') || '';
      const isActive = panelValue === this.value;
      panel.setAttribute('role', 'tabpanel');
      panel.toggleAttribute('hidden', !isActive);
    });
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('value')) {
      this._updateTabs();
    }
  }

  _onTabClick(e: Event) {
    const tab = (e.target as Element).closest('[slot="tab"]');
    if (!tab || tab.hasAttribute('disabled')) return;
    const value = tab.getAttribute('value') || '';
    if (value !== this.value) {
      this.value = value;
      this.dispatchEvent(new CustomEvent('change', { detail: { value }, bubbles: true, composed: true }));
    }
  }

  _onKeyDown(e: KeyboardEvent) {
    const tabs = this._getSlottedElements('tab').filter((t) => !t.hasAttribute('disabled'));
    const currentIndex = tabs.findIndex((t) => t.getAttribute('value') === this.value);

    let newIndex = currentIndex;
    if (e.key === 'ArrowRight') newIndex = (currentIndex + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') newIndex = 0;
    else if (e.key === 'End') newIndex = tabs.length - 1;
    else return;

    e.preventDefault();
    const newTab = tabs[newIndex];
    const value = newTab.getAttribute('value') || '';
    this.value = value;
    (newTab as HTMLElement).focus();
    this.dispatchEvent(new CustomEvent('change', { detail: { value }, bubbles: true, composed: true }));
  }
}

@customElement('chassis-tab-panel')
export class ChassisTabPanel extends ChassisElement {
  static styles = [resetStyles, tabsStyles];

  @property({ type: String, reflect: true })
  value = '';

  @property({ type: String })
  label = '';

  @property({ type: String })
  icon = '';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-tabs': ChassisTabs;
    'chassis-tab-panel': ChassisTabPanel;
  }
}
