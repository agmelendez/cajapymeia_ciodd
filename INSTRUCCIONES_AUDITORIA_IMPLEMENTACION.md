# Instrucciones para el agente de desarrollo (Antigravity)
## Auditoría y completitud de contenidos — Caja de Herramientas de IA para Emprendedores y MiPYMES
**Proyecto AUGE · CIOdD-UCR · DIPROVID** — Alineado con *Diseño Curricular y Guía de Producción v2.3*

---

## 0. Rol del agente y forma de trabajo

Actúas como desarrollador full-stack encargado de **corregir y completar** un sitio ya construido, no de rediseñarlo ni reconstruirlo desde cero. El documento fuente de verdad para todo el contenido pedagógico es `fuente_contenido_v23.md` (adjunto en este mismo paquete de instrucciones), que es la extracción íntegra del documento "Diseño Curricular y Guía de Producción v2.3". Cuando estas instrucciones te pidan un texto, un prompt CIFRCE, un logro de semana, una fuente bibliográfica, etc., ese texto **debe copiarse fielmente** de `fuente_contenido_v23.md` (respetando su literalidad, terminología y límites de extensión), nunca inventarse ni parafrasearse libremente.

El trabajo se ejecuta en **dos fases secuenciales y no simultáneas**:

1. **FASE 1 — AUDITORÍA.** Solo inspección y diagnóstico. Ninguna línea de código de producción se modifica en esta fase. Se entrega un reporte.
2. **FASE 2 — IMPLEMENTACIÓN.** Solo después de completar la Fase 1 y de que el reporte haya sido revisado, se procede a rellenar vacíos, corregir estructura e insertar contenido/diagramas.

No saltes a la Fase 2 sin haber producido el artefacto `AUDITORIA.md` descrito abajo. Si encuentras ambigüedad entre lo que ves en el repositorio y lo que exige el documento fuente, regístralo como hallazgo en la auditoría en lugar de decidir unilateralmente.

---

## 1. Reglas de oro (no negociables)

Estas reglas aplican a **toda** la intervención, en ambas fases:

1. **No se toca el sistema de diseño existente.** Paleta de colores, tipografías, espaciados, tokens CSS (variables `:root`, clases utilitarias, breakpoints), logos, iconografía y componentes visuales ya construidos se preservan tal cual están. Cualquier nuevo elemento (sección, tarjeta, diagrama, tabla) debe **reutilizar** las variables/clases existentes, nunca introducir colores, fuentes o espaciados nuevos "a ojo".
2. **No se rompe funcionalidad existente.** Navegación entre pantallas ("Siguiente"/"Anterior"), rutas, routing por módulo/semana, estado de progreso del usuario, GPTs enlazados, formularios de tareas, etc. deben seguir funcionando igual o mejor después de la intervención.
3. **Contenido faltante se crea, no se omite.** Si una semana, capa, módulo o sección no existe en el sitio actual, se construye siguiendo el modelo canónico de la sección 2 y con el contenido exacto de la sección 4 y de `fuente_contenido_v23.md`.
4. **Fidelidad de contenido sobre creatividad.** Este es material curricular institucional (UCR/CIOdD) con fuentes académicas verificadas (ver "Fuentes y referencias por semana" al final del documento fuente). No resumas de más, no cambies cifras, no alteres nombres de metodologías (CIFRCE, Lean Canvas, FODA/TOWS, AIDA, etc.).
5. **Límites de extensión son de producto, no cosméticos.** Texto introductorio ≤100 palabras; cada pantalla de texto teórico ≤250 palabras (se parte en 1–2 pantallas si excede). Si el contenido fuente excede esto, divídelo en pantallas adicionales siguiendo el patrón "PANTALLA 1/2", "PANTALLA 2/2" que ya usa el documento fuente — no lo recortes arbitrariamente.
6. **El disclaimer de inversión es de aparición obligatoria en 3 puntos** (ver sección 5.1): pantalla de bienvenida, correo de activación, e inicio del primer video de cada módulo. Verificar los tres, no asumir que uno implica los otros.
7. **Todo lo que insertes debe ser accesible y responsive**: HTML semántico, `alt` en imágenes/diagramas SVG, contraste AA mínimo usando los tokens de color existentes, y comportamiento correcto en mobile (el documento fuente indica explícitamente diseño mobile-first para MiPYMES con poco tiempo).

---

## 2. Modelo canónico de contenido por semana ("capas")

Cada semana del programa —sin excepción— debe implementarse como una secuencia de pantallas independientes navegables con botón "Siguiente". Esta es la estructura de referencia contra la cual se audita cada semana existente:

| # Pantalla | Capa | Contenido esperado |
|---|---|---|
| 1 | **Logro de la semana** | Motivador visual: qué logrará la persona en su negocio esta semana. Texto corto y accionable. |
| 2 | **Texto introductorio** | Presentación del tema, máx. 100 palabras. |
| 3–4 | **Texto teórico** | Explicación del concepto. 1 o 2 pantallas, máx. 250 palabras cada una. |
| 5 | **Video tutorial** | Placeholder/reproductor de video de 4 min mostrando ChatGPT en uso (título + sinopsis según fuente, aunque el video en sí no exista todavía). |
| 6 | **Tarea 1: Prompt CIFRCE** | Prompt estructurado en las 5 secciones (Contexto, Instrucción, Formato, Restricciones, Criterios de éxito), con campos entre corchetes para que la persona complete con datos reales, y mecanismo de carga del resultado. |
| 7 | **Tarea complementaria + Chispa de Innovación** | Actividad distinta al prompt (análisis, reflexión, foro, ejercicio) + tip breve de innovación relacionado al tema de la semana. |

Nota especial: algunas semanas (A-2, A-3, B-1, B-2, D-3, E-1, E-2) indican explícitamente que la Tarea 1 se resuelve dentro de un **GPT especializado** (p. ej. "Validador de Ideas", "FODA Dinámico") en lugar de un chat genérico. Cuando el documento fuente incluya la nota *"este tema cuenta con un chat especializado..."*, esa nota debe aparecer visible en la pantalla de tarea, con el nombre exacto del GPT y un enlace/placeholder de acceso.

---

## FASE 1 — PROTOCOLO DE AUDITORÍA

Ejecuta los siguientes pasos en orden. No corrijas nada todavía; solo documenta.

### 1.1 Inventario técnico
- Genera un árbol de archivos del repositorio (profundidad razonable, ignorando `node_modules`/`.git`).
- Identifica el stack (framework, generador estático, JS plano, etc.), el sistema de theming (dónde viven las variables de color/tipografía) y el patrón de componentes reutilizables (tarjetas, tablas, cajas de nota, reproductor de video, etc.).
- Identifica cómo está modelado el contenido actualmente: ¿hardcodeado en HTML por semana? ¿JSON/YAML de datos + plantilla? ¿CMS? Esto determina cómo debes insertar el contenido faltante en la Fase 2 sin romper el patrón existente.
- Verifica el mecanismo de navegación "Siguiente"/progreso entre pantallas y cómo se referencian las semanas (slugs, IDs, rutas).

### 1.2 Inventario estructural (contra la sección 3 — Mapa del programa)
Para cada uno de los 6 bloques (Fundamentos, A, B, C, D, E) y sus 19 semanas, verifica y registra en una tabla:

- ¿Existe la semana como sección/página en el sitio? (Sí / No / Parcial)
- ¿Coincide el orden (Fundamentos primero, luego A→E)?
- ¿Están las 7 capas completas para esa semana? Marca cuáles faltan.
- ¿El texto presente coincide con el documento fuente, o es un placeholder/lorem ipsum/versión resumida de Antigravity que hay que reemplazar?
- ¿Respeta los límites de palabras (intro ≤100, teórico ≤250 por pantalla)?
- ¿Aparece la nota de GPT especializado donde corresponde (A-2, A-3, B-1, B-2, D-3, E-1, E-2)?

### 1.3 Inventario de secciones transversales
Verifica específicamente la presencia y correctitud de:

- [ ] Disclaimer de inversión en ChatGPT Plus/Team — presente en pantalla de bienvenida, correo de activación, y encabezado de video del primer módulo de cada bloque.
- [ ] Sección "Estructura general del programa" (tabla de 6 bloques con semanas/duración).
- [ ] Sección "Lógica de GPTs personalizados" con sus dos tablas: Fase 1 (8 GPTs genéricos) y Fase 2 (5 sectores con GPTs sectoriales prioritarios).
- [ ] Sección/página "Fuentes y referencias por semana" (tabla completa de respaldo bibliográfico — actualmente puede no existir en el sitio y es de alto valor institucional para UCR).
- [ ] Recuadro "¿Para quién es este módulo?" al inicio de cada uno de los 6 bloques.
- [ ] Cajas de nota tipo "Chispa de Innovación" con estilo diferenciado visualmente pero coherente con el sistema de diseño.

### 1.4 Entregable de la Fase 1: `AUDITORIA.md`
Produce un único archivo `AUDITORIA.md` en la raíz del repo con:

1. Resumen ejecutivo (cuántas semanas completas / parciales / faltantes, cuántas secciones transversales faltan).
2. Tabla semana por semana (19 filas) con las columnas del punto 1.2.
3. Lista de hallazgos de diseño (si detectas inconsistencias de color/tipografía entre secciones ya existentes — repórtalas, no las arregles todavía).
4. Lista de decisiones ambiguas que requieren confirmación humana antes de la Fase 2 (por ejemplo: dónde vive el reproductor de video si no hay video real, cómo enlazar los GPTs si aún no existen los enlaces reales de OpenAI).
5. Plan de trabajo propuesto para la Fase 2, priorizado por bloque (sugerencia: Fundamentos → A → B → C → D → E → secciones transversales, en ese orden, porque Fundamentos es prerrequisito pedagógico de todo lo demás).

**Detente aquí y presenta `AUDITORIA.md` antes de escribir código de la Fase 2.**

---

## FASE 2 — PROTOCOLO DE IMPLEMENTACIÓN

Solo después de la auditoría. Trabaja bloque por bloque, en el orden del plan aprobado.

### 2.1 Reglas de extracción de contenido
Para cada semana, localiza en `fuente_contenido_v23.md` el bloque `Semana X-N` correspondiente y extrae, en este orden, exactamente:
- El título de la semana (el que aparece junto a "Semana X-N").
- El texto de "🏆 LOGRO DE LA SEMANA".
- El/los párrafo(s) bajo "Texto introductorio".
- El/los párrafo(s) bajo "Texto teórico" (respetando la división en pantallas 1/2, 2/2 si existe).
- La descripción del video tutorial (título + sinopsis, dentro de la caja "▶").
- El prompt CIFRCE completo de "Tareas de la semana", con sus 5 secciones (Contexto/Instrucción/Formato/Restricciones/Criterios de éxito) y los campos entre corchetes intactos.
- La tarea complementaria.
- La(s) "Chispa(s) de Innovación".
- La nota de GPT especializado, si aplica.

No omitas los corchetes `[SECTOR]`, `[TIEMPO]`, etc. — son campos editables por el usuario final dentro del prompt, parte del diseño instruccional.

### 2.2 Mapa completo del programa (referencia rápida — 19 semanas)

| Bloque | Semana | Título | Logro de la semana (resumen) |
|---|---|---|---|
| Fundamentos | F-1 | Configuración, seguridad y primer contacto con ChatGPT | Cuenta configurada de forma segura, información del negocio organizada en un Proyecto propio. |
| Fundamentos | F-2 | Prompting empresarial: el modelo CIFRCE en práctica | Aprende a construir prompts profesionales con CIFRCE, usado en todo el resto del programa. |
| Módulo A | A-1 | Tendencias de mercado: ¿hay interés real en mi idea? | Análisis honesto de si la idea tiene demanda real o necesita ajustes antes de invertir. |
| Módulo A | A-2 | El cliente ideal: quién compra y por qué | Buyer Persona clara del cliente ideal, validada con al menos 3 personas reales. *(GPT: Constructor de Buyer Persona)* |
| Módulo A | A-3 | Encuesta de validación: preguntar bien antes de invertir | Encuesta aplicada a mínimo 8 personas, conclusión sobre validación suficiente. |
| Módulo A | A-4 | Modelo de negocio preliminar: ¿los números cuadran? | Lean Canvas completo y simulación de escenarios que revela los supuestos más arriesgados. |
| Módulo A | A-5 | Cambiar o no de rumbo: ¿mi oferta tiene el potencial que creo? | Cierre del Módulo A: decisión de continuar, ajustar o pivotar. |
| Módulo B | B-1 | FODA dinámico: radiografía del negocio con ChatGPT | FODA dinámico ponderado con las 3 prioridades más urgentes. *(GPT: FODA Dinámico)* |
| Módulo B | B-2 | Plan de Acción Estratégico con ChatGPT | Cierre del Módulo B: Plan de Acción de 90 días para las 5 acciones más importantes. *(GPT: Plan de Acción 90 días)* |
| Módulo C | C-1 | Mapear procesos y encontrar cuellos de botella | Identifica las 3 tareas repetitivas que más tiempo consumen al mes y su costo. |
| Módulo C | C-2 | Atención al cliente y seguimiento con ChatGPT | Respuestas rápidas en WhatsApp Business y mensajes de seguimiento para reactivar clientes. |
| Módulo C | C-3 | Documentar procesos: el manual básico del negocio | Cierre del Módulo C: procedimientos documentados de los 3 procesos más críticos. |
| Módulo D | D-1 | Identidad de marca y voz del negocio | Guía de tono de voz y 3 mensajes clave listos para todos los canales. |
| Módulo D | D-2 | Precios con inteligencia: psicología del precio | Revisión completa de precios y al menos 2 ajustes concretos aplicables de inmediato. |
| Módulo D | D-3 | Redes sociales que sí funcionan para MiPYMES | Estrategia clara de redes sociales enfocada solo en las que aportan valor real. *(GPT: Creador de Contenido)* |
| Módulo D | D-4 | Mensajes de venta y campaña AIDA | Cierre del Módulo D: campaña comercial completa de 4 semanas lista para ejecutar. |
| Módulo E | E-1 | Costos, precios y punto de equilibrio | Cálculo exacto de unidades a vender al mes para cubrir costos y generar ganancia. *(GPT: Asesor Financiero Básico)* |
| Módulo E | E-2 | Prefactibilidad y decisiones de inversión | Decisión fundamentada sobre una inversión concreta: invertir, esperar o descartar. *(GPT: Asesor Financiero Básico)* |
| Módulo E | E-3 | Escalamiento y sostenibilidad: preparar el negocio para crecer | Cierre del programa: plan de escalamiento a 12 meses + carta reflexiva al propio negocio. |

> Esta tabla es solo un mapa de navegación rápida. El **texto real** de cada capa se extrae íntegro de `fuente_contenido_v23.md`, nunca se redacta a partir de esta fila-resumen.

### 2.3 Recuadros "¿Para quién es este módulo?"
Cada uno de los 6 bloques abre con un recuadro destacado "🆕🏢 ¿Para quién es este módulo?" con un párrafo dirigido tanto a ideas no lanzadas como a negocios en marcha. Localiza el texto exacto de cada bloque en `fuente_contenido_v23.md` (aparece inmediatamente después del encabezado de cada módulo) e impleméntalo como el mismo tipo de componente "caja de nota" ya usado en el sitio (o créalo si no existe, reutilizando el estilo de las demás cajas de nota/alerta del sistema de diseño).

### 2.4 Sección "Estructura general del programa"
Si no existe como sección propia y navegable (p. ej. página de "Ruta del programa" o "Mapa del curso"), créala con:
- La tabla de 6 bloques × semanas × duración acumulada (ver `fuente_contenido_v23.md`, sección "Estructura final del programa (v2.3)").
- La nota sobre la duración real (3–4 horas efectivas por semana).
- Idealmente como **diagrama de línea de tiempo horizontal** (ver sección 3 de diagramas más abajo) en vez de solo tabla, si el sitio ya usa componentes visuales de progreso en otras partes.

### 2.5 Sección "Lógica de GPTs personalizados"
Debe existir como página o sección propia (no solo mencionada semana a semana), con las dos tablas completas del documento fuente:
- **Fase 1** — 8 GPTs genéricos con su módulo asociado y función (Validador de Ideas, Constructor de Buyer Persona, FODA Dinámico, Plan de Acción 90 días, Banco de Respuestas al Cliente, Creador de Contenido, Estrategia de Precios, Asesor Financiero Básico).
- **Fase 2** — 5 sectores con % del sondeo CIOdD-UCR y sus GPTs sectoriales prioritarios.

Cada mención de un GPT específico dentro de una semana (A-2, A-3, B-1, B-2, D-3, E-1, E-2) debe enlazar (o referenciar por ancla, si el enlace real de OpenAI aún no existe) a esta sección central, para que el usuario entienda que es un chat distinto al genérico.

### 2.6 Sección "Fuentes y referencias por semana"
Casi con certeza es la sección de mayor riesgo de estar ausente en la implementación de Antigravity, y es la de mayor peso institucional (respaldo académico UCR). Crea una página/sección dedicada con la tabla completa (Semana | Tema/concepto | Fuente) del final de `fuente_contenido_v23.md`. Formato sugerido: tabla filtrable/agrupada por bloque, con las citas completas (autor, obra, año) sin alterar. No la reduzcas a una bibliografía genérica al final del sitio: el valor pedagógico es que cada concepto quede trazado a su semana específica.

### 2.7 Disclaimer de inversión (contenido exacto)
Ubica el texto completo en `fuente_contenido_v23.md` bajo "Disclaimer de inversión en la herramienta". Impleméntalo verbatim en los 3 puntos obligatorios (bienvenida, correo de activación, inicio del primer video de cada módulo). Si el sitio no maneja correos, implementa al menos el placeholder/plantilla de correo como artefacto de contenido (HTML de email) para que el equipo de CIOdD lo use en su plataforma de envío.

---

## 3. Diagramas y componentes HTML a insertar

El documento fuente es denso en modelos y matrices que se benefician de representación visual, no solo texto/tabla. Para cada uno, usa SVG o HTML/CSS inline **usando exclusivamente las variables de color y tipografía ya definidas en el sitio** (extraídas en la auditoría 1.1). No uses librerías externas de gráficos si el sitio no las tiene ya instaladas; prioriza SVG puro o HTML+CSS con grid/flexbox.

| Diagrama | Dónde va | Qué debe mostrar |
|---|---|---|
| **Línea de tiempo del programa** | Sección "Estructura general" / landing | 6 bloques en secuencia horizontal (o vertical en mobile), con semanas y duración acumulada; resalta visualmente el bloque en que está el usuario si el sitio ya trackea progreso. |
| **Diagrama CIFRCE** | Semana F-2 y como referencia reutilizable en cada tarea con prompt | Las 5 secciones (Contexto, Instrucción, Formato, Restricciones, Criterios de éxito) como flujo o tarjetas conectadas, con su definición breve (ver texto teórico de F-2). |
| **Las 7 capas de una semana** | Introducción al curso / onboarding | Representación vertical tipo stepper de las 7 pantallas del modelo canónico (sección 2 de este documento), para que el usuario entienda el patrón antes de empezar F-1. |
| **Matriz FODA cruzado / TOWS** | Semana B-1 | Cuadrícula 2×2 (Fortalezas×Oportunidades = FO, Fortalezas×Amenazas = FA, Debilidades×Oportunidades = DO, Debilidades×Amenazas = DA), con los 4 cuadrantes de estrategia. |
| **Matriz Impacto vs. Esfuerzo** | Semana B-2 | Plano cartesiano 2×2 (eje X: esfuerzo, eje Y: impacto) para priorización de acciones del Plan de 90 días. |
| **Embudo AIDA** | Semana D-4 | Embudo de 4 etapas (Atención, Interés, Deseo, Acción) para campañas de venta. |
| **Punto de equilibrio (ilustrativo)** | Semana E-1 | Gráfico simple de costos fijos/variables vs. ingresos cruzándose en el punto de equilibrio — ilustrativo, no calculadora funcional (a menos que el sitio ya tenga capacidad de calculadora interactiva, en cuyo caso sí conviene hacerla funcional con inputs reales). |
| **Mapa Fase 1 / Fase 2 de GPTs** | Sección "Lógica de GPTs personalizados" | Dos columnas o dos fases en tarjetas: genéricos (8) vs. sectoriales (5 sectores), con badge de % del sondeo en cada sector. |

Cada diagrama debe incluir texto alternativo (`aria-label`/`alt`) equivalente en contenido a lo que muestra visualmente, para no dejar la información solo en gráfico.

---

## 4. Checklist de validación final (QA antes de dar por cerrada la Fase 2)

- [ ] Las 19 semanas existen, en el orden correcto (Fundamentos, luego A→E), con las 7 capas completas cada una.
- [ ] Ningún texto de las capas se desvía del contenido de `fuente_contenido_v23.md` (fidelidad, no resumen creativo).
- [ ] Límites de palabras respetados (intro ≤100, teórico ≤250/pantalla).
- [ ] Las 7 notas de GPT especializado (A-2, A-3, B-1, B-2, D-3, E-1, E-2) están presentes y enlazan a la sección de GPTs.
- [ ] Disclaimer presente en los 3 puntos obligatorios, texto verbatim.
- [ ] Sección "Estructura general del programa" existe y es navegable.
- [ ] Sección "Lógica de GPTs personalizados" existe con ambas tablas completas.
- [ ] Sección "Fuentes y referencias por semana" existe, completa y trazada por semana.
- [ ] Los 6 recuadros "¿Para quién es este módulo?" están presentes al inicio de cada bloque.
- [ ] Todos los diagramas nuevos usan tokens de color/tipografía existentes (cero valores hardcodeados nuevos).
- [ ] Navegación "Siguiente"/progreso funciona igual que antes en todas las semanas, incluidas las nuevas.
- [ ] Revisión responsive (mobile/tablet/desktop) de cada sección nueva.
- [ ] Accesibilidad: alt/aria-label en diagramas, contraste AA, foco de teclado en navegación entre pantallas.
- [ ] `CHANGELOG.md` actualizado con el detalle de qué se agregó/corrigió por bloque.

---

## 5. Archivos de este paquete de instrucciones

1. `INSTRUCCIONES_AUDITORIA_IMPLEMENTACION.md` — este documento.
2. `fuente_contenido_v23.md` — extracción íntegra del "Diseño Curricular y Guía de Producción v2.3" (fuente de verdad para todo el texto pedagógico, prompts CIFRCE, fuentes bibliográficas y tablas de GPTs). Colócalo en el repositorio (p. ej. `/docs/fuente_contenido_v23.md`) como referencia persistente del equipo, no solo como insumo de esta tarea puntual.
