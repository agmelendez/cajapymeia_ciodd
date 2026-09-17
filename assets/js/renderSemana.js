// --- RENDERSEMANA.JS ---

const RenderSemana = {
  render(container, semanaId) {
    const semana = App.semanas.find(s => s.id === semanaId);
    if (!semana) {
      Router.navigate('#/inicio');
      return;
    }

    const units = App.unidades.filter(u => u.semanaId === semanaId);
    const progress = App.getWeekProgress(semanaId);
    const moduloId = semana.moduloId;

    // Find first incomplete unit
    let targetUnit = units[0];
    let stepNumber = 1;
    for (let i = 0; i < units.length; i++) {
      const state = Estado.datos.progreso.unidades[units[i].id];
      if (!state || state.estado !== 'completada') {
        targetUnit = units[i];
        stepNumber = i + 1;
        break;
      }
    }

    let btnText = 'Comenzar Semana';
    let btnClass = 'btn-primary';
    if (progress === 100) {
      btnText = 'Revisar Contenidos';
      btnClass = 'btn-secondary';
      targetUnit = units[0];
    } else if (progress > 0) {
      btnText = `Continuar en Paso ${stepNumber}: ${targetUnit.titulo}`;
      btnClass = 'btn-primary';
    }

    let html = `
      <section class="semana-view">
        <!-- Back Button -->
        <a href="#/modulo/${moduloId}" class="btn btn-secondary" style="margin-bottom: 20px;"><i class="fas fa-arrow-left"></i> Volver al Módulo</a>

        <!-- Week Info Panel -->
        <div class="unit-body-card" style="margin-bottom: 30px; border-top: 5px solid var(--ucr-celeste);">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-light); text-transform: uppercase;">Semana ${semana.semanaGlobal} · ${semana.codigoAnterior}</span>
          <h2 style="border: none; padding: 0; margin-top: 5px; font-size: 1.8rem; margin-bottom: 15px;">${semana.titulo}</h2>
          
          <div style="background-color: #f4f9fc; padding: 15px 20px; border-radius: var(--radius-md); font-size: 1rem; margin-bottom: 20px; border-left: 4px solid var(--ucr-celeste);">
            <strong style="color: var(--ucr-dark); display: block; margin-bottom: 5px;"><i class="fas fa-graduation-cap"></i> Objetivo de Aprendizaje:</strong>
            ${semana.objetivo}
          </div>

          <div style="background-color: #fffdf5; padding: 15px 20px; border-radius: var(--radius-md); font-size: 1rem; margin-bottom: 20px; border-left: 4px solid var(--accent-yellow);">
            <strong style="color: var(--ucr-dark); display: block; margin-bottom: 5px;"><i class="fas fa-box"></i> Entregable esperado al finalizar:</strong>
            ${semana.entregable}
          </div>

          ${(() => {
            if (!semana.gptUrl) return '';
            const isDedicated = semana.gptUrl.includes('/g/');
            if (isDedicated) {
              return `
                <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: white; padding: 16px 20px; border-radius: var(--radius-md); border-left: 4px solid #38bdf8; margin-bottom: 25px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; box-shadow: var(--shadow-sm);">
                  <div style="display: flex; align-items: center; gap: 14px;">
                    <div style="background: rgba(56, 189, 248, 0.2); width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #38bdf8; font-size: 1.25rem;">
                      <i class="fas fa-robot"></i>
                    </div>
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 3px;">
                        <span style="font-size: 0.72rem; color: #38bdf8; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Asistente Especializado</span>
                        <span class="badge" style="background: #15803d; color: white; font-size: 0.68rem; padding: 2px 7px; border-radius: 3px; font-weight: 700;"><i class="fas fa-link"></i> Prototipo enlazado · verificar acceso</span>
                      </div>
                      <strong style="color: white; font-size: 1rem; font-family: 'Montserrat', sans-serif;">${semana.gptNombre}</strong>
                      <span style="font-size: 0.82rem; color: #94a3b8; display: block; margin-top: 2px;">${semana.gptDesc || ''}</span>
                    </div>
                  </div>
                  <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                    <a href="#/unidad/${semana.id}/${semana.id}-u03" class="btn btn-secondary" style="font-size: 0.8rem; padding: 7px 12px; background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); color: white !important;">
                      <i class="fas fa-terminal"></i> Ver Prompt CIFRCE
                    </a>
                    <a href="${semana.gptUrl}" target="_blank" rel="noopener noreferrer" class="btn" style="background: #0284c7; color: white !important; font-weight: 700; padding: 7px 14px; font-size: 0.82rem; border-radius: var(--radius-sm); border: none; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 6px rgba(2,132,199,0.4);">
                      <i class="fas fa-external-link-alt"></i> Abrir Asistente GPT ↗
                    </a>
                  </div>
                </div>
              `;
            } else {
              return `
                <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: white; padding: 16px 20px; border-radius: var(--radius-md); border-left: 4px solid #f59e0b; margin-bottom: 25px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; box-shadow: var(--shadow-sm);">
                  <div style="display: flex; align-items: center; gap: 14px;">
                    <div style="background: rgba(245, 158, 11, 0.2); width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fbbf24; font-size: 1.25rem;">
                      <i class="fas fa-tools"></i>
                    </div>
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 3px;">
                        <span style="font-size: 0.72rem; color: #fbbf24; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Asistente de la Semana</span>
                        <span class="badge" style="background: #b45309; color: white; font-size: 0.68rem; padding: 2px 7px; border-radius: 3px; font-weight: 700;"><i class="fas fa-flask"></i> En desarrollo CIOdD · Alternativa Abierta</span>
                      </div>
                      <strong style="color: white; font-size: 1rem; font-family: 'Montserrat', sans-serif;">${semana.gptNombre}</strong>
                      <span style="font-size: 0.82rem; color: #cbd5e1; display: block; margin-top: 2px;">
                        ${semana.gptDesc || ''} — Ejecutable en cualquier IA gratuita mediante el prompt estructurado CIFRCE del curso.
                      </span>
                    </div>
                  </div>
                  <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                    <a href="#/unidad/${semana.id}/${semana.id}-u03" class="btn" style="background: var(--accent-yellow); color: var(--ucr-dark) !important; font-weight: 700; padding: 7px 14px; font-size: 0.82rem; border-radius: var(--radius-sm); border: none; display: inline-flex; align-items: center; gap: 6px;">
                      <i class="fas fa-terminal"></i> Ver Prompt CIFRCE en Paso 3
                    </a>
                    <a href="#/biblioteca" class="btn btn-secondary" style="font-size: 0.8rem; padding: 7px 12px; background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); color: white !important;">
                      <i class="fas fa-book-open"></i> Plantillas en Biblioteca
                    </a>
                    <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" class="btn" style="background: transparent; border: 1px solid rgba(255,255,255,0.25); color: #cbd5e1 !important; padding: 6px 10px; font-size: 0.75rem; border-radius: var(--radius-sm);">
                      ChatGPT Genérico ↗
                    </a>
                  </div>
                </div>
              `;
            }
          })()}

          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
            <div style="font-size: 0.9rem; color: var(--text-light);">
              <i class="far fa-clock"></i> Tiempo estimado: ~${semana.tiempoEstimadoMin} mins · 
              <i class="fas fa-layer-group"></i> ${units.length} Pasos
            </div>
            
            <div style="display: flex; align-items: center; gap: 20px; min-width: 280px; justify-content: flex-end;">
              <div class="progress-container" style="flex-grow: 1; max-width: 150px; margin: 0;">
                <div class="progress-header" style="font-size: 0.75rem;">
                  <span>Completado</span>
                  <span>${progress}%</span>
                </div>
                <div class="progress-bar-bg" style="height: 6px;">
                  <div class="progress-bar-fill" style="width: ${progress}%;"></div>
                </div>
              </div>
              <a href="#/unidad/${semanaId}/${targetUnit.id}" class="btn ${btnClass}">${btnText} <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <!-- Infografía de la Semana (si existe) -->
        ${semana.infografias && semana.infografias.length > 0 ? `
          <div class="unit-body-card" style="margin-bottom: 25px; padding: 18px 20px; background: #ffffff; border-left: 4px solid var(--accent-cyan); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px;">
            <div style="display: flex; align-items: center; gap: 15px;">
              <img src="${semana.infografias[0]}" alt="Infografía ${semana.titulo}" class="infographic-thumb" style="width: 70px; height: 70px; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid var(--border-color); box-shadow: var(--shadow-sm); transition: transform 0.2s;" title="Clic para ampliar en alta resolución" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
              <div>
                <span style="font-size: 0.72rem; color: var(--ucr-blue); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; display: block;">Infografía Oficial CIOdD-UCR</span>
                <strong style="color: var(--ucr-dark); font-size: 0.98rem; display: block;">Guía Visual Resumida de la Semana ${semana.semanaGlobal}</strong>
                <span style="font-size: 0.8rem; color: var(--text-light);">Haga clic en la miniatura para visualizar a pantalla completa o descargar en alta resolución.</span>
              </div>
            </div>
            <div>
              <button type="button" class="btn btn-secondary" onclick="document.querySelector('.infographic-thumb').click()" style="font-size: 0.82rem; padding: 7px 14px;">
                <i class="fas fa-search-plus"></i> Ver Infografía
              </button>
            </div>
          </div>
        ` : ''}

        <!-- Guía Visual de la Semana (Diagrama Vectorial HTML/SVG) -->
        ${this.renderVectorDiagram(semana)}

        <!-- Steps Checklist -->
        <h3 style="color: var(--ucr-dark); margin-bottom: 20px; font-size: 1.3rem;">Pasos de la Semana</h3>
        <div class="unit-body-card" style="padding: 20px;">
          <ul style="margin: 0; list-style: none;">
     `;

    units.forEach((u, index) => {
      const uState = Estado.datos.progreso.unidades[u.id];
      let icon = '<i class="far fa-circle" style="color: var(--text-light); font-size: 1.2rem;"></i>';
      let rowStyle = 'opacity: 0.85;';
      let titleStyle = 'font-weight: 500;';

      if (uState && uState.estado === 'completada') {
        icon = '<i class="fas fa-check-circle" style="color: var(--accent-green); font-size: 1.2rem;"></i>';
        rowStyle = '';
        titleStyle = 'font-weight: 500; text-decoration: line-through; color: var(--text-light);';
      } else if (uState && uState.estado === 'evidencia-pendiente') {
        icon = '<i class="fas fa-exclamation-circle" style="color: #d97706; font-size: 1.2rem;" title="Evidencia mínima pendiente"></i>';
        rowStyle = 'background-color: #fffdf5; border-radius: 6px;';
        titleStyle = 'font-weight: 700; color: #b45309;';
      } else if (uState && uState.estado === 'vista') {
        icon = '<i class="fas fa-dot-circle" style="color: var(--ucr-celeste); font-size: 1.2rem;"></i>';
        rowStyle = '';
        titleStyle = 'font-weight: 700; color: var(--ucr-blue);';
      } else if (u.id === targetUnit.id && progress < 100) {
        // Highlight active unit to do
        icon = '<i class="far fa-arrow-alt-circle-right" style="color: var(--ucr-blue); font-size: 1.2rem;"></i>';
        rowStyle = '';
        titleStyle = 'font-weight: 700; color: var(--ucr-dark);';
      }

      html += `
        <li style="padding: 12px 15px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; justify-content: space-between; gap: 15px; ${rowStyle}">
          <a href="#/unidad/${semanaId}/${u.id}" style="display: flex; align-items: center; gap: 15px; flex-grow: 1; color: inherit;">
            <div style="min-width: 25px; text-align: center;">${icon}</div>
            <div>
              <span style="font-size: 0.8rem; color: var(--text-light); text-transform: uppercase; font-weight: 700; display: block;">Paso ${index + 1}</span>
              <span style="${titleStyle}">${u.titulo}</span>
            </div>
          </a>
          <span class="badge-tipo ${u.tipo}" style="font-size: 0.7rem; padding: 4px 10px; border-radius: var(--radius-pill); font-weight: 700; text-transform: uppercase; color: white;">
            ${u.tipo === 'chispa' ? '<i class="fas fa-lightbulb"></i> Chispa' : u.tipo === 'video' ? '<i class="fas fa-play"></i> Video' : u.tipo === 'reto' ? '<i class="fas fa-terminal"></i> Prompt CIFRCE' : u.tipo === 'entender' ? '<i class="fas fa-book-open"></i> Conceptos' : u.tipo === 'introduccion' ? '<i class="fas fa-flag-checkered"></i> Logro' : u.tipo === 'interpretacion_critica' ? '<i class="fas fa-info-circle"></i> Intro' : u.tipo.replace('_', ' ')}
          </span>
        </li>
      `;
    });

    html += `
          </ul>
        </div>
      </section>
    `;

    container.innerHTML = html;
    
    // Attach listeners for infographics
    this.attachListeners();
  },

  attachListeners() {
    const thumbs = document.querySelectorAll('.infographic-thumb');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxDownload = document.getElementById('lightbox-download');

    if (!lightbox) return;

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const src = thumb.getAttribute('src');
        if (lightboxImg) lightboxImg.setAttribute('src', src);
        if (lightboxDownload) {
          lightboxDownload.setAttribute('href', src);
          const fileName = src.split('/').pop();
          lightboxDownload.setAttribute('download', fileName);
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      setTimeout(() => {
        if (lightboxImg) lightboxImg.setAttribute('src', '');
      }, 300);
      document.body.style.overflow = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    const escHandler = (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  },

  renderVectorDiagram(semana) {
    const sid = (semana.id || '').toLowerCase();
    const entregableText = this.escapeXml(semana.entregable || 'Evidencia práctica semanal');

    let customDiagramSvg = '';

    if (sid === 's2' || sid === 'f-2') {
      // Diagrama CIFRCE de 5 Capas con Alto Contraste
      customDiagramSvg = `
        <div style="background:#f8fafc; padding:18px; border-radius:8px; margin-bottom:20px; border:1px solid #e2e8f0;">
          <h4 style="margin:0 0 12px 0; color:var(--ucr-blue); font-size:1.05rem; font-family:'Montserrat', sans-serif;">
            <i class="fas fa-layer-group"></i> Modelo CIFRCE: Las 5 Capas del Prompt Empresarial
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; font-family: 'Montserrat', sans-serif;">
            
            <div style="background:#005da4; color:white; padding:12px; border-radius:6px; text-align:center; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
              <div style="font-size:0.75rem; opacity:0.85; text-transform:uppercase; font-weight:600;">Capa 1</div>
              <div style="font-weight:700; font-size:0.95rem; margin:4px 0;">CONTEXTO</div>
              <div style="font-size:0.78rem; color:#e0f2fe; line-height:1.3;">¿Quién sos y qué negocio operás?</div>
            </div>

            <div style="background:#0369a1; color:white; padding:12px; border-radius:6px; text-align:center; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
              <div style="font-size:0.75rem; opacity:0.85; text-transform:uppercase; font-weight:600;">Capa 2</div>
              <div style="font-weight:700; font-size:0.95rem; margin:4px 0;">INSTRUCCIÓN</div>
              <div style="font-size:0.78rem; color:#e0f2fe; line-height:1.3;">¿Qué tarea exacta debe hacer la IA?</div>
            </div>

            <div style="background:#1e293b; color:white; padding:12px; border-radius:6px; text-align:center; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
              <div style="font-size:0.75rem; opacity:0.85; text-transform:uppercase; font-weight:600;">Capa 3</div>
              <div style="font-weight:700; font-size:0.95rem; margin:4px 0;">FORMATO</div>
              <div style="font-size:0.78rem; color:#cbd5e1; line-height:1.3;">¿Tabla, lista, párrafos, pasos?</div>
            </div>

            <div style="background:#15803d; color:white; padding:12px; border-radius:6px; text-align:center; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
              <div style="font-size:0.75rem; opacity:0.85; text-transform:uppercase; font-weight:600;">Capa 4</div>
              <div style="font-weight:700; font-size:0.95rem; margin:4px 0;">RESTRICCIONES</div>
              <div style="font-size:0.78rem; color:#dcfce7; line-height:1.3;">¿Límites de tono, datos o alcance?</div>
            </div>

            <div style="background:#b45309; color:white; padding:12px; border-radius:6px; text-align:center; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
              <div style="font-size:0.75rem; opacity:0.85; text-transform:uppercase; font-weight:600;">Capa 5</div>
              <div style="font-weight:700; font-size:0.95rem; margin:4px 0;">CRITERIOS ÉXITO</div>
              <div style="font-size:0.78rem; color:#fef3c7; line-height:1.3;">¿Cómo evaluarás si la rpta sirve?</div>
            </div>

          </div>
        </div>
      `;
    } else if (sid === 's3' || sid === 'b-1') {
      // Matriz FODA cruzado / TOWS (2x2)
      customDiagramSvg = `
        <div style="background:#f8fafc; padding:18px; border-radius:8px; margin-bottom:20px; border:1px solid #e2e8f0;">
          <h4 style="margin:0 0 12px 0; color:var(--ucr-blue); font-size:1.05rem; font-family:'Montserrat', sans-serif;">
            <i class="fas fa-th-large"></i> Matriz FODA Cruzado / TOWS (Estrategias Combinadas)
          </h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:12px; font-size:0.88rem;">
            <div style="background:#eff6ff; border-left:5px solid #005da4; padding:14px; border-radius:6px; border:1px solid #bfdbfe; border-left-width:5px;">
              <strong style="color:#005da4; font-size:0.95rem; display:block; margin-bottom:4px;">Estrategia FO (Fortalezas + Oportunidades)</strong>
              <p style="margin:0; color:#1e293b; line-height:1.45;">Usar fortalezas internas para aprovechar oportunidades externas del mercado.</p>
            </div>
            <div style="background:#f0fdf4; border-left:5px solid #15803d; padding:14px; border-radius:6px; border:1px solid #bbf7d0; border-left-width:5px;">
              <strong style="color:#15803d; font-size:0.95rem; display:block; margin-bottom:4px;">Estrategia FA (Fortalezas + Amenazas)</strong>
              <p style="margin:0; color:#1e293b; line-height:1.45;">Usar fortalezas internas para defenderse y mitigar amenazas del entorno.</p>
            </div>
            <div style="background:#fffbeb; border-left:5px solid #b45309; padding:14px; border-radius:6px; border:1px solid #fde68a; border-left-width:5px;">
              <strong style="color:#92400e; font-size:0.95rem; display:block; margin-bottom:4px;">Estrategia DO (Debilidades + Oportunidades)</strong>
              <p style="margin:0; color:#1e293b; line-height:1.45;">Superar debilidades internas aprovechando nuevas oportunidades de negocio.</p>
            </div>
            <div style="background:#fef2f2; border-left:5px solid #b91c1c; padding:14px; border-radius:6px; border:1px solid #fecaca; border-left-width:5px;">
              <strong style="color:#b91c1c; font-size:0.95rem; display:block; margin-bottom:4px;">Estrategia DA (Debilidades + Amenazas)</strong>
              <p style="margin:0; color:#1e293b; line-height:1.45;">Minimizar debilidades críticas y esquivar o neutralizar amenazas directas.</p>
            </div>
          </div>
        </div>
      `;
    } else if (sid === 's4' || sid === 'b-2') {
      // Matriz Impacto vs. Esfuerzo
      customDiagramSvg = `
        <div style="background:#f8fafc; padding:18px; border-radius:8px; margin-bottom:20px; border:1px solid #e2e8f0;">
          <h4 style="margin:0 0 12px 0; color:var(--ucr-blue); font-size:1.05rem; font-family:'Montserrat', sans-serif;">
            <i class="fas fa-chart-line"></i> Matriz de Impacto vs. Esfuerzo (Priorización 90 Días)
          </h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px; font-size:0.88rem; text-align:center;">
            <div style="background:#f0fdf4; border:2px solid #15803d; padding:14px; border-radius:8px;">
              <span style="background:#15803d; color:white; font-weight:700; padding:3px 10px; border-radius:4px; font-size:0.8rem; display:inline-block; margin-bottom:8px;">⚡ GANANCIAS RÁPIDAS (Quick Wins)</span>
              <p style="margin:0; color:#0f172a; font-weight:600; font-size:0.9rem;">Alto Impacto / Bajo Esfuerzo</p>
              <span style="font-size:0.8rem; color:#15803d; font-weight:600;">¡Ejecutar de inmediato!</span>
            </div>
            <div style="background:#eff6ff; border:2px solid #005da4; padding:14px; border-radius:8px;">
              <span style="background:#005da4; color:white; font-weight:700; padding:3px 10px; border-radius:4px; font-size:0.8rem; display:inline-block; margin-bottom:8px;">🎯 PROYECTOS CLAVE</span>
              <p style="margin:0; color:#0f172a; font-weight:600; font-size:0.9rem;">Alto Impacto / Alto Esfuerzo</p>
              <span style="font-size:0.8rem; color:#005da4; font-weight:600;">Planificar en fases estratégicas.</span>
            </div>
            <div style="background:#fffbeb; border:2px solid #b45309; padding:14px; border-radius:8px;">
              <span style="background:#b45309; color:white; font-weight:700; padding:3px 10px; border-radius:4px; font-size:0.8rem; display:inline-block; margin-bottom:8px;">⚙️ TAREAS DE RELLENO</span>
              <p style="margin:0; color:#0f172a; font-weight:600; font-size:0.9rem;">Bajo Impacto / Bajo Esfuerzo</p>
              <span style="font-size:0.8rem; color:#92400e; font-weight:600;">Delegar, agrupar o simplificar.</span>
            </div>
            <div style="background:#fef2f2; border:2px solid #b91c1c; padding:14px; border-radius:8px;">
              <span style="background:#b91c1c; color:white; font-weight:700; padding:3px 10px; border-radius:4px; font-size:0.8rem; display:inline-block; margin-bottom:8px;">🚫 SUMIDEROS DE TIEMPO</span>
              <p style="margin:0; color:#0f172a; font-weight:600; font-size:0.9rem;">Bajo Impacto / Alto Esfuerzo</p>
              <span style="font-size:0.8rem; color:#b91c1c; font-weight:600;">Descartar o posponer.</span>
            </div>
          </div>
        </div>
      `;
    } else if (sid === 's12' || sid === 'd-4') {
      // Embudo AIDA
      customDiagramSvg = `
        <div style="background:#f8fafc; padding:18px; border-radius:8px; margin-bottom:20px; border:1px solid #e2e8f0;">
          <h4 style="margin:0 0 12px 0; color:var(--ucr-blue); font-size:1.05rem; font-family:'Montserrat', sans-serif;">
            <i class="fas fa-filter"></i> Embudo de Conversión AIDA (4 Etapas Comerciales)
          </h4>
          <div style="display:flex; flex-direction:column; gap:8px; max-width:620px; margin:0 auto; font-family:'Montserrat', sans-serif;">
            <div style="background:#005da4; color:white; padding:12px; text-align:center; border-radius:6px; font-weight:700; width:100%; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
              1. ATENCIÓN <span style="font-weight:400; font-size:0.85rem; display:block; opacity:0.9;">Hook / Titular de alto impacto</span>
            </div>
            <div style="background:#0369a1; color:white; padding:12px; text-align:center; border-radius:6px; font-weight:700; width:88%; margin:0 auto; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
              2. INTERÉS <span style="font-weight:400; font-size:0.85rem; display:block; opacity:0.9;">Problema relevante y presentación de solución</span>
            </div>
            <div style="background:#b45309; color:white; padding:12px; text-align:center; border-radius:6px; font-weight:700; width:76%; margin:0 auto; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
              3. DESEO <span style="font-weight:400; font-size:0.85rem; display:block; opacity:0.9;">Beneficios concretos, oferta y prueba social</span>
            </div>
            <div style="background:#15803d; color:white; padding:12px; text-align:center; border-radius:6px; font-weight:700; width:64%; margin:0 auto; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
              4. ACCIÓN <span style="font-weight:400; font-size:0.85rem; display:block; opacity:0.9;">Llamado a la acción (CTA) directo y claro</span>
            </div>
          </div>
        </div>
      `;
    } else if (sid === 's11' || sid === 'e-1') {
      // Punto de Equilibrio
      customDiagramSvg = `
        <div style="background:#f8fafc; padding:18px; border-radius:8px; margin-bottom:20px; border:1px solid #e2e8f0;">
          <h4 style="margin:0 0 12px 0; color:var(--ucr-blue); font-size:1.05rem; font-family:'Montserrat', sans-serif;">
            <i class="fas fa-balance-scale"></i> Gráfico de Punto de Equilibrio (Costos vs. Ingresos)
          </h4>
          <svg viewBox="0 0 600 170" style="width:100%; height:auto; font-family:'Montserrat', sans-serif;">
            <!-- Axes -->
            <line x1="50" y1="140" x2="550" y2="140" stroke="#475569" stroke-width="2" />
            <line x1="50" y1="20" x2="50" y2="140" stroke="#475569" stroke-width="2" />
            <text x="50" y="15" fill="#475569" font-size="10" font-weight="700">Monto (₡ / $)</text>
            <text x="550" y="155" fill="#475569" font-size="10" font-weight="700" text-anchor="end">Unidades vendidas</text>

            <!-- Fixed Costs -->
            <line x1="50" y1="95" x2="530" y2="95" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="5,4" />
            <text x="535" y="99" fill="#b91c1c" font-size="11" font-weight="700">Costos Fijos</text>

            <!-- Total Costs -->
            <line x1="50" y1="95" x2="490" y2="35" stroke="#c2410c" stroke-width="3" />
            <text x="495" y="38" fill="#c2410c" font-size="11" font-weight="700">Costo Total</text>

            <!-- Revenue -->
            <line x1="50" y1="140" x2="490" y2="25" stroke="#15803d" stroke-width="3" />
            <text x="495" y="22" fill="#15803d" font-size="11" font-weight="700">Ingresos Totales</text>

            <!-- Intersection Point -->
            <circle cx="305" cy="60" r="8" fill="#005da4" stroke="#ffffff" stroke-width="2.5" />
            <rect x="205" y="38" width="200" height="20" rx="4" fill="#005da4" />
            <text x="305" y="52" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">★ PUNTO DE EQUILIBRIO</text>
          </svg>
        </div>
      `;
    }

    return `
      <div class="unit-body-card vector-diagram-card" style="margin-bottom: 30px; padding: 25px; background: linear-gradient(135deg, #ffffff 0%, #f4f8fb 100%); border-top: 4px solid var(--ucr-blue); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
          <h3 style="color: var(--ucr-dark); font-size: 1.25rem; margin: 0; border: none; padding: 0; display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-project-diagram" style="color: var(--ucr-blue);"></i> Guía Visual e Interactiva de la Semana ${semana.semanaGlobal}
          </h3>
          <span style="font-size: 0.75rem; background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: var(--radius-pill); font-weight: 700;">
            MODELO 70% PRÁCTICA / 30% TEORÍA
          </span>
        </div>
        
        <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 20px; line-height: 1.5;">
          Esquema dinámico del proceso formativo: desde el insumo de su empresa hasta la producción del entregable mediante Inteligencia Artificial.
        </p>

        ${customDiagramSvg}

        <!-- Diagrama SVG Responsivo General -->
        <div class="svg-diagram-wrapper" style="overflow-x: auto; padding: 10px 0;">
          <svg viewBox="0 0 800 200" width="100%" height="auto" style="min-width: 650px; max-height: 220px; font-family: 'Montserrat', sans-serif;">
            <defs>
              <filter id="vshadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.08" />
              </filter>
              <marker id="varrow1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#005da4" />
              </marker>
              <marker id="varrow2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#15803d" />
              </marker>
            </defs>

            <!-- Conectores Vectoriales -->
            <path d="M 230 100 L 285 100" stroke="#005da4" stroke-width="3" stroke-dasharray="6,4" marker-end="url(#varrow1)" />
            <path d="M 515 100 L 565 100" stroke="#15803d" stroke-width="3" stroke-dasharray="6,4" marker-end="url(#varrow2)" />

            <!-- Nodo 1: Insumo / Negocio -->
            <g filter="url(#vshadow)">
              <rect x="20" y="30" width="210" height="140" rx="10" fill="#ffffff" stroke="#005da4" stroke-width="2" />
              <rect x="20" y="30" width="210" height="36" rx="8" fill="#005da4" />
              <text x="125" y="53" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">1. INSUMO DEL NEGOCIO</text>
              <text x="125" y="90" fill="#005da4" font-size="11" font-weight="700" text-anchor="middle">Práctica 70%</text>
              <text x="125" y="112" fill="#334155" font-size="10" text-anchor="middle">Datos y contexto real de</text>
              <text x="125" y="128" fill="#334155" font-size="10" text-anchor="middle">su MiPYME o emprendimiento</text>
              <text x="125" y="152" fill="#005da4" font-size="9" font-weight="700" text-anchor="middle">⚡ Entrada sin sesgo</text>
            </g>

            <!-- Nodo 2: Proceso con IA CIFRCE -->
            <g filter="url(#vshadow)">
              <rect x="290" y="30" width="225" height="140" rx="10" fill="#ffffff" stroke="#1e293b" stroke-width="2" />
              <rect x="290" y="30" width="225" height="36" rx="8" fill="#1e293b" />
              <text x="402" y="53" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">2. PROCESAMIENTO IA</text>
              <text x="402" y="90" fill="#005da4" font-size="11" font-weight="700" text-anchor="middle">Modelo CIFRCE</text>
              <text x="402" y="112" fill="#334155" font-size="10" text-anchor="middle">Contexto + Instrucción + Formato</text>
              <text x="402" y="128" fill="#334155" font-size="10" text-anchor="middle">Restricciones + Criterios Éxito</text>
              <text x="402" y="152" fill="#0f172a" font-size="9" font-weight="700" text-anchor="middle">🤖 ChatGPT / IA Generativa</text>
            </g>

            <!-- Nodo 3: Entregable Tangible -->
            <g filter="url(#vshadow)">
              <rect x="570" y="30" width="210" height="140" rx="10" fill="#ffffff" stroke="#15803d" stroke-width="2" />
              <rect x="570" y="30" width="210" height="36" rx="8" fill="#15803d" />
              <text x="675" y="53" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">3. ENTREGABLE FINAL</text>
              <text x="675" y="88" fill="#15803d" font-size="10" font-weight="700" text-anchor="middle">${entregableText.length > 30 ? entregableText.substring(0,28) + '...' : entregableText}</text>
              <text x="675" y="112" fill="#334155" font-size="10" text-anchor="middle">Guardado de forma privada</text>
              <text x="675" y="128" fill="#334155" font-size="10" text-anchor="middle">en su portafolio local</text>
              <text x="675" y="152" fill="#15803d" font-size="9" font-weight="700" text-anchor="middle">📁 Evidencia verificable</text>
            </g>
          </svg>
        </div>
      </div>
    `;
  },

  escapeXml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
};
