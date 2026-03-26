import { css } from 'lit';

export const chipStyles = css`
  :host {
    display: inline-flex;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.75rem;
    border: var(--chassis-border-width-thin, 1px) solid var(--chassis-color-outline, #79747e);
    border-radius: var(--chassis-chip-border-radius, 9999px);
    background: var(--chassis-color-surface, #fff);
    color: var(--chassis-color-on-surface, #1c1b1f);
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    font-family: inherit;
    cursor: pointer;
    transition: all var(--chassis-motion-duration-short, 150ms) ease;
    outline: none;
    line-height: 1.4;
  }

  .chip:hover:not(:disabled) {
    background: var(--chassis-color-surface-variant, #e7e0ec);
  }

  .chip:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
  }

  .chip:disabled {
    opacity: var(--chassis-opacity-disabled, 0.38);
    cursor: not-allowed;
  }

  .chip.selected {
    background: var(--chassis-color-primary, #6200ee);
    color: var(--chassis-color-on-primary, #fff);
    border-color: var(--chassis-color-primary, #6200ee);
  }

  .chip.selected:hover:not(:disabled) {
    background: var(--chassis-color-primary-dark, #3700b3);
    border-color: var(--chassis-color-primary-dark, #3700b3);
  }

  .label {
    white-space: nowrap;
  }

  .remove {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.125rem;
    margin-right: -0.25rem;
    cursor: pointer;
    border-radius: 50%;
    transition: background var(--chassis-motion-duration-short, 150ms) ease;
  }

  .remove:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  .selected .remove:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .remove svg {
    width: 16px;
    height: 16px;
  }

  ::slotted([slot='icon']) {
    width: 18px;
    height: 18px;
    margin-left: -0.125rem;
  }
`;
