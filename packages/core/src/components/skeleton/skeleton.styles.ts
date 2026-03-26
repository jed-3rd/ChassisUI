import { css } from 'lit';

export const skeletonStyles = css`
  :host {
    display: block;
  }

  .skeleton {
    background: var(--chassis-color-surface-variant, #e7e0ec);
    animation: chassis-shimmer 1.5s ease-in-out infinite;
    background-size: 200% 100%;
    background-image: linear-gradient(
      90deg,
      var(--chassis-color-surface-variant, #e7e0ec) 0%,
      var(--chassis-color-surface, #fff) 50%,
      var(--chassis-color-surface-variant, #e7e0ec) 100%
    );
  }

  @keyframes chassis-shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .text {
    height: 1em;
    border-radius: var(--chassis-shape-radius-sm, 4px);
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .text.last-line {
    width: 75%;
    margin-bottom: 0;
  }

  .circular {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .rectangular {
    width: 100%;
    height: 120px;
    border-radius: var(--chassis-shape-radius-md, 8px);
  }
`;
