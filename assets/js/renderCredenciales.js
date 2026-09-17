// --- RENDERCREDENCIALES.JS ---

const RenderCredenciales = {
  render(container) {
    const diagnosticoCompletado = Estado.datos.diagnostico && Estado.datos.diagnostico.completado;
    const globalProgress = App.getGlobalProgress();

    // Check module completions for canonical 3 modules (12 weeks)
    const m1Prog = App.getModuleProgress('m1');
    const m2Prog = App.getModuleProgress('m2');
    const m3Prog = App.getModuleProgress('m3');

    // Build badge records
    const achievements = [
      {
        id: "diag",
        titulo: "Brújula Activada",
        desc: "Completar el autodiagnóstico de clasificación inicial.",
        icon: "compass",
        obtenido: Boolean(diagnosticoCompletado),
        color: "#1a5276"
      },
      {
        id: "m1",
        titulo: "Diagnóstico con IA",
        desc: "Completar al 100% el Módulo I (Semanas 1 a 4: Seguridad, CIFRCE, FODA y Plan de Acción).",
        icon: "chart-line",
        obtenido: m1Prog === 100,
        color: "#1e8449"
      },
      {
        id: "m2",
        titulo: "Automatizador de Procesos",
        desc: "Completar al 100% el Módulo II (Semanas 5 a 8: No-Code, Chatbots, CRM y Retorno de Inversión).",
        icon: "cogs",
        obtenido: m2Prog === 100,
        color: "#005da4"
      },
      {
        id: "m3",
        titulo: "Estratega Comercial y Financiero",
        desc: "Completar al 100% el Módulo III (Semanas 9 a 12: Identidad, Audiovisual, Prefactibilidad y Campaña AIDA).",
        icon: "bullhorn",
        obtenido: m3Prog === 100,
        color: "#f39c12"
      }
    ];

    let html = `
      <section class="credenciales-view">
        <h2 style="border: none; padding: 0; margin-bottom: 20px;">Reconocimientos y Acreditación</h2>

        <!-- Achievements Local grid -->
        <div class="unit-body-card" style="margin-bottom: 30px;">
          <h3 style="color: var(--ucr-dark); margin-bottom: 20px; font-size: 1.25rem;"><i class="fas fa-award" style="color: var(--accent-yellow);"></i> Reconocimientos de Avance Local</h3>
          <p style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 25px;">
            A medida que avance en los contenidos prácticos del curso, desbloqueará insignias locales que validan su progreso en este navegador. Estas insignias son un indicador formativo de autogestión.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px;">
    `;

    achievements.forEach(a => {
      const opacity = a.obtenido ? '1' : '0.4';
      const border = a.obtenido ? `2px solid ${a.color}` : '2px dashed var(--border-color)';
      const background = a.obtenido ? '#ffffff' : '#f8fafc';

      html += `
        <div style="background-color: ${background}; border: ${border}; border-radius: var(--radius-md); padding: 20px; text-align: center; opacity: ${opacity}; display: flex; flex-direction: column; align-items: center; gap: 10px; transition: var(--transition);">
          <div style="width: 60px; height: 60px; border-radius: 50%; background-color: ${a.color}; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; box-shadow: var(--shadow-sm);">
            <i class="fas fa-${a.icon}"></i>
          </div>
          <h4 style="font-size: 1.05rem; color: var(--ucr-dark); margin: 5px 0 0 0;">${a.titulo}</h4>
          <p style="font-size: 0.8rem; color: var(--text-light); line-height: 1.4;">${a.desc}</p>
          <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: ${a.obtenido ? 'var(--accent-green)' : 'var(--text-light)'}; margin-top: auto;">
            ${a.obtenido ? '<i class="fas fa-check-circle"></i> Desbloqueada' : 'Bloqueada'}
          </span>
        </div>
      `;
    });

    html += `
          </div>
        </div>

        <!-- Institutional Certificate Pathway -->
        <div class="unit-body-card" style="border-top: 5px solid var(--ucr-blue);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 15px; margin-bottom: 15px;">
            <div>
              <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--ucr-blue); letter-spacing: 1px;">Preparación del portafolio para revisión</span>
              <h3 style="color: var(--ucr-dark); margin: 5px 0 0 0; font-size: 1.35rem;"><i class="fas fa-graduation-cap" style="color: var(--ucr-blue);"></i> Ruta hacia la constancia de aprovechamiento (25 horas)</h3>
            </div>
            <span class="badge" style="background-color: var(--ucr-blue); color: white; padding: 6px 12px; border-radius: var(--radius-pill); font-size: 0.8rem; font-weight: 700;">CIOdD - UCR</span>
          </div>

          <p style="font-size: 0.95rem; margin-bottom: 20px; color: #334155; line-height: 1.6;">
            La ruta está diseñada para una constancia de aprovechamiento por <strong>25 horas de formación</strong>, cuya unidad emisora es el <strong>CIOdD-UCR</strong>. Los requisitos finales, el canal de postulación y la emisión deben ser confirmados por esa unidad.
          </p>

          <div style="background-color: #fffdf5; border-left: 4px solid var(--accent-yellow); padding: 16px 20px; border-radius: var(--radius-md); margin-bottom: 25px; font-size: 0.92rem; color: #451a03; line-height: 1.55;">
            <strong style="display: block; margin-bottom: 6px;"><i class="fas fa-shield-alt" style="color: #d97706;"></i> Principio de Evaluación y Acreditación Rigurosa:</strong>
            El progreso en este navegador representa <strong>horas formativas declaradas (avance local)</strong>. No equivale a una constancia. La revisión humana y el procedimiento institucional deberán ser confirmados por CIOdD-UCR antes de recibir portafolios.
            <div style="margin-top: 10px;">
              <a href="politicas/procedimiento-acreditacion.html" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.82rem; padding: 5px 12px; display: inline-flex; align-items: center; gap: 6px;">
                <i class="fas fa-book"></i> Consultar guía de requisitos y estado del trámite ↗
              </a>
            </div>
          </div>

          <!-- Metrics Panel: 25 Hours Breakdown & Evidence Count -->
          ${(() => {
            const certifiedHours = App.getCertifiedHours();
            const diagOk = !!(Estado.datos.diagnostico && Estado.datos.diagnostico.completado);
            let weeksEvidenceCount = 0;
            let totalRubricPoints = 0;
            let weeksWithRubric = 0;

            App.semanas.forEach(s => {
              const p6Id = `${s.id}-u06`;
              const ev = Estado.datos.evidencias[p6Id];
              if (ev && Estado.evidenciaSuficiente(p6Id, ev.url, ev.nota)) {
                weeksEvidenceCount++;
              }
              const auto = Estado.datos.progreso.semanas[s.id]?.autoevaluacion;
              if (auto && auto.puntajeTotal) {
                totalRubricPoints += auto.puntajeTotal;
                weeksWithRubric++;
              }
            });

            const avgScore = weeksWithRubric > 0 ? (totalRubricPoints / weeksWithRubric).toFixed(1) : '—';
            const isEligible = certifiedHours >= 25 && weeksEvidenceCount >= 12;

            return `
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 15px; margin-bottom: 25px;">
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 15px; border-left: 4px solid var(--ucr-blue);">
                  <span style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-light); display: block; margin-bottom: 4px;">Horas Formativas Declaradas (Avance Local)</span>
                  <strong style="font-size: 1.35rem; color: var(--ucr-dark);">${certifiedHours} / 25 h</strong>
                  <span style="font-size: 0.75rem; color: var(--text-light); display: block; margin-top: 4px;">
                    Inducción: ${diagOk ? '1h <i class="fas fa-check" style="color: var(--accent-green);"></i>' : '0h <i class="fas fa-clock"></i>'} · Semanas: ${certifiedHours - (diagOk ? 1 : 0)}/24h
                  </span>
                </div>

                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 15px; border-left: 4px solid var(--accent-green);">
                  <span style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-light); display: block; margin-bottom: 4px;">Entregables Registrados</span>
                  <strong style="font-size: 1.35rem; color: ${weeksEvidenceCount >= 12 ? 'var(--accent-green)' : 'var(--ucr-dark)'};">${weeksEvidenceCount} / 12 semanas</strong>
                  <span style="font-size: 0.75rem; color: var(--text-light); display: block; margin-top: 4px;">
                    ${weeksEvidenceCount >= 12 ? 'Todas las evidencias registradas' : 'Evidencias pendientes en Paso 6'}
                  </span>
                </div>

                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 15px; border-left: 4px solid var(--accent-yellow);">
                  <span style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-light); display: block; margin-bottom: 4px;">Promedio Autoevaluación</span>
                  <strong style="font-size: 1.35rem; color: var(--ucr-dark);">${avgScore} / 12 pts</strong>
                  <span style="font-size: 0.75rem; color: var(--text-light); display: block; margin-top: 4px;">
                    ${weeksWithRubric}/12 semanas autoevaluadas
                  </span>
                </div>
              </div>

              <h4 style="font-size: 1.05rem; color: var(--ucr-dark); margin-bottom: 12px;">Condiciones de preparación del portafolio (sujetas a confirmación institucional):</h4>
              <ul style="margin-left: 20px; margin-bottom: 25px; font-size: 0.93rem; display: flex; flex-direction: column; gap: 10px; color: #334155;">
                <li><i class="fas ${diagOk ? 'fa-check-circle' : 'fa-circle'}" style="color: ${diagOk ? 'var(--accent-green)' : '#cbd5e1'};"></i> <strong>1 Hora de Inducción:</strong> Haber completado el Diagnóstico de Entrada de 21 preguntas.</li>
                <li><i class="fas ${certifiedHours >= 25 ? 'fa-check-circle' : 'fa-circle'}" style="color: ${certifiedHours >= 25 ? 'var(--accent-green)' : '#cbd5e1'};"></i> <strong>24 Horas de Práctica:</strong> Haber cursado las 12 semanas formativas completas.</li>
                <li><i class="fas ${weeksEvidenceCount >= 12 ? 'fa-check-circle' : 'fa-circle'}" style="color: ${weeksEvidenceCount >= 12 ? 'var(--accent-green)' : '#cbd5e1'};"></i> <strong>Portafolio local completo (12/12):</strong> Haber registrado entregables sustantivos en el Paso 6 de cada semana.</li>
                <li><i class="fas fa-exclamation-circle" style="color: #b45309;"></i> <strong>Revisión manual de privacidad:</strong> Verifique en <a href="#/portafolio">Mi Portafolio</a> que el respaldo JSON exportado no contenga contraseñas, secretos comerciales ni datos personales de clientes.</li>
              </ul>

              <!-- Privacy & Legal Notice for submission -->
              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 16px 20px; border-radius: var(--radius-md); margin-bottom: 25px; font-size: 0.88rem; color: #166534; line-height: 1.5;">
                <strong style="display: block; margin-bottom: 5px;"><i class="fas fa-user-shield"></i> Antes de compartir su portafolio:</strong>
                El archivo JSON exportado no está cifrado. Revíselo y elimine datos personales o secretos comerciales. El medio de entrega, los datos requeridos y las reglas de conservación se publicarán cuando CIOdD-UCR confirme el trámite.
              </div>

              <div style="background-color: #f8fafc; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color); border-left: 5px solid var(--ucr-blue);">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; margin-bottom: 15px;">
                  <div>
                    <strong style="color: var(--ucr-dark); font-size: 1.05rem; display: block;">Preparación local del portafolio:</strong>
                    <span style="font-size: 0.88rem; color: var(--text-light);">
                      Avance formativo declarado: <strong>${globalProgress}%</strong> (${certifiedHours}/25 horas declaradas · ${weeksEvidenceCount}/12 entregables)
                    </span>
                  </div>
                  <div>
                    ${isEligible ? `
                      <a href="politicas/procedimiento-acreditacion.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background-color: var(--accent-green); border: none; font-weight: 700; padding: 10px 18px; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-book"></i> Ver guía y estado del trámite
                      </a>
                    ` : `
                      <button type="button" class="btn" style="background-color: #e2e8f0; color: #64748b; cursor: not-allowed; font-weight: 600; padding: 10px 18px;" disabled>
                        <i class="fas fa-lock"></i> Requisitos Pendientes (${globalProgress}%)
                      </button>
                    `}
                  </div>
                </div>

                <div class="progress-container" style="margin: 10px 0;">
                  <div class="progress-bar-bg" style="height: 10px;">
                    <div class="progress-bar-fill" style="width: ${globalProgress}%; background-color: ${isEligible ? 'var(--accent-green)' : 'var(--ucr-blue)'};"></div>
                  </div>
                </div>

                <p style="font-size: 0.82rem; color: #64748b; margin: 10px 0 0 0; line-height: 1.5;">
                  <strong>Trámite pendiente de confirmación:</strong> CIOdD-UCR figura como unidad emisora. El correo <code>ciodd@ucr.ac.cr</code> consta en su <a href="https://ciodd.ucr.ac.cr/contacto/" target="_blank" rel="noopener noreferrer">página oficial de contacto</a>, pero aún no se ha confirmado como canal de recepción de portafolios. No envíe el JSON ni su cédula hasta que se publique el procedimiento aprobado.
                </p>
              </div>
            `;
          })()}
        </div>
      </section>
    `;

    container.innerHTML = html;
  }
};
