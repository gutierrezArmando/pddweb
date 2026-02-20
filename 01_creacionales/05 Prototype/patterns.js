/* --- PATRÓN SINGLETON --- */
class ThemeManager {
    constructor() {
        if (ThemeManager.instance) {
            return ThemeManager.instance;
        }
        this.theme = 'light';
        ThemeManager.instance = this;
    }

    toggleTheme(mode) {
        this.theme = mode;
        const body = document.body;
        if (this.theme === 'dark') {
            body.classList.replace('bg-light', 'bg-dark');
            body.classList.add('text-white');
        } else {
            body.classList.replace('bg-dark', 'bg-light');
            body.classList.remove('text-white');
        }
    }
}

/* --- PATRÓN BUILDER --- */
// El Producto Final
class CustomForm {
    constructor() {
        this.fields = [];
    }
    render() {
        return `
            <form class="card shadow p-4 bg-white text-dark">
                <h4 class="mb-3 text-center">Registro de Usuario</h4>
                ${this.fields.join('')}
                <button type="submit" class="btn btn-success w-100 mt-3">Registrarme</button>
            </form>`;
    }
}

// El Constructor (Builder)
class FormBuilder {
    constructor() {
        this.form = new CustomForm();
    }

    addInput(label, type, placeholder) {
        this.form.fields.push(`
            <div class="mb-3 text-start">
                <label class="form-label">${label}</label>
                <input type="${type}" class="form-control" placeholder="${placeholder}">
            </div>`);
        return this; // Permite encadenamiento (Fluent Interface)
    }

    addCheckbox(text) {
        this.form.fields.push(`
            <div class="mb-3 form-check text-start">
                <input type="checkbox" class="form-check-input" id="check">
                <label class="form-check-label" for="check">${text}</label>
            </div>`);
        return this;
    }

    build() {
        const result = this.form;
        this.form = new CustomForm(); // Limpiar para el siguiente
        return result;
    }
}

//Se agraga para el Patron Prototype
/* --- PATRÓN PROTOTYPE --- */

export class FormFieldPrototype {
    constructor(label, type, value = "") {
        this.label = label;
        this.type = type;
        this.value = value;
    }

    // El corazón del patrón: el método de clonación
    clone() {
        // Creamos una nueva instancia basada en los valores actuales
        return new FormFieldPrototype(this.label, this.type, this.value);
    }

    render() {
        return `
            <div class="mb-3 border p-2 rounded bg-light">
                <label class="form-label">${this.label}</label>
                <input type="${this.type}" class="form-control" value="${this.value}">
            </div>`;
    }
}

// Exportamos las herramientas
export const themeInstance = new ThemeManager();
export const builderInstance = new FormBuilder();