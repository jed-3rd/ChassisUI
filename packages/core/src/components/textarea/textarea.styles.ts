import { css } from 'lit';

export const textareaStyles = css`
  :host {
    display: block;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .label {
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    font-weight: 500;
    color: var(--chassis-color-on-surface, #1c1b1f);
  }

  .required {
    color: var(--chassis-color-error, #b3261e);
    margin-left: 0.125rem;
  }

  .textarea {
    font-family: inherit;
    font-size: var(--chassis-typography-font-size-md, 1rem);
    color: var(--chassis-color-on-surface, #1c1b1f);
    background: var(--chassis-color-surface, #fff);
    border: var(--chassis-border-width-thin, 1px) solid
      var(--chassis-color-outline, #79747e);
    border-radius: var(--chassis-shape-radius-sm, 4px);
    padding: 0.75rem;
    outline: none;
    transition: border-color var(--chassis-motion-duration-short, 150ms) var(--chassis-motion-easing-standard, ease);
  }

  .textarea:focus {
    border-color: var(--chassis-color-primary, #6200ee);
    box-shadow: 0 0 0 1px var(--chassis-color-primary, #6200ee);
  }

  .textarea::placeholder {
    color: var(--chassis-color-on-surface-variant, #49454f);
  }

  .textarea:disabled {
    opacity: var(--chassis-opacity-disabled, 0.38);
    cursor: not-allowed;
  }

  .has-error .textarea {
    border-color: var(--chassis-color-error, #b3261e);
  }

  .has-error .textarea:focus {
    box-shadow: 0 0 0 1px var(--chassis-color-error, #b3261e);
  }

  .resize-none {
    resize: none;
  }

  .resize-vertical {
    resize: vertical;
  }

  .resize-auto {
    resize: none;
    overflow: hidden;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .helper {
    font-size: var(--chassis-typography-font-size-xs, 0.75rem);
    color: var(--chassis-color-on-surface-variant, #49454f);
  }

  .error-text {
    color: var(--chassis-color-error, #b3261e);
  }

  .counter {
    font-size: var(--chassis-typography-font-size-xs, 0.75rem);
    color: var(--chassis-color-on-surface-variant, #49454f);
  }
`;
