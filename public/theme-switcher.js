class ThemeSwitcher {
  constructor() {
    this.toggle = document.getElementById('theme-toggle');
    this.dropdown = document.getElementById('theme-dropdown');
    this.options = document.querySelectorAll('.theme-option');
    this.themeIcon = document.querySelector('.theme-icon');
    this.themeText = document.querySelector('.theme-text');
    
    this.themes = {
      light: { icon: '☀️', label: 'Light' },
      dark: { icon: '🌙', label: 'Dark' },
      system: { icon: '💻', label: 'System' }
    };
    
    this.init();
  }
  
  init() {
    // Get saved theme or default to system
    this.currentTheme = localStorage.getItem('theme') || 'system';
    this.applyTheme(this.currentTheme);
    this.updateUI();
    
    // Event listeners
    this.toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleDropdown();
    });
    
    this.options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const theme = option.dataset.theme;
        this.setTheme(theme);
        this.closeDropdown();
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      this.closeDropdown();
    });
    
    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', () => {
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
    // Remove existing theme classes
    document.documentElement.removeAttribute('data-theme');
    
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === 'system') {
      document.documentElement.setAttribute('data-theme', 'system');
    }
  }
  
  updateUI() {
    const theme = this.themes[this.currentTheme];
    this.themeIcon.textContent = '';
    this.themeText.textContent = theme.label;
    
    // Update active state
    this.options.forEach(option => {
      option.classList.toggle('active', option.dataset.theme === this.currentTheme);
    });
  }
  
  toggleDropdown() {
    const isOpen = this.dropdown.classList.contains('show');
    if (isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }
  
  openDropdown() {
    this.dropdown.classList.add('show');
    this.toggle.setAttribute('aria-expanded', 'true');
  }
  
  closeDropdown() {
    this.dropdown.classList.remove('show');
    this.toggle.setAttribute('aria-expanded', 'false');
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
  });
} else {
  new ThemeSwitcher();
}