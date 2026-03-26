import { css } from 'lit';

export const breadcrumbStyles = css`
  :host {
    display: block;
  }

  .list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ::slotted(*) {
    display: inline-flex;
    align-items: center;
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    color: var(--chassis-color-on-surface-variant, #49454f);
  }

  ::slotted(a) {
    color: var(--chassis-color-primary, #6200ee);
    text-decoration: none;
  }

  ::slotted(a:hover) {
    text-decoration: underline;
  }

  ::slotted(.current) {
    color: var(--chassis-color-on-surface, #1c1b1f);
    font-weight: 500;
    pointer-events: none;
  }

  ::slotted(.chassis-breadcrumb-sep) {
    color: var(--chassis-color-on-surface-variant, #49454f);
    font-weight: 400;
    pointer-events: none;
    user-select: none;
  }
`;
