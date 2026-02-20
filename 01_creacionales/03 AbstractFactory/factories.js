//Aquí es donde aplicamos el patrón. Cada fábrica sabe crear su "familia" de objetos.
import { BlueButton, BlueAlert, RedButton, RedAlert } from './components.js';

// Interfaz abstracta (conceptual en JS)
class UIFactory {
    createButton(){
        throw new Error("Método abstracto");
    }
    createAlert(){
        throw new Error("Método abstracto");
    }
}

// Fábrica Concreta 1
class ProfessionalFactory extends UIFactory {
    createButton(){
        return new BlueButton();
    }
    createAlert(){
        return new BlueAlert();
    }
}

// Fábrica Concreta 2
class DangerFactory extends UIFactory {
    createButton(){
        return new RedButton();
    }
    createAlert(){
        return new RedAlert();
    }
}

export { ProfessionalFactory, DangerFactory };