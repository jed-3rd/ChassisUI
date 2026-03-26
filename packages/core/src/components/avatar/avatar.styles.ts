import { css } from 'lit';

export const avatarStyles = css`
  :host {
    display: inline-flex;
  }

  .avatar {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--chassis-color-primary-container, #eaddff);
    color: var(--chassis-color-on-primary-container, #21005e);
    flex-shrink: 0;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    clip-path: circle(50%);
  }

  .initials {
    font-weight: 600;
    text-transform: uppercase;
    user-select: none;
  }

  .size-sm {
    width: var(--chassis-sizing-avatar-sm, 32px);
    height: var(--chassis-sizing-avatar-sm, 32px);
    font-size: 0.75rem;
  }

  .size-md {
    width: var(--chassis-sizing-avatar-md, 40px);
    height: var(--chassis-sizing-avatar-md, 40px);
    font-size: 0.875rem;
  }

  .size-lg {
    width: var(--chassis-sizing-avatar-lg, 48px);
    height: var(--chassis-sizing-avatar-lg, 48px);
    font-size: 1rem;
  }

  .size-xl {
    width: var(--chassis-sizing-avatar-xl, 64px);
    height: var(--chassis-sizing-avatar-xl, 64px);
    font-size: 1.25rem;
  }

  .status {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 25%;
    height: 25%;
    min-width: 8px;
    min-height: 8px;
    border-radius: 50%;
    border: 2px solid var(--chassis-color-surface, #fff);
    box-sizing: content-box;
  }

  .status-online {
    background: var(--chassis-color-success, #2e7d32);
  }

  .status-offline {
    background: var(--chassis-color-on-surface-variant, #49454f);
  }

  .status-busy {
    background: var(--chassis-color-error, #b3261e);
  }

  .status-away {
    background: var(--chassis-color-warning, #f9a825);
  }
`;
