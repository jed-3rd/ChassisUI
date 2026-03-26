import { css } from 'lit';

export const buttonStyles = css`
  :host {
    display: inline-flex;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--chassis-spacing-200, 0.5rem);
    border: none;
    cursor: pointer;
    font-family: var(--chassis-typography-font-family-primary, sans-serif);
    line-height: var(--chassis-typography-line-height-normal, 1.5);
    transition:
      background-color var(--chassis-motion-duration-short, 150ms)
        var(--chassis-motion-easing-standard, ease),
      box-shadow var(--chassis-motion-duration-short, 150ms)
        var(--chassis-motion-easing-standard, ease),
      opacity var(--chassis-motion-duration-short, 150ms)
        var(--chassis-motion-easing-standard, ease);
  }

  /* Variants */
  .variant-primary {
    background-color: var(
      --chassis-button-primary-background,
      var(--chassis-color-primary, #6200ee)
    );
    color: var(--chassis-button-primary-color, var(--chassis-color-on-primary, #fff));
    border-radius: var(
      --chassis-button-primary-border-radius,
      var(--chassis-shape-radius-md, 8px)
    );
    font-weight: var(
      --chassis-button-primary-font-weight,
      var(--chassis-typography-font-weight-medium, 500)
    );
  }

  .variant-secondary {
    background-color: var(--chassis-button-secondary-background, transparent);
    color: var(--chassis-button-secondary-color, var(--chassis-color-primary, #6200ee));
    border: 1px solid
      var(--chassis-button-secondary-border-color, var(--chassis-color-outline, #79747e));
    border-radius: var(
      --chassis-button-secondary-border-radius,
      var(--chassis-shape-radius-md, 8px)
    );
    font-weight: var(
      --chassis-button-secondary-font-weight,
      var(--chassis-typography-font-weight-medium, 500)
    );
  }

  .variant-link {
    background-color: var(--chassis-button-link-background, transparent);
    color: var(--chassis-button-link-color, var(--chassis-color-primary, #6200ee));
    border: none;
    border-radius: var(
      --chassis-button-link-border-radius,
      var(--chassis-shape-radius-md, 8px)
    );
    font-weight: var(
      --chassis-button-link-font-weight,
      var(--chassis-typography-font-weight-medium, 500)
    );
  }

  /* Sizes */
  .size-sm {
    padding: var(--chassis-spacing-100, 0.25rem) var(--chassis-spacing-300, 0.75rem);
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
  }

  .size-md {
    padding: var(--chassis-button-primary-padding-y, var(--chassis-spacing-200, 0.5rem))
      var(--chassis-button-primary-padding-x, var(--chassis-spacing-400, 1rem));
    font-size: var(
      --chassis-button-primary-font-size,
      var(--chassis-typography-font-size-md, 1rem)
    );
  }

  .size-lg {
    padding: var(--chassis-spacing-300, 0.75rem) var(--chassis-spacing-500, 1.25rem);
    font-size: var(--chassis-typography-font-size-lg, 1.25rem);
  }

  /* States */
  button:hover:not(:disabled) {
    filter: brightness(1.1);
  }

  button:active:not(:disabled) {
    filter: brightness(0.95);
  }

  button:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }

  /* Loading */
  .is-loading {
    position: relative;
    color: transparent;
  }

  .spinner {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinner::after {
    content: '';
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: chassis-spin 0.6s linear infinite;
  }

  .is-loading .spinner {
    color: var(--chassis-color-on-primary, #fff);
  }

  .variant-secondary.is-loading .spinner,
  .variant-link.is-loading .spinner {
    color: var(--chassis-color-primary, #6200ee);
  }

  @keyframes chassis-spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Slot layout */
  .prefix,
  .suffix {
    display: inline-flex;
    align-items: center;
  }

  .prefix ::slotted(*) {
    margin-inline-end: var(--chassis-spacing-100, 0.25rem);
  }

  .suffix ::slotted(*) {
    margin-inline-start: var(--chassis-spacing-100, 0.25rem);
  }
`;
