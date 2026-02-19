import { themeInstance, builderInstance } from './patterns.js';

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