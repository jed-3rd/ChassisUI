import { css } from 'lit';

export const iconStyles = css`
  :host {
    display: inline-flex;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    line-height: 0;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .size-sm {
    width: var(--chassis-sizing-icon-sm, 16px);
    height: var(--chassis-sizing-icon-sm, 16px);
  }

  .size-md {
    width: var(--chassis-sizing-icon-md, 24px);
    height: var(--chassis-sizing-icon-md, 24px);
  }

  .size-lg {
    width: var(--chassis-sizing-icon-lg, 32px);
    height: var(--chassis-sizing-icon-lg, 32px);
  }
`;
