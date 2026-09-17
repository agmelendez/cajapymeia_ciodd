# CHANGELOG — Caja de Herramientas IA para MiPYME (v23)

Todos los cambios notables realizados en este proyecto por los modelos de IA (Antigravity / Claude) se documentan en este archivo.

## [v3.0.0-v23.full] - 2026-08-03

### Auditoría e Implementación Íntegra de Contenidos (Fase 1 & Fase 2 — v2.3 UCR/AUGE/CIOdD/DIPROVID)
- **Fase 1 (Auditoría Técnica y Estructural):** Inspección exhaustiva de las 19 semanas y secciones transversales. Creación del informe oficial [`AUDITORIA.md`](file:///Users/agustingomez/Downloads/0.%20Caja%20Herramienta%20PYMEs%20Version%203.0/AUDITORIA.md) en la raíz del repositorio.
- **Fase 2 (Inyección Verbatim de Contenidos):** Actualización 1:1 desde `fuente_contenido_v23.md` de las 19 semanas (F-1 a E-3) y 152 unidades en `contenido/semanas.json`, `contenido/unidades.json`, `contenido/modulos.json` y `assets/js/contenidoData.js`.
- **Prompts CIFRCE Completos (19/19 Semanas):** Inyección de la plantilla completa de 5 componentes (Contexto, Instrucción, Formato, Restricciones, Criterios de éxito) con los corchetes editables `[SECTOR]`, `[TIEMPO]`, `[DATOS]`, etc., eliminando resúmenes previos.
- **Disclaimers de Inversión ($20/mes en ChatGPT Plus/Team):** Implementación verbatim en 1) Pantalla de bienvenida (`renderInicio.js`), 2) Plantilla HTML de correo de activación (`templates/correo_activacion.html`), 3) Primer video tutorial de cada módulo.
- **Lógica de GPTs Personalizados (`#/gpts`):** Creación de la vista y componente dedicado (`assets/js/renderGpts.js`) con las tablas completas de Fase 1 (8 GPTs genéricos) y Fase 2 (5 sectores del sondeo UCR) + diagramas comparativos.
- **Fuentes y Referencias Académicas por Semana:** Incorporación en la vista de Biblioteca (`assets/js/renderBiblioteca.js`) de la tabla completa de trazabilidad bibliográfica (autor, obra, año) para todas las 19 semanas.
- **Recuadros "¿Para quién es este módulo?":** Incorporación del callout dual (*Idea/Negocio Nuevo* vs. *Negocio en Marcha*) en las 6 portadas de módulo (`renderModulo.js`).
- **Notas de GPTs Especializados:** Integración de llamadas destacadas en el Paso 6 para las semanas A-2, A-3, B-1, B-2, D-3, E-1, E-2 con enlace directo a la sección de GPTs.
- **Diagramas Vectoriales SVG/HTML:** Integración de 8 diagramas SVG responsive reutilizando exclusivamente los tokens de color `:root` (`--ucr-blue`, `--ucr-dark`, `--ucr-celeste`, `--accent-yellow`, `--accent-green`, etc.) para Línea de Tiempo, CIFRCE 5 Capas, FODA/TOWS 2x2, Impacto-Esfuerzo 2x2, Embudo AIDA 4 Etapas, Punto de Equilibrio y Mapa de GPTs.

## [v3.0.0-rc.11] - 2026-07-29

### Añadido y Estandarizado (Reestructuración Curricular Completa a 8 Pantallas por Semana)
- **Implementación de Comentarios (`comentarios.docx`):** Estandarización de todas las 19 semanas de aprendizaje en los 6 módulos (Fundamentos, A, B, C, D, E) al modelo oficial de 8 pantallas/pasos por semana.
- **Pestaña "Chispa de Innovación" (Paso 8):** Incorporación activa en cada semana de la 8va unidad de innovación transversal con consejos de vanguardia, automatizaciones y herramientas futuras.
- **Sección de Disclaimer Obligatoria ("Esta semana aplica porque..."):** Integración en la Pantalla 2 (Texto Introductorio) del desglose diferenciado de aplicabilidad para *Negocio Nuevo / Idea* vs. *Negocio en Marcha*.
- **Integración Íntegra del Diseño Curricular v2.3:** Actualización de `assets/js/contenidoData.js`, `contenido/semanas.json` y `contenido/unidades.json` a 152 unidades estandarizadas con textos teóricos, videos de 4 minutos, prompts CIFRCE y tareas complementarias.
- **Soporte Visual de Unidades (`renderSemana.js` y `renderUnidad.js`):** Badges y tarjetas personalizadas para los tipos de unidad `chispa` (dorado) y `video` (rojo).

## [v3.0.0-rc.10] - 2026-07-29

### Modificado (Reubicación y Rediseño del Asistente del Curso)
- **Posicionamiento Superior Fijo:** Reubicación del widget del Asistente del Curso desde el pie de página hacia la **zona superior derecha** (`top: 15px; right: 20px; z-index: 1050`) para asegurar visibilidad inmediata sin desplazar la pantalla.
- **Botón Circular con Símbolo de Ayuda:** Eliminación del texto desbordado (`Asistente de`) y sustitución por un botón circular perfecto con gradiente en todo naranja/dorado resplandeciente (`#f39c12`) y el ícono de ayuda `<i class="fas fa-question"></i>`.
- **Tooltip Emergente Suave:** Incorporación del cartel emergente `"Asistente IA"` al pasar el cursor sobre el botón.
- **Mantención 100% de Funcionalidad:** La ventana interactiva de Chatbase se despliega suavemente justo debajo del botón superior.

## [v3.0.0-rc.9] - 2026-07-29
- Fortificación de ciberseguridad, CSP y sanitización de URLs.


## [v3.2.0] - 2026-09-17

### Resolución Integral de la Ruta de Actualización 2.0 (Puertas de Calidad T01-T12)
- **T01 (P0 - Contrato de Datos):** Unificado el contrato de carga en `app.js` soportando claves `rubricaSemanal` / `rubrica-semanal` y `diagnosticoPreguntas` / `diagnostico-preguntas` con validación de estructura tanto en bundle local como en fetch.
- **T02 (P0 - Progresión de Unidades):** Las unidades de lectura/reflexión (`requiereAccion: false`) se marcan formalmente como `completada` al avanzar. La unidad 7 (`chispa`) cierra efectivamente la semana al 100% en `Estado` cuando todas las unidades cumplen condiciones.
- **T03 (P0 - Validación de Evidencias):** Implementado el estado `evidencia-pendiente` en `estado.js` y `renderSemana.js`. Se exige enlace válido o descripción sustantiva de al menos 15 caracteres para acreditar tareas prácticas, impidiendo el avance fraudulento con campos vacíos.
- **T04 (P0 - Calibración Horaria 25h):** Recalibradas las 84 unidades a exactamente 120 minutos por semana (36 min teoría / 84 min práctica). Suma verificada: 1h inducción + (12 semanas × 2h) = **25 horas exactas**.
- **T05 (P0 - Acreditación CIOdD-UCR):** Separado el avance porcentual de navegación local de la solicitud de constancia institucional en `renderCredenciales.js`. Establecido el procedimiento seguro de remisión de respaldo JSON a `ciodd@ucr.ac.cr` y criterios de revisión humana docente.
- **T06 & T07 (P1 - Biblioteca y Evaluador):** Actualizados los filtros de la Biblioteca (`renderBiblioteca.js`) a los módulos canónicos `m1`, `m2`, `m3` con `moduloId` en los 14 recursos. Actualizada la tabla de fuentes académicas a las 12 semanas canónicas y alineadas las matrices del Espacio del Evaluador (`renderEvaluador.js`).
- **T08 (P1 - Catálogo de GPTs):** Categorizados con total transparencia en `renderGpts.js` los asistentes temáticos en **Aprobado CIOdD** vs. **En desarrollo / Validación**, integrando la Semana 10 (Audiovisual) y garantizando la vía 100% gratuita con prompts CIFRCE equivalentes.
- **T11 (P1 - Privacidad por Proveedor):** Añadidas guías paso a paso fechadas (Setiembre 2026) para OpenAI (ChatGPT), Google (Gemini) y Anthropic (Claude) en `politicas/protocolo-privacidad-datos.html` y `.md`, distinguiendo explícitamente el almacenamiento local seguro (`localStorage`) del tráfico hacia servidores externos.

