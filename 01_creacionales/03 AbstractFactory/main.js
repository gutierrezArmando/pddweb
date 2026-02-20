import { themeInstance, builderInstance } from './patterns.js';
import { ProfessionalFactory, DangerFactory } from './factories.js';//Nuevo para AbstractFactory

// 1. Uso del Singleton
const btnLight = document.getElementById('btn-light');
const btnDark = document.getElementById('btn-dark');

btnLight.onclick = () => themeInstance.toggleTheme('light');
btnDark.onclick = () => themeInstance.toggleTheme('dark');

// 2. Uso del Builder
// Construimos el formulario dinámicamente encadenando métodos
const myForm = builderInstance
    .addInput('Nombre Completo', 'text', 'Ej. Juan Pérez')
    .addInput('Email', 'email', 'juan@ejemplo.com')
    .addInput('Contraseña', 'password', '********')
    .addCheckbox('Acepto recibir notificaciones')
    .build();

// Inyectamos el resultado en el HTML
document.getElementById('form-container').innerHTML = myForm.render();

/* ************Uso de AbstractFactory************** */
const display = document.getElementById('factory-display');

function renderUI(factory) {
    const btn = factory.createButton();
    const alert = factory.createAlert();
    
    display.innerHTML = `
        ${alert.render()}
        ${btn.render()}
    `;
}

// Eventos
// document.getElementById('btn-factory-pro').onclick = () => renderUI(new ProfessionalFactory());
// document.getElementById('btn-factory-danger').onclick = () => renderUI(new DangerFactory());

document.getElementById('btn-factory-pro').addEventListener('click',()=>{
    renderUI( new ProfessionalFactory() );
});
document.getElementById('btn-factory-danger').addEventListener('click',()=>{
    renderUI( new DangerFactory() );
});