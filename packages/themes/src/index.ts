export type ThemeName = 'default' | 'material2' | 'material3' | 'polaris' | 'carbon' | 'hig' | 'atlassian' | 'fluent' | 'lightning' | 'primer' | 'spectrum' | 'uber';

export interface ThemeSwitcherOptions {
  root?: HTMLElement;
  onSwitch?: (theme: ThemeName) => void;
  persist?: boolean;
}

export class ThemeSwitcher {
  private root: HTMLElement;
  private options: ThemeSwitcherOptions;

  constructor(options: ThemeSwitcherOptions = {}) {
    this.root = options.root ?? document.documentElement;
    this.options = options;

    if (options.persist && typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('chassis-theme') as ThemeName | null;
      if (saved) this.setTheme(saved);
    }
  }

  setTheme(theme: ThemeName): void {
    this.root.dataset.theme = theme;

    if (this.options.persist && typeof localStorage !== 'undefined') {
      localStorage.setItem('chassis-theme', theme);
    }

    this.options.onSwitch?.(theme);
  }

  getTheme(): ThemeName {
    return (this.root.dataset.theme as ThemeName) ?? 'default';
  }

  static readonly THEMES: readonly ThemeName[] = ['default', 'material2', 'material3', 'polaris', 'carbon', 'hig', 'atlassian', 'fluent', 'lightning', 'primer', 'spectrum', 'uber'];

  static readonly THEME_LABELS: Record<ThemeName, string> = {
    material2: 'Google Material 2',
    material3: 'Google Material 3',
    polaris: 'Shopify Polaris',
    carbon: 'IBM Carbon',
    default: 'Default',
    hig: 'Apple HIG',
    atlassian: 'Atlassian',
    fluent: 'Fluent',
    lightning: 'Lightning',
    primer: 'Primer',
    spectrum: 'Spectrum',
    uber: 'Uber Base',
  };
}
