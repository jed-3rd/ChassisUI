import { css } from 'lit';

export const toastStyles = css`
  :host {
    display: block;
    pointer-events: auto;
  }

  .toast {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.875rem 1rem;
    border-radius: var(--chassis-toast-border-radius, var(--chassis-shape-radius-md, 8px));
    box-shadow: var(--chassis-elevation-3, 0 4px 12px rgba(0, 0, 0, 0.15));
    opacity: 0;
    transform: translateY(-0.5rem);
    transition:
      opacity var(--chassis-motion-duration-short, 150ms) var(--chassis-motion-easing-standard, ease),
      transform var(--chassis-motion-duration-short, 150ms) var(--chassis-motion-easing-standard, ease);
  }

  .toast.visible {
    opacity: 1;
    transform: translateY(0);
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
    background: var(--chassis-toast-info-background, #323744);
    color: var(--chassis-toast-info-color, #e8f4fd);
  }

  .variant-success {
    background: var(--chassis-toast-success-background, #1e6823);
    color: var(--chassis-toast-success-color, #ffffff);
  }

  .variant-warning {
    background: var(--chassis-toast-warning-background, #8a6d00);
    color: var(--chassis-toast-warning-color, #ffffff);
  }

  .variant-error {
    background: var(--chassis-toast-error-background, #b3261e);
    color: var(--chassis-toast-error-color, #ffffff);
  }
`;
