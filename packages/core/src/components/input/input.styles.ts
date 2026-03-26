import { css } from 'lit';

export const inputStyles = css`
  :host {
    display: block;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--chassis-input-gap, var(--chassis-spacing-100, 0.25rem));
  }

  label {
    display: block;
    font-size: var(
      --chassis-input-label-font-size,
      var(--chassis-typography-font-size-sm, 0.875rem)
    );
    font-weight: var(
      --chassis-input-label-font-weight,
      var(--chassis-typography-font-weight-medium, 500)
    );
    color: var(--chassis-input-label-color, var(--chassis-color-on-surface, #1c1b1f));
  }

  input {
    display: block;
    width: 100%;
    border: 1px solid
      var(--chassis-input-border-color, var(--chassis-color-outline, #79747e));
    border-radius: var(
      --chassis-input-border-radius,
      var(--chassis-shape-radius-md, 8px)
    );
    background-color: var(
      --chassis-input-background,
      var(--chassis-color-surface, #fff)
    );
    color: var(--chassis-input-color, var(--chassis-color-on-surface, #1c1b1f));
    font-family: var(--chassis-typography-font-family-primary, sans-serif);
    font-size: var(
      --chassis-input-font-size,
      var(--chassis-typography-font-size-md, 1rem)
    );
    line-height: var(--chassis-typography-line-height-normal, 1.5);
    transition:
      border-color var(--chassis-motion-duration-short, 150ms)
        var(--chassis-motion-easing-standard, ease),
      box-shadow var(--chassis-motion-duration-short, 150ms)
        var(--chassis-motion-easing-standard, ease);
  }

  .size-sm input {
    padding: var(--chassis-spacing-100, 0.25rem) var(--chassis-spacing-200, 0.5rem);
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
  }

  .size-md input {
    padding: var(--chassis-input-padding-y, var(--chassis-spacing-200, 0.5rem))
      var(--chassis-input-padding-x, var(--chassis-spacing-300, 0.75rem));
    font-size: var(--chassis-typography-font-size-md, 1rem);
  }

  .size-lg input {
    padding: var(--chassis-spacing-300, 0.75rem) var(--chassis-spacing-400, 1rem);
    font-size: var(--chassis-typography-font-size-lg, 1.25rem);
  }

  input::placeholder {
    color: var(
      --chassis-input-placeholder-color,
      var(--chassis-color-on-surface-variant, #49454f)
    );
  }

  input:hover:not(:disabled) {
    border-color: var(
      --chassis-input-hover-border-color,
      var(--chassis-color-on-surface, #1c1b1f)
    );
  }

  input:focus-visible {
    outline: none;
    border-color: var(
      --chassis-input-focus-border-color,
      var(--chassis-color-primary, #6200ee)
    );
    box-shadow: 0 0 0 1px
      var(--chassis-input-focus-ring-color, var(--chassis-color-primary, #6200ee));
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }

  input[readonly] {
    background-color: var(
      --chassis-input-readonly-background,
      var(--chassis-color-surface-variant, #e7e0ec)
    );
  }

  :host([error]) input,
  .has-error input {
    border-color: var(
      --chassis-input-error-border-color,
      var(--chassis-color-error, #b3261e)
    );
  }

  :host([error]) input:focus-visible,
  .has-error input:focus-visible {
    box-shadow: 0 0 0 1px
      var(--chassis-input-error-border-color, var(--chassis-color-error, #b3261e));
  }

  .helper-text {
    font-size: var(
      --chassis-input-helper-font-size,
      var(--chassis-typography-font-size-sm, 0.875rem)
    );
    color: var(
      --chassis-input-helper-color,
      var(--chassis-color-on-surface-variant, #49454f)
    );
  }

  .error-text {
    font-size: var(
      --chassis-input-error-font-size,
      var(--chassis-typography-font-size-sm, 0.875rem)
    );
    color: var(
      --chassis-input-error-color,
      var(--chassis-color-error, #b3261e)
    );
  }
`;
