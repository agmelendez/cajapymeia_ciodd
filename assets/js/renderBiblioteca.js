// --- RENDERBIBLIOTECA.JS ---

const RenderBiblioteca = {
  render(container) {
    const recursos = App.recursos || [];
    
    let html = `
      <section class="biblioteca-view">
        <!-- Back Button -->
        <a href="#/inicio" class="btn btn-secondary" style="margin-bottom: 20px;"><i class="fas fa-arrow-left"></i> Regresar al Inicio</a>

        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 15px; margin-bottom: 20px;">
          <div>
            <h2 style="border: none; padding: 0; margin-bottom: 8px;">📚 Biblioteca de Recursos del Programa</h2>
            <p style="color: var(--text-light); font-size: 0.95rem; margin: 0;">
              Catálogo completo de videos tutoriales, plantillas descargables, guías interactivas y herramientas de apoyo organizadas por módulo.
            </p>
          </div>
        </div>

        <!-- Featured Video Banner: Video Oficial de YouTube del Curso -->
        <div class="unit-body-card" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: white; padding: 25px; border-radius: var(--radius-md); border-left: 6px solid #e11d48; margin-bottom: 30px; box-shadow: var(--shadow-md);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
            <div style="max-width: 680px;">
              <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(225, 29, 72, 0.2); border: 1px solid rgba(225, 29, 72, 0.4); padding: 4px 10px; border-radius: var(--radius-pill); font-size: 0.75rem; font-weight: 700; color: #fca5a5; margin-bottom: 10px; text-transform: uppercase;">
                <i class="fab fa-youtube" style="color: #ef4444;"></i> Video Oficial del Curso
              </div>
              <h3 style="color: white; margin: 0 0 8px 0; font-size: 1.25rem; font-family: 'Montserrat', sans-serif;">Caja de Herramientas de Inteligencia Artificial para la MiPYME</h3>
              <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0; line-height: 1.5;">
                Acceda a la sesión audiovisual introductoria oficial desarrollada por la Universidad de Costa Rica (CIOdD / DIPROVID) y el Programa Auge.
              </p>
            </div>
            <div>
              <a href="https://youtu.be/K8hUCRl7Qww?si=nqYbCfm9MdNchZ70" target="_blank" rel="noopener noreferrer" class="btn" style="background-color: #ef4444; color: white !important; font-weight: 700; padding: 10px 18px; border-radius: var(--radius-sm); display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);">
                <i class="fab fa-youtube"></i> Ver en YouTube <i class="fas fa-external-link-alt" style="font-size: 0.75rem;"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Filters Block -->
        <div class="unit-body-card" style="padding: 20px; margin-bottom: 25px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px; align-items: flex-end;">
            <!-- Search -->
            <div>
              <label for="lib-search" style="font-size: 0.85rem; font-weight: 700; color: var(--text-light); display: block; margin-bottom: 5px;">
                <i class="fas fa-search"></i> Buscar por palabra clave:
              </label>
              <input type="text" id="lib-search" class="inline-input" style="padding: 8px 12px; width: 100%;" placeholder="Ej. WhatsApp, Canvas, FODA, prompts...">
            </div>
            
            <!-- Module Filter -->
            <div>
              <label for="lib-filter-module" style="font-size: 0.85rem; font-weight: 700; color: var(--text-light); display: block; margin-bottom: 5px;">
                <i class="fas fa-layer-group"></i> Filtrar por Módulo:
              </label>
              <select id="lib-filter-module" class="inline-input" style="padding: 8px 12px; height: 38px; width: 100%;">
                <option value="todos">Todos los Módulos</option>
                <option value="m1">Módulo 1: Diagnóstico con IA (Sem. 1-4)</option>
                <option value="m2">Módulo 2: Automatización de Procesos (Sem. 5-8)</option>
                <option value="m3">Módulo 3: Comercialización y Viabilidad (Sem. 9-12)</option>
              </select>
            </div>

            <!-- Type Filter -->
            <div>
              <label for="lib-filter-type" style="font-size: 0.85rem; font-weight: 700; color: var(--text-light); display: block; margin-bottom: 5px;">
                <i class="fas fa-filter"></i> Tipo de Recurso:
              </label>
              <select id="lib-filter-type" class="inline-input" style="padding: 8px 12px; height: 38px; width: 100%;">
                <option value="todos">Todos los Tipos</option>
                <option value="video">Videos de apoyo / YouTube</option>
                <option value="plantilla">Plantillas descargables</option>
                <option value="lectura">Lecturas y guías interactivas</option>
                <option value="herramienta">Herramientas digitales</option>
              </select>
            </div>
          </div>

          <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--text-light); border-top: 1px solid #eee; padding-top: 10px;">
            <span id="lib-count-label">Cargando recursos...</span>
            <button id="lib-reset-btn" style="background: none; border: none; color: var(--ucr-blue); font-weight: 600; cursor: pointer; font-size: 0.85rem;">
              <i class="fas fa-undo"></i> Limpiar filtros
            </button>
          </div>
        </div>

        <!-- Resources Grid -->
        <div id="lib-resources-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;">
          <!-- Injected dynamically -->
        </div>

        <!-- Fuentes y Referencias por Semana (Exigencia v2.3 UCR/CIOdD) -->
        <div id="lib-fuentes-container">
          ${this.getFuentesTableHtml()}
        </div>
      </section>
    `;

    container.innerHTML = html;

    // Initial render and listeners
    this.updateGrid(recursos);

    const searchInput = document.getElementById('lib-search');
    const modSelect = document.getElementById('lib-filter-module');
    const typeSelect = document.getElementById('lib-filter-type');
    const resetBtn = document.getElementById('lib-reset-btn');

    const triggerFilter = () => {
      const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
      const modVal = modSelect ? modSelect.value : 'todos';
      const typeVal = typeSelect ? typeSelect.value : 'todos';

      const filtered = recursos.filter(r => {
        const matchQuery = !query || 
          r.titulo.toLowerCase().includes(query) || 
          (r.descripcion && r.descripcion.toLowerCase().includes(query)) ||
          (r.tipo && r.tipo.toLowerCase().includes(query));
        
        const matchType = typeVal === 'todos' || r.tipo === typeVal;
        const matchModule = modVal === 'todos' || r.moduloId === modVal;

        return matchQuery && matchType && matchModule;
      });

      this.updateGrid(filtered);
    };

    if (searchInput) searchInput.addEventListener('input', triggerFilter);
    if (modSelect) modSelect.addEventListener('change', triggerFilter);
    if (typeSelect) typeSelect.addEventListener('change', triggerFilter);
    
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        if (modSelect) modSelect.value = 'todos';
        if (typeSelect) typeSelect.value = 'todos';
        triggerFilter();
      });
    }
  },

  updateGrid(list) {
    const grid = document.getElementById('lib-resources-grid');
    const countLabel = document.getElementById('lib-count-label');
    if (!grid) return;

    if (countLabel) {
      countLabel.textContent = `Mostrando ${list.length} recurso${list.length === 1 ? '' : 's'}`;
    }

    if (list.length === 0) {
      grid.style.display = 'block';
      grid.innerHTML = `
        <div class="unit-body-card text-center" style="padding: 40px 20px; width: 100%;">
          <i class="fas fa-search" style="font-size: 2rem; color: #cbd5e1; margin-bottom: 15px;"></i>
          <h4 style="color: var(--ucr-dark); margin-bottom: 8px;">No se encontraron recursos</h4>
          <p style="color: var(--text-light); font-size: 0.9rem;">Pruebe ajustando los filtros o utilizando otros términos de búsqueda.</p>
        </div>
      `;
      return;
    }

    grid.style.display = 'grid';
    let html = '';
    
    list.forEach(r => {
      let icon = 'file-alt';
      let typeText = 'Lectura';
      let accent = 'var(--ucr-blue)';
      let btnText = 'Abrir Lectura';
      let btnIcon = 'fa-external-link-alt';

      if (r.tipo === 'video') {
        icon = 'play-circle';
        typeText = 'Video Tutorial';
        accent = '#dc2626';
        btnText = 'Ver Video';
        btnIcon = 'fa-play';
      } else if (r.tipo === 'plantilla') {
        icon = 'file-download';
        typeText = 'Plantilla';
        accent = '#0284c7';
        btnText = 'Descargar / Ver';
        btnIcon = 'fa-file-alt';
      } else if (r.tipo === 'herramienta') {
        icon = 'tools';
        typeText = 'Herramienta';
        accent = '#059669';
        btnText = 'Ir al Sitio';
        btnIcon = 'fa-external-link-alt';
      } else if (r.tipo === 'lectura') {
        icon = 'book-open';
        typeText = 'Guía / Lectura';
        accent = '#4f46e5';
        btnText = 'Abrir Guía';
        btnIcon = 'fa-external-link-alt';
      }

      const modNames = {
        'm1': 'Módulo 1: Diagnóstico',
        'm2': 'Módulo 2: Automatización',
        'm3': 'Módulo 3: Comercialización'
      };
      const modLabel = modNames[r.moduloId] || 'General';
      const semanaLabel = r.semanaId ? ` · Sem. ${r.semanaId.toUpperCase()}` : '';

      html += `
        <div class="unit-body-card" style="padding: 20px; display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid ${accent}; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: ${accent}; background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 3px 8px; border-radius: var(--radius-pill);">
                <i class="fas fa-${icon}"></i> ${typeText}
              </span>
              <span style="font-size: 0.75rem; font-weight: 600; color: var(--text-light);">${modLabel}${semanaLabel}</span>
            </div>
            
            <h4 style="font-size: 1rem; color: var(--ucr-dark); margin-bottom: 8px; line-height: 1.35; font-family: 'Montserrat', sans-serif;">
              ${r.titulo}
            </h4>
            
            <p style="font-size: 0.85rem; color: #475569; margin-bottom: 20px; line-height: 1.5;">
              ${r.descripcion || 'Recurso educativo y de apoyo práctico para el desarrollo de las consignas del programa.'}
            </p>
          </div>

          <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width: 100%; padding: 9px 12px; font-size: 0.85rem; margin-top: auto; display: flex; justify-content: center; align-items: center; gap: 8px; border-color: #cbd5e1; font-weight: 600;">
            ${btnText} <i class="fas ${btnIcon}" style="font-size: 0.75rem;"></i>
          </a>
        </div>
      `;
    });

    grid.innerHTML = html;
  },

  getFuentesTableHtml() {
    const fuentes = [
      { semana: "Semana 1", concepto: "Controles de privacidad y uso de datos para entrenamiento de LLMs", fuente: "OpenAI Help Center (2026); Google Gemini Privacy Hub (2026); Anthropic Claude Trust Center (2026); Ley N.º 8968 de Costa Rica (PRODHAB)." },
      { semana: "Semana 2", concepto: "Modelo CIFRCE de Prompt Engineering Empresarial (5 Capas Estructuradas)", fuente: "Marco metodológico desarrollado por CIOdD-UCR / DIPROVID para prompting estructurado en MiPYMES." },
      { semana: "Semana 3", concepto: "Origen del FODA (SWOT) y Matriz TOWS cruzada (Estrategias FO, FA, DO, DA)", fuente: "Albert S. Humphrey (Stanford Research Institute, 1960-1970); Heinz Weihrich, 'The TOWS Matrix — A Tool for Situational Analysis', Long Range Planning (1982)." },
      { semana: "Semana 4", concepto: "Matriz de Impacto vs. Esfuerzo y Plan de Acción a 90 días", fuente: "Metodologías ágiles de priorización estratégica y Lean Project Management (PDMA / Scrum Alliance)." },
      { semana: "Semana 5", concepto: "Identificación de cuellos de botella y optimización de flujos con herramientas No-Code", fuente: "Eliyahu M. Goldratt, 'The Goal' (1984), North River Press; principios de optimización operativa sin código." },
      { semana: "Semana 6", concepto: "Chatbots de atención al cliente en WhatsApp y calidad de servicio", fuente: "Frederick Reichheld, Bain & Company, 'Zero Defections: Quality Comes to Services', Harvard Business Review (1990); ISO 9001:2015 gestión de calidad en servicio." },
      { semana: "Semana 7", concepto: "Gestión de relaciones con clientes (CRM ligero) y protección de datos", fuente: "Adrian Payne & Pennie Frow, 'Strategic Customer Management' (2013), Cambridge University Press; Ley N.º 8968 de Protección de Datos (Costa Rica)." },
      { semana: "Semana 8", concepto: "Cálculo del Retorno de Inversión (ROI) y horas ahorradas por automatización", fuente: "Jack J. Phillips, 'Return on Investment in Training and Performance Improvement Programs' (2003); modelos de sensibilidad financiera." },
      { semana: "Semana 9", concepto: "Identidad de marca, arquitectura de valor y consistencia visual", fuente: "David A. Aaker, 'Building Strong Brands' (1996), The Free Press; modelos de consistencia y tono de voz corporativo." },
      { semana: "Semana 10", concepto: "Estrategia editorial y producción de contenidos audiovisuales con ética", fuente: "Principios de transparencia algorítmica y divulgación de contenido sintético (UNESCO / UCR); narrativas comerciales efectivas." },
      { semana: "Semana 11", concepto: "Costos fijos, variables y cálculo de Punto de Equilibrio (Análisis C-V-U)", fuente: "Charles T. Horngren et al., 'Cost Accounting: A Managerial Emphasis', Pearson Education; microeconomía aplicada a la MiPYME." },
      { semana: "Semana 12", concepto: "Embudo comercial AIDA (Atención, Interés, Deseo, Acción) y cierre de campaña", fuente: "Elias St. Elmo Lewis (1898); Edward K. Strong Jr., 'The Psychology of Selling and Advertising' (1925), McGraw-Hill." }
    ];

    let sectionHtml = `
      <div style="margin-top: 50px;">
        <h3 style="color: var(--ucr-dark); font-size: 1.3rem; margin-bottom: 15px; border: none; padding: 0; display: flex; align-items: center; gap: 10px;">
          <i class="fas fa-university" style="color: var(--ucr-blue);"></i> Fuentes y Referencias Académicas por Semana (12 Semanas CIOdD-UCR)
        </h3>
        <p style="font-size: 0.95rem; color: var(--text-light); margin-bottom: 20px; line-height: 1.5;">
          Esta tabla documenta la trazabilidad y solidez metodológica de los marcos teóricos y herramientas aplicadas en cada una de las 12 semanas canónicas del programa.
        </p>

        <div class="unit-body-card" style="padding: 0; overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
            <thead>
              <tr style="background-color: #005da4; color: white;">
                <th style="padding: 12px 15px; width: 12%;">Semana</th>
                <th style="padding: 12px 15px; width: 44%;">Tema / Concepto</th>
                <th style="padding: 12px 15px; width: 44%;">Fuente / Referencia Académica</th>
              </tr>
            </thead>
            <tbody>
    `;

    fuentes.forEach((f, idx) => {
      const rowBg = idx % 2 === 0 ? '#ffffff' : '#f8fafc';
      sectionHtml += `
        <tr style="background-color: ${rowBg}; border-bottom: 1px solid #eee;">
          <td style="padding: 12px 15px; font-weight: 700; color: var(--ucr-blue);">${f.semana}</td>
          <td style="padding: 12px 15px; color: var(--ucr-dark); font-weight: 600;">${f.concepto}</td>
          <td style="padding: 12px 15px; color: #555; line-height: 1.4;">${f.fuente}</td>
        </tr>
      `;
    });

    sectionHtml += `
            </tbody>
          </table>
        </div>

        <!-- CC BY 4.0 Open Educational Resource Note -->
        <div class="unit-body-card" style="margin-top: 25px; padding: 20px; border-left: 4px solid #005da4; background-color: #f8fafc;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px;">
            <div>
              <h4 style="margin: 0 0 6px 0; color: var(--ucr-dark); font-size: 0.95rem; display: flex; align-items: center; gap: 8px;">
                <i class="fab fa-creative-commons" style="color: var(--ucr-blue);"></i> Licenciamiento de Recursos y Plantillas
              </h4>
              <p style="font-size: 0.85rem; color: #475569; margin: 0; line-height: 1.4;">
                Todas las plantillas, rúbricas y guías de este programa se comparten bajo licencia <strong>Creative Commons Atribución 4.0 Internacional (CC BY 4.0)</strong> para libre reutilización y adaptación por MiPYMES y docentes.
              </p>
            </div>
            <a href="politicas/licencia.html" class="btn btn-secondary" style="padding: 7px 14px; font-size: 0.8rem; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              <img src="logos/cc-by.svg" alt="CC BY" style="height: 20px; width: auto;"> Ver Términos
            </a>
          </div>
        </div>
      </div>
    `;

    return sectionHtml;
  }
};
