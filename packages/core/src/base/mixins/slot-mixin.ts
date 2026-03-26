import { LitElement } from 'lit';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface SlottedElementInterface {
  _getSlottedElements(slotName?: string): Element[];
  _onSlotChange(e: Event): void;
}

/**
 * Mixin for components that need to observe and query slotted children.
 * Provides helper methods for working with slots and dispatches events on slot changes.
 */
export function SlotMixin<T extends Constructor<LitElement>>(superClass: T) {
  class SlottedElement extends superClass {
    /**
     * Get elements assigned to a slot.
     * @param slotName - The name of the slot. Omit for the default slot.
     */
    _getSlottedElements(slotName?: string): Element[] {
      const selector = slotName ? `slot[name="${slotName}"]` : 'slot:not([name])';
      const slot = this.shadowRoot?.querySelector(selector) as HTMLSlotElement | null;
      if (!slot) return [];
      return slot.assignedElements({ flatten: true });
    }

    /**
     * Handle slot changes — updates internal state and dispatches an event.
     * Subclasses should call this from their slot's @slotchange handler.
     */
    _onSlotChange(e: Event): void {
      this.requestUpdate();
      this.dispatchEvent(
        new CustomEvent('chassis-slot-change', {
          bubbles: false,
          composed: false,
          detail: { slot: (e.target as HTMLSlotElement).name || '' },
        }),
      );
    }
  }

  return SlottedElement as Constructor<SlottedElementInterface> & T;
}
