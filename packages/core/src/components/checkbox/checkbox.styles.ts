import { css } from 'lit';

export const checkboxStyles = css`
  :host {
    display: inline-flex;
  }

  .checkbox-wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--chassis-checkbox-gap, var(--chassis-spacing-200, 0.5rem));
    cursor: pointer;
  }

  :host([disabled]) .checkbox-wrapper {
    cursor: not-allowed;
  }

  .control {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--chassis-checkbox-size, 1.25rem);
    height: var(--chassis-checkbox-size, 1.25rem);
    border: 2px solid
      var(--chassis-checkbox-border-color, var(--chassis-color-outline, #79747e));
    border-radius: var(
      --chassis-checkbox-border-radius,
      var(--chassis-shape-radius-sm, 4px)
    );
    background-color: var(--chassis-checkbox-background, transparent);
    transition:
      background-color var(--chassis-motion-duration-short, 150ms)
        var(--chassis-motion-easing-standard, ease),
      border-color var(--chassis-motion-duration-short, 150ms)
        var(--chassis-motion-easing-standard, ease);
  }

  :host([checked]) .control {
    background-color: var(
      --chassis-checkbox-checked-background,
      var(--chassis-color-primary, #6200ee)
    );
    border-color: var(
      --chassis-checkbox-checked-border-color,
      var(--chassis-color-primary, #6200ee)
    );
  }

  .control::after {
    content: '';
    display: block;
    opacity: 0;
    transition: opacity var(--chassis-motion-duration-short, 150ms)
      var(--chassis-motion-easing-standard, ease);
  }

  :host([checked]) .control::after {
    opacity: 1;
    width: 0.35rem;
    height: 0.65rem;
    border: solid var(--chassis-checkbox-check-color, var(--chassis-color-on-primary, #fff));
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-top: -2px;
  }

  :host([indeterminate]) .control::after {
    opacity: 1;
    width: 0.6rem;
    height: 0;
    border-bottom: 2px solid
      var(--chassis-checkbox-check-color, var(--chassis-color-on-primary, #fff));
    transform: none;
    margin-top: 0;
  }

  :host([indeterminate]) .control {
    background-color: var(
      --chassis-checkbox-checked-background,
      var(--chassis-color-primary, #6200ee)
    );
    border-color: var(
      --chassis-checkbox-checked-border-color,
      var(--chassis-color-primary, #6200ee)
    );
  }

  .control:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
  }

  label {
    font-size: var(
      --chassis-checkbox-label-font-size,
      var(--chassis-typography-font-size-md, 1rem)
    );
    color: var(
      --chassis-checkbox-label-color,
      var(--chassis-color-on-surface, #1c1b1f)
    );
    user-select: none;
  }
`;
