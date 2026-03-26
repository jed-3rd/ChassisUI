import { css } from 'lit';

export const typographyStyles = css`
  .heading-lg {
    font-size: var(--chassis-typography-font-size-2xl, 1.5rem);
    font-weight: var(--chassis-typography-font-weight-bold, 700);
    line-height: var(--chassis-typography-line-height-tight, 1.25);
  }

  .heading-md {
    font-size: var(--chassis-typography-font-size-xl, 1.25rem);
    font-weight: var(--chassis-typography-font-weight-bold, 700);
    line-height: var(--chassis-typography-line-height-tight, 1.25);
  }

  .heading-sm {
    font-size: var(--chassis-typography-font-size-lg, 1.125rem);
    font-weight: var(--chassis-typography-font-weight-medium, 500);
    line-height: var(--chassis-typography-line-height-tight, 1.25);
  }

  .body-lg {
    font-size: var(--chassis-typography-font-size-lg, 1.125rem);
    font-weight: var(--chassis-typography-font-weight-regular, 400);
    line-height: var(--chassis-typography-line-height-normal, 1.5);
  }

  .body-md {
    font-size: var(--chassis-typography-font-size-md, 1rem);
    font-weight: var(--chassis-typography-font-weight-regular, 400);
    line-height: var(--chassis-typography-line-height-normal, 1.5);
  }

  .body-sm {
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    font-weight: var(--chassis-typography-font-weight-regular, 400);
    line-height: var(--chassis-typography-line-height-normal, 1.5);
  }

  .caption {
    font-size: var(--chassis-typography-font-size-xs, 0.75rem);
    font-weight: var(--chassis-typography-font-weight-regular, 400);
    line-height: var(--chassis-typography-line-height-normal, 1.5);
  }

  .overline {
    font-size: var(--chassis-typography-font-size-xs, 0.75rem);
    font-weight: var(--chassis-typography-font-weight-medium, 500);
    line-height: var(--chassis-typography-line-height-normal, 1.5);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;
