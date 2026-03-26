import { css } from 'lit';

export const elevationStyles = css`
  .elevation-0 {
    box-shadow: var(--chassis-elevation-0, none);
  }

  .elevation-1 {
    box-shadow: var(--chassis-elevation-1, 0 1px 2px rgba(0, 0, 0, 0.1));
  }

  .elevation-2 {
    box-shadow: var(--chassis-elevation-2, 0 2px 8px rgba(0, 0, 0, 0.12));
  }

  .elevation-3 {
    box-shadow: var(--chassis-elevation-3, 0 6px 16px rgba(0, 0, 0, 0.14));
  }

  .elevation-4 {
    box-shadow: var(--chassis-elevation-4, 0 8px 24px rgba(0, 0, 0, 0.16));
  }

  .elevation-5 {
    box-shadow: var(--chassis-elevation-5, 0 12px 32px rgba(0, 0, 0, 0.2));
  }
`;
