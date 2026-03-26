import { css } from 'lit';

export const radioStyles = css`
  :host {
    display: block;
    cursor: pointer;
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  [part="base"] {
    display: flex;
    align-items: center;
    gap: var(--chassis-spacing-200, 0.5rem);
    padding: var(--chassis-spacing-100, 0.25rem) 0;
  }

  .control {
    position: relative;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border: 2px solid var(--chassis-color-outline, #79747e);
    border-radius: 50%;
    transition: all var(--chassis-motion-duration-short, 150ms)
      var(--chassis-motion-easing-standard, ease);
    flex-shrink: 0;
  }

  :host([checked]) .control {
    border-color: var(--chassis-color-primary, #6200ee);
  }

  .control::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--chassis-color-primary, #6200ee);
    transition: transform var(--chassis-motion-duration-short, 150ms)
      var(--chassis-motion-easing-standard, ease);
  }

  :host([checked]) .control::after {
    transform: translate(-50%, -50%) scale(1);
  }

  .control:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
  }

  .label-text {
    font-size: var(--chassis-typography-font-size-md, 1rem);
    color: var(--chassis-color-on-surface, #1c1b1f);
    user-select: none;
  }
`;

export const radioGroupStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--chassis-spacing-200, 0.5rem);
  }

  .label {
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    font-weight: var(--chassis-typography-font-weight-medium, 500);
    color: var(--chassis-color-on-surface, #1c1b1f);
    margin-bottom: var(--chassis-spacing-100, 0.25rem);
  }
`;
