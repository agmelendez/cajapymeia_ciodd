# Guía detallada de trabajo para actualizar la Caja de Herramientas IA

**Versión de referencia:** las 12 semanas publicadas en [Caja de Herramientas IA para MiPYME](https://agmelendez.github.io/cajaherramientaspymes/), observadas el 17 de setiembre de 2026.  
**Estado:** propuesta de producción editorial, pedagógica y técnica; no se ha modificado el sitio.  
**Relación con el diagnóstico:** leer junto con `INFORME_REVISION_TECNICO_PEDAGOGICA_2026-09-17.md`.

## 1. Mandato del proyecto

| Decisión | Regla para el trabajo |
|---|---|
| Público | Personas empresarias y emprendedoras de Costa Rica, tanto con negocio en marcha como con una idea por validar. Ejemplos comprensibles para micro y pequeñas empresas, con lenguaje claro y casos en colones. |
| Ruta | **12 semanas vigentes**, 3 módulos de 4 semanas. La versión local de 19 semanas es material de consulta; no se incorporan sus unidades automáticamente. |
| Carga | **25 horas de formación**. Propuesta de diseño: 1 hora de inducción más 2 horas por cada una de las 12 semanas. Esta distribución debe comprobarse en el piloto. |
| Precio | **Curso gratuito**. Ningún logro obligatorio dependerá de pagar un modelo, plataforma o GPT. Cuando una herramienta tenga límites o planes pagos, habrá una vía gratuita equivalente y una plantilla descargable. |
| Constancia | **CIOdD-UCR** es el emisor. Debe redactar o aprobar el texto exacto de requisitos, verificación de evidencias, horas y procedimiento de emisión antes de anunciarlo en el sitio. |
| Asistentes | Se incorporarán **GPTs temáticos por desarrollar**. Cada uno se tratará como recurso de apoyo, con objetivo, fuentes, límites, pruebas y alternativa en forma de prompt o plantilla. |
| Asesoría | Cada tarea indicará si puede hacerse de forma autónoma, si se recomienda revisión, o si requiere revisión humana antes de actuar sobre clientes, dinero, datos o sistemas reales. |

## 2. Criterio de diseño curricular

El curso debe enseñar a **definir el problema, obtener y revisar evidencia, seleccionar una herramienta y decidir responsablemente**. Los nombres de modelos cambian con rapidez. A la fecha de corte ya se habían anunciado [GPT-6 Astra](https://openai.com/index/gpt-6-astra/), [Gemini 3.8 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) y [Claude Fable 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1), presentado por Anthropic en setiembre. Por eso cada ficha de herramienta llevará fecha, plan de acceso, límites y enlace oficial; los ejercicios se formularán de manera que puedan migrar de proveedor.

El sitio afirma “70% práctica, 30% teoría”, pero la distribución visible del ciclo RHEC (reto 5%, hacer 65%, entender 25%, compartir 5%) suma **75%/25%** si reto, hacer y compartir se cuentan como práctica. Propuesta para alinear las 25 horas con 70/30: **17,5 horas prácticas y 7,5 teóricas**. En la hora de inducción: 42 minutos de práctica y 18 de teoría. Por semana: 84 minutos de práctica y 36 de teoría. Ajustar el ciclo semanal a reto 5%, hacer 60%, entender 30%, compartir 5%, o aprobar otra distribución coherente y corregir todos los materiales. El porcentaje expresa diseño instruccional, no una medición ya realizada de tiempo de uso.

### Niveles de asesoría, visibles en cada actividad

- **A0 · Autónoma:** ejercicio con datos ficticios o anonimizados y decisión reversible. Incluye instrucciones y autocontrol.
- **A1 · Revisión recomendada:** el resultado afectará decisiones comerciales u operativas; pedir contraste a una persona asesora, par del negocio o profesional del tema antes de implementarlo.
- **A2 · Revisión necesaria antes de actuar:** uso de datos personales identificables, conexión a cuentas o automatizaciones reales, comunicación masiva, uso de voz/imagen ajena, compromisos financieros, afirmaciones legales/tributarias o solicitudes de constancia. El curso puede enseñar con una simulación sin esperar asesoría; la aplicación real queda condicionada a revisión humana competente.

La marca A2 debe decir **quién revisa y qué revisa**. Si CIOdD-UCR no ofrece asesoría individual, no se prometerá; se indicará el tipo de profesional o responsable empresarial que debe validar la implementación. En ninguna semana se pedirá subir datos sensibles a un GPT público para obtener la constancia.

## 3. Matriz de actualización de las 12 semanas

Los títulos y temas observados corresponden al sitio público. Las tareas y evidencias de esta tabla son **propuestas para desarrollar y validar**, no se presentan como contenido que ya esté publicado.

| Semana y foco vigente | Desarrollo prioritario | Tarea y evidencia esperada | Asesoría y control |
|---|---|---|---|
| **1. Configuración y primer contacto**. Qué es IA generativa, seguridad, ChatGPT/Claude/Gemini. | Actualizar modelos y acceso gratuito; explicar límites, alucinaciones, fuentes, privacidad de cada servicio, cuentas personales y empresariales. Añadir comparación por tarea y guía de datos prohibidos. | Crear un protocolo de uso de IA de una página para el negocio y resolver una consulta con datos ficticios en dos herramientas; registrar diferencias y fuentes. | **A0** para simulación. **A2** antes de cargar datos reales de clientes o empleados: responsable de datos/asesoría jurídica revisa finalidad, consentimiento y servicio. |
| **2. Ingeniería de prompts CIFRCE**. Few-shot e iteración. | Mantener CIFRCE como apoyo, añadir criterios de verificación y revisión de salidas; distinguir pedir a IA que investigue de consultar una fuente verificable. Ejemplos cortos en español de Costa Rica. | Crear dos versiones de un prompt para una tarea empresarial, probarlas, comparar calidad con rúbrica y corregir una respuesta incorrecta. | **A0** con caso ficticio; **A1** si el resultado se convertirá en política, oferta o consejo al cliente. |
| **3. Diagnóstico y FODA dinámico**. Buyer persona y finanzas básicas. | Separar evidencia interna, investigación de clientes e inferencia de IA. Evitar buyer persona ficticia presentada como clientela real. Explicar límites de FODA y cálculos básicos. | FODA con evidencia o hipótesis etiquetadas, perfil de cliente contrastado con personas reales y hoja simple de ingresos, costos y supuestos. | **A1** revisión empresarial/contable; **A2** antes de decisiones de crédito, inversión o uso de datos identificables. |
| **4. Plan de acción estratégico**. Informe integrador. | Convertir diagnóstico en 3 prioridades con responsable, plazo, costo, indicador y riesgo; ofrecer rutas de idea nueva y negocio en marcha. | Plan de 90 días con línea de base, tres acciones priorizadas y criterios de éxito verificables. | **A1** revisión de viabilidad por responsable del negocio; **A2** para obligaciones financieras o laborales. |
| **5. Automatización sin código**. Triggers, acciones, routers; Make/n8n. | Enseñar mapa de proceso antes de conectar herramientas; costo total, permisos, mantenimiento, fallos y reversión. Empezar en entorno de prueba. | Diagrama del proceso actual, prototipo con datos ficticios, registro de 3 pruebas y plan de reversión. | **A0** simulación; **A2** antes de activar cuentas o flujos reales: persona responsable de sistemas y datos valida permisos y errores. |
| **6. Chatbots y atención al cliente**. WhatsApp/correo y escalamiento. | Definir alcance del bot, reglas de respuesta, consentimiento, cuándo transferir a humano, horarios, errores y mensajes fuera de alcance. Evitar prometer integración automática gratuita sin comprobarla. | Guion de 10 consultas frecuentes, matriz de escalamiento y prueba con casos difíciles. | **A1** revisión de tono y exactitud; **A2** antes de contacto automático con clientes: responsable comercial y de privacidad. |
| **7. CRM y sistematización**. Clientes y seguimiento. | Enseñar campos mínimos, calidad de datos, acceso, retención, copias y exclusión de datos innecesarios; clarificar qué relación guarda la infografía de sandbox regulatorio con CRM. | CRM de ejemplo sin personas reales, definición de campos y flujo de seguimiento con responsables. | **A0** prototipo ficticio; **A2** antes de importar bases reales: responsable de datos revisa consentimiento, acceso y conservación. |
| **8. ROI de automatización**. Tiempo y dinero ahorrados. | Distinguir ahorro medido de estimado; incorporar costos de licencias, preparación, mantenimiento y fallos; escenarios conservador/base/optimista. | Hoja de ROI con fórmula visible, supuestos, línea de base, sensibilidad y decisión provisional. | **A1** revisión financiera; **A2** antes de una inversión o contrato relevante: profesional financiero/contable o dirección. |
| **9. Identidad visual y diseño**. Imágenes con IA y Canva. | Marca, audiencia, consistencia, accesibilidad, derechos de uso, procedencia de imágenes y prevención de semejanza con marcas ajenas. | Mini guía de marca y dos piezas contrastadas con una lista de legibilidad y derechos. | **A1** revisión comercial; **A2** si se usan logos, rostros o material de terceros sin licencia clara. |
| **10. Producción audiovisual**. Video, voz y avatares. | Consentimiento para voz/imagen, divulgación de contenido sintético cuando corresponda, subtítulos, guion, accesibilidad y alternativa sin avatar. | Video breve o storyboard, subtítulos/transcripción y ficha de permisos de activos. | **A1** revisión de mensaje; **A2** antes de clonar voz/imagen o publicar testimonios reales: titulares de derechos y responsable legal/comercial. |
| **11. Prefactibilidad**. Viabilidad de producto. | Demanda, costos, capacidad, flujo de caja, riesgos y fuentes; diferenciar hipótesis de datos observados. No dejar que el GPT concluya por sí solo “invertir/no invertir”. | Ficha de decisión con escenarios, supuestos, evidencia, umbral de pérdida aceptable y preguntas pendientes. | **A2** antes de comprometer capital: persona empresaria y asesoría financiera/sectorial validan supuestos y cálculo. |
| **12. Campaña de lanzamiento**. Integración final. | Objetivo, segmento, canal, mensaje, calendario, presupuesto, métricas y tratamiento de datos. La actividad debe integrar hallazgos de las semanas 3, 8 y 11. | Campaña de 4 semanas lista para revisión, con 3 piezas, presupuesto, consentimiento de activos, indicadores y plan de aprendizaje; portafolio final. | **A1** revisión editorial; **A2** antes de publicar, gastar o contactar clientes: responsables comercial, financiero y de datos. |

**Dependencia pedagógica:** aunque la web liste tres módulos, las semanas 1–2 constituyen la base de seguridad y verificación. Quien entre por un módulo posterior deberá completar una comprobación breve de esas competencias. La ruta de 12 semanas podrá adaptar ejemplos según etapa del negocio sin obligar a cursar una segunda ruta de 19 semanas.

## 4. Ficha obligatoria para producir cada semana

Cada equipo redactor entregará **una ficha de contenido y una ficha de revisión** por semana. Ninguna semana pasará a publicación si falta uno de estos campos:

1. Problema concreto de negocio, etapa a la que aplica y resultado observable.
2. Tiempo realista: 36 minutos de teoría, 84 de práctica; desglose de cada paso.
3. Conceptos mínimos y fuentes primarias o académicas, con URL, fecha de consulta y alcance de la fuente.
4. Caso costarricense ficticio: sector, tamaño, montos en colones, supuestos visibles y ninguna persona identificable.
5. Tarea autónoma paso a paso, alternativa gratuita, plantilla descargable y salida esperada de ejemplo.
6. Prompt o GPT temático sugerido, con fecha de revisión, limitaciones y opción manual equivalente.
7. Evidencia a entregar, formato, reglas de anonimización y rúbrica de calidad.
8. Nivel A0/A1/A2, quién revisa y condición exacta que activa asesoría.
9. Errores frecuentes, forma de corregirlos y pregunta de reflexión crítica.
10. Accesibilidad: texto alternativo útil, transcripción/subtítulos, teclado, móvil y lectura sin conexión cuando sea viable.
11. Enlaces a video, lectura, herramienta y fuentes; fecha y resultado de su última verificación.
12. Responsable editorial, revisor técnico, revisor pedagógico, versión y próxima fecha de revisión.

**Rúbrica transversal sugerida (0–3 por criterio):** pertinencia del problema, calidad de datos/fuentes, comprobación humana, cálculo o ejecución reproducible, privacidad/derechos y utilidad de la decisión. Para aprobar, exigir evidencia suficiente en todos los criterios críticos; no usar solo porcentaje de clics o tiempo de pantalla. CIOdD-UCR debe aprobar los umbrales de constancia antes de programarlos.

## 5. GPTs temáticos: catálogo y trabajo pendiente

**Catálogo inicial propuesto, sujeto a revisión curricular:** diagnóstico/FODA, plan de acción, mapa de procesos y automatización, atención al cliente, CRM y datos, ROI y costos, identidad/contenido, prefactibilidad, y campaña comercial. Se pueden fusionar temas si el piloto muestra que varios asistentes confunden a las personas participantes. Los GPTs públicos actualmente listados en la biblioteca se inventariarán por separado; no se asumirán como desarrollos del curso ni se cambiará su titularidad.

Para **cada GPT temático** preparar: propósito y semana; instrucciones del sistema; fuentes autorizadas y fecha; preguntas iniciales; datos permitidos/prohibidos; casos de prueba con respuestas esperadas; rechazo o derivación de decisiones legales, tributarias, financieras o de datos personales; protocolo de fallos; accesibilidad; responsable de revisión; URL y plan de mantenimiento. Probar al menos un caso correcto, uno ambiguo, uno con datos sensibles, uno fuera del alcance y uno con cálculo o fuente errónea. Ninguna respuesta del GPT sustituye la rúbrica ni la asesoría A2.

Antes de aprobar su uso obligatorio, verificar **acceso real desde Costa Rica sin pago**, límites de uso y necesidad de iniciar sesión. Si ese acceso no es estable, el ejercicio obligatorio se resolverá con prompt y plantilla descargables; el GPT quedará como apoyo incluido en la biblioteca. Publicar los GPTs solo después de revisión técnica, pedagógica, de privacidad e institucional.

## 6. Frentes de trabajo y entregables

| Orden | Frente | Acciones concretas | Evidencia de cierre |
|---|---|---|---|
| 1 | Inventario del sitio de 12 semanas | Congelar copia de referencia; listar texto, infografías, videos, enlaces, formulario, biblioteca, políticas y mensajes institucionales; marcar desactualización y autor. | Matriz de trazabilidad con 12 semanas y cada recurso actual; versión/fecha de la página pública. |
| 2 | Marco institucional | CIOdD-UCR valida denominación, gratuidad, 25 horas, constancia, requisitos, tratamiento del portafolio y canales de contacto; distinguir colaboración de emisor. | Texto público aprobado y procedimiento verificable de emisión. |
| 3 | Diseño curricular | Producir fichas de semanas 1–12; resolver contradicción 70/30; dos tipos de negocio; niveles A0/A1/A2; rúbricas y ejemplos resueltos. | 12 fichas y 12 rúbricas revisadas, suma de 25 horas y matriz de competencias. |
| 4 | Verificación de contenidos | Comprobar afirmaciones sobre modelos, planes, costos, privacidad, herramientas, legislación, finanzas y metodologías; registrar fuente y fecha. | Bitácora de correcciones; ninguna cifra o función dependiente de proveedor sin fecha. |
| 5 | Medios y recursos | Abrir y revisar todos los videos/enlaces usados; comprobar idioma, permisos, vigencia, correspondencia con semana, subtítulos, acceso y sustituto. Revisar las infografías visualmente y su texto. | Catálogo aprobado; recursos rotos, privados o no pertinentes sustituidos. |
| 6 | GPTs temáticos | Diseñar, construir, evaluar y documentar el catálogo aprobado; probar acceso gratuito y alternativa manual. | Fichas, pruebas y aprobación de cada GPT; enlaces reales. |
| 7 | Sitio y accesibilidad | Incorporar los contenidos aprobados en la versión pública de 12 semanas; navegación, móvil, teclado, contraste, infografías, videos, formularios, avisos de terceros y constancia. | Lista de pruebas por pantalla y dispositivo, revisión WCAG 2.2 AA documentada sin declarar conformidad antes de comprobarla. |
| 8 | Piloto y publicación | Participantes de idea nueva y empresa en marcha, sectores distintos y diversos niveles digitales; medir tiempo real, comprensión, terminación, costo, calidad de evidencia y puntos de asesoría. | Informe de piloto, correcciones, aprobación CIOdD-UCR y registro de versión publicada. |

**Orden de revisión por impacto:** primero seguridad/privacidad y constancia; después finanzas, prefactibilidad y automatizaciones con datos reales; luego contenidos que dependen de proveedor; finalmente estilos y materiales de apoyo. Cada frente debe cerrar sus verificaciones antes de publicar una nueva versión.

## 7. Pruebas y mantenimiento

- **Funcionalidad:** abrir y cerrar las 12 semanas; navegación por teclado y móvil; carga de las 12 infografías; enlaces y descargas; formularios; retorno al sitio; estados de foco; manejo de error; ausencia de rutas a la versión de 19 semanas no aprobada.
- **Contenido:** una persona ajena al equipo debe poder completar cada tarea con los materiales gratuitos y entender qué se verificó, qué sigue siendo supuesto y cuándo requiere asesoría.
- **Cálculos:** revisar manualmente ejemplos de costos, ROI y prefactibilidad con una hoja independiente; probar escenarios de cero ventas, costos omitidos y resultados negativos.
- **Datos y terceros:** identificar a qué dominio va cada recurso; evitar enviar datos empresariales como parte de pruebas; publicar avisos claros sobre servicios externos y sus controles.
- **Evaluación:** el portafolio debe contener productos de negocio revisables; establecer cómo CIOdD-UCR valida identidad, horas y calidad de evidencia sin prometer automatización inexistente.
- **Mantenimiento:** revisión editorial trimestral de herramientas, planes, enlaces, modelos y GPTs; revisión inmediata cuando cambie una función crítica, una política de datos o un requisito institucional. Conservar historial de cambios y fuente primaria de cada afirmación volátil.

## 8. Pendientes de aprobación antes de desarrollar el sitio

1. Requisitos y flujo exactos de la constancia CIOdD-UCR, incluido quién revisa el portafolio y cómo se protege.
2. Catálogo final y responsables de los GPTs temáticos, junto con su modalidad gratuita de acceso.
3. Capacidad real de asesoría ofrecida por el programa: A1/A2 deben indicar revisión externa o del propio negocio si no existe tutoría CIOdD-UCR.
4. Distribución 70/30 propuesta y umbral de aprobación de la rúbrica; confirmar tras el piloto la carga de 25 horas.

Estos pendientes no impiden avanzar con el inventario, la verificación de fuentes, las fichas de semana y los prototipos con datos ficticios. Sí impiden publicar promesas de constancia, tutoría o acceso a GPTs que todavía no estén verificadas.
