import { css } from 'lit';

export const spinnerStyles = css`
  :host {
    display: inline-flex;
  }

  .spinner {
    display: inline-flex;
    animation: chassis-spin var(--chassis-motion-duration-extra-long, 1000ms) linear infinite;
  }

  @keyframes chassis-spin {
    to {
      transform: rotate(360deg);
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .track {
    fill: none;
    stroke: var(--chassis-color-surface-variant, #e7e0ec);
    stroke-width: 4;
  }

  .indicator {
    fill: none;
    stroke: var(--chassis-color-primary, #6200ee);
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 80, 200;
    stroke-dashoffset: 0;
  }

  .size-sm {
    width: 20px;
    height: 20px;
  }

  .size-md {
    width: 32px;
    height: 32px;
  }

  .size-lg {
    width: 48px;
    height: 48px;
  }
`;
