// --- RENDERMODULO.JS ---

const RenderModulo = {
  render(container, moduloId) {
    const modulo = App.modulos.find(m => m.id === moduloId);
    if (!modulo) {
      Router.navigate('#/inicio');
      return;
    }

    const progress = App.getModuleProgress(moduloId);
    const weeks = App.semanas.filter(s => s.moduloId === moduloId);

    let html = `
      <section class="modulo-view">
        <!-- Back Button -->
        <a href="#/inicio" class="btn btn-secondary" style="margin-bottom: 20px;"><i class="fas fa-arrow-left"></i> Volver a la Estructura</a>

        <!-- Module Header Details -->
        <div class="unit-body-card" style="margin-bottom: 30px; border-top: 5px solid var(--ucr-blue);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 15px; margin-bottom: 15px;">
            <div>
              <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: var(--text-light); letter-spacing: 1px;">${modulo.codigo}</span>
              <h2 style="border: none; padding: 0; margin-top: 5px; font-size: 1.8rem;">${modulo.nombre}</h2>
            </div>
            <div style="background-color: #fafbfc; border: 1px solid var(--border-color); padding: 10px 15px; border-radius: var(--radius-md); text-align: center; min-width: 140px;">
              <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-light); text-transform: uppercase;">Avance Módulo</span>
              <div style="font-size: 1.5rem; font-weight: 700; color: var(--ucr-blue);">${progress}%</div>
            </div>
          </div>
          <p style="font-style: italic; color: var(--text-light); margin-bottom: 15px;">"${modulo.frase}"</p>
          <p style="margin-bottom: 20px; line-height: 1.6;">${modulo.descripcion}</p>

          <!-- Recuadro para quién es este módulo (Exigencia v2.3) -->
          <div class="para-quien-box" style="background-color: #f8fafc; border: 1px solid var(--border-color); border-left: 4px solid var(--ucr-celeste); padding: 18px; border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.6; margin-top: 15px;">
            <strong style="color: var(--ucr-dark); font-size: 1rem; display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-family: 'Montserrat', sans-serif;">
              <i class="fas fa-bullseye" style="color: var(--ucr-blue);"></i> 🆕🏢 ¿Para quién es este módulo?
            </strong>
            <p style="margin: 0; color: #444;">
              ${modulo.paraQuien || 'Este módulo está diseñado tanto para personas con una idea no lanzada o en fase de validación, como para microempresas en marcha que buscan optimizar sus procesos operativos y comerciales.'}
            </p>
          </div>
        </div>

        <h3 style="color: var(--ucr-dark); margin-bottom: 20px; font-size: 1.3rem;">Semanas de Aprendizaje</h3>
        <div style="display: flex; flex-direction: column; gap: 20px;">
    `;

    if (weeks.length === 0) {
      html += `
        <div class="unit-body-card text-center" style="padding: 30px;">
          <p>Este módulo no cuenta con semanas de aprendizaje en la versión actual.</p>
        </div>
      `;
    } else {
      weeks.forEach(w => {
        const weekProgress = App.getWeekProgress(w.id);
        
        let statusBadge = '<span style="background-color: #f1f5f9; color: var(--text-light); padding: 3px 8px; border-radius: var(--radius-pill); font-size: 0.75rem; font-weight: 700;">NO INICIADA</span>';
        let btnText = 'Iniciar';
        let btnClass = 'btn-primary';

        if (weekProgress === 100) {
          statusBadge = '<span style="background-color: var(--accent-green); color: white; padding: 3px 8px; border-radius: var(--radius-pill); font-size: 0.75rem; font-weight: 700;">COMPLETADA</span>';
          btnText = 'Revisar';
          btnClass = 'btn-secondary';
        } else if (weekProgress > 0) {
          statusBadge = '<span style="background-color: var(--ucr-celeste); color: white; padding: 3px 8px; border-radius: var(--radius-pill); font-size: 0.75rem; font-weight: 700;">EN CURSO</span>';
          btnText = 'Continuar';
          btnClass = 'btn-primary';
        }

        // Render week card
        html += `
          <div class="unit-body-card" style="padding: 25px; transition: var(--transition); border-left: 4px solid var(--border-color);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
              <div>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-light); text-transform: uppercase;">Semana ${w.semanaGlobal} · ${w.codigoAnterior}</span>
                <h4 style="color: var(--ucr-dark); margin: 5px 0 0 0; font-size: 1.2rem;">${w.titulo}</h4>
              </div>
              ${statusBadge}
            </div>
            
            <p style="font-size: 0.95rem; margin-bottom: 15px; color: var(--text-light);">${w.descripcionBreve}</p>
            
            <div style="background-color: #f8fafc; padding: 12px 15px; border-radius: var(--radius-md); font-size: 0.88rem; margin-bottom: 20px; border-left: 3px solid var(--ucr-blue);">
              <strong>Entregable esperado:</strong> ${w.entregable}
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
              <div style="font-size: 0.85rem; color: var(--text-light);">
                <i class="far fa-clock"></i> Tiempo estimado: ~${w.tiempoEstimadoMin} mins
              </div>
              <div style="display: flex; align-items: center; gap: 15px; min-width: 250px; justify-content: flex-end;">
                <div class="progress-container" style="flex-grow: 1; max-width: 150px; margin: 0;">
                  <div class="progress-bar-bg" style="height: 6px;">
                    <div class="progress-bar-fill" style="width: ${weekProgress}%;"></div>
                  </div>
                </div>
                <a href="#/semana/${w.id}" class="btn ${btnClass}" style="padding: 8px 16px; font-size: 0.85rem;">${btnText} <i class="fas fa-chevron-right" style="font-size: 0.75rem;"></i></a>
              </div>
            </div>
          </div>
        `;
      });
    }

    // Check if all weeks are completed to show next module button
    const allWeeksCompleted = weeks.length > 0 && weeks.every(w => App.getWeekProgress(w.id) === 100);
    if (allWeeksCompleted) {
      // Find next module
      const currentIdx = App.modulos.findIndex(m => m.id === moduloId);
      const nextMod = App.modulos[currentIdx + 1];
      if (nextMod) {
        html += `
          <div style="margin-top: 30px; padding: 25px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); text-align: center; box-shadow: var(--shadow-sm);">
            <p style="color: #166534; font-weight: 600; margin-bottom: 15px; font-size: 1.05rem;">
              <i class="fas fa-check-circle" style="font-size: 1.2rem; margin-right: 5px;"></i> ¡Felicidades! Ha completado todas las semanas de este módulo.
            </p>
            <a href="#/modulo/${nextMod.id}" class="btn btn-primary" style="background-color: var(--accent-green); border: none; padding: 10px 20px; font-weight: 600;">
              Avanzar al Siguiente Módulo: ${nextMod.nombre} <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        `;
      } else {
        // Last module completed
        html += `
          <div style="margin-top: 30px; padding: 25px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); text-align: center; box-shadow: var(--shadow-sm);">
            <p style="color: #166534; font-weight: 600; margin-bottom: 15px; font-size: 1.05rem;">
              <i class="fas fa-medal" style="font-size: 1.2rem; margin-right: 5px;"></i> ¡Felicidades! Ha completado todas las semanas y módulos del programa.
            </p>
            <a href="#/credenciales" class="btn btn-primary" style="background-color: var(--accent-green); border: none; padding: 10px 20px; font-weight: 600;">
              Ver mis Credenciales <i class="fas fa-medal"></i>
            </a>
          </div>
        `;
      }
    }

    html += `
        </div>
      </section>
    `;

    container.innerHTML = html;
  }
};
