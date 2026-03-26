import { LitElement } from 'lit';

type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * Mixin for ARIA attribute management.
 */
export function AriaMixin<T extends Constructor<LitElement>>(superClass: T) {
  class AriaElement extends superClass {
    protected setAriaAttribute(name: string, value: string | null): void {
      if (value === null || value === undefined) {
        this.removeAttribute(`aria-${name}`);
      } else {
        this.setAttribute(`aria-${name}`, value);
      }
    }

    protected setRole(role: string | null): void {
      if (role === null) {
        this.removeAttribute('role');
      } else {
        this.setAttribute('role', role);
      }
    }
  }

  return AriaElement as T;
}
