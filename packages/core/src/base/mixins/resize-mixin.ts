import { LitElement } from 'lit';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface ResizableElementInterface {
  _onResize(entry: ResizeObserverEntry): void;
}

/**
 * Mixin that integrates ResizeObserver for responsive components.
 * Subclasses should override _onResize() to react to size changes.
 */
export function ResizeMixin<T extends Constructor<LitElement>>(superClass: T) {
  class ResizableElement extends superClass {
    _resizeObserver: ResizeObserver | null = null;

    connectedCallback(): void {
      super.connectedCallback();
      this._resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          this._onResize(entry);
        }
      });
      this._resizeObserver.observe(this);
    }

    disconnectedCallback(): void {
      super.disconnectedCallback();
      this._resizeObserver?.disconnect();
      this._resizeObserver = null;
    }

    _onResize(_entry: ResizeObserverEntry): void {
      // Override in subclass
    }
  }

  return ResizableElement as Constructor<ResizableElementInterface> & T;
}
