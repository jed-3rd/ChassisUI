import { css } from 'lit';

export const tabsStyles = css`
  :host {
    display: block;
  }

  .tabs {
    display: flex;
    flex-direction: column;
  }

  .tab-list {
    display: flex;
    position: relative;
    border-bottom: var(--chassis-border-width-thin, 1px) solid
      var(--chassis-color-outline-variant, #cac4d0);
    gap: 0.25rem;
  }

  ::slotted([slot='tab']) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    font-weight: 500;
    font-family: inherit;
    color: var(--chassis-color-on-surface-variant, #49454f);
    cursor: pointer;
    border: none;
    background: none;
    position: relative;
    transition: color var(--chassis-motion-duration-short, 150ms) var(--chassis-motion-easing-standard, ease);
    white-space: nowrap;
    user-select: none;
    outline: none;
  }

  ::slotted([slot='tab']:hover) {
    color: var(--chassis-color-on-surface, #1c1b1f);
    background: var(--chassis-color-surface-variant, rgba(0, 0, 0, 0.04));
  }

  ::slotted([slot='tab'][aria-selected='true']) {
    color: var(--chassis-color-primary, #6200ee);
  }

  ::slotted([slot='tab'][disabled]) {
    opacity: var(--chassis-opacity-disabled, 0.38);
    cursor: not-allowed;
    pointer-events: none;
  }

  ::slotted([slot='tab']:focus-visible) {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: -2px;
    border-radius: 4px;
  }

  /* Underline indicator via active tab bottom border */
  ::slotted([slot='tab'][aria-selected='true']) {
    box-shadow: inset 0 -2px 0 0 var(--chassis-color-primary, #6200ee);
  }

  /* Contained variant */
  .variant-contained .tab-list {
    background: var(--chassis-color-surface-variant, #e7e0ec);
    border-radius: var(--chassis-shape-radius-md, 8px);
    padding: 4px;
    border-bottom: none;
    gap: 4px;
  }

  .variant-contained ::slotted([slot='tab']) {
    border-radius: var(--chassis-shape-radius-sm, 4px);
    padding: 0.5rem 1rem;
  }

  .variant-contained ::slotted([slot='tab'][aria-selected='true']) {
    background: var(--chassis-color-surface, #fff);
    color: var(--chassis-color-on-surface, #1c1b1f);
    box-shadow: var(--chassis-elevation-1, 0 1px 3px rgba(0, 0, 0, 0.12));
  }

  .panels {
    padding: 1rem 0;
  }

  .indicator {
    display: none;
  }
`;
