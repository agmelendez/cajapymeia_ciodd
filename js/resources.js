// Renderizado de Recursos, Plantillas, Rúbricas y Fuentes Teóricas
export async function loadResources() {
  const containerFuentes = document.getElementById('fuentes-container');
  const containerPlantillas = document.getElementById('plantillas-container');

  if (containerFuentes) {
    try {
      const response = await fetch('./data/recursos_v23.json');
      const data = await response.json();

      if (data.fuentes_teoricas) {
        containerFuentes.innerHTML = `
          <div class="module-card">
            <div class="module-header" style="background-color: var(--ucr-primary);">
              <span>📖 Respaldos Teóricos y Fuentes Curriculares (v23)</span>
              <span class="badge" style="background-color: rgba(255,255,255,0.2);">CIOdD-UCR</span>
            </div>
            <div class="module-body">
              <div class="weeks-list">
                ${data.fuentes_teoricas.map(f => `
                  <div class="week-item">
                    <div class="week-title">${f.semana}: ${f.tema}</div>
                    <div class="week-meta"><strong>Fuente / Marco Teórico:</strong> ${f.fuente}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      }
    } catch (err) {
      console.error('Error al cargar recursos teóricos:', err);
    }
  }

  if (containerPlantillas) {
    containerPlantillas.innerHTML = `
      <div class="grid-cards">
        <div class="module-card">
          <div class="module-header" style="background-color: var(--ucr-secondary);">
            <span>📋 Plantillas de Trabajo</span>
          </div>
          <div class="module-body">
            <ul style="padding-left: 20px; font-size: 0.95rem;">
              <li><a href="./templates/plantilla-buyer-persona.html" target="_blank">Plantilla Buyer Persona</a></li>
              <li><a href="./templates/plantilla-business-model-canvas.html" target="_blank">Plantilla Lean / BMC Canvas</a></li>
              <li><a href="./templates/plantilla-foda.html" target="_blank">Plantilla FODA / TOWS</a></li>
              <li><a href="./templates/plantilla-ivu.html" target="_blank">Plantilla Matriz IVU (Impacto vs Esfuerzo)</a></li>
              <li><a href="./templates/plantilla-campana-aida.html" target="_blank">Plantilla Campaña AIDA</a></li>
              <li><a href="./templates/plantilla-crm-basico.html" target="_blank">Plantilla CRM Básico en Google Sheets</a></li>
              <li><a href="./templates/plantilla-prefactibilidad.html" target="_blank">Plantilla de Prefactibilidad Financiera</a></li>
            </ul>
          </div>
        </div>

        <div class="module-card">
          <div class="module-header" style="background-color: var(--ucr-primary);">
            <span>⚖️ Rúbricas de Evaluación y Políticas</span>
          </div>
          <div class="module-body">
            <ul style="padding-left: 20px; font-size: 0.95rem;">
              <li><a href="./rubricas/rubrica-general-entregables.html" target="_blank">Rúbrica General de Entregables</a></li>
              <li><a href="./rubricas/rubrica-toolkit-preoperativo.html" target="_blank">Rúbrica Toolkit Pre-operativo</a></li>
              <li><a href="./politicas/politica-uso-ia.html" target="_blank">Política de Uso Ético de IA (UCR)</a></li>
              <li><a href="./politicas/protocolo-privacidad-datos.html" target="_blank">Protocolo de Privacidad de Datos (Ley 8968)</a></li>
              <li><a href="./politicas/declaracion-accesibilidad.html" target="_blank">Declaración de Accesibilidad Web</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}
