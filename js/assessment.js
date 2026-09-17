// Lógica del Módulo 0 (Autodiagnóstico interactivo)
import { StorageManager } from './storage.js';

export async function loadAssessment() {
  const container = document.getElementById('assessment-container');
  if (!container) return;

  try {
    const response = await fetch('./data/autodiagnostico.json');
    const data = await response.json();

    let html = `
      <div class="assessment-container">
        <h2 style="color: var(--ucr-primary); margin-bottom: 10px;">${data.titulo}</h2>
        <p style="color: var(--text-muted); margin-bottom: 25px;">${data.descripcion}</p>
        <form id="assessment-form">
    `;

    data.preguntas.forEach((q, idx) => {
      html += `
        <div class="question-block">
          <div class="question-title">${idx + 1}. ${q.pregunta}</div>
          ${q.opciones.map((opt, oIdx) => `
            <label class="option-btn" id="opt-label-${q.id}-${oIdx}">
              <input type="radio" name="${q.id}" value="${opt.puntaje_ruta || opt.nivel_ia || opt.foco}" style="margin-right: 10px;" required>
              ${opt.texto}
            </label>
          `).join('')}
        </div>
      `;
    });

    html += `
          <button type="submit" class="btn btn-primary" style="margin-top: 15px;">Ver Mi Ruta Sugerida</button>
        </form>
        <div id="assessment-result" style="margin-top: 25px; display: none;"></div>
      </div>
    `;

    container.innerHTML = html;

    const form = document.getElementById('assessment-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const p1 = formData.get('p1');

      let rutaRecomendada = '';
      if (p1 === 'toolkit1') {
        rutaRecomendada = '<strong>Ruta Sugerida: Toolkit 1 (Etapa Pre-operativa)</strong>. Le recomendamos comenzar con las Semanas T1-S1 a T1-S4 para validar su idea antes de invertir.';
      } else if (p1 === 'moduloA') {
        rutaRecomendada = '<strong>Ruta Sugerida: Módulo A (Validación y Cliente)</strong>. Enfóquese en afinar su Buyer Persona y estructurar su propuesta de valor.';
      } else {
        rutaRecomendada = '<strong>Ruta Sugerida: Módulo B / C (Estrategia y Operaciones)</strong>. Su negocio está listo para optimizar procesos y planificar a 90 días.';
      }

      const resultDiv = document.getElementById('assessment-result');
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `
        <div style="background-color: rgba(0, 168, 107, 0.1); border-left: 4px solid var(--ucr-accent); padding: 15px; border-radius: 4px;">
          <h3 style="color: var(--ucr-primary); margin-bottom: 8px;">¡Diagnóstico Completado!</h3>
          <p>${rutaRecomendada}</p>
        </div>
      `;

      StorageManager.saveAssessmentResult({ ruta: p1, timestamp: new Date().toISOString() });
    });

  } catch (error) {
    console.error("Error al cargar el autodiagnóstico:", error);
  }
}
