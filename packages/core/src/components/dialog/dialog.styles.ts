import { css } from 'lit';

export const dialogStyles = css`
  :host {
    display: contents;
  }

  .overlay {
    position: fixed;
    inset: 0;
    z-index: var(--chassis-z-index-modal, 1300);
    background: var(--chassis-color-scrim, rgba(0, 0, 0, 0.32));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--chassis-motion-duration-medium, 300ms)
      var(--chassis-motion-easing-standard, ease);
  }

  :host([open]) .overlay {
    opacity: 1;
    pointer-events: auto;
  }

  .panel {
    background: var(--chassis-color-surface, #fff);
    color: var(--chassis-color-on-surface, #1c1b1f);
    border-radius: var(--chassis-shape-radius-lg, 16px);
    box-shadow: var(--chassis-elevation-5, 0 20px 25px -5px rgba(0,0,0,0.1));
    max-width: min(90vw, 560px);
    width: 100%;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    transform: scale(0.95);
    transition: transform var(--chassis-motion-duration-medium, 300ms)
      var(--chassis-motion-easing-decelerate, ease-out);
  }

  :host([open]) .panel {
    transform: scale(1);
  }

  .header {
    padding: var(--chassis-spacing-400, 1rem) var(--chassis-spacing-400, 1rem)
      var(--chassis-spacing-200, 0.5rem);
    font-size: var(--chassis-typography-font-size-xl, 1.5rem);
    font-weight: var(--chassis-typography-font-weight-medium, 500);
  }

  .body {
    padding: var(--chassis-spacing-200, 0.5rem) var(--chassis-spacing-400, 1rem);
    overflow-y: auto;
    flex: 1;
  }

  .footer {
    padding: var(--chassis-spacing-200, 0.5rem) var(--chassis-spacing-400, 1rem)
      var(--chassis-spacing-400, 1rem);
    display: flex;
    justify-content: flex-end;
    gap: var(--chassis-spacing-200, 0.5rem);
  }
`;
