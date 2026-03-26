import { css } from 'lit';

export const tooltipStyles = css`
  :host {
    display: inline-flex;
    position: relative;
  }

  .trigger {
    display: inline-flex;
  }

  .content {
    position: fixed;
    z-index: var(--chassis-z-index-popover, 1500);
    padding: var(--chassis-spacing-100, 0.25rem) var(--chassis-spacing-200, 0.5rem);
    background: var(--chassis-color-on-surface, #1c1b1f);
    color: var(--chassis-color-surface, #fff);
    font-size: var(--chassis-typography-font-size-xs, 0.75rem);
    border-radius: var(--chassis-shape-radius-sm, 4px);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--chassis-motion-duration-short, 150ms)
      var(--chassis-motion-easing-standard, ease);
  }

  :host([open]) .content {
    opacity: 1;
  }
`;
