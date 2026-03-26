import { css } from 'lit';

export const resetStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    font-family: var(--chassis-typography-font-family-primary, sans-serif);
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
    opacity: var(--chassis-opacity-disabled, 0.38);
  }
`;
