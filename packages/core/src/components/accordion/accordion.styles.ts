import { css } from 'lit';

export const accordionStyles = css`
  :host {
    display: block;
  }

  .accordion {
    display: flex;
    flex-direction: column;
  }

  .item {
    border-bottom: var(--chassis-border-width-thin, 1px) solid
      var(--chassis-color-outline-variant, #cac4d0);
  }

  .trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    font-size: var(--chassis-typography-font-size-md, 1rem);
    font-weight: 500;
    color: var(--chassis-color-on-surface, #1c1b1f);
    text-align: left;
    outline: none;
    transition: color var(--chassis-motion-duration-short, 150ms) ease;
  }

  .trigger:hover {
    color: var(--chassis-color-primary, #6200ee);
  }

  .trigger:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
    border-radius: 4px;
  }

  .trigger:disabled {
    opacity: var(--chassis-opacity-disabled, 0.38);
    cursor: not-allowed;
  }

  .icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    transition: transform var(--chassis-motion-duration-short, 150ms) var(--chassis-motion-easing-standard, ease);
    color: var(--chassis-color-on-surface-variant, #49454f);
  }

  .open .icon {
    transform: rotate(180deg);
  }

  .content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows var(--chassis-motion-duration-medium, 300ms) var(--chassis-motion-easing-standard, ease);
    overflow: hidden;
  }

  .open .content {
    grid-template-rows: 1fr;
  }

  .content-inner {
    min-height: 0;
    overflow: hidden;
  }

  .open .content-inner {
    padding-bottom: 1rem;
  }

  .disabled .trigger {
    pointer-events: none;
  }
`;
