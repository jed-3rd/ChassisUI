import { css } from 'lit';

export const toggleGroupStyles = css`
  :host {
    display: inline-flex;
  }

  .toggle-group {
    display: inline-flex;
    border: var(--chassis-border-width-thin, 1px) solid var(--chassis-color-outline, #79747e);
    border-radius: var(--chassis-shape-radius-md, 8px);
    overflow: hidden;
  }

  ::slotted(button),
  ::slotted([role="option"]) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    padding: 0.5rem 1rem;
    border: none;
    border-right: var(--chassis-border-width-thin, 1px) solid var(--chassis-color-outline, #79747e);
    background: var(--chassis-color-surface, #fff);
    color: var(--chassis-color-on-surface, #1c1b1f);
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    font-family: inherit;
    cursor: pointer;
    transition: all var(--chassis-motion-duration-short, 150ms) ease;
    outline: none;
  }

  ::slotted(button:last-child),
  ::slotted([role="option"]:last-child) {
    border-right: none;
  }

  ::slotted(button:hover),
  ::slotted([role="option"]:hover) {
    background: var(--chassis-color-surface-variant, #e7e0ec);
  }

  ::slotted(button[aria-pressed="true"]),
  ::slotted([role="option"][aria-selected="true"]) {
    background: var(--chassis-color-primary, #6200ee);
    color: var(--chassis-color-on-primary, #fff);
  }

  ::slotted(button:focus-visible),
  ::slotted([role="option"]:focus-visible) {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: -2px;
    z-index: 1;
  }

  ::slotted(button:disabled),
  ::slotted([role="option"][aria-disabled="true"]) {
    opacity: var(--chassis-opacity-disabled, 0.38);
    cursor: not-allowed;
  }
`;
