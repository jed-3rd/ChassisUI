import { css } from 'lit';

export const progressStyles = css`
  :host {
    display: block;
    width: 100%;
  }

  .linear {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .track {
    flex: 1;
    height: var(--chassis-progress-track-height, 4px);
    background: var(--chassis-color-surface-variant, #e7e0ec);
    border-radius: var(--chassis-progress-track-radius, 9999px);
    overflow: hidden;
  }

  .indicator {
    height: 100%;
    background: var(--chassis-color-primary, #6200ee);
    border-radius: inherit;
    transition: width var(--chassis-motion-duration-medium, 300ms) var(--chassis-motion-easing-standard, ease);
  }

  .indeterminate .indicator {
    width: 50% !important;
    animation: chassis-linear-indeterminate 1.5s ease-in-out infinite;
  }

  @keyframes chassis-linear-indeterminate {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(300%);
    }
  }

  .label {
    font-size: var(--chassis-typography-font-size-xs, 0.75rem);
    color: var(--chassis-color-on-surface-variant, #49454f);
    min-width: 2.5em;
    text-align: right;
  }

  /* Circular */
  .circular {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
  }

  .circular svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .circular-track {
    fill: none;
    stroke: var(--chassis-color-surface-variant, #e7e0ec);
    stroke-width: 4;
  }

  .circular-indicator {
    fill: none;
    stroke: var(--chassis-color-primary, #6200ee);
    stroke-width: 4;
    stroke-linecap: round;
    transition: stroke-dashoffset var(--chassis-motion-duration-medium, 300ms) var(--chassis-motion-easing-standard, ease);
  }

  .indeterminate.circular svg {
    animation: chassis-spin 1.5s linear infinite;
  }

  .indeterminate .circular-indicator {
    stroke-dasharray: 80, 200;
    stroke-dashoffset: 0;
  }

  @keyframes chassis-spin {
    to {
      transform: rotate(270deg);
    }
  }

  .circular-label {
    position: absolute;
    font-size: var(--chassis-typography-font-size-xs, 0.75rem);
    color: var(--chassis-color-on-surface-variant, #49454f);
  }
`;
