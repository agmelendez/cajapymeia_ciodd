// --- RENDERUNIDAD.JS ---

const RenderUnidad = {
  render(container, semanaId, unidadId) {
    const semana = App.semanas.find(s => s.id === semanaId);
    const units = App.unidades.filter(u => u.semanaId === semanaId);
    const unitIndex = units.findIndex(u => u.id === unidadId);
    
    if (!semana || unitIndex === -1) {
      Router.navigate('#/inicio');
      return;
    }

    const unit = units[unitIndex];
    const nextUnit = units[unitIndex + 1];
    const prevUnit = units[unitIndex - 1];

    // Mark unit as viewed
    Estado.marcarUnidadVista(unidadId);

    // Breadcrumb and headers
    const progressPercent = Math.round(((unitIndex + 1) / units.length) * 100);

    let html = `
      <section class="unidad-view">
        <!-- Breadcrumb navigation -->
        <div style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
          <a href="#/inicio">Inicio</a> <i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> 
          <a href="#/modulo/${semana.moduloId}">Módulo ${semana.moduloId.replace('m', '')}</a> <i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> 
          <a href="#/semana/${semanaId}">${semana.codigoAnterior}</a> <i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> 
          <span style="color: var(--ucr-dark); font-weight: 700;">Paso ${unitIndex + 1}</span>
        </div>

        <!-- Progress within week -->
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 15px; margin-bottom: 20px; background-color: var(--white); padding: 10px 20px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
          <span style="font-size: 0.85rem; color: var(--text-light); font-weight: 700; text-transform: uppercase;">
            Paso ${unitIndex + 1} de ${units.length}
          </span>
          <div style="display: flex; align-items: center; gap: 15px; flex-grow: 1; max-width: 300px;">
            <div class="progress-bar-bg" style="height: 6px; width: 100%;">
              <div class="progress-bar-fill" style="width: ${progressPercent}%; background-color: var(--ucr-blue);"></div>
            </div>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-light); min-width: 35px;">${progressPercent}%</span>
          </div>
          <span class="badge-tipo ${unit.tipo}">${unit.tipo === 'chispa' ? '<i class="fas fa-lightbulb"></i> Chispa de Innovación' : unit.tipo === 'video' ? '<i class="fas fa-play"></i> Video Tutorial' : unit.tipo === 'reto' ? '<i class="fas fa-terminal"></i> Tarea 1: Prompt CIFRCE' : unit.tipo === 'entender' ? '<i class="fas fa-book-open"></i> Conceptos Clave' : unit.tipo === 'introduccion' ? '<i class="fas fa-flag-checkered"></i> Logro Semanal' : unit.tipo === 'interpretacion_critica' ? '<i class="fas fa-info-circle"></i> Introducción' : unit.tipo.replace('_', ' ')}</span>
        </div>

        <!-- Unit Main Card -->
        <div class="unit-body-card">
          <h2>${unit.titulo}</h2>
          
          <!-- Injected Content with Tooltips -->
          <div class="unit-content-text" style="font-size: 1.05rem; line-height: 1.7; color: #333; margin-bottom: 25px;">
            ${App.injectGlossaryTooltips(unit.html)}
          </div>

          <!-- Evidence block if Reto or Hacer -->
          ${unit.requiereAccion && unit.tipo !== 'rubrica' ? this.renderEvidenceBlock(unidadId, unit) : ''}

          <!-- Rubric Assessment block if Rubrica -->
          ${unit.tipo === 'rubrica' ? this.renderRubricBlock(semanaId) : ''}
        </div>

        <!-- Bottom Navigation buttons -->
        <div style="display: flex; justify-content: space-between; gap: 15px; margin-bottom: 50px;">
          <!-- Prev button -->
          ${prevUnit ? `
            <a href="#/unidad/${semanaId}/${prevUnit.id}" class="btn btn-secondary"><i class="fas fa-chevron-left"></i> Anterior</a>
          ` : `
            <a href="#/semana/${semanaId}" class="btn btn-secondary"><i class="fas fa-chevron-left"></i> Volver a la Semana</a>
          `}

          <!-- Next / Complete button -->
          ${nextUnit ? `
            <button id="btn-next-step" class="btn btn-primary">${unit.boton} <i class="fas fa-chevron-right"></i></button>
          ` : `
            <button id="btn-finish-week" class="btn btn-warning">${unit.boton} <i class="fas fa-check-double"></i></button>
          `}
        </div>
      </section>
    `;

    container.innerHTML = html;

    // Attach Action Listeners
    this.attachListeners(semanaId, unidadId, unitIndex, units);
  },

  renderEvidenceBlock(unidadId, unit) {
    const saved = Estado.datos.evidencias[unidadId] || { url: '', nota: '', archivoLocalName: '' };
    const isCompartir = unit.tipo === 'compartir';
    const isEvaluacion = unit.tipo === 'evaluacion';
    const semanaId = unit.semanaId;
    
    // For evaluacion (Paso 6): load existing rubric score if any
    const semState = Estado.datos.progreso.semanas[semanaId];
    const savedAuto = (semState && semState.autoevaluacion) || null;
    const criteriaScores = (savedAuto && savedAuto.criterios) ? savedAuto.criterios : { pertinencia: null, cifrce: null, privacidad: null, supervision: null };
    const hasExistingScores = criteriaScores.pertinencia !== null && criteriaScores.cifrce !== null && criteriaScores.privacidad !== null && criteriaScores.supervision !== null;
    const initialTotal = hasExistingScores ? (criteriaScores.pertinencia + criteriaScores.cifrce + criteriaScores.privacidad + criteriaScores.supervision) : '—';

    if (isEvaluacion) {
      return `
        <div class="evidence-field-box" style="margin-top: 25px; border-top: 4px solid var(--accent-green); background: #ffffff; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); padding: 25px; border: 1px solid var(--border-color);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
            <h4 style="margin: 0; color: var(--ucr-dark); font-size: 1.15rem; font-family: 'Montserrat', sans-serif;">
              <i class="fas fa-clipboard-check" style="color: var(--accent-green);"></i> Autoevaluación Interactiva y Registro de Evidencia
            </h4>
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 5px 14px; border-radius: var(--radius-pill); font-size: 0.88rem; font-weight: 700; color: #166534;">
              Puntaje de Autoevaluación: <span id="rubric-live-score" style="font-size: 1.05rem;">${initialTotal}</span> / 12 pts ${!hasExistingScores ? '<span id="rubric-status-badge" style="font-size:0.75rem; color:#b45309; font-weight:normal; margin-left: 4px;">(Sin calificar)</span>' : '<span id="rubric-status-badge" style="font-size:0.75rem; color:#166534; font-weight:normal; margin-left: 4px;">(Completa)</span>'}
            </div>
          </div>

          <p style="font-size: 0.9rem; color: #475569; margin-bottom: 20px; line-height: 1.5;">
            Califíquese en cada uno de los 4 criterios de calidad metodológica de la Universidad de Costa Rica antes de registrar su entregable en el portafolio:
          </p>

          <!-- Interactive Rubric Scorecard -->
          <div class="rubric-interactive-grid" style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 25px;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 12px 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
                <strong style="color: var(--ucr-dark); font-size: 0.92rem;">1. Pertinencia al Negocio</strong>
                <span style="font-size: 0.78rem; color: var(--text-light);">¿Resuelve una necesidad operativa o estratégica real de su MiPYME?</span>
              </div>
              <div style="display: flex; gap: 20px; flex-wrap: wrap; font-size: 0.85rem;">
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-pertinencia" value="3" ${criteriaScores.pertinencia === 3 ? 'checked' : ''}>
                  <span style="color: #15803d; font-weight: 600;">Excelente (3 pts)</span>
                </label>
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-pertinencia" value="2" ${criteriaScores.pertinencia === 2 ? 'checked' : ''}>
                  <span style="color: #b45309; font-weight: 600;">Aceptable (2 pts)</span>
                </label>
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-pertinencia" value="1" ${criteriaScores.pertinencia === 1 ? 'checked' : ''}>
                  <span style="color: #b91c1c; font-weight: 600;">Insuficiente (1 pt)</span>
                </label>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 12px 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
                <strong style="color: var(--ucr-dark); font-size: 0.92rem;">2. Calidad del Prompt CIFRCE / Técnica</strong>
                <span style="font-size: 0.78rem; color: var(--text-light);">¿Estructura completa de contexto, instrucción, formato, restricciones y criterios?</span>
              </div>
              <div style="display: flex; gap: 20px; flex-wrap: wrap; font-size: 0.85rem;">
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-cifrce" value="3" ${criteriaScores.cifrce === 3 ? 'checked' : ''}>
                  <span style="color: #15803d; font-weight: 600;">Excelente (3 pts)</span>
                </label>
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-cifrce" value="2" ${criteriaScores.cifrce === 2 ? 'checked' : ''}>
                  <span style="color: #b45309; font-weight: 600;">Aceptable (2 pts)</span>
                </label>
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-cifrce" value="1" ${criteriaScores.cifrce === 1 ? 'checked' : ''}>
                  <span style="color: #b91c1c; font-weight: 600;">Insuficiente (1 pt)</span>
                </label>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 12px 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
                <strong style="color: var(--ucr-dark); font-size: 0.92rem;">3. Privacidad y Datos (Ley 8968)</strong>
                <span style="font-size: 0.78rem; color: var(--text-light);">¿Datos anonimizados, ficticios o simulados sin exposición de secretos ni clientes?</span>
              </div>
              <div style="display: flex; gap: 20px; flex-wrap: wrap; font-size: 0.85rem;">
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-privacidad" value="3" ${criteriaScores.privacidad === 3 ? 'checked' : ''}>
                  <span style="color: #15803d; font-weight: 600;">Excelente (3 pts)</span>
                </label>
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-privacidad" value="2" ${criteriaScores.privacidad === 2 ? 'checked' : ''}>
                  <span style="color: #b45309; font-weight: 600;">Aceptable (2 pts)</span>
                </label>
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-privacidad" value="1" ${criteriaScores.privacidad === 1 ? 'checked' : ''}>
                  <span style="color: #b91c1c; font-weight: 600;">Insuficiente (1 pt)</span>
                </label>
              </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 12px 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
                <strong style="color: var(--ucr-dark); font-size: 0.92rem;">4. Supervisión Humana y Evidencia Verificable</strong>
                <span style="font-size: 0.78rem; color: var(--text-light);">¿Revisó cálculos y fuentes y dejó evidencia que permita comprobar el resultado?</span>
              </div>
              <div style="display: flex; gap: 20px; flex-wrap: wrap; font-size: 0.85rem;">
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-supervision" value="3" ${criteriaScores.supervision === 3 ? 'checked' : ''}>
                  <span style="color: #15803d; font-weight: 600;">Excelente (3 pts)</span>
                </label>
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-supervision" value="2" ${criteriaScores.supervision === 2 ? 'checked' : ''}>
                  <span style="color: #b45309; font-weight: 600;">Aceptable (2 pts)</span>
                </label>
                <label style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <input type="radio" name="crit-supervision" value="1" ${criteriaScores.supervision === 1 ? 'checked' : ''}>
                  <span style="color: #b91c1c; font-weight: 600;">Insuficiente (1 pt)</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Evidence Inputs -->
          <div style="border-top: 2px dashed #e2e8f0; padding-top: 20px; margin-top: 15px;">
            <h5 style="margin: 0 0 8px 0; color: var(--ucr-dark); font-size: 1rem; font-family: 'Montserrat', sans-serif;">
              <i class="fas fa-folder-open" style="color: var(--ucr-blue);"></i> Registro de Entregable en Portafolio Local
            </h5>
            <p style="font-size: 0.88rem; color: #64748b; margin-bottom: 15px; line-height: 1.5;">
              ${unit.entregable ? `<strong>Entregable de la semana:</strong> ${unit.entregable}<br>` : ''}
              Registre un enlace de solo lectura y un contexto de al menos 60 caracteres, o un resumen autónomo de al menos 120 caracteres que describa el proceso y el resultado. El registro se guarda en este navegador; su calidad será revisada por una persona evaluadora.
            </p>

            <div style="margin-bottom: 15px;">
              <label style="font-size: 0.85rem; font-weight: 700; color: var(--ucr-dark); display: block; margin-bottom: 5px;">
                Enlace al entregable (enlace público o de solo lectura):
              </label>
              <input type="url" id="evidence-url" class="interactive-input" style="margin: 0;" placeholder="https://drive.google.com/..." value="${Estado.sanitizeText(Estado.sanitizeUrl(saved.url))}">
            </div>

            <div style="margin-bottom: 15px;">
              <label style="font-size: 0.85rem; font-weight: 700; color: var(--ucr-dark); display: block; margin-bottom: 5px;">
                Contexto del enlace (mínimo 60 caracteres) o resumen sin enlace (mínimo 120 caracteres):
              </label>
              <textarea id="evidence-nota" class="interactive-input" style="margin: 0; min-height: 80px;" placeholder="Describa brevemente el entregable producido, los aprendizajes clave y la validación realizada...">${Estado.sanitizeText(saved.nota)}</textarea>
            </div>

            <div style="margin-bottom: 15px;">
              <label style="font-size: 0.85rem; font-weight: 700; color: var(--ucr-dark); display: block; margin-bottom: 5px;">Archivo de soporte local (opcional - metadatos):</label>
              <div style="display: flex; gap: 10px; align-items: center;">
                <input type="file" id="evidence-file" style="display: none;">
                <button type="button" id="btn-trigger-file" class="btn btn-secondary" style="padding: 8px 15px; font-size: 0.85rem;"><i class="fas fa-paperclip"></i> Vincular Archivo Local</button>
                <span id="evidence-file-name" style="font-size: 0.85rem; color: var(--text-light);">${Estado.sanitizeText(saved.archivoLocalName || 'Ningún archivo seleccionado')}</span>
              </div>
            </div>

            <div style="background-color: #fffaf0; border: 1px solid #ffe8cc; padding: 10px 14px; border-radius: var(--radius-sm); font-size: 0.82rem; color: #b45309; margin-bottom: 18px; line-height: 1.45;">
              <i class="fas fa-shield-alt"></i> <strong>Nota de Privacidad (Ley 8968):</strong> No incluya contraseñas, estados de cuenta ni datos personales reales de clientes. Utilice siempre información ficticia o debidamente anonimizada.
            </div>

            <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 15px;">
              <button type="button" id="btn-save-evidence" class="btn btn-primary" style="padding: 9px 18px; font-size: 0.9rem;">
                <i class="fas fa-save"></i> Guardar Autoevaluación y Registro
              </button>
              <span id="evidence-save-status" class="evidence-status ${Estado.evidenciaSuficiente(unidadId, saved.url, saved.nota) ? 'saved' : 'pending'}">
                ${Estado.evidenciaSuficiente(unidadId, saved.url, saved.nota) ? '<i class="fas fa-check-circle" style="color: var(--accent-green);"></i> Evidencia registrada (pendiente de revisión docente)' : 'Pendiente de registro'}
              </span>
            </div>
          </div>
        </div>
      `;
    }

    // Default evidence block for Reto (Paso 3) or Compartir (Paso 5)
    return `
      <div class="evidence-field-box" style="margin-top: 25px; border-top: 3px solid ${isCompartir ? 'var(--ucr-celeste)' : 'var(--ucr-blue)'};">
        <h4><i class="fas ${isCompartir ? 'fa-share-alt' : 'fa-folder-open'}" style="color: var(--ucr-blue);"></i> ${isCompartir ? 'Registro de Participación (Padlet)' : 'Registro de Práctica del Reto'}</h4>
        <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 15px;">
          ${isCompartir ? 
            `<strong>Actividad Principal:</strong> Comparta su reflexión en el Padlet del curso.<br>
             <strong>Registro Local:</strong> Puede registrar el enlace o sus notas para que queden guardadas en su portafolio local.` : 
            `${unit.entregable ? `<strong>Entregable de práctica:</strong> ${unit.entregable}<br>` : ''}
             Registre el enlace a su prueba con IA o sus notas de ejecución. Los datos se guardan exclusivamente en su navegador.`
          }
        </p>

        <div style="margin-bottom: 15px;">
          <label style="font-size: 0.88rem; font-weight: 700; color: var(--ucr-dark); display: block; margin-bottom: 5px;">
            ${isCompartir ? 'Enlace a su publicación de Padlet (opcional):' : 'Enlace de evidencia (Google Drive, Canva, etc.):'}
          </label>
          <input type="url" id="evidence-url" class="interactive-input" style="margin: 0;" placeholder="https://..." value="${Estado.sanitizeText(Estado.sanitizeUrl(saved.url))}">
        </div>

        <div style="margin-bottom: 15px;">
          <label style="font-size: 0.88rem; font-weight: 700; color: var(--ucr-dark); display: block; margin-bottom: 5px;">
            ${isCompartir ? 'Notas o reflexiones personales:' : 'Notas y reflexiones de la práctica (mínimo 15 caracteres):'}
          </label>
          <textarea id="evidence-nota" class="interactive-input" style="margin: 0;" placeholder="Escriba aquí sus observaciones o los resultados obtenidos con el modelo...">${Estado.sanitizeText(saved.nota)}</textarea>
        </div>

        ${!isCompartir ? `
        <div style="margin-bottom: 15px;">
          <label style="font-size: 0.88rem; font-weight: 700; color: var(--ucr-dark); display: block; margin-bottom: 5px;">Archivo de soporte local (opcional):</label>
          <div style="display: flex; gap: 10px; align-items: center;">
            <input type="file" id="evidence-file" style="display: none;">
            <button type="button" id="btn-trigger-file" class="btn btn-secondary" style="padding: 8px 15px; font-size: 0.85rem;"><i class="fas fa-paperclip"></i> Vincular Archivo</button>
            <span id="evidence-file-name" style="font-size: 0.85rem; color: var(--text-light);">${Estado.sanitizeText(saved.archivoLocalName || 'Ningún archivo seleccionado')}</span>
          </div>
        </div>
        ` : ''}

        <div style="background-color: #fffaf0; border: 1px solid #ffe8cc; padding: 10px 12px; border-radius: var(--radius-sm); font-size: 0.8rem; color: #d97706; margin-bottom: 15px;">
          <i class="fas fa-user-shield"></i> <strong>Nota de Privacidad</strong>: No incluya nombres de clientes, claves ni datos financieros sensibles de terceros (Ley 8968).
        </div>

        <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 15px;">
          <button type="button" id="btn-save-evidence" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.88rem;"><i class="fas fa-save"></i> Guardar Registro</button>
          <span id="evidence-save-status" class="evidence-status ${saved.url || (saved.nota && saved.nota.length >= 15) ? 'saved' : 'pending'}">
            ${saved.url || (saved.nota && saved.nota.length >= 15) ? '<i class="fas fa-check"></i> Registro guardado localmente' : 'Pendiente de guardar'}
          </span>
        </div>
      </div>
    `;
  },

  renderRubricBlock(semanaId) {
    return `
      <div class="rubric-eval-view" style="margin-top: 20px; text-align: center; padding: 20px;">
        <div style="font-size: 3.5rem; color: var(--accent-green); margin-bottom: 15px;">
          <i class="fas fa-check-circle"></i>
        </div>
        <h4 style="font-size: 1.35rem; color: var(--ucr-dark); margin-bottom: 10px; font-family: 'Montserrat', sans-serif;">
          ¡Ha completado las actividades formativas de la semana!
        </h4>
        <p style="font-size: 0.95rem; color: var(--text-light); max-width: 600px; margin: 0 auto 20px auto; line-height: 1.6;">
          Ha recorrido las lecturas, ejercicios prácticos y autoevaluación de calidad. Declare la semana como completada para actualizar el avance en su portafolio.
        </p>
      </div>
    `;
  },

  attachListeners(semanaId, unidadId, unitIndex, units) {
    const unit = units[unitIndex];
    const nextUnit = units[unitIndex + 1];
    const isEvaluacion = unit.tipo === 'evaluacion';

    // Live score calculation for evaluacion rubric radios
    if (isEvaluacion) {
      const updateLiveScore = () => {
        const pRadio = document.querySelector('input[name="crit-pertinencia"]:checked');
        const cRadio = document.querySelector('input[name="crit-cifrce"]:checked');
        const vRadio = document.querySelector('input[name="crit-privacidad"]:checked');
        const sRadio = document.querySelector('input[name="crit-supervision"]:checked');
        const liveScoreSpan = document.getElementById('rubric-live-score');
        const badgeSpan = document.getElementById('rubric-status-badge');

        if (pRadio && cRadio && vRadio && sRadio) {
          const total = parseInt(pRadio.value, 10) + parseInt(cRadio.value, 10) + parseInt(vRadio.value, 10) + parseInt(sRadio.value, 10);
          if (liveScoreSpan) liveScoreSpan.textContent = total;
          if (badgeSpan) {
            badgeSpan.textContent = '(Completa)';
            badgeSpan.style.color = '#166534';
          }
        } else {
          const checkedCount = [pRadio, cRadio, vRadio, sRadio].filter(Boolean).length;
          if (liveScoreSpan) liveScoreSpan.textContent = '—';
          if (badgeSpan) {
            badgeSpan.textContent = `(${checkedCount}/4 criterios)`;
            badgeSpan.style.color = '#b45309';
          }
        }
      };

      document.querySelectorAll('input[name^="crit-"]').forEach(radio => {
        radio.addEventListener('change', updateLiveScore);
      });
    }

    // Next step button listener
    const btnNext = document.getElementById('btn-next-step');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (unit.requiereAccion) {
          const ok = this.autoSaveEvidence(unidadId, unit.tipo);
          if (!ok) {
            const requisito = isEvaluacion ? "En el Paso 6 se requiere un enlace con 60 caracteres de contexto o un resumen de 120 caracteres." : "Se requiere un enlace válido o una nota de al menos 15 caracteres.";
            const proceed = confirm(`Atención: la evidencia de esta actividad está incompleta. ${requisito} La unidad quedará pendiente hasta que la complete.\n\n¿Desea avanzar de todas formas?`);
            if (!proceed) return;
          }
        } else {
          Estado.marcarUnidadCompletada(unidadId);
        }

        Router.navigate(`#/unidad/${semanaId}/${nextUnit.id}`);
      });
    }

    // Finish week button listener (Unit 7: Chispa or last unit)
    const btnFinish = document.getElementById('btn-finish-week');
    if (btnFinish) {
      btnFinish.addEventListener('click', () => {
        if (unit.requiereAccion) {
          const ok = this.autoSaveEvidence(unidadId, unit.tipo);
          if (!ok) {
            const proceed = confirm("Atención: No ha registrado evidencia para este paso final.\n\n¿Desea cerrar la semana de todas formas?");
            if (!proceed) return;
          }
        } else {
          Estado.marcarUnidadCompletada(unidadId);
        }

        // Check if all conditions are met for full week completion
        if (App.isWeekFullyCompleted(semanaId)) {
          Estado.marcarSemanaCompletada(semanaId);
          alert("¡Felicidades! Ha finalizado con éxito la semana formativa y sus entregables quedaron registrados en su portafolio local.\n\nRecuerde: Las 2 horas formativas quedan declaradas en su avance local. La acreditación institucional de 25 horas requiere la revisión docente y dictamen formal del CIOdD-UCR.");
        } else {
          alert("Ha finalizado la revisión de la unidad. Para completar la semana debe:\n1. Completar sus 7 unidades.\n2. Registrar en el Paso 6 un enlace con 60 caracteres de contexto o un resumen de 120 caracteres.\n3. Calificar los 4 criterios de la rúbrica metodológica.");
        }

        Router.navigate(`#/modulo/${App.getModuleIdByWeekId(semanaId)}`);
      });
    }

    // Evidence file attachments
    const btnTriggerFile = document.getElementById('btn-trigger-file');
    const fileInput = document.getElementById('evidence-file');
    const fileNameSpan = document.getElementById('evidence-file-name');

    if (btnTriggerFile && fileInput) {
      btnTriggerFile.addEventListener('click', () => fileInput.click());
      
      fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
          const file = fileInput.files[0];
          fileNameSpan.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
        }
      });
    }

    // Save evidence button listener
    const btnSave = document.getElementById('btn-save-evidence');
    if (btnSave) {
      btnSave.addEventListener('click', () => {
        const urlInput = document.getElementById('evidence-url');
        const notaInput = document.getElementById('evidence-nota');
        const statusSpan = document.getElementById('evidence-save-status');

        const url = urlInput ? urlInput.value.trim() : '';
        const nota = notaInput ? notaInput.value.trim() : '';
        const fileName = fileInput && fileInput.files.length > 0 ? fileInput.files[0].name : '';

        if (!Estado.evidenciaSuficiente(unidadId, url, nota)) {
          alert(isEvaluacion ? "Para el entregable semanal, aporte un enlace válido y al menos 60 caracteres de contexto, o un resumen autónomo de al menos 120 caracteres sobre el proceso y el resultado." : "Ingrese un enlace válido o una nota de al menos 15 caracteres.");
          if (statusSpan) {
            statusSpan.className = 'evidence-status pending';
            statusSpan.innerHTML = '<i class="fas fa-exclamation-triangle" style="color: #d97706;"></i> Evidencia insuficiente';
          }
          Estado.marcarUnidadEvidenciaPendiente(unidadId);
          return;
        }

        // If this is evaluacion (Paso 6), also require and validate the rubric criteria scores
        if (isEvaluacion) {
          const pRadio = document.querySelector('input[name="crit-pertinencia"]:checked');
          const cRadio = document.querySelector('input[name="crit-cifrce"]:checked');
          const vRadio = document.querySelector('input[name="crit-privacidad"]:checked');
          const sRadio = document.querySelector('input[name="crit-supervision"]:checked');

          if (!pRadio || !cRadio || !vRadio || !sRadio) {
            alert("Por favor califique los 4 criterios de la rúbrica metodológica (Pertinencia, CIFRCE, Privacidad y Supervisión Humana) antes de guardar su autoevaluación.");
            if (statusSpan) {
              statusSpan.className = 'evidence-status pending';
              statusSpan.innerHTML = '<i class="fas fa-exclamation-triangle" style="color: #d97706;"></i> Rúbrica incompleta (debe evaluar los 4 criterios)';
            }
            return;
          }

          const pertinencia = parseInt(pRadio.value, 10);
          const cifrce = parseInt(cRadio.value, 10);
          const privacidad = parseInt(vRadio.value, 10);
          const supervision = parseInt(sRadio.value, 10);
          const puntajeTotal = pertinencia + cifrce + privacidad + supervision;

          // Save evidence
          Estado.guardarEvidencia(unidadId, url, nota, fileName);

          Estado.guardarAutoevaluacion(semanaId, {
            criterios: { pertinencia, cifrce, privacidad, supervision },
            puntajeTotal,
            fecha: new Date().toISOString(),
            completada: true
          });

          if (statusSpan) {
            statusSpan.className = 'evidence-status saved';
            statusSpan.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent-green);"></i> Evidencia registrada (${puntajeTotal}/12 pts) · Sujeta a dictamen docente CIOdD-UCR`;
          }
        } else {
          Estado.guardarEvidencia(unidadId, url, nota, fileName);
          if (statusSpan) {
            statusSpan.className = 'evidence-status saved';
            statusSpan.innerHTML = '<i class="fas fa-check"></i> Registro guardado en este navegador';
          }
        }
      });
    }

    // Auto-attach prompt copy buttons to prompt boxes and blockquotes
    document.querySelectorAll('.prompt-cifrce-box, blockquote, pre').forEach(box => {
      if (box.querySelector('.btn-copy-prompt')) return;
      const btnCopy = document.createElement('button');
      btnCopy.className = 'btn btn-secondary btn-copy-prompt';
      btnCopy.style.display = 'inline-flex';
      btnCopy.style.alignItems = 'center';
      btnCopy.style.gap = '6px';
      btnCopy.style.marginTop = '12px';
      btnCopy.style.fontSize = '0.82rem';
      btnCopy.style.padding = '6px 12px';
      btnCopy.style.cursor = 'pointer';
      btnCopy.innerHTML = '<i class="far fa-copy"></i> Copiar Prompt CIFRCE';
      
      btnCopy.addEventListener('click', (e) => {
        e.stopPropagation();
        const textToCopy = box.innerText.replace('Copiar Prompt CIFRCE', '').trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
          btnCopy.innerHTML = '<i class="fas fa-check" style="color: #27ae60;"></i> ¡Prompt Copiado!';
          setTimeout(() => {
            btnCopy.innerHTML = '<i class="far fa-copy"></i> Copiar Prompt CIFRCE';
          }, 2500);
        });
      });
      box.appendChild(btnCopy);
    });
  },

  autoSaveEvidence(unidadId, unitTipo) {
    const urlInput = document.getElementById('evidence-url');
    const notaInput = document.getElementById('evidence-nota');
    const fileInput = document.getElementById('evidence-file');

    const url = urlInput ? urlInput.value.trim() : '';
    const nota = notaInput ? notaInput.value.trim() : '';
    const fileName = fileInput && fileInput.files.length > 0 ? fileInput.files[0].name : '';

    if (Estado.evidenciaSuficiente(unidadId, url, nota)) {
      if (unitTipo === 'evaluacion') {
        const semanaId = App.getWeekIdByUnitId ? App.getWeekIdByUnitId(unidadId) : unidadId.split('-')[0];
        const pRadio = document.querySelector('input[name="crit-pertinencia"]:checked');
        const cRadio = document.querySelector('input[name="crit-cifrce"]:checked');
        const vRadio = document.querySelector('input[name="crit-privacidad"]:checked');
        const sRadio = document.querySelector('input[name="crit-supervision"]:checked');

        if (pRadio && cRadio && vRadio && sRadio) {
          const pertinencia = parseInt(pRadio.value, 10);
          const cifrce = parseInt(cRadio.value, 10);
          const privacidad = parseInt(vRadio.value, 10);
          const supervision = parseInt(sRadio.value, 10);
          const puntajeTotal = pertinencia + cifrce + privacidad + supervision;

          Estado.guardarEvidencia(unidadId, url, nota, fileName);
          Estado.guardarAutoevaluacion(semanaId, {
            criterios: { pertinencia, cifrce, privacidad, supervision },
            puntajeTotal,
            fecha: new Date().toISOString(),
            completada: true
          });
          return true;
        } else {
          Estado.guardarEvidencia(unidadId, url, nota, fileName);
          Estado.marcarUnidadEvidenciaPendiente(unidadId);
          return false;
        }
      }

      Estado.guardarEvidencia(unidadId, url, nota, fileName);
      return true;
    } else {
      Estado.marcarUnidadEvidenciaPendiente(unidadId);
      return false;
    }
  }
};
