import { css } from 'lit';

export const linkStyles = css`
  :host {
    display: inline;
  }

  .link {
    color: var(--chassis-color-primary, #6200ee);
    font: inherit;
    cursor: pointer;
    transition: color var(--chassis-motion-duration-short, 150ms) var(--chassis-motion-easing-standard, ease);
  }

  .link:hover {
    color: var(--chassis-color-primary-dark, #3700b3);
  }

  .variant-subtle {
    color: var(--chassis-color-on-surface-variant, #49454f);
  }

  .variant-subtle:hover {
    color: var(--chassis-color-on-surface, #1c1b1f);
  }

  .underline-always {
    text-decoration: underline;
  }

  .underline-hover {
    text-decoration: none;
  }

  .underline-hover:hover {
    text-decoration: underline;
  }

  .underline-none {
    text-decoration: none;
  }

  .link:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
