# Reporte de Auditoría (Fase 1) — Caja de Herramientas de IA para MiPYMES
**Proyecto AUGE · CIOdD-UCR · DIPROVID** — Alineado con *Diseño Curricular y Guía de Producción v2.3*

---

## 1. Resumen Ejecutivo

Se ha completado la **Fase 1 (Auditoría e Inspección)** del repositorio del sitio web de la *Caja de Herramientas de IA para MiPYMES*. A continuación se presentan los hallazgos clave:

1. **Estado de semanas (19/19 existentes en estructura, 0/19 completas en fidelidad pedagógica v2.3)**:
   - Las 19 semanas (F-1 a E-3) están creadas como registros en `contenido/semanas.json` y `assets/js/contenidoData.js`.
   - Cada semana posee 8 pasos u objetos en `contenido/unidades.json`.
   - **Brecha crítica de contenido**: Ninguna de las 19 semanas cuenta actualmente con el prompt CIFRCE estructurado en 5 componentes (Contexto, Instrucción, Formato, Restricciones, Criterios de Éxito) con corchetes editables `[SECTOR]`, `[TIEMPO]`, etc. Todas las semanas muestran instrucciones genéricas de 2 líneas.
   - **Texto teórico y disclaimers**: En la mayoría de las semanas (p. ej. A-1 a A-5, C-1, D-1, E-1 a E-3), la pantalla de Texto Teórico Parte 2 (`u04`) contiene un párrafo genérico repetitivo ("Para aplicar este concepto con éxito en su empresa...") de 73 palabras en vez del contenido teórico real de `fuente_contenido_v23.md`.

2. **Secciones Transversales Faltantes o Incompletas**:
   - **Disclaimer de Inversión ($20/mes)**: Ausente en los 3 puntos obligatorios (Bienvenida, Plantilla de correo de activación, y Encabezado del primer video de cada módulo).
   - **Lógica de GPTs Personalizados**: No existe una sección central navegable que presente las dos tablas pedagógicas (Fase 1: 8 GPTs genéricos; Fase 2: 5 sectores prioritarios del sondeo CIOdD-UCR). Las 7 semanas con GPT especializado no enlazan a esta lógica.
   - **Fuentes y Referencias por Semana**: La sección `#/biblioteca` solo contiene enlaces a PDFs genéricos; falta la tabla de trazabilidad bibliográfica académica semana por semana (autor, obra, año).
   - **Recuadros "¿Para quién es este módulo?"**: Los bloques carecen de la distinción clara y visible entre *Idea/Negocio Nuevo* vs. *Negocio en Marcha*.

3. **Arquitectura Técnica y Sincronización Dual**:
   - El sitio funciona como una SPA (Single Page Application) en JS Vanilla con router por Hash (`assets/js/router.js`).
   - Los datos se leen prioritariamente del bundle cargado en memoria `window.PROGRAMA_DATA` en `assets/js/contenidoData.js` y, como fallback, mediante `fetch()` a los archivos `.json` de `/contenido/`.
   - **Regla técnica indispensable para la Fase 2**: Cualquier actualización realizada a `contenido/*.json` debe ser replicada de forma idéntica en `assets/js/contenidoData.js` para asegurar que el sitio renderice el nuevo contenido tanto localmente como en GitHub Pages.

---

## 2. Inventario Técnico de la Aplicación

- **Stack Tecnológico**: HTML5 semántico, CSS3 Vanilla con Custom Properties / Tokens (`assets/css/tokens.css`), JavaScript ES6 modular (`assets/js/`).
- **Sistema de Rutas**:
  - `#/inicio` -> Landing general y diagnóstico inicial.
  - `#/diagnostico` -> Test de madurez digital.
  - `#/modulo/:id` -> Vista de módulo (mf, ma, mb, mc, md, me).
  - `#/semana/:id` -> Vista general de la semana con lista de pasos e infografía/diagrama.
  - `#/unidad/:semanaId/:id` -> Visualizador paso a paso de capas de contenido (Paso 1 a Paso 8).
  - `#/portafolio`, `#/biblioteca`, `#/credenciales`, `#/ruta`, `#/evaluador`.
- **Sistema de Tokens CSS (`assets/css/tokens.css`)**:
  - `--ucr-blue`: `#005da4`
  - `--ucr-dark`: `#2c3e50`
  - `--ucr-celeste`: `#4daedb`
  - `--accent-yellow`: `#f1c40f`
  - `--accent-green`: `#1e8449`
  - `--accent-red`: `#c0392b`
  - `--bg-light`: `#f4f7f6` | `--bg-card`: `#ffffff`
  - Radios: `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (12px), `--radius-pill` (50px).

---

## 3. Matriz de Auditoría Semana por Semana (19 Semanas vs Modelo Canónico de 7 Capas)

| Bloque | Semana | Título | ¿Existe? | Orden correcto | Capas completas (7/7) | Fidelidad de contenido v23 | Límites de palabras (Intro ≤100, Teórico ≤250) | Nota GPT especializado |
|---|---|---|---|---|---|---|---|---|
| **Fundamentos** | **F-1** | Configuración, seguridad y primer contacto | Sí | Sí | Parcial (Paso 6 sin prompt CIFRCE v2.3) | ❌ Incompleto en prompt CIFRCE | Intro: 101 palabras (OK). Teórico: 226 + 73 palabras (OK). | N/A |
| **Fundamentos** | **F-2** | Prompting empresarial: modelo CIFRCE | Sí | Sí | Parcial (Paso 6 sin prompt CIFRCE v2.3) | ❌ Incompleto en prompt CIFRCE | Intro: 101 palabras (OK). Teórico: 186 + 73 palabras (OK). | N/A |
| **Módulo A** | **A-1** | Tendencias de mercado | Sí | Sí | Parcial | ❌ Teórico Parte 2 es plantilla genérica; prompt no CIFRCE | Intro: 113 palabras. Teórico: 31 + 73 palabras. | N/A |
| **Módulo A** | **A-2** | El cliente ideal: quién compra y por qué | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 112 palabras. Teórico: 32 + 73 palabras. | ❌ Falta nota & enlace a "Constructor de Buyer Persona" |
| **Módulo A** | **A-3** | Encuesta de validación (Mom Test) | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 112 palabras. Teórico: 32 + 73 palabras. | ❌ Falta nota & enlace a "Constructor de Encuestas / Mom Test" |
| **Módulo A** | **A-4** | Modelo de negocio preliminar (Lean Canvas) | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 111 palabras. Teórico: 42 + 73 palabras. | N/A |
| **Módulo A** | **A-5** | Cambiar o no de rumbo (Pivote o Perseverar) | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 116 palabras. Teórico: 44 + 73 palabras. | N/A |
| **Módulo B** | **B-1** | FODA dinámico con ChatGPT | Sí | Sí | Parcial | ❌ Prompt CIFRCE resumido sin corchetes v2.3 | Intro: 97 palabras (OK). Teórico: 204 + 73 palabras. | ❌ Falta nota & enlace a "GPT FODA Dinámico" |
| **Módulo B** | **B-2** | Plan de Acción Estratégico | Sí | Sí | Parcial | ❌ Prompt CIFRCE resumido sin corchetes v2.3 | Intro: 96 palabras (OK). Teórico: 222 + 73 palabras. | ❌ Falta nota & enlace a "GPT Plan de Acción 90 días" |
| **Módulo C** | **C-1** | Mapear procesos y cuellos de botella | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 95 palabras (OK). Teórico: 61 + 73 palabras. | N/A |
| **Módulo C** | **C-2** | Atención al cliente (WhatsApp Business) | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 95 palabras (OK). Teórico: 42 + 73 palabras. | N/A |
| **Módulo C** | **C-3** | Documentar procesos (Manual SOP) | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 95 palabras (OK). Teórico: 101 + 73 palabras. | N/A |
| **Módulo D** | **D-1** | Identidad de marca y voz del negocio | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 99 palabras (OK). Teórico: 46 + 73 palabras. | N/A |
| **Módulo D** | **D-2** | Precios con inteligencia (Psicología) | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 98 palabras (OK). Teórico: 145 + 73 palabras. | N/A |
| **Módulo D** | **D-3** | Redes sociales que sí funcionan | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 99 palabras (OK). Teórico: 200 + 73 palabras. | ❌ Falta nota & enlace a "GPT Creador de Contenido" |
| **Módulo D** | **D-4** | Mensajes de venta y campaña AIDA | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 98 palabras (OK). Teórico: 40 + 73 palabras. | N/A |
| **Módulo E** | **E-1** | Costos, precios y punto de equilibrio | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 93 palabras (OK). Teórico: 26 + 73 palabras. | ❌ Falta nota & enlace a "GPT Asesor Financiero Básico" |
| **Módulo E** | **E-2** | Prefactibilidad y decisiones de inversión | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 92 palabras (OK). Teórico: 25 + 73 palabras. | ❌ Falta nota & enlace a "GPT Asesor Financiero Básico" |
| **Módulo E** | **E-3** | Escalamiento y sostenibilidad | Sí | Sí | Parcial | ❌ Teórico Parte 2 genérico; prompt no CIFRCE | Intro: 95 palabras (OK). Teórico: 28 + 73 palabras. | N/A |

---

## 4. Auditoría de Secciones Transversales y Requisitos de Diseño

| Sección Transversal / Requisito | Estado Actual | Diagnóstico y Acción para Fase 2 |
|---|---|---|
| **Disclaimer de inversión ($20/mes)** | ❌ Ausente | Debe colocarse en 3 puntos: 1) Pantalla bienvenida (`renderInicio.js`), 2) Plantilla HTML de correo de activación (`templates/correo_activacion.html`), 3) Encabezado del primer video de cada módulo. |
| **Estructura general del programa** | ⚠️ Parcial | Existe en `renderRuta.js` como listado, pero falta la vista/diagrama de **línea de tiempo horizontal** con la duración acumulada (3-4h/semana). |
| **Lógica de GPTs personalizados** | ❌ Ausente | Falta la vista/página dedicada con las 2 tablas: Fase 1 (8 GPTs genéricos) y Fase 2 (5 sectores del sondeo UCR). |
| **Fuentes y referencias por semana** | ❌ Ausente | `renderBiblioteca.js` no incluye la tabla de respaldo académico UCR semana por semana. Se creará una pestaña/sección dedicada. |
| **Recuadros "¿Para quién es este módulo?"** | ⚠️ Parcial | Los módulos no presentan destacadamente el bloque dual (*Idea/Negocio Nuevo* vs. *Negocio en Marcha*) de `fuente_contenido_v23.md`. |
| **Cajas de nota "Chispa de Innovación"** | ⚠️ Parcial | Existen en el Paso 8 (`u08`), pero el contenido debe revisarse contra la literalidad exacta de `fuente_contenido_v23.md`. |

---

## 5. Inventario de Diagramas Vectoriales HTML/SVG a Desarrollar (Fase 2)

Para enriquecer la experiencia visual sin introducir librerías externas ni romper los tokens de color, se implementarán los siguientes diagramas vectoriales en HTML/SVG puro utilizando los tokens `:root`:

1. **Línea de tiempo del programa**: Muestra la progresión horizontal de los 6 bloques con duraciones y horas acumuladas. (Ubicación: Landing / Ruta).
2. **Diagrama del Modelo CIFRCE**: Muestra las 5 capas interconectadas (Contexto, Instrucción, Formato, Restricciones, Criterios de Éxito). (Ubicación: Semana F-2 y plantillas de prompt).
3. **Stepper de las 7 capas de una semana**: Guía visual del patrón de 7 pantallas. (Ubicación: Onboarding / Introducción).
4. **Matriz FODA cruzado / TOWS (2×2)**: Cuadrantes FO, FA, DO, DA. (Ubicación: Semana B-1).
5. **Matriz Impacto vs. Esfuerzo (2×2)**: Plano cartesiano IVU para el Plan a 90 días. (Ubicación: Semana B-2).
6. **Embudo AIDA**: Flujo visual de 4 etapas para campañas comerciales. (Ubicación: Semana D-4).
7. **Gráfico de Punto de Equilibrio**: Representación ilustrativa de Costos Fijos, Variables e Ingresos. (Ubicación: Semana E-1).
8. **Mapa Fase 1 / Fase 2 de GPTs**: Tarjetas comparativas de GPTs genéricos vs. sectoriales prioritarios del sondeo CIOdD-UCR. (Ubicación: Sección Lógica de GPTs).

---

## 6. Decisiones Ambiguas que Requieren Confirmación Humana

1. **Reproductor de Video Tutorial (Paso 5)**:
   - *Hallazgo*: Los archivos MP4/YouTube finales aún están en producción por el equipo audiovisual.
   - *Propuesta*: Mantener la tarjeta reproductora con diseño premium en HTML/SVG, mostrando el título del video, la sinopsis exacta de `fuente_contenido_v23.md` y los 4 pasos clave demostrados, con un badge que indique `[Demostración en Video — Próximamente]`.

2. **Enlaces a GPTs Especializados (Fase 1 y Fase 2)**:
   - *Hallazgo*: Las URLs finales de ChatGPT Plus publicadas en OpenAI aún no están generadas.
   - *Propuesta*: Crear la interfaz de enlace interactivo con badges distintivos que abran un modal explicativo con la lógica del GPT y redirijan/anclen a la sección central "Lógica de GPTs Personalizados" en la aplicación.

3. **Disclaimer de Inversión en Correo de Activación**:
   - *Hallazgo*: El sitio web no envía correos directamente (es un SPA estático).
   - *Propuesta*: Crear la plantilla institucional en HTML (`templates/correo_activacion.html`) lista para copiar/descargar por parte de los administradores del CIOdD-UCR.

---

## 7. Plan de Trabajo Priorizado para la FASE 2 (Implementación)

Una vez revisada y aprobada esta auditoría, la ejecución de la Fase 2 se estructurará en el siguiente orden secuencial:

- [ ] **Etapa 2.1 — Secciones Transversales y Marco General**:
  - Implementar el Disclaimer de inversión en Welcome Screen y vista de Módulos.
  - Crear la vista/sección "Lógica de GPTs Personalizados" (`gpts.js` / `renderGpts.js`).
  - Crear la vista/sección "Fuentes y Referencias por Semana" en Biblioteca.
  - Insertar los recuadros duales "¿Para quién es este módulo?" en las 6 portadas de módulo.

- [ ] **Etapa 2.2 — Actualización Pedagógica Verbatim por Bloque**:
  - **Bloque Fundamentos (F-1, F-2)**: Inyección de prompts CIFRCE completos y textos teóricos v2.3.
  - **Bloque Módulo A (A-1 a A-5)**: Inyección de prompts CIFRCE con corchetes `[SECTOR]`, `[TIEMPO]`, etc., textos teóricos completos y notas de GPT.
  - **Bloque Módulo B (B-1, B-2)**: Prompts CIFRCE completos de FODA dinámico y Plan a 90 días + notas de GPT.
  - **Bloque Módulo C (C-1 a C-3)**: Prompts CIFRCE de cuellos de botella, WhatsApp Business y Manual SOP.
  - **Bloque Módulo D (D-1 a D-4)**: Prompts CIFRCE de Identidad, Precios, Redes y AIDA + nota de GPT.
  - **Bloque Módulo E (E-1 a E-3)**: Prompts CIFRCE de Punto de equilibrio, Prefactibilidad y Escalamiento + notas de GPT.

- [ ] **Etapa 2.3 — Componentes y Diagramas Vectoriales HTML/SVG**:
  - Construir e integrar los 8 diagramas vectoriales descritos en la Sección 5 utilizando exclusivamente los tokens de `:root`.

- [ ] **Etapa 2.4 — Sincronización y QA**:
  - Replicar de manera íntegra todos los cambios de `/contenido/*.json` hacia `assets/js/contenidoData.js`.
  - Probar navegación, responsiveness mobile/desktop, accesibilidad (contrastes y atributos `aria-label`/`alt`).
  - Actualizar `CHANGELOG.md`.

---
*Reporte generado por Antigravity — Listo para revisión del equipo UCR / AUGE / CIOdD.*
