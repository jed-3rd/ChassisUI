import { css } from 'lit';

export const modalStyles = css`
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
    box-shadow: var(--chassis-elevation-5, 0 20px 25px -5px rgba(0, 0, 0, 0.1));
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

  .panel.sm { max-width: min(90vw, 400px); }
  .panel.md { max-width: min(90vw, 560px); }
  .panel.lg { max-width: min(90vw, 720px); }
  .panel.xl { max-width: min(90vw, 960px); }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--chassis-spacing-400, 1rem) var(--chassis-spacing-400, 1rem)
      var(--chassis-spacing-200, 0.5rem);
  }

  .title {
    font-size: var(--chassis-typography-font-size-xl, 1.5rem);
    font-weight: var(--chassis-typography-font-weight-medium, 500);
    margin: 0;
  }

  .close-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    background: none;
    border-radius: 50%;
    cursor: pointer;
    color: var(--chassis-color-on-surface-variant, #49454f);
    transition: background var(--chassis-motion-duration-short, 150ms) ease;
  }

  .close-btn:hover {
    background: var(--chassis-color-surface-variant, #e7e0ec);
  }

  .close-btn:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
  }

  .close-btn svg {
    width: 20px;
    height: 20px;
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

  /* Style slotted footer buttons */
  ::slotted([slot="footer"]) {
    display: flex;
    justify-content: flex-end;
    gap: var(--chassis-spacing-200, 0.5rem);
  }
`;
