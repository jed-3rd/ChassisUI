import { css } from 'lit';

export const dividerStyles = css`
  :host {
    display: block;
    width: 100%;
  }

  :host([orientation="vertical"]) {
    display: inline-block;
    width: auto;
    height: 100%;
  }

  .horizontal {
    width: 100%;
    border-top: var(--chassis-divider-thickness, var(--chassis-border-width-thin, 1px)) solid
      var(--chassis-divider-color, var(--chassis-color-outline-variant, #cac4d0));
    margin: var(--chassis-divider-spacing, var(--chassis-spacing-300, 0.75rem)) 0;
  }

  .horizontal:has(.label) {
    border-top: none;
    display: flex;
    align-items: center;
    gap: var(--chassis-spacing-300, 0.75rem);
  }

  .horizontal:has(.label)::before,
  .horizontal:has(.label)::after {
    content: '';
    flex: 1;
    height: 0;
    border-top: var(--chassis-divider-thickness, var(--chassis-border-width-thin, 1px)) solid
      var(--chassis-divider-color, var(--chassis-color-outline-variant, #cac4d0));
  }

  .vertical {
    width: 0;
    height: 100%;
    min-height: 1rem;
    border-left: var(--chassis-divider-thickness, var(--chassis-border-width-thin, 1px)) solid
      var(--chassis-divider-color, var(--chassis-color-outline-variant, #cac4d0));
    margin: 0 var(--chassis-divider-spacing, var(--chassis-spacing-300, 0.75rem));
  }

  .label {
    font-size: var(--chassis-typography-font-size-xs, 0.75rem);
    color: var(--chassis-color-on-surface-variant, #49454f);
    white-space: nowrap;
  }
`;
