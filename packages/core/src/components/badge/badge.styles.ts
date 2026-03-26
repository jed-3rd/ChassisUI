import { css } from 'lit';

export const badgeStyles = css`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--chassis-typography-font-size-xs, 0.75rem);
    font-weight: var(--chassis-typography-font-weight-medium, 500);
    line-height: 1;
    border-radius: var(--chassis-shape-radius-full, 9999px);
    padding: var(--chassis-spacing-100, 0.25rem) var(--chassis-spacing-200, 0.5rem);
    white-space: nowrap;
  }

  .badge.dot {
    width: 8px;
    height: 8px;
    padding: 0;
    min-width: 0;
  }

  /* Variants */
  .variant-default {
    background-color: var(--chassis-color-secondary-container, #e8def8);
    color: var(--chassis-color-on-surface, #1c1b1f);
  }

  .variant-success {
    background-color: var(--chassis-color-success, #198038);
    color: var(--chassis-color-on-success, #fff);
  }

  .variant-warning {
    background-color: var(--chassis-color-warning, #f1c21b);
    color: var(--chassis-color-on-warning, #000);
  }

  .variant-error {
    background-color: var(--chassis-color-error, #b3261e);
    color: var(--chassis-color-on-error, #fff);
  }

  .variant-info {
    background-color: var(--chassis-color-info, #0043ce);
    color: var(--chassis-color-on-info, #fff);
  }
`;
