import { css } from 'lit';

export const datePickerStyles = css`
  :host {
    display: inline-block;
  }

  .trigger {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border: var(--chassis-border-width-thin, 1px) solid var(--chassis-color-outline, #79747e);
    border-radius: var(--chassis-shape-radius-sm, 4px);
    background: var(--chassis-color-surface, #fff);
    color: var(--chassis-color-on-surface, #1c1b1f);
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    font-family: inherit;
    cursor: pointer;
    min-width: 160px;
  }

  .trigger:focus-visible {
    outline: 2px solid var(--chassis-color-primary, #6200ee);
    outline-offset: 2px;
  }

  .trigger svg {
    width: 18px;
    height: 18px;
    color: var(--chassis-color-on-surface-variant, #49454f);
  }

  .calendar {
    position: fixed;
    z-index: var(--chassis-z-index-popover, 1500);
    background: var(--chassis-color-surface, #fff);
    border: var(--chassis-border-width-thin, 1px) solid var(--chassis-color-outline-variant, #cac4d0);
    border-radius: var(--chassis-shape-radius-md, 8px);
    box-shadow: var(--chassis-elevation-3, 0 8px 28px rgba(0, 0, 0, 0.15));
    padding: 1rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--chassis-motion-duration-short, 150ms) ease;
    width: 280px;
  }

  :host([open]) .calendar {
    opacity: 1;
    pointer-events: auto;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  .month-label {
    font-weight: var(--chassis-typography-font-weight-medium, 500);
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
  }

  .nav-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    background: none;
    border-radius: 50%;
    cursor: pointer;
    color: var(--chassis-color-on-surface, #1c1b1f);
    transition: background var(--chassis-motion-duration-short, 150ms) ease;
  }

  .nav-btn:hover {
    background: var(--chassis-color-surface-variant, #e7e0ec);
  }

  .nav-btn svg {
    width: 18px;
    height: 18px;
  }

  .weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-size: 0.75rem;
    color: var(--chassis-color-on-surface-variant, #49454f);
    font-weight: var(--chassis-typography-font-weight-medium, 500);
    margin-bottom: 0.25rem;
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }

  .day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    background: none;
    border-radius: 50%;
    font-size: var(--chassis-typography-font-size-sm, 0.875rem);
    cursor: pointer;
    color: var(--chassis-color-on-surface, #1c1b1f);
    font-family: inherit;
    transition: all var(--chassis-motion-duration-short, 150ms) ease;
  }

  .day:hover:not(.disabled):not(.selected) {
    background: var(--chassis-color-surface-variant, #e7e0ec);
  }

  .day.today {
    border: var(--chassis-border-width-thin, 1px) solid var(--chassis-color-primary, #6200ee);
  }

  .day.selected {
    background: var(--chassis-color-primary, #6200ee);
    color: var(--chassis-color-on-primary, #fff);
  }

  .day.in-range {
    background: rgba(98, 0, 238, 0.08);
    border-radius: 0;
  }

  .day.range-start {
    border-radius: 50% 0 0 50%;
  }

  .day.range-end {
    border-radius: 0 50% 50% 0;
  }

  .day.outside {
    color: var(--chassis-color-on-surface-variant, #49454f);
    opacity: 0.5;
  }

  .day.disabled {
    opacity: var(--chassis-opacity-disabled, 0.38);
    cursor: not-allowed;
  }
`;
