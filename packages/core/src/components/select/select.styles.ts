import { css } from 'lit';

export const selectStyles = css`
  :host {
    display: inline-flex;
    flex-direction: column;
    gap: var(--chassis-spacing-100, 0.25rem);
    position: relative;
  }

  .label {
    font-size: var(--chassis-input-label-font-size, var(--chassis-typography-font-size-sm, 0.875rem));
    color: var(--chassis-input-label-color, var(--chassis-color-on-surface, #1c1b1f));
    font-weight: var(--chassis-typography-font-weight-medium, 500);
  }

  .trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--chassis-input-padding-y, var(--chassis-spacing-200, 0.5rem))
      var(--chassis-input-padding-x, var(--chassis-spacing-300, 0.75rem));
    border: 1px solid var(--chassis-input-border-color, var(--chassis-color-outline, #79747e));
    border-radius: var(--chassis-input-border-radius, var(--chassis-shape-radius-md, 8px));
    background: var(--chassis-input-background, var(--chassis-color-surface, #fff));
    color: var(--chassis-input-color, var(--chassis-color-on-surface, #1c1b1f));
    font-size: var(--chassis-input-font-size, var(--chassis-typography-font-size-md, 1rem));
    font-family: var(--chassis-typography-font-family-primary, sans-serif);
    cursor: pointer;
    min-width: 12rem;
  }

  .trigger:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
  }

  :host([error]) .trigger {
    border-color: var(--chassis-color-error, #b3261e);
  }

  .arrow {
    border: solid var(--chassis-color-on-surface-variant, #49454f);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    transition: transform var(--chassis-motion-duration-short, 150ms);
  }

  :host([open]) .arrow {
    transform: rotate(-135deg);
  }

  .listbox {
    position: fixed;
    z-index: var(--chassis-z-index-dropdown, 1000);
    padding: var(--chassis-spacing-100, 0.25rem) 0;
    background: var(--chassis-color-surface, #fff);
    border: 1px solid var(--chassis-color-outline-variant, #cac4d0);
    border-radius: var(--chassis-shape-radius-md, 8px);
    box-shadow: var(--chassis-elevation-3, 0 4px 6px -1px rgba(0,0,0,0.1));
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--chassis-motion-duration-short, 150ms) ease;
    max-height: 15rem;
    overflow-y: auto;
  }

  :host([open]) .listbox {
    opacity: 1;
    pointer-events: auto;
  }

  .placeholder {
    color: var(--chassis-input-placeholder-color, var(--chassis-color-on-surface-variant, #49454f));
  }

  .error-text {
    font-size: var(--chassis-input-helper-font-size, var(--chassis-typography-font-size-xs, 0.75rem));
    color: var(--chassis-input-error-color, var(--chassis-color-error, #b3261e));
  }
`;
