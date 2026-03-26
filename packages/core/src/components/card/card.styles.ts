import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
  }

  .card {
    display: flex;
    flex-direction: column;
    border-radius: var(
      --chassis-card-border-radius,
      var(--chassis-shape-radius-md, 8px)
    );
    background-color: var(
      --chassis-card-background,
      var(--chassis-color-surface, #fff)
    );
    color: var(--chassis-card-color, var(--chassis-color-on-surface, #1c1b1f));
    overflow: hidden;
    transition: box-shadow var(--chassis-motion-duration-short, 150ms)
      var(--chassis-motion-easing-standard, ease);
  }

  .elevated {
    box-shadow: var(
      --chassis-card-elevated-shadow,
      var(
        --chassis-elevation-1,
        0 1px 3px rgba(0, 0, 0, 0.12),
        0 1px 2px rgba(0, 0, 0, 0.24)
      )
    );
  }

  .outlined {
    border: 1px solid
      var(--chassis-card-border-color, var(--chassis-color-outline, #79747e));
  }

  .header {
    padding: var(--chassis-card-header-padding, var(--chassis-spacing-400, 1rem));
  }

  .body {
    padding: var(--chassis-card-body-padding, var(--chassis-spacing-400, 1rem));
    flex: 1;
  }

  .header + .body {
    padding-top: 0;
  }

  .footer {
    padding: var(--chassis-card-footer-padding, var(--chassis-spacing-400, 1rem));
    padding-top: 0;
  }

  /* Hide empty slots */
  .header:not(:has(::slotted(*))) {
    display: none;
  }

  .footer:not(:has(::slotted(*))) {
    display: none;
  }
`;
