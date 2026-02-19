class ThemeConfig {
  constructor() {
    if (ThemeConfig.instance) {
      return ThemeConfig.instance;
    }
    // Valores por defecto
    this.theme = 'light'; 
    ThemeConfig.instance = this;
  }

  setTheme(newTheme) {
    this.theme = newTheme;
    this.applyToDOM();
  }

  applyToDOM() {
    const body = document.body;
    if (this.theme === 'dark') {
      body.classList.add('bg-dark', 'text-white');
      body.classList.remove('bg-light', 'text-dark');
    } else {
      body.classList.add('bg-light', 'text-dark');
      body.classList.remove('bg-dark', 'text-white');
    }
  }
}

// Exportamos una instancia única (esto refuerza el patrón en JS)
const instance = new ThemeConfig();
// Object.freeze(instance);
export default instance;