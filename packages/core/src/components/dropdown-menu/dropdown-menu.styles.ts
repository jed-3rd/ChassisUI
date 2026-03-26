import { css } from 'lit';

export const dropdownMenuStyles = css`
  :host {
    display: inline-block;
    position: relative;
  }

  .trigger {
    display: inline-block;
    cursor: pointer;
  }

  ::slotted(button[slot="trigger"]) {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 1rem;
    border: var(--chassis-border-width-thin, 1px) solid var(--chassis-color-outline, #79747e);
    border-radius: var(--chassis-shape-radius-md, 8px);
    background: var(--chassis-color-surface, #fff);
    color: var(--chassis-color-on-surface, #1c1b1f);
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    font-family: inherit;
    cursor: pointer;
    transition: background var(--chassis-motion-duration-short, 150ms) ease;
  }

  ::slotted(button[slot="trigger"]:hover) {
    background: var(--chassis-color-surface-variant, #e7e0ec);
  }

  .menu {
    position: fixed;
    z-index: var(--chassis-z-index-dropdown, 1000);
    background: var(--chassis-color-surface, #fff);
    color: var(--chassis-color-on-surface, #1c1b1f);
    border: var(--chassis-border-width-thin, 1px) solid var(--chassis-color-outline-variant, #cac4d0);
    border-radius: var(--chassis-shape-radius-md, 8px);
    box-shadow: var(--chassis-elevation-3, 0 8px 28px rgba(0, 0, 0, 0.15));
    padding: var(--chassis-spacing-100, 0.25rem) 0;
    min-width: 180px;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--chassis-motion-duration-short, 150ms) ease;
  }

  :host([open]) .menu {
    opacity: 1;
    pointer-events: auto;
  }

  ::slotted([role="menuitem"]) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    cursor: pointer;
    transition: background var(--chassis-motion-duration-short, 150ms) ease;
    border: none;
    background: none;
    color: inherit;
    width: 100%;
    text-align: left;
    font-family: inherit;
  }

  ::slotted([role="menuitem"]:hover),
  ::slotted([role="menuitem"]:focus) {
    background: var(--chassis-color-surface-variant, #e7e0ec);
    outline: none;
  }

  ::slotted([role="menuitem"][aria-disabled="true"]) {
    opacity: var(--chassis-opacity-disabled, 0.38);
    cursor: not-allowed;
  }

  ::slotted([role="separator"]) {
    height: 1px;
    background: var(--chassis-color-outline-variant, #cac4d0);
    margin: 0.25rem 0;
  }
`;
