import { css } from 'lit';

export const sliderStyles = css`
  :host {
    display: block;
    width: 100%;
  }

  .slider {
    position: relative;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .slider.disabled {
    opacity: var(--chassis-opacity-disabled, 0.38);
    cursor: not-allowed;
    pointer-events: none;
  }

  .track {
    position: absolute;
    width: 100%;
    height: 4px;
    background: var(--chassis-color-surface-variant, #e7e0ec);
    border-radius: 2px;
  }

  .fill {
    position: absolute;
    height: 4px;
    background: var(--chassis-color-primary, #6200ee);
    border-radius: 2px;
    pointer-events: none;
  }

  .thumb {
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--chassis-color-primary, #6200ee);
    border-radius: 50%;
    transform: translateX(-50%);
    cursor: grab;
    transition: box-shadow var(--chassis-motion-duration-short, 150ms) ease;
    z-index: 1;
  }

  .thumb:hover {
    box-shadow: 0 0 0 8px rgba(98, 0, 238, 0.08);
  }

  .thumb:active {
    cursor: grabbing;
    box-shadow: 0 0 0 12px rgba(98, 0, 238, 0.12);
  }

  .thumb:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
  }
`;
