import { css } from 'lit';

export const switchStyles = css`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--chassis-spacing-200, 0.5rem);
    cursor: pointer;
  }

  .track {
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    width: 3rem;
    height: 1.5rem;
    border-radius: var(--chassis-shape-radius-full, 9999px);
    background-color: var(--chassis-color-surface-variant, #e7e0ec);
    border: 2px solid var(--chassis-color-outline, #79747e);
    transition: background-color var(--chassis-motion-duration-short, 150ms)
      var(--chassis-motion-easing-standard, ease);
    cursor: pointer;
    box-sizing: content-box;
  }

  :host([checked]) .track {
    background-color: var(--chassis-color-primary, #6200ee);
    border-color: var(--chassis-color-primary, #6200ee);
  }

  .thumb {
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--chassis-color-outline, #79747e);
    transition: all var(--chassis-motion-duration-short, 150ms)
      var(--chassis-motion-easing-standard, ease);
  }

  :host([checked]) .thumb {
    left: calc(100% - 4px - 1rem);
    background-color: var(--chassis-color-on-primary, #fff);
  }

  .label-text {
    font-size: var(--chassis-typography-font-size-md, 1rem);
    color: var(--chassis-color-on-surface, #1c1b1f);
    user-select: none;
  }

  .track:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
  }
`;
