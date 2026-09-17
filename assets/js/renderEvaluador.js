// --- RENDEREVALUADOR.JS ---
const RenderEvaluador = {
  render(container) {
    let html = `
      <section class="evaluador-view">
        <!-- Back Button -->
        <a href="#/inicio" class="btn btn-secondary" style="margin-bottom: 20px;"><i class="fas fa-arrow-left"></i> Volver al Inicio</a>

        <!-- Header Panel -->
        <div class="unit-body-card" style="margin-bottom: 30px; border-top: 5px solid var(--ucr-dark);">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-light); text-transform: uppercase; letter-spacing: 1px;">Área Docente y Transparencia Pedagógica / UCR</span>
          <h2 style="border: none; padding: 0; margin-top: 5px; font-size: 1.8rem; margin-bottom: 15px;">Espacio de Rúbricas y Criterios de Evaluación</h2>
          
          <p style="color: var(--text-light); line-height: 1.6; font-size: 1.02rem;">
            Este espacio de acceso abierto reúne rúbricas para preparar y revisar los entregables. La rúbrica semanal apoya la autoevaluación; CIOdD-UCR debe confirmar los criterios finales y el procedimiento institucional de dictamen.
          </p>

          <div style="background-color: #f0fdf4; border-left: 4px solid var(--accent-green); padding: 15px 20px; border-radius: var(--radius-md); font-size: 0.9rem; color: var(--ucr-dark); margin-top: 15px;">
            <strong style="display: block; margin-bottom: 5px;"><i class="fas fa-info-circle" style="color: var(--accent-green);"></i> Transparencia Pedagógica y Criterios Institucionales:</strong>
            Estas matrices definen el estándar de calidad académica para la acreditación y otorgamiento de la constancia institucional (25 horas). Se publican de forma abierta para que cada participante conozca exactamente los requerimientos antes de someter su portafolio a dictamen docente.
          </div>
        </div>

        <h3 style="color: var(--ucr-dark); margin-bottom: 20px; font-size: 1.3rem;">Matrices y Rúbricas de Evaluación</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 40px;">
          
          <!-- Rúbrica General -->
          <div class="unit-body-card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 3px solid var(--ucr-dark); padding: 25px;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-light); background-color: #f1f5f9; padding: 3px 10px; border-radius: var(--radius-pill);">
                  <i class="fas fa-file-invoice"></i> Transversal
                </span>
              </div>
              <h4 style="font-size: 1.15rem; color: var(--ucr-dark); margin-bottom: 10px; font-family: 'Montserrat', sans-serif;">Rúbrica General de Entregables</h4>
              <p style="font-size: 0.9rem; color: var(--text-light); line-height: 1.5; margin-bottom: 20px;">
                Matriz transversal coherente con la autoevaluación semanal: pertinencia, calidad del prompt o técnica, privacidad y supervisión humana con evidencia verificable.
              </p>
            </div>
            <a href="rubricas/rubrica-general-entregables.html" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 8px;">
              <i class="fas fa-external-link-alt"></i> Ver Rúbrica HTML
            </a>
          </div>

          <!-- Rúbrica Módulo 1 -->
          <div class="unit-body-card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 3px solid var(--ucr-blue); padding: 25px;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: white; background-color: var(--ucr-blue); padding: 3px 10px; border-radius: var(--radius-pill);">
                  Módulo 1
                </span>
                <span style="font-size: 0.8rem; color: var(--text-light); font-weight: 600;">Semanas 1 a 4</span>
              </div>
              <h4 style="font-size: 1.15rem; color: var(--ucr-dark); margin-bottom: 10px; font-family: 'Montserrat', sans-serif;">Rúbrica Módulo 1: Diagnóstico con IA</h4>
              <p style="font-size: 0.9rem; color: var(--text-light); line-height: 1.5; margin-bottom: 20px;">
                Criterios de evaluación para la etapa de diagnóstico: configuración segura bajo Ley 8968, prompting CIFRCE estructurado, FODA dinámico cruzado (TOWS) y plan de acción a 90 días (Impacto vs. Esfuerzo).
              </p>
            </div>
            <a href="rubricas/rubrica-modulo-diagnostico.html" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 8px;">
              <i class="fas fa-external-link-alt"></i> Ver Rúbrica HTML
            </a>
          </div>

          <!-- Rúbrica Módulo 2 -->
          <div class="unit-body-card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 3px solid var(--accent-green); padding: 25px;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: white; background-color: var(--accent-green); padding: 3px 10px; border-radius: var(--radius-pill);">
                  Módulo 2
                </span>
                <span style="font-size: 0.8rem; color: var(--text-light); font-weight: 600;">Semanas 5 a 8</span>
              </div>
              <h4 style="font-size: 1.15rem; color: var(--ucr-dark); margin-bottom: 10px; font-family: 'Montserrat', sans-serif;">Rúbrica Módulo 2: Automatización de Procesos</h4>
              <p style="font-size: 0.9rem; color: var(--text-light); line-height: 1.5; margin-bottom: 20px;">
                Evaluación para la etapa operativa: optimización de cuellos de botella con herramientas No-Code (S5), chatbots de atención al cliente en WhatsApp (S6), CRM ligero seguro en Google Sheets (S7) y cálculo de ROI en horas ahorradas (S8).
              </p>
            </div>
            <a href="rubricas/rubrica-modulo-automatizacion.html" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 8px;">
              <i class="fas fa-external-link-alt"></i> Ver Rúbrica HTML
            </a>
          </div>

          <!-- Rúbrica Módulo 3 -->
          <div class="unit-body-card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 3px solid var(--accent-yellow); padding: 25px;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--ucr-dark); background-color: var(--accent-yellow); padding: 3px 10px; border-radius: var(--radius-pill);">
                  Módulo 3
                </span>
                <span style="font-size: 0.8rem; color: var(--text-light); font-weight: 600;">Semanas 9 a 12</span>
              </div>
              <h4 style="font-size: 1.15rem; color: var(--ucr-dark); margin-bottom: 10px; font-family: 'Montserrat', sans-serif;">Rúbrica Módulo 3: Comercialización y Viabilidad</h4>
              <p style="font-size: 0.9rem; color: var(--text-light); line-height: 1.5; margin-bottom: 20px;">
                Criterios de calidad para la etapa comercial: manual de identidad visual en Canva, estrategia de contenidos éticos, análisis financiero de punto de equilibrio y campaña publicitaria integral AIDA.
              </p>
            </div>
            <a href="rubricas/rubrica-modulo-comercializacion.html" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 8px;">
              <i class="fas fa-external-link-alt"></i> Ver Rúbrica HTML
            </a>
          </div>

        </div>
      </section>
    `;
    container.innerHTML = html;
  }
};
