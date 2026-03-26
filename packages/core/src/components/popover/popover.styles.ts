import { css } from 'lit';

export const popoverStyles = css`
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

  .content {
    position: fixed;
    z-index: var(--chassis-z-index-popover, 1500);
    background: var(--chassis-color-surface, #fff);
    color: var(--chassis-color-on-surface, #1c1b1f);
    border: var(--chassis-border-width-thin, 1px) solid var(--chassis-color-outline-variant, #cac4d0);
    border-radius: var(--chassis-shape-radius-md, 8px);
    box-shadow: var(--chassis-elevation-3, 0 8px 28px rgba(0, 0, 0, 0.15));
    padding: var(--chassis-spacing-300, 0.75rem) var(--chassis-spacing-400, 1rem);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--chassis-motion-duration-short, 150ms) ease;
    max-width: 320px;
  }

  :host([open]) .content {
    opacity: 1;
    pointer-events: auto;
  }

  .arrow {
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--chassis-color-surface, #fff);
    border: var(--chassis-border-width-thin, 1px) solid var(--chassis-color-outline-variant, #cac4d0);
    transform: rotate(45deg);
  }

  .content[data-placement^="top"] .arrow {
    bottom: -5px;
    border-top: none;
    border-left: none;
  }

  .content[data-placement^="bottom"] .arrow {
    top: -5px;
    border-bottom: none;
    border-right: none;
  }

  .content[data-placement="left"] .arrow {
    right: -5px;
    border-top: none;
    border-right: none;
  }

  .content[data-placement="right"] .arrow {
    left: -5px;
    border-bottom: none;
    border-left: none;
  }
`;
