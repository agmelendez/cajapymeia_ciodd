// --- ESTADO.JS ---

const ESTADO_KEY = "cajaIA.estado.v3";

const Estado = {
  datos: null,

  init() {
    this.datos = this.cargarEstado();
  },

  getInitialState() {
    return {
      schemaVersion: 3,
      instaladoEn: new Date().toISOString(),
      actualizadoEn: new Date().toISOString(),
      perfil: "acelerada", // default
      diagnostico: {
        versionInstrumento: "2.2.0",
        completado: false,
        fechaInicio: null,
        fechaCompletado: null,
        respuestas: {},
        puntajes: {
          CD: null,
          AIA: null,
          AT: null,
          CUB: null,
          CME: null
        },
        resultado: {
          senda: null,
          nivelacionRequerida: false,
          moduloInicial: null,
          modulosRecomendados: [],
          modulosNoPrioritarios: [],
          testOutSugerido: [],
          ayudasActivas: [],
          confianzaClasificacion: null,
          justificacion: [],
          primerPaso: null
        }
      },
      progreso: {
        unidades: {}, // { "unit-id": { estado: "vista"|"completada", vistoEn: ISO, completadoEn: ISO } }
        semanas: {},  // { "semana-id": { estado: "en-curso"|"completada", porcentaje: 0, ultimaUnidad: "unit-id", autoevaluacion: {} } }
        modulos: {}   // { "modulo-id": { estado: "en-curso"|"completado", porcentaje: 0 } }
      },
      evidencias: {}, // { "unit-id": { url: "", nota: "", archivoLocalName: "", fecha: ISO } }
      competencias: {
        "cuentas-basicas": false,
        "seguridad-2fa": false,
        "uso-chatbot-basico": false,
        "prompting-basico": false,
        "no-code-basico": false,
        "datos-basicos": false
      },
      ultimaRuta: "#/inicio",
      insignias: [],
      preferencias: {
        glosarioSiempreVisible: false,
        modoAltoContraste: false,
        tamanoTexto: "normal"
      }
    };
  },

  cargarEstado() {
    try {
      const saved = localStorage.getItem(ESTADO_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Basic migration check
        if (parsed.schemaVersion === 3) {
          return parsed;
        } else {
          return this.migrarEstado(parsed);
        }
      }
    } catch (e) {
      console.error("No se pudo leer localStorage:", e);
    }
    return this.getInitialState();
  },

  guardar() {
    this.datos.actualizadoEn = new Date().toISOString();
    try {
      localStorage.setItem(ESTADO_KEY, JSON.stringify(this.datos));
    } catch (e) {
      console.error("No se pudo escribir en localStorage:", e);
    }
  },

  migrarEstado(anterior) {
    console.log("Migrando estado anterior a v3...");
    const nuevo = this.getInitialState();
    
    // Copy what is compatible
    if (anterior) {
      if (anterior.perfil) nuevo.perfil = anterior.perfil;
      if (anterior.diagnostico && anterior.diagnostico.respuestas) {
        nuevo.diagnostico.respuestas = { ...nuevo.diagnostico.respuestas, ...anterior.diagnostico.respuestas };
      }
      if (anterior.progreso) {
        nuevo.progreso = { ...nuevo.progreso, ...anterior.progreso };
      }
      if (anterior.evidencias) {
        nuevo.evidencias = { ...nuevo.evidencias, ...anterior.evidencias };
      }
      if (anterior.preferencias) {
        nuevo.preferencias = { ...nuevo.preferencias, ...anterior.preferencias };
      }
    }
    
    return nuevo;
  },

  guardarRespuesta(preguntaId, valor) {
    if (!this.datos.diagnostico.fechaInicio) {
      this.datos.diagnostico.fechaInicio = new Date().toISOString();
    }
    this.datos.diagnostico.respuestas[preguntaId] = valor;
    this.guardar();
  },

  marcarUnidadVista(unidadId) {
    if (!this.datos.progreso.unidades[unidadId]) {
      this.datos.progreso.unidades[unidadId] = {
        estado: "vista",
        vistoEn: new Date().toISOString(),
        completadoEn: null
      };
      this.guardar();
    }
  },

  marcarUnidadCompletada(unidadId) {
    const unidad = this.datos.progreso.unidades[unidadId] || { estado: "vista", vistoEn: new Date().toISOString() };
    unidad.estado = "completada";
    unidad.completadoEn = new Date().toISOString();
    this.datos.progreso.unidades[unidadId] = unidad;
    this.guardar();
  },

  marcarUnidadEvidenciaPendiente(unidadId) {
    const unidad = this.datos.progreso.unidades[unidadId] || { estado: "vista", vistoEn: new Date().toISOString() };
    unidad.estado = "evidencia-pendiente";
    unidad.completadoEn = null;
    this.datos.progreso.unidades[unidadId] = unidad;
    this.guardar();
  },

  sanitizeUrl(url) {
    if (typeof url !== 'string') return '';
    const trimmed = url.trim();
    if (!trimmed) return '';
    // Reject characters that can escape an HTML attribute or change URL parsing.
    if (/[\s\u0000-\u001f"'<>`\\]/.test(trimmed)) return '';
    if (/^https?:\/\//i.test(trimmed)) {
      try {
        const parsed = new URL(trimmed);
        return ['http:', 'https:'].includes(parsed.protocol) && parsed.hostname ? trimmed : '';
      } catch (_) { return ''; }
    }
    if (/^(\/|\.\/)/.test(trimmed) && !trimmed.startsWith('//')) return trimmed;
    return '';
  },

  sanitizeText(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  },

  evidenciaSuficiente(unidadId, url, nota) {
    const enlace = this.sanitizeUrl(url);
    const resumen = typeof nota === 'string' ? nota.trim() : '';
    // El entregable semanal necesita contexto incluso si se adjunta un enlace.
    if (/-u06$/.test(unidadId)) {
      return enlace ? resumen.length >= 60 : resumen.length >= 120;
    }
    return Boolean(enlace || resumen.length >= 15);
  },

  guardarEvidencia(unidadId, url, nota, archivoName = "") {
    const cleanUrl = this.sanitizeUrl(url);
    const cleanNota = typeof nota === 'string' ? nota.trim() : '';
    const cleanFile = typeof archivoName === 'string' ? archivoName : '';

    this.datos.evidencias[unidadId] = {
      url: cleanUrl,
      nota: cleanNota,
      archivoLocalName: cleanFile,
      fecha: new Date().toISOString()
    };
    this.marcarUnidadCompletada(unidadId);
    this.guardar();
  },

  guardarAutoevaluacion(semanaId, evaluacion) {
    const sem = this.datos.progreso.semanas[semanaId] || { estado: "en-curso", porcentaje: 0 };
    sem.autoevaluacion = evaluacion || {};
    // La autoevaluación registra las puntuaciones pero NO declara la semana como completada automáticamente.
    // La finalización de la semana se valida al recorrer la totalidad de sus unidades y cerrar el Paso 7.
    this.datos.progreso.semanas[semanaId] = sem;
    this.guardar();
  },

  marcarSemanaCompletada(semanaId) {
    const sem = this.datos.progreso.semanas[semanaId] || { estado: "en-curso", porcentaje: 0 };
    sem.estado = "completada";
    sem.completadaEn = new Date().toISOString();
    sem.porcentaje = 100;
    this.datos.progreso.semanas[semanaId] = sem;
    this.guardar();
  },

  resetearProgreso() {
    this.datos = this.getInitialState();
    this.guardar();
  },

  exportarJSON() {
    return JSON.stringify(this.datos, null, 2);
  },

  importarJSON(str) {
    try {
      // Prevenir Prototype Pollution
      if (/["'](__proto__|constructor|prototype)["']\s*:/i.test(str)) {
        console.error("Seguridad: Intento de Prototype Pollution bloqueado.");
        return false;
      }

      const parsed = JSON.parse(str);
      if (parsed && typeof parsed === 'object' && parsed.schemaVersion === 3) {
        // Reject incomplete backups before replacing the current state.
        if (!parsed.diagnostico || typeof parsed.diagnostico !== 'object' ||
            !parsed.diagnostico.respuestas || typeof parsed.diagnostico.respuestas !== 'object' ||
            !parsed.diagnostico.puntajes || typeof parsed.diagnostico.puntajes !== 'object' ||
            !parsed.diagnostico.resultado || typeof parsed.diagnostico.resultado !== 'object' ||
            !parsed.progreso || typeof parsed.progreso !== 'object') return false;
        if (!parsed.evidencias || typeof parsed.evidencias !== 'object') parsed.evidencias = {};
        if (!parsed.preferencias || typeof parsed.preferencias !== 'object') parsed.preferencias = this.getInitialState().preferencias;
        if (typeof parsed.ultimaRuta !== 'string' || !/^#\/[a-z0-9/\-]+$/i.test(parsed.ultimaRuta)) {
          parsed.ultimaRuta = '#/inicio';
        }
        // 1. Sanitizar y verificar evidencias
        const cleanEvidencias = {};
        if (parsed.evidencias && typeof parsed.evidencias === 'object') {
          Object.keys(parsed.evidencias).forEach(uId => {
            if (/^s([1-9]|1[0-2])-u0[1-7]$/.test(uId)) {
              const item = parsed.evidencias[uId];
              if (item && typeof item === 'object') {
                cleanEvidencias[uId] = {
                  url: this.sanitizeUrl(item.url || ''),
                  nota: typeof item.nota === 'string' ? item.nota : '',
                  archivoLocalName: typeof item.archivoLocalName === 'string' ? item.archivoLocalName : '',
                  fecha: typeof item.fecha === 'string' ? item.fecha : new Date().toISOString()
                };
              }
            }
          });
        }
        parsed.evidencias = cleanEvidencias;

        // 2. Validar estructura de progreso en unidades
        const cleanUnidades = {};
        if (parsed.progreso && parsed.progreso.unidades && typeof parsed.progreso.unidades === 'object') {
          Object.keys(parsed.progreso.unidades).forEach(uId => {
            if (/^s([1-9]|1[0-2])-u0[1-7]$/.test(uId)) {
              const uState = parsed.progreso.unidades[uId];
              if (uState && ['vista', 'completada', 'evidencia-pendiente'].includes(uState.estado)) {
                cleanUnidades[uId] = {
                  estado: uState.estado,
                  vistoEn: typeof uState.vistoEn === 'string' ? uState.vistoEn : new Date().toISOString(),
                  completadoEn: typeof uState.completadoEn === 'string' ? uState.completadoEn : null
                };
              }
            }
          });
        }
        if (!parsed.progreso) parsed.progreso = {};
        parsed.progreso.unidades = cleanUnidades;

        // 3. Validar progreso en semanas y autoevaluaciones
        const cleanSemanas = {};
        if (parsed.progreso.semanas && typeof parsed.progreso.semanas === 'object') {
          Object.keys(parsed.progreso.semanas).forEach(sId => {
            if (/^s([1-9]|1[0-2])$/.test(sId)) {
              const sState = parsed.progreso.semanas[sId];
              if (sState && typeof sState === 'object') {
                const cleanSem = {
                  estado: ['no-iniciada', 'en-curso', 'completada'].includes(sState.estado) ? sState.estado : 'en-curso',
                  porcentaje: typeof sState.porcentaje === 'number' ? Math.min(100, Math.max(0, sState.porcentaje)) : 0,
                  autoevaluacion: {}
                };

                // Validar puntuaciones de autoevaluación (1-3 por criterio, total 4-12)
                if (sState.autoevaluacion && typeof sState.autoevaluacion === 'object') {
                  const cr = sState.autoevaluacion.criterios;
                  if (cr && typeof cr === 'object') {
                    const p = Number(cr.pertinencia);
                    const c = Number(cr.cifrce);
                    const v = Number(cr.privacidad);
                    const s = Number(cr.supervision);
                    if ([1, 2, 3].includes(p) && [1, 2, 3].includes(c) && [1, 2, 3].includes(v) && [1, 2, 3].includes(s)) {
                      cleanSem.autoevaluacion = {
                        criterios: { pertinencia: p, cifrce: c, privacidad: v, supervision: s },
                        puntajeTotal: p + c + v + s,
                        fecha: typeof sState.autoevaluacion.fecha === 'string' ? sState.autoevaluacion.fecha : new Date().toISOString(),
                        completada: true
                      };
                    }
                  }
                }

                // Verificar que no declare semana como 'completada' si faltan unidades
                const weekUnitIds = [1, 2, 3, 4, 5, 6, 7].map(n => `${sId}-u0${n}`);
                const allUnitsCompleted = weekUnitIds.every(uid => cleanUnidades[uid] && cleanUnidades[uid].estado === 'completada');
                const p6Id = `${sId}-u06`;
                const hasP6Ev = cleanEvidencias[p6Id] && this.evidenciaSuficiente(p6Id, cleanEvidencias[p6Id].url, cleanEvidencias[p6Id].nota);
                const hasValidAuto = cleanSem.autoevaluacion && cleanSem.autoevaluacion.puntajeTotal > 0;

                if (cleanSem.estado === 'completada' && (!allUnitsCompleted || !hasP6Ev || !hasValidAuto)) {
                  cleanSem.estado = 'en-curso';
                }

                cleanSemanas[sId] = cleanSem;
              }
            }
          });
        }
        parsed.progreso.semanas = cleanSemanas;

        this.datos = parsed;
        this.guardar();
        return true;
      }
    } catch (e) {
      console.error("JSON inválido o inseguro para importar:", e);
    }
    return false;
  }
};
