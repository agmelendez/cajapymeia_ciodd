// --- APP.JS ---

const App = {
  modulos: [],
  semanas: [],
  unidades: [],
  recursos: [],
  rubrica: null,
  preguntas: [],
  glosario: [],

  async init() {
    console.log("Inicializando Caja de Herramientas IA...");
    
    // Initialize State
    Estado.init();

    // Load Data
    const success = await this.cargarDatos();
    if (!success) {
      document.getElementById('app').innerHTML = `
        <div class="unit-body-card text-center" style="margin-top: 50px;">
          <h2 style="color: var(--accent-red); border: 0;">Error de Carga</h2>
          <p>No pudimos cargar los contenidos del programa. Por favor, asegúrese de estar abriendo la aplicación desde un servidor web local o que la conexión a internet sea activa si está en GitHub Pages.</p>
          <a href="" class="btn btn-primary" style="margin-top: 15px;"><i class="fas fa-sync"></i> Reintentar</a>
        </div>
      `;
      return;
    }

    // Initialize Router
    Router.init();
    
    // Setup general event listeners
    this.setupAssistant();
    this.setupAccessibility();
  },

  async cargarDatos() {
    const localData = window.PROGRAMA_DATA || window.AppContenidoData;
    if (localData) {
      console.log("Cargando datos desde el bundle local pre-cargado...");
      this.modulos = localData.modulos || [];
      this.semanas = localData.semanas || [];
      this.unidades = localData.unidades || [];
      this.recursos = localData.recursos || [];
      this.rubrica = localData['rubrica-semanal'] || localData.rubricaSemanal || localData.rubricas || null;
      this.preguntas = localData['diagnostico-preguntas'] || localData.diagnosticoPreguntas || (localData.diagnostico ? localData.diagnostico.preguntas : []) || [];
      this.glosario = localData.glosario || [];

      // Validar integridad mínima
      if (this.modulos.length > 0 && this.semanas.length > 0 && this.unidades.length > 0 && this.preguntas.length > 0) {
        return true;
      }
      console.warn("Bundle local incompleto. Reintentando carga vía fetch...");
    }

    try {
      const getRelativePath = (path) => {
        return new URL(path, document.baseURI).href;
      };

      const [resMod, resSem, resUni, resRec, resRub, resPreg, resGlos] = await Promise.all([
        fetch(getRelativePath('contenido/modulos.json')).then(r => r.json()),
        fetch(getRelativePath('contenido/semanas.json')).then(r => r.json()),
        fetch(getRelativePath('contenido/unidades.json')).then(r => r.json()),
        fetch(getRelativePath('contenido/recursos.json')).then(r => r.json()),
        fetch(getRelativePath('contenido/rubrica-semanal.json')).then(r => r.json()),
        fetch(getRelativePath('contenido/diagnostico-preguntas.json')).then(r => r.json()),
        fetch(getRelativePath('contenido/glosario.json')).then(r => r.json())
      ]);

      this.modulos = resMod;
      this.semanas = resSem;
      this.unidades = resUni;
      this.recursos = resRec;
      this.rubrica = resRub;
      this.preguntas = resPreg;
      this.glosario = resGlos;

      return (this.modulos.length > 0 && this.semanas.length > 0 && this.unidades.length > 0);
    } catch (e) {
      console.error("Error al cargar los archivos JSON estáticos:", e);
      return false;
    }
  },

  renderView(route) {
    const mainContainer = document.getElementById('app');
    if (!mainContainer) return;

    // Save route as last path
    Estado.datos.ultimaRuta = route.fullHash;
    Estado.guardar();

    // Close mobile sidebar if open
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');

    // Toggle home-only-section elements visibility
    const homeSections = document.querySelectorAll('.home-only-section');
    homeSections.forEach(sec => {
      if (route.view === 'inicio') {
        sec.classList.remove('oculto');
      } else {
        sec.classList.add('oculto');
      }
    });

    // Route dispatchers
    switch (route.view) {
      case 'inicio':
        RenderInicio.render(mainContainer);
        break;
      case 'diagnostico':
        Diagnostico.render(mainContainer);
        break;
      case 'modulo':
        const moduloId = route.params[0] || 'm1';
        RenderModulo.render(mainContainer, moduloId);
        break;
      case 'semana':
        const semanaId = route.params[0];
        if (semanaId) {
          RenderSemana.render(mainContainer, semanaId);
        } else {
          Router.navigate('#/inicio');
        }
        break;
      case 'unidad':
        const semId = route.params[0];
        const uniId = route.params[1];
        if (semId && uniId) {
          RenderUnidad.render(mainContainer, semId, uniId);
        } else {
          Router.navigate('#/inicio');
        }
        break;
      case 'portafolio':
        RenderPortafolio.render(mainContainer);
        break;
      case 'biblioteca':
        RenderBiblioteca.render(mainContainer);
        break;
      case 'credenciales':
        RenderCredenciales.render(mainContainer);
        break;
      case 'ruta':
        RenderRuta.render(mainContainer);
        break;
      case 'evaluador':
        RenderEvaluador.render(mainContainer);
        break;
      case 'gpts':
        RenderGpts.render(mainContainer);
        break;
      default:
        // Page not found
        mainContainer.innerHTML = `
          <div class="unit-body-card text-center" style="margin: 50px 0;">
            <h2 style="border: 0;">Sección No Encontrada</h2>
            <p>Lo sentimos, no encontramos la sección especificada.</p>
            <a href="#/inicio" class="btn btn-primary"><i class="fas fa-home"></i> Volver al Inicio</a>
          </div>
        `;
    }
  },

  getModuleIdByWeekId(weekId) {
    const w = this.semanas.find(s => s.id === weekId);
    return w ? w.moduloId : null;
  },

  getWeekProgress(weekId) {
    // Cálculo estrictamente derivado de las unidades completadas
    const weekUnits = this.unidades.filter(u => u.semanaId === weekId);
    if (weekUnits.length === 0) return 0;

    const completed = weekUnits.filter(u => {
      const uState = Estado.datos.progreso.unidades[u.id];
      return uState && uState.estado === 'completada';
    }).length;

    if (completed === weekUnits.length && !this.isWeekFullyCompleted(weekId)) return 99;
    return Math.round((completed / weekUnits.length) * 100);
  },

  isWeekFullyCompleted(weekId) {
    const weekUnits = this.unidades.filter(u => u.semanaId === weekId);
    if (weekUnits.length === 0) return false;

    // 1. Todas las unidades de la semana (los 7 pasos) deben estar completadas
    const allUnitsCompleted = weekUnits.every(u => {
      const uState = Estado.datos.progreso.unidades[u.id];
      return uState && uState.estado === 'completada';
    });
    if (!allUnitsCompleted) return false;

    // 2. El Paso 6 debe cumplir el mismo requisito de evidencia que el formulario.
    const p6Unit = weekUnits.find(u => u.tipo === 'evaluacion');
    if (!p6Unit) return false;
    const ev = Estado.datos.evidencias[p6Unit.id];
    if (!ev || !Estado.evidenciaSuficiente(p6Unit.id, ev.url, ev.nota)) return false;

    // 3. Debe existir una autoevaluación metodológica calificada por el usuario
    const semState = Estado.datos.progreso.semanas[weekId];
    const auto = semState && semState.autoevaluacion;
    if (!auto || typeof auto.puntajeTotal !== 'number' || auto.puntajeTotal <= 0) return false;

    return true;
  },

  getModuleProgress(moduloId) {
    if (moduloId === 'm0') {
      return (Estado.datos.diagnostico && Estado.datos.diagnostico.completado) ? 100 : 0;
    }
    const modWeeks = this.semanas.filter(s => s.moduloId === moduloId);
    if (modWeeks.length === 0) return 0;

    let sum = 0;
    modWeeks.forEach(w => {
      sum += this.getWeekProgress(w.id);
    });
    const promedio = Math.round(sum / modWeeks.length);
    return modWeeks.every(w => this.isWeekFullyCompleted(w.id)) ? promedio : Math.min(99, promedio);
  },

  getHorasDeclaradas() {
    let hours = 0;
    // Inducción (Módulo 0 / Diagnóstico): 1 hora formativa si se completó el autodiagnóstico
    if (Estado.datos.diagnostico && Estado.datos.diagnostico.completado) {
      hours += 1;
    }
    // Cada una de las 12 semanas formativas suma 2 horas SOLO si fue completada integralmente
    this.semanas.forEach(s => {
      if (this.isWeekFullyCompleted(s.id)) {
        hours += 2;
      }
    });
    return Math.min(25, hours);
  },

  getCertifiedHours() {
    // Mantiene compatibilidad con vistas previas
    return this.getHorasDeclaradas();
  },

  getGlobalProgress() {
    // Cálculo riguroso sobre las 25 Horas Oficiales del Programa:
    // 1 hora de Inducción/Diagnóstico (4%) + 24 horas de Semanas Prácticas (12 semanas * 2h = 96%)
    const declaredHours = this.getHorasDeclaradas();
    return Math.min(100, Math.round((declaredHours / 25) * 100));
  },

  getGlossaryTermHtml(termText) {
    const found = this.glosario.find(g => g.termino.toLowerCase() === termText.toLowerCase());
    if (found) {
      return `<span class="glossary-term-highlight" tabindex="0">${termText}<span class="term-tooltip">${found.definicion}</span></span>`;
    }
    return termText;
  },

  // Parse HTML string to inject tooltips dynamically
  injectGlossaryTooltips(htmlString) {
    if (!this.glosario || this.glosario.length === 0) return htmlString;

    const template = document.createElement('template');
    template.innerHTML = htmlString;
    const terms = [...this.glosario].sort((a, b) => b.termino.length - a.termino.length);
    const escaped = terms.map(t => t.termino.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(?<![\\p{L}\\p{N}])(${escaped.join('|')})(?![\\p{L}\\p{N}])`, 'giu');
    const definitions = new Map(terms.map(t => [t.termino.toLocaleLowerCase(), t.definicion]));
    const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement?.closest('a, code, pre, script, style, textarea, .glossary-term-highlight')) {
        textNodes.push(node);
      }
    }
    textNodes.forEach(node => {
      regex.lastIndex = 0;
      const parts = document.createDocumentFragment();
      let last = 0;
      for (const match of node.textContent.matchAll(regex)) {
        parts.append(document.createTextNode(node.textContent.slice(last, match.index)));
        const highlight = document.createElement('span');
        highlight.className = 'glossary-term-highlight';
        highlight.tabIndex = 0;
        highlight.append(document.createTextNode(match[0]));
        const tooltip = document.createElement('span');
        tooltip.className = 'term-tooltip';
        tooltip.textContent = definitions.get(match[0].toLocaleLowerCase());
        highlight.append(tooltip);
        parts.append(highlight);
        last = match.index + match[0].length;
      }
      if (last) {
        parts.append(document.createTextNode(node.textContent.slice(last)));
        node.replaceWith(parts);
      }
    });
    return template.innerHTML;
  },

  cleanString(str) {
    if (typeof str !== 'string') return str;
    return str
      .replace(/Ã³/g, 'ó')
      .replace(/Ã¡/g, 'á')
      .replace(/Ã©/g, 'é')
      .replace(/Ã­/g, 'í')
      .replace(/Ãº/g, 'ú')
      .replace(/Ã±/g, 'ñ')
      .replace(/Â¿/g, '¿')
      .replace(/Â°/g, 'º')
      .replace(/Â¡/g, '¡');
  },

  setupAssistant() {
    // Mobile assistant menu open/close listeners
    const toggleBtn = document.getElementById('assistant-toggle-btn');
    const chatContainer = document.getElementById('assistant-chat-container');
    const closeBtn = document.getElementById('assistant-close-btn');
    const iframe = document.getElementById('assistant-iframe');

    if (toggleBtn && chatContainer) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const active = chatContainer.classList.toggle('active');
        toggleBtn.setAttribute('aria-expanded', active);
        
        // Lazy load iframe src
        if (active && iframe && !iframe.getAttribute('src')) {
          const src = iframe.getAttribute('data-src');
          if (src) iframe.setAttribute('src', src);
        }
      });

      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          chatContainer.classList.remove('active');
          toggleBtn.setAttribute('aria-expanded', 'false');
        });
      }

      document.addEventListener('click', (e) => {
        if (chatContainer.classList.contains('active') && !chatContainer.contains(e.target) && e.target !== toggleBtn) {
          chatContainer.classList.remove('active');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  },

  setupAccessibility() {
    // Listen to keydown to improve tab focus for accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const assistantChat = document.getElementById('assistant-chat-container');
        if (assistantChat && assistantChat.classList.contains('active')) {
          assistantChat.classList.remove('active');
          const toggle = document.getElementById('assistant-toggle-btn');
          if (toggle) toggle.focus();
        }
      }
    });
  }
};

// Initialize application on DOM load
document.addEventListener('DOMContentLoaded', () => {
  App.init();

  // Sidebar controls
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const closeBtn = document.getElementById('sidebar-close-btn');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.add('active');
      if (overlay) overlay.classList.add('active');
    });

    const closeSidebar = () => {
      sidebar.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);
  }
});
