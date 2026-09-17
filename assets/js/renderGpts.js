// --- RENDERGPTS.JS ---

const RenderGpts = {
  render(container) {
    const asistentesExperimentales = [
      { nombre: "Asesor en IA para PYMES", icono: "fa-robot", url: "https://chatgpt.com/g/g-6a320af5d0c481919d8f3ea682a4ea6b-asesor-en-ia-para-pymes" },
      { nombre: "Tu asesor empresarial crítico", icono: "fa-search", url: "https://chatgpt.com/g/g-6a320a847428819185fe2b2787c50ded-tu-asesor-empresarial-critico" },
      { nombre: "Asistente para tu Marketing Digital", icono: "fa-bullhorn", url: "https://chatgpt.com/g/g-6a31f85ca4388191b71f421b7ade0f7b-asistente-para-tu-marketing-digital" },
      { nombre: "Ayudante para Costeo de productos para PYMES", icono: "fa-calculator", url: "https://chatgpt.com/g/g-6a31f7e1774c8191bbfe509c66859c1f-ayudante-para-costeo-de-productos-para-pymes" },
      { nombre: "Retorno de la Inversión por el uso de IA-PYMES", icono: "fa-chart-line", url: "https://chatgpt.com/g/g-6a31f723c5988191b8f00d377d4a43e4-retorno-de-la-inversion-por-el-uso-de-ia-pymes" },
      { nombre: "Espíritu emprendedor Costa Rica", icono: "fa-lightbulb", url: "https://chatgpt.com/g/g-6a31f64d8144819188c4c7ee08a3f68b-espiritu-emprendedor-costa-rica" },
      { nombre: "Caja de herramientas para Pymes", icono: "fa-toolbox", url: "https://chatgpt.com/g/g-6a320cd036488191a6f383ccf1fabaa9-caja-de-herramientas-for-pymes-cr" }
    ];
    const fase1Genericos = [
      { semanaId: "s1", nombre: "Protocolo de Seguridad y LLMs", modulo: "Módulo 1 (Semana 1)", estado: "En desarrollo / Validación", url: "https://chatgpt.com", promptAlt: "Prompt CIFRCE de Semana 1 integrado en plataforma", descripcion: "Guía para configurar cuentas de forma segura bajo la Ley 8968 de Costa Rica y redactar el protocolo de uso de IA del negocio." },
      { semanaId: "s2", nombre: "Entrenador de Prompts CIFRCE", modulo: "Módulo 1 (Semana 2)", estado: "En desarrollo / Validación", url: "https://chatgpt.com", promptAlt: "Prompt CIFRCE de Semana 2 integrado en plataforma", descripcion: "Enseña a estructurar instrucciones profesionales bajo el modelo CIFRCE con ejemplos adaptados a MiPYMES." },
      { semanaId: "s3", nombre: "Tu asesor empresarial crítico", modulo: "Módulo 1 (Semana 3)", estado: "Prototipo enlazado", url: asistentesExperimentales[1].url, promptAlt: "Plantilla FODA/TOWS descargable en HTML/MD", descripcion: "Apoyo complementario para cuestionar supuestos del diagnóstico; el FODA y perfil de cliente se trabajan con la plantilla del curso." },
      { semanaId: "s4", nombre: "Tu asesor empresarial crítico", modulo: "Módulo 1 (Semana 4)", estado: "Prototipo enlazado", url: asistentesExperimentales[1].url, promptAlt: "Plantilla IVU descargable en HTML/MD", descripcion: "Apoyo complementario para revisar decisiones del plan; use la plantilla del curso para estructurar los 90 días." },
      { semanaId: "s5", nombre: "Mapeo y Automatización No-Code", modulo: "Módulo 2 (Semana 5)", estado: "En desarrollo / Validación", url: "https://chatgpt.com", promptAlt: "Guía de flujos Make/n8n integrada", descripcion: "Ayuda a diseñar diagramas de procesos y configurar escenarios lógicos en Make o n8n sin programar." },
      { semanaId: "s6", nombre: "Asistente de Atención y Chatbots", modulo: "Módulo 2 (Semana 6)", estado: "En desarrollo / Validación", url: "https://chatgpt.com", promptAlt: "Catálogo de respuestas rápidas en Markdown", descripcion: "Diseñe respuestas y derivación humana con el prompt y la plantilla de esta semana." },
      { semanaId: "s7", nombre: "Estructurador de CRM y Datos", modulo: "Módulo 2 (Semana 7)", estado: "En desarrollo / Validación", url: "https://chatgpt.com", promptAlt: "Plantilla CRM Google Sheets descargable", descripcion: "Diseña bases de datos y CRM seguro en Google Sheets resguardando la privacidad y consentimiento de clientes." },
      { semanaId: "s8", nombre: "Retorno de la Inversión por el uso de IA-PYMES", modulo: "Módulo 2 (Semana 8)", estado: "Prototipo enlazado", url: asistentesExperimentales[4].url, promptAlt: "Calculadora de horas de ahorro en Markdown", descripcion: "Apoya el análisis del retorno por uso de IA; compruebe supuestos y cálculos con la plantilla semanal." },
      { semanaId: "s9", nombre: "Asistente para tu Marketing Digital", modulo: "Módulo 3 (Semana 9)", estado: "Prototipo enlazado", url: asistentesExperimentales[2].url, promptAlt: "Kit de marca y plantillas Canva libres", descripcion: "Apoyo para la comunicación comercial; la identidad visual se desarrolla con la guía y plantilla de la semana." },
      { semanaId: "s10", nombre: "Guionista Audiovisual y Narrativa", modulo: "Módulo 3 (Semana 10)", estado: "En desarrollo / Validación", url: "https://chatgpt.com", promptAlt: "Estructura de guion AIDA para video en CapCut", descripcion: "Estructura guiones para videos comerciales cortos de 30-60 segundos bajo el modelo AIDA con ética." },
      { semanaId: "s11", nombre: "Ayudante para Costeo de productos para PYMES", modulo: "Módulo 3 (Semana 11)", estado: "Prototipo enlazado", url: asistentesExperimentales[3].url, promptAlt: "Plantilla de prefactibilidad y punto de equilibrio", descripcion: "Apoya el costeo de productos; la prefactibilidad completa requiere la plantilla y revisión humana." },
      { semanaId: "s12", nombre: "Estratega de Campaña AIDA", modulo: "Módulo 3 (Semana 12)", estado: "En desarrollo / Validación", url: "https://chatgpt.com", promptAlt: "Plantilla Campaña AIDA descargable en HTML/MD", descripcion: "Formula una campaña comercial de 4 semanas estructurada bajo el embudo Atención, Interés, Deseo y Acción." }
    ];

    const fase2Sectoriales = [
      { sector: "Servicios profesionales", sondeo: "50%", gpts: ["FODA Servicios", "Validador Servicios", "Precios para Servicios"] },
      { sector: "Comercio minorista", sondeo: "37%", gpts: ["FODA Comercio", "Validador Comercio", "Gestión de Inventario"] },
      { sector: "Industria y manufactura", sondeo: "13%", gpts: ["FODA Industria", "Costos de Producción", "Escalamiento Industrial"] },
      { sector: "Agroalimentario", sondeo: "(en industria)", gpts: ["Validador Agroalimentario", "FODA Agro", "Prefactibilidad Agro"] },
      { sector: "Turismo y hospitalidad", sondeo: "(en servicios)", gpts: ["FODA Turismo", "Estrategia Turismo", "Atención Turismo"] }
    ];

    let html = `
      <section class="gpts-view">
        <!-- Header Panel -->
        <div class="unit-body-card" style="background: linear-gradient(135deg, var(--ucr-blue) 0%, var(--ucr-dark) 100%); color: white; padding: 30px; border-radius: var(--radius-lg); margin-bottom: 30px; box-shadow: var(--shadow-lg);">
          <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--ucr-celeste); display: block; margin-bottom: 5px;">Catálogo Estratégico de Asistentes IA</span>
          <h2 style="color: white; border: none; padding: 0; margin-top: 0; font-size: 1.8rem;">Lógica de GPTs y Asistentes Temáticos</h2>
          <p style="color: rgba(255,255,255,0.9); font-size: 1rem; line-height: 1.6; margin-top: 10px; max-width: 800px;">
            Los asistentes temáticos apoyan las 12 semanas. Los enlaces a GPTs son prototipos que requieren verificación de disponibilidad; cada semana ofrece una actividad con prompt CIFRCE en el Paso 3. Las plantillas disponibles se encuentran en la Biblioteca.
          </p>
        </div>

        <h3 style="color: var(--ucr-dark); margin-bottom: 10px; font-size: 1.3rem; border: none;"><i class="fas fa-flask" style="color: var(--ucr-blue);"></i> Asistentes Virtuales Experimentales</h3>
        <p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 18px;">Estos siete GPTs son recursos opcionales. Verifique el acceso en ChatGPT; las actividades del curso pueden hacerse con las plantillas y prompts semanales.</p>
        <div class="infog-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 35px;">
          ${asistentesExperimentales.map(a => `
            <a href="${a.url}" target="_blank" rel="noopener noreferrer" class="unit-body-card" style="display: flex; align-items: center; gap: 14px; padding: 18px; text-decoration: none; color: var(--ucr-dark); border-top: 3px solid var(--ucr-blue);">
              <i class="fas ${a.icono}" aria-hidden="true" style="color: var(--ucr-blue); font-size: 1.35rem; width: 25px;"></i>
              <span style="font-weight: 700; line-height: 1.35;">${a.nombre} <i class="fas fa-external-link-alt" aria-hidden="true" style="font-size: 0.7rem;"></i></span>
            </a>
          `).join('')}
        </div>

        <!-- Diagrama SVG Comparativo de Fases -->
        ${this.renderGptsDiagram()}

        <!-- Fase 1: GPTs Genéricos por Tema -->
        <h3 style="color: var(--ucr-dark); margin-bottom: 15px; font-size: 1.3rem; border: none; padding: 0; display: flex; align-items: center; gap: 10px;">
          <i class="fas fa-layer-group" style="color: var(--ucr-blue);"></i> Asistentes Temáticos por Semana (12 Semanas Oficiales)
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 20px;">
          <strong>Estado del catálogo:</strong> «Prototipo enlazado» indica que existe un enlace al asistente, sin afirmar aprobación institucional ni acceso gratuito comprobado. «En desarrollo» indica que se ofrece el prompt del Paso 3 como alternativa. Consulte la <a href="politicas/gobernanza-recursos.html" target="_blank" rel="noopener noreferrer" style="color: var(--ucr-blue); font-weight: 600; text-decoration: underline;">guía de curaduría de recursos ↗</a>.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;">
    `;

    fase1Genericos.forEach(g => {
      const hasDedicatedGpt = g.url.includes('/g/');
      const statusBadge = hasDedicatedGpt
        ? `<span class="badge" style="background-color: #15803d; color: white; padding: 3px 8px; border-radius: var(--radius-sm); font-size: 0.72rem; font-weight: 700;"><i class="fas fa-link"></i> ${g.estado}</span>`
        : `<span class="badge" style="background-color: #b45309; color: white; padding: 3px 8px; border-radius: var(--radius-sm); font-size: 0.72rem; font-weight: 700;"><i class="fas fa-tools"></i> ${g.estado}</span>`;

      html += `
        <div class="unit-body-card" style="padding: 20px; border-top: 4px solid ${hasDedicatedGpt ? 'var(--ucr-blue)' : '#f59e0b'}; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
              <span class="badge" style="background-color: var(--ucr-blue); color: white; padding: 4px 8px; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 700;">${g.modulo}</span>
              ${statusBadge}
            </div>
            <h4 style="color: var(--ucr-dark); margin: 0 0 10px 0; font-size: 1.05rem; border: none; padding: 0;">${g.nombre}</h4>
            <p style="font-size: 0.88rem; color: #444; line-height: 1.5; margin: 0 0 10px 0;">${g.descripcion}</p>
            <div style="background-color: #f8fafc; padding: 8px 10px; border-radius: 4px; font-size: 0.8rem; color: #475569; border-left: 3px solid var(--ucr-celeste); margin-bottom: 10px;">
              <strong>Vía Gratuita:</strong> ${g.promptAlt}
            </div>
          </div>
          <div style="margin-top: 15px; padding-top: 12px; border-top: 1px solid #f0f0f0; display: flex; flex-direction: column; gap: 8px;">
            ${hasDedicatedGpt ? `
              <a href="${g.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.85rem; padding: 8px 12px; text-align: center; font-weight: 600;">
                <i class="fas fa-external-link-alt"></i> Abrir Asistente GPT ↗
              </a>
              <a href="#/unidad/${g.semanaId}/${g.semanaId}-u03" class="btn btn-secondary" style="font-size: 0.8rem; padding: 6px 10px; text-align: center;">
                <i class="fas fa-terminal"></i> Ver Prompt CIFRCE Alternativo
              </a>
            ` : `
              <a href="#/unidad/${g.semanaId}/${g.semanaId}-u03" class="btn btn-primary" style="background: var(--ucr-blue); font-size: 0.85rem; padding: 8px 12px; text-align: center; font-weight: 600;">
                <i class="fas fa-terminal"></i> Ver Prompt CIFRCE en Paso 3
              </a>
              <a href="${g.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.8rem; padding: 6px 10px; text-align: center;">
                <i class="fas fa-external-link-alt"></i> Abrir ChatGPT Genérico ↗
              </a>
            `}
            <div style="font-size: 0.75rem; color: var(--text-light); display: flex; justify-content: space-between; margin-top: 4px;">
              <span><i class="fas fa-info-circle" style="color: var(--ucr-blue);"></i> Verifique condiciones de acceso</span>
              <span style="color: var(--ucr-blue); font-weight: 600;">Ruta formativa CIOdD-UCR</span>
            </div>
          </div>
        </div>
      `;
    });

    html += `
        </div>

        <!-- Fase 2: GPTs Sectoriales Prioritarios -->
        <h3 style="color: var(--ucr-dark); margin-bottom: 15px; font-size: 1.3rem; border: none; padding: 0; display: flex; align-items: center; gap: 10px;">
          <i class="fas fa-industry" style="color: var(--ucr-blue);"></i> Fase 2: GPTs Sectoriales (Basado en el Sondeo CIOdD-UCR a 60 MiPYMES)
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;">
    `;

    fase2Sectoriales.forEach(s => {
      html += `
        <div class="unit-body-card" style="padding: 20px; border-top: 4px solid var(--accent-yellow);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span class="badge" style="background-color: var(--ucr-dark); color: white; padding: 4px 8px; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 700;">Sector</span>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--ucr-blue);"><i class="fas fa-chart-pie"></i> ${s.sondeo} del sondeo</span>
          </div>
          <h4 style="color: var(--ucr-dark); margin: 0 0 10px 0; font-size: 1.1rem; border: none; padding: 0;">${s.sector}</h4>
          <strong style="font-size: 0.85rem; color: var(--text-light); display: block; margin-bottom: 8px;">GPTs sectoriales prioritarios:</strong>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.88rem; color: #444; line-height: 1.6;">
            ${s.gpts.map(g => `<li><strong>${g}</strong></li>`).join('')}
          </ul>
        </div>
      `;
    });

    html += `
        </div>
      </section>
    `;

    container.innerHTML = html;
  },

  renderGptsDiagram() {
    return `
      <div class="unit-body-card" style="margin-bottom: 30px; padding: 25px; background: white; border-top: 4px solid var(--ucr-celeste);">
        <h4 style="color: var(--ucr-dark); font-size: 1.1rem; margin: 0 0 15px 0; border: none; padding: 0; display: flex; align-items: center; gap: 8px;">
          <i class="fas fa-project-diagram" style="color: var(--ucr-blue);"></i> Mapa de Despliegue de los GPTs (Fase 1 vs. Fase 2)
        </h4>
        <svg viewBox="0 0 800 200" style="width: 100%; height: auto; font-family: 'Montserrat', sans-serif;">
          <defs>
            <linearGradient id="gradFase1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#005da4" />
              <stop offset="100%" stop-color="#2c3e50" />
            </linearGradient>
            <linearGradient id="gradFase2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4daedb" />
              <stop offset="100%" stop-color="#005da4" />
            </linearGradient>
          </defs>

          <!-- Fase 1 Box -->
          <rect x="20" y="30" width="350" height="140" rx="8" fill="url(#gradFase1)" />
          <text x="35" y="60" fill="#ffffff" font-weight="700" font-size="16">FASE 1: 7 GPTs Experimentales</text>
          <text x="35" y="85" fill="#4daedb" font-weight="600" font-size="12">Para todo el grupo de participantes</text>
          <text x="35" y="115" fill="#ffffff" font-size="12">• Asesoría IA, negocio y emprendimiento</text>
          <text x="35" y="135" fill="#ffffff" font-size="12">• Marketing, costeo, ROI y caja de herramientas</text>

          <!-- Arrow -->
          <path d="M 390 100 L 410 100" stroke="#f39c12" stroke-width="4" marker-end="url(#arrow)" />
          <polygon points="410,95 425,100 410,105" fill="#f39c12" />

          <!-- Fase 2 Box -->
          <rect x="430" y="30" width="350" height="140" rx="8" fill="url(#gradFase2)" />
          <text x="445" y="60" fill="#ffffff" font-weight="700" font-size="16">FASE 2: 5 Sectores Prioritarios</text>
          <text x="445" y="85" fill="#fffdf5" font-weight="600" font-size="12">Basado en Sondeo CIOdD-UCR</text>
          <text x="445" y="115" fill="#ffffff" font-size="12">• Servicios (50%), Comercio (37%), Industria (13%)</text>
          <text x="445" y="135" fill="#ffffff" font-size="12">• Agroalimentario y Turismo con GPTs especializados</text>
        </svg>
      </div>
    `;
  }
};
