import { css } from 'lit';

export const paginationStyles = css`
  :host {
    display: inline-flex;
  }

  .pagination {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    padding: 0 0.5rem;
    border: var(--chassis-border-width-thin, 1px) solid var(--chassis-color-outline-variant, #cac4d0);
    border-radius: var(--chassis-shape-radius-sm, 4px);
    background: var(--chassis-color-surface, #fff);
    color: var(--chassis-color-on-surface, #1c1b1f);
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    cursor: pointer;
    transition: all var(--chassis-motion-duration-short, 150ms) ease;
    font-family: inherit;
  }

  .page-btn:hover:not(:disabled) {
    background: var(--chassis-color-surface-variant, #e7e0ec);
  }

  .page-btn:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
  }

  .page-btn:disabled {
    opacity: var(--chassis-opacity-disabled, 0.38);
    cursor: not-allowed;
  }

  .page-btn.active {
    background: var(--chassis-color-primary, #6200ee);
    color: var(--chassis-color-on-primary, #fff);
    border-color: var(--chassis-color-primary, #6200ee);
  }

  .prev svg,
  .next svg {
    width: 18px;
    height: 18px;
  }

  .ellipsis {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    color: var(--chassis-color-on-surface-variant, #49454f);
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
  }
`;
