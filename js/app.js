// Inicializador principal de la aplicación Web
import { loadModules } from './modules.js';
import { loadGPTs } from './gpts.js';
import { loadAssessment } from './assessment.js';
import { loadResources } from './resources.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Inicializando Caja de Herramientas IA para MiPYME v23...');
  
  loadModules();
  loadGPTs();
  loadAssessment();
  loadResources();
});

// Función global para copiar prompts al portapapeles
window.copyPrompt = function(promptId) {
  const textElement = document.getElementById(`prompt-text-${promptId}`);
  if (!textElement) return;

  const textToCopy = textElement.innerText;
  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast('¡Prompt copiado al portapapeles!');
  }).catch(err => {
    console.error('Error al copiar el prompt:', err);
  });
};

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `📋 <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
