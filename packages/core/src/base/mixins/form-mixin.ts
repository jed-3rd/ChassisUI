import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface FormAssociatedElement {
  name: string;
  value: string;
  internals: ElementInternals;
}

/**
 * Mixin for form-associated custom elements using ElementInternals.
 */
export function FormMixin<T extends Constructor<LitElement>>(superClass: T) {
  class FormElement extends superClass {
    static formAssociated = true;

    @property({ type: String, reflect: true })
    name = '';

    @property({ type: String })
    value = '';

    readonly internals: ElementInternals;

    constructor(...args: any[]) {
      super(...args);
      this.internals = this.attachInternals();
    }

    protected updated(changedProperties: Map<string, unknown>): void {
      super.updated(changedProperties);
      if (changedProperties.has('value')) {
        this.internals.setFormValue(this.value);
      }
    }

    formResetCallback(): void {
      this.value = '';
    }

    get form(): HTMLFormElement | null {
      return this.internals.form;
    }

    get validity(): ValidityState {
      return this.internals.validity;
    }
  }

  return FormElement as Constructor<FormAssociatedElement> & T;
}
