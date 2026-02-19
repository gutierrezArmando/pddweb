import themeManager from './Singleton.js';

const btnLight = document.getElementById('btn-light');
const btnDark = document.getElementById('btn-dark');
const themeText = document.getElementById('current-theme');

// Eventos
btnLight.addEventListener('click', () => {
    themeManager.setTheme('light');
    updateUI();
});

btnDark.addEventListener('click', () => {
    themeManager.setTheme('dark');
    updateUI();
});

function updateUI() {
    themeText.innerText = themeManager.theme === 'light' ? 'Claro' : 'Oscuro';
    console.log('Referencia de la instancia:', themeManager);
}

// Inicialización
themeManager.applyToDOM();