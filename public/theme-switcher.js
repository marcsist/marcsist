class ThemeSwitcher {
  constructor() {
    this.toggle = document.getElementById('theme-toggle');
    this.themeText = document.querySelector('.theme-text');
    this.order = ['system', 'dark', 'light'];

    this.init();
  }

  init() {
    this.currentTheme = localStorage.getItem('theme') || 'system';
    this.applyTheme(this.currentTheme);
    this.updateUI();

    this.toggle.addEventListener('click', () => {
      const next = this.order[(this.order.indexOf(this.currentTheme) + 1) % this.order.length];
      this.setTheme(next);
    });

    // React to OS preference changes when in system mode
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.currentTheme === 'system') {
          this.applyTheme('system');
        }
      });
    }
  }

  setTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
    this.updateUI();
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  updateUI() {
    if (this.themeText) this.themeText.textContent = this.currentTheme;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new ThemeSwitcher());
} else {
  new ThemeSwitcher();
}
