import { css } from 'lit';

export const alertStyles = css`
  :host {
    display: block;
  }

  .alert {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.875rem 1rem;
    border-radius: var(--chassis-alert-border-radius, var(--chassis-shape-radius-md, 8px));
    border: 1px solid transparent;
  }

  .icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .message {
    flex: 1;
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    line-height: 1.5;
  }

  .dismiss {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.125rem;
    border-radius: var(--chassis-shape-radius-sm, 4px);
    color: inherit;
    opacity: 0.7;
    transition: opacity var(--chassis-motion-duration-short, 150ms) ease;
    flex-shrink: 0;
  }

  .dismiss:hover {
    opacity: 1;
  }

  .dismiss svg {
    width: 18px;
    height: 18px;
  }

  /* Variants */
  .variant-info {
    background: var(--chassis-alert-info-background, #e8f4fd);
    color: var(--chassis-alert-info-color, #0c5f9e);
    border-color: var(--chassis-alert-info-border-color, #b8daf5);
  }

  .variant-success {
    background: var(--chassis-alert-success-background, #edf7ee);
    color: var(--chassis-alert-success-color, #1e6823);
    border-color: var(--chassis-alert-success-border-color, #c3e6c5);
  }

  .variant-warning {
    background: var(--chassis-alert-warning-background, #fff8e1);
    color: var(--chassis-alert-warning-color, #8a6d00);
    border-color: var(--chassis-alert-warning-border-color, #ffe082);
  }

  .variant-error {
    background: var(--chassis-alert-error-background, #fdedf0);
    color: var(--chassis-alert-error-color, #b3261e);
    border-color: var(--chassis-alert-error-border-color, #f5c6cb);
  }
`;
