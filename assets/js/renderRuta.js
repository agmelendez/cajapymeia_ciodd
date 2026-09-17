// --- RENDERRUTA.JS ---
const RenderRuta = {
  render(container) {
    let html = `
      <section class="ruta-view">
        <a href="#/inicio" class="btn btn-secondary" style="margin-bottom: 20px;"><i class="fas fa-arrow-left"></i> Volver al Inicio</a>
        
        <section class="learning-path" style="padding: 3rem 1.5rem; background-color: #f4f6f9; border-radius: var(--radius-lg);">
          <div class="section-header" style="text-align: center; margin-bottom: 2.5rem;">
              <h3 style="color: var(--ucr-dark); font-size: 1.8rem; font-family: 'Montserrat', sans-serif; border: none; padding: 0; margin-bottom: 10px;">🗺️ Ruta de Aprendizaje Canónica (12 Semanas)</h3>
              <p style="color: var(--text-light); max-width: 800px; margin: 0 auto; line-height: 1.6;">
                  La ruta formativa se organiza en <strong>3 módulos de 4 semanas cada uno</strong> (12 semanas en total, <strong>25 horas de formación previstas</strong>) bajo el modelo pedagógico <strong>70% práctico y 30% teórico</strong>. La constancia requiere revisión institucional.
              </p>
          </div>

          <!-- Diagrama Vectorial SVG de Línea de Tiempo del Programa (12 Semanas / 25 Horas) -->
          <div class="unit-body-card" style="padding: 25px; margin-bottom: 30px; background: white; border-top: 4px solid var(--ucr-blue);">
            <h4 style="color: var(--ucr-dark); font-size: 1.1rem; margin: 0 0 15px 0; border: none; padding: 0; display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-stream" style="color: var(--ucr-blue);"></i> Línea de tiempo curricular (12 semanas / 25 horas de formación previstas)
            </h4>
            <div style="overflow-x: auto;">
              <svg viewBox="0 0 900 140" style="width: 100%; min-width: 750px; height: auto; font-family: 'Montserrat', sans-serif;">
                <defs>
                  <linearGradient id="tgrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#005da4" />
                    <stop offset="33%" stop-color="#0284c7" />
                    <stop offset="66%" stop-color="#16a34a" />
                    <stop offset="100%" stop-color="#ea580c" />
                  </linearGradient>
                </defs>

                <!-- Base Bar -->
                <rect x="40" y="55" width="820" height="12" rx="6" fill="url(#tgrad)" />

                <!-- M0 Inducción -->
                <circle cx="80" cy="61" r="16" fill="#005da4" stroke="#ffffff" stroke-width="3" />
                <text x="80" y="65" fill="#ffffff" font-size="9" font-weight="700" text-anchor="middle">M0</text>
                <text x="80" y="32" fill="#005da4" font-size="11" font-weight="700" text-anchor="middle">Diagnóstico</text>
                <text x="80" y="98" fill="#666" font-size="9" text-anchor="middle">Inducción</text>
                <text x="80" y="112" fill="#005da4" font-size="9" font-weight="600" text-anchor="middle">1h acum.</text>

                <!-- M1 Diagnóstico con IA -->
                <circle cx="320" cy="61" r="18" fill="#0284c7" stroke="#ffffff" stroke-width="3" />
                <text x="320" y="65" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">M1</text>
                <text x="320" y="32" fill="#0284c7" font-size="11" font-weight="700" text-anchor="middle">Módulo 1: Diagnóstico con IA</text>
                <text x="320" y="98" fill="#666" font-size="9" text-anchor="middle">Semanas 1 a 4</text>
                <text x="320" y="112" fill="#0284c7" font-size="9" font-weight="600" text-anchor="middle">9h acum.</text>

                <!-- M2 Automatización de Procesos -->
                <circle cx="580" cy="61" r="18" fill="#16a34a" stroke="#ffffff" stroke-width="3" />
                <text x="580" y="65" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">M2</text>
                <text x="580" y="32" fill="#16a34a" font-size="11" font-weight="700" text-anchor="middle">Módulo 2: Automatización</text>
                <text x="580" y="98" fill="#666" font-size="9" text-anchor="middle">Semanas 5 a 8</text>
                <text x="580" y="112" fill="#16a34a" font-size="9" font-weight="600" text-anchor="middle">17h acum.</text>

                <!-- M3 Comercialización -->
                <circle cx="820" cy="61" r="18" fill="#ea580c" stroke="#ffffff" stroke-width="3" />
                <text x="820" y="65" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">M3</text>
                <text x="820" y="32" fill="#ea580c" font-size="11" font-weight="700" text-anchor="middle">Módulo 3: Comercialización</text>
                <text x="820" y="98" fill="#666" font-size="9" text-anchor="middle">Semanas 9 a 12</text>
                <text x="820" y="112" fill="#ea580c" font-size="9" font-weight="600" text-anchor="middle">25h TOTAL</text>
              </svg>
            </div>
          </div>

          <!-- Módulos y Semanas de la Ruta Canónica -->
          <div class="infog-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
    `;

    App.modulos.forEach(m => {
      const weeks = App.semanas.filter(s => s.moduloId === m.id);
      if (weeks.length === 0) return;
      
      html += `
        <div class="unit-body-card" style="margin: 0; border-top: 4px solid var(--ucr-blue);">
          <h4 style="color: var(--ucr-blue); margin-bottom: 5px;">${m.codigo}: ${m.nombre}</h4>
          <p style="font-size: 0.85rem; color: #666; font-style: italic; margin-bottom: 15px;">"${m.frase}"</p>
          <div style="display: flex; flex-direction: column; gap: 10px;">
      `;

      weeks.forEach(w => {
        const weekProgress = App.getWeekProgress(w.id);
        const isDone = weekProgress === 100;
        html += `
          <a href="#/semana/${w.id}" style="text-decoration: none; color: inherit;">
            <div style="background-color: ${isDone ? '#e8f5e9' : '#f8fafc'}; border-left: 3px solid ${isDone ? 'var(--accent-green)' : 'var(--ucr-blue)'}; padding: 10px 12px; border-radius: 4px;">
              <div style="font-weight: 700; font-size: 0.88rem; color: var(--ucr-dark);">Semana ${w.semanaGlobal} · ${w.codigoAnterior}: ${w.titulo}</div>
              <div style="font-size: 0.8rem; color: #666; margin-top: 3px;">🎯 Entregable: ${w.entregable}</div>
            </div>
          </a>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `
          </div>

          <!-- Ciclo RHEC -->
          <div style="background: white; padding: 25px; border-radius: var(--radius-md); margin-top: 30px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
            <div style="text-align: center; margin-bottom: 20px;">
              <h4 style="color: var(--ucr-blue); font-size: 1.2rem; font-family: 'Montserrat', sans-serif; margin: 0;">
                <i class="fas fa-sync-alt"></i> Metodología Pedagógica RHEC (Regla 70/30)
              </h4>
              <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 5px;">
                Cada una de las 12 semanas estructura sus 120 minutos en cuatro fases activas:
              </p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
              <div style="background: #eff6ff; border-left: 4px solid #0284c7; padding: 14px; border-radius: 6px;">
                <strong style="color: #0284c7; display: block; margin-bottom: 4px;">1. RETO (5%) ~6 min</strong>
                <p style="margin: 0; font-size: 0.85rem; color: #334155;">Desafío práctico y definición del entregable concreto para el negocio.</p>
              </div>
              <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 14px; border-radius: 6px;">
                <strong style="color: #16a34a; display: block; margin-bottom: 4px;">2. HACER (65%) ~78 min</strong>
                <p style="margin: 0; font-size: 0.85rem; color: #334155;">Práctica guiada paso a paso con herramientas de IA y datos ficticios/reales.</p>
              </div>
              <div style="background: #fffbeb; border-left: 4px solid #d97706; padding: 14px; border-radius: 6px;">
                <strong style="color: #d97706; display: block; margin-bottom: 4px;">3. ENTENDER (25%) ~30 min</strong>
                <p style="margin: 0; font-size: 0.85rem; color: #334155;">Fundamentos conceptuales, criterio crítico humano y límites ético-legales.</p>
              </div>
              <div style="background: #faf5ff; border-left: 4px solid #9333ea; padding: 14px; border-radius: 6px;">
                <strong style="color: #9333ea; display: block; margin-bottom: 4px;">4. COMPARTIR (5%) ~6 min</strong>
                <p style="margin: 0; font-size: 0.85rem; color: #334155;">Reflexión, validación entre pares y archivo de la evidencia en el portafolio local.</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    `;
    container.innerHTML = html;
  }
};
