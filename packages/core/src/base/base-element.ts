import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Base class for all Chassis UI components.
 * CSS custom properties inherit through Shadow DOM naturally,
 * so theme tokens set on ancestor elements are automatically available.
 */
export class ChassisElement extends LitElement {
  @property({ type: String, reflect: true })
  size: ComponentSize = 'md';

  @property({ type: Boolean, reflect: true })
  disabled = false;
}
