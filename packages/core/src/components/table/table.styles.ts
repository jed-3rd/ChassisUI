import { css } from 'lit';

export const tableStyles = css`
  :host {
    display: block;
    width: 100%;
    overflow-x: auto;
  }

  .table-wrapper {
    width: 100%;
  }

  ::slotted(table) {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
  }
`;
