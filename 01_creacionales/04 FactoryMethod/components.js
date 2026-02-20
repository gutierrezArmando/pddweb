
// Primero definimos qué objetos queremos crear (Botones y Alertas).

// Familia "Profesional"
class BlueButton{ 
    render(){ 
        return `<button class="btn btn-primary w-100">Enviar Reporte</button>`;
    } 
}

class BlueAlert{
    render(){
        return `<div class="alert alert-info">Operación del sistema estable.</div>`;
    }
}

// Familia "Peligro"
class RedButton{
    render(){
        return `<button class="btn btn-danger w-100">Eliminar Cuenta</button>`;
    }
}

class RedAlert{
    render(){
        return `<div class="alert alert-warning">¡Cuidado! Esta acción es irreversible.</div>`;
    }
}

export { BlueButton, BlueAlert, RedButton, RedAlert };