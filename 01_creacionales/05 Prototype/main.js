import { themeInstance, builderInstance } from './patterns.js';
import { ProfessionalFactory, DangerFactory } from './factories.js';
import notificationFactory  from './dependenciasFM/NotificationFactory.js'//seccion para FactoryMethod

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

// 3. Uso de AbstractFactory
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

//4. Uso de FactoryMethod
const container = document.getElementById('notification-container');

function sendNotification(type) {
    // No usamos 'new Toast()' o 'new Modal()'. 
    // Le pedimos a la fábrica que decida por nosotros.
    const notifier = notificationFactory.createNotification(type);
    
    // El cliente no sabe qué clase es, solo sabe que tiene un método .show()
    container.innerHTML = notifier.show("¡Datos guardados con éxito!");
}

document.getElementById('notify-toast').addEventListener('click',()=>{
    sendNotification('toast');
});
document.getElementById('notify-modal').addEventListener('click',()=>{
    sendNotification('modal');
});

//5 Uso de Prototype

import { FormFieldPrototype } from './patterns.js';

const prototypeContainer = document.getElementById('prototype-container');

// Creamos el objeto PROTOTIPO inicial
const emailPrototype = new FormFieldPrototype("Correo de Referencia", "email", "ejemplo@correo.com");

document.getElementById('btn-clone').onclick = () => {
    // En lugar de hacer 'new FormFieldPrototype(...)', clonamos el existente
    const newField = emailPrototype.clone();
    
    // Podemos personalizar el clon sin afectar al original
    newField.label = `Referencia Extra #${prototypeContainer.children.length + 1}`;
    
    prototypeContainer.innerHTML += newField.render();
};