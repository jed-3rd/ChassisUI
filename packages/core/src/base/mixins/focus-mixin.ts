import { LitElement } from 'lit';

type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * Mixin for focus delegation and keyboard navigation support.
 */
export function FocusMixin<T extends Constructor<LitElement>>(superClass: T) {
  class FocusElement extends superClass {
    static shadowRootOptions = {
      ...LitElement.shadowRootOptions,
      delegatesFocus: true,
    };

    focus(options?: FocusOptions): void {
      const focusTarget = this.shadowRoot?.querySelector<HTMLElement>(
        '[part="base"], button, input, select, textarea',
      );
      if (focusTarget) {
        focusTarget.focus(options);
      } else {
        super.focus(options);
      }
    }
  }

  return FocusElement as T;
}
