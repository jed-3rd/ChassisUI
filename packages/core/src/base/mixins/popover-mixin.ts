import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

type Constructor<T = {}> = new (...args: any[]) => T;

export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';

export interface PopoverElementInterface {
  placement: PopoverPlacement;
  offset: number;
  open: boolean;
  computePosition(anchor: HTMLElement, floating: HTMLElement): { top: number; left: number; actualPlacement: PopoverPlacement };
  applyPosition(floating: HTMLElement, anchor: HTMLElement): void;
  startAutoUpdate(floating: HTMLElement, anchor: HTMLElement): void;
  stopAutoUpdate(): void;
}

/**
 * Mixin for anchor-positioned floating elements (tooltip, popover, dropdown, select, etc.).
 * Provides placement, offset, open properties and positioning logic with flip/overflow.
 */
export function PopoverMixin<T extends Constructor<LitElement>>(superClass: T) {
  class PopoverElement extends superClass {
    @property({ type: String, reflect: true })
    placement: PopoverPlacement = 'bottom';

    @property({ type: Number })
    offset = 8;

    @property({ type: Boolean, reflect: true })
    open = false;

    _cleanupAutoUpdate: (() => void) | null = null;

    computePosition(anchor: HTMLElement, floating: HTMLElement) {
      const anchorRect = anchor.getBoundingClientRect();
      const floatingRect = floating.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      let placement = this.placement;
      const basePlacement = placement.split('-')[0];
      const alignment = placement.split('-')[1] || 'center';

      let top = 0;
      let left = 0;

      // Calculate initial position
      const calcPos = (base: string, align: string) => {
        let t = 0;
        let l = 0;
        const alignH = (a: DOMRect, f: DOMRect, al: string) => {
          if (al === 'start') return a.left;
          if (al === 'end') return a.right - f.width;
          return a.left + (a.width - f.width) / 2;
        };
        switch (base) {
          case 'top':
            t = anchorRect.top - floatingRect.height - this.offset;
            l = alignH(anchorRect, floatingRect, align);
            break;
          case 'bottom':
            t = anchorRect.bottom + this.offset;
            l = alignH(anchorRect, floatingRect, align);
            break;
          case 'left':
            t = anchorRect.top + (anchorRect.height - floatingRect.height) / 2;
            l = anchorRect.left - floatingRect.width - this.offset;
            break;
          case 'right':
            t = anchorRect.top + (anchorRect.height - floatingRect.height) / 2;
            l = anchorRect.right + this.offset;
            break;
        }
        return { top: t, left: l };
      };

      const pos = calcPos(basePlacement, alignment);
      top = pos.top;
      left = pos.left;

      // Flip if overflowing viewport
      const suffix = placement.includes('-') ? '-' + placement.split('-')[1] : '';
      let flippedBase: string | null = null;
      if (basePlacement === 'top' && top < 0) flippedBase = 'bottom';
      if (basePlacement === 'bottom' && top + floatingRect.height > vh) flippedBase = 'top';
      if (basePlacement === 'left' && left < 0) flippedBase = 'right';
      if (basePlacement === 'right' && left + floatingRect.width > vw) flippedBase = 'left';

      if (flippedBase) {
        placement = (flippedBase + suffix) as PopoverPlacement;
        const flipped = calcPos(flippedBase, alignment);
        top = flipped.top;
        left = flipped.left;
      }

      // Clamp to viewport edges
      left = Math.max(4, Math.min(left, vw - floatingRect.width - 4));
      top = Math.max(4, Math.min(top, vh - floatingRect.height - 4));

      return { top, left, actualPlacement: placement };
    }

    applyPosition(floating: HTMLElement, anchor: HTMLElement): void {
      const { top, left, actualPlacement } = this.computePosition(anchor, floating);
      floating.style.position = 'fixed';
      floating.style.top = `${top}px`;
      floating.style.left = `${left}px`;
      floating.setAttribute('data-placement', actualPlacement);
    }

    startAutoUpdate(floating: HTMLElement, anchor: HTMLElement): void {
      this.stopAutoUpdate();
      const update = () => {
        if (this.open) this.applyPosition(floating, anchor);
      };
      window.addEventListener('scroll', update, { passive: true, capture: true });
      window.addEventListener('resize', update, { passive: true });
      this._cleanupAutoUpdate = () => {
        window.removeEventListener('scroll', update, true);
        window.removeEventListener('resize', update);
      };
    }

    stopAutoUpdate(): void {
      this._cleanupAutoUpdate?.();
      this._cleanupAutoUpdate = null;
    }

    disconnectedCallback(): void {
      super.disconnectedCallback();
      this.stopAutoUpdate();
    }
  }

  return PopoverElement as Constructor<PopoverElementInterface> & T;
}
