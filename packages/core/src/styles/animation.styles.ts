import { css } from 'lit';

export const animationStyles = css`
  @keyframes chassis-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes chassis-fade-out {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes chassis-slide-up {
    from { transform: translateY(8px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes chassis-slide-down {
    from { transform: translateY(-8px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes chassis-scale-in {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  @keyframes chassis-shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes chassis-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
