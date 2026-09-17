# Ruta de actualización 2.0 — Caja de Herramientas IA para MiPYME

**Fecha de corte:** 17 de setiembre de 2026  
**Estado:** guía de trabajo posterior a la implementación local revisada; no constituye aprobación de publicación ni modifica el sitio.  
**Base:** `GUIA_TRABAJO_ACTUALIZACION_12_SEMANAS_2026-09-17.md`, `INFORME_REVISION_TECNICO_PEDAGOGICA_2026-09-17.md` y segunda revisión de los archivos actuales.  
**Alcance:** ruta vigente de 12 semanas para personas empresarias y emprendedoras de Costa Rica; curso gratuito, 25 horas de formación, constancia emitida por CIOdD-UCR y asistentes temáticos incluidos una vez desarrollados y validados.

## 1. Resultado esperado y reglas de control

La versión 2.0 estará lista cuando una persona pueda completar el diagnóstico, recorrer las 12 semanas, realizar las tareas con recursos gratuitos, guardar y exportar evidencias, comprender cuándo requiere asesoría, y solicitar la revisión de su portafolio mediante un procedimiento institucional confirmado. La constancia depende de verificación humana y de los requisitos que apruebe CIOdD-UCR; un porcentaje de navegación no acredita aprovechamiento.

Se conserva la **ruta de 12 semanas**. La meta de **25 horas** requiere una suma verificable: una hora de inducción y 12 semanas de 120 minutos. La distribución propuesta de cada semana es 36 minutos de teoría y 84 de práctica, sujeta a comprobación en el piloto. Todo ejercicio obligatorio debe tener una vía sin pago. Las actividades con datos reales, conexiones productivas, inversión o derechos de terceros deben mostrar una condición de asesoría concreta.

**Criterios de prioridad:** P0 impide completar o acreditar el curso; P1 muestra información incorrecta, desactualizada o inaccesible; P2 mejora calidad, trazabilidad y mantenimiento. Resolver P0 antes de invitar participantes a una prueba completa.

## 2. Registro de correcciones técnicas

| ID | Prioridad | Hallazgo observado | Tarea de implementación | Prueba de cierre |
|---|---|---|---|---|
| T01 | P0 | El paquete `assets/js/contenidoData.js` define `diagnosticoPreguntas` y `rubricaSemanal`; `assets/js/app.js` busca nombres distintos. | Unificar contrato de datos entre JSON, paquete y aplicación; añadir validación de estructura al cargar. | El diagnóstico muestra todas las preguntas y termina con una ruta; la rúbrica está disponible. Probar carga por paquete y por archivos JSON. |
| T02 | P0 | Las unidades de lectura no se registran como completadas al avanzar; la última unidad de cada semana es `chispa` y su botón no completa la semana. | Definir estados `vista`, `completada` y `evidencia pendiente`; registrar los pasos terminados y cerrar la semana solo cuando cumpla condiciones. | Una persona completa las siete unidades de una semana, sale, vuelve y conserva progreso correcto; repetir en las 12 semanas. |
| T03 | P0 | Una unidad de acción puede completarse con campos de evidencia vacíos; la autoevaluación visible no captura puntuaciones. | Exigir evidencia mínima verificable en tareas obligatorias; implementar rúbrica interactiva o quitar el lenguaje que indique calificación realizada. | El avance no acredita un entregable vacío; cada criterio y decisión de revisión queda registrado. |
| T04 | P0 | El contenido suma 160 minutos por semana: 32 horas en 12 semanas más una hora de inducción, frente a 25 horas declaradas. | Rediseñar o reagrupar unidades para 120 minutos semanales; alinear `duracionMin`, `semanas.json`, textos, README y materiales. | Suma automática = 1 + (12 × 2) = 25 horas; muestra piloto de tiempos reales documentada. |
| T05 | P0 | La solicitud de constancia se habilita por 100 % de progreso local, sin acreditar horas, calidad ni verificación institucional; el canal de correo debe confirmarse. | Separar avance personal de elegibilidad; definir entrega segura, identidad, revisión, umbral, responsable, respuesta y correcciones con CIOdD-UCR. | CIOdD-UCR aprueba el texto y el procedimiento; caso aprobado y caso incompleto producen decisiones distintas y auditables. |
| T06 | P1 | Biblioteca con filtros de módulos antiguos `mf`, `ma`–`me`; recursos actuales tienen `semanaId` y no `moduloId`. Al filtrar por módulo, desaparecen. | Derivar módulo desde la semana o incorporar `moduloId` de forma consistente; generar opciones desde datos actuales. | Los filtros por módulo, semana, tipo y búsqueda devuelven resultados correctos; sin etiqueta genérica errónea. |
| T07 | P1 | Tabla de fuentes, evaluador, parte del inicio y redirecciones aún usan identificadores y mensajes de la ruta anterior. | Inventariar y sustituir referencias F-1/A-1, Toolkit, módulos antiguos y rutas inválidas; decidir destinos de enlaces históricos. | Ningún enlace interno lleva a una semana inexistente; evaluador, biblioteca y menú describen las 12 semanas vigentes. |
| T08 | P1 | Catálogo de GPTs muestra asistentes con enlaces a la portada de ChatGPT y afirma gratuidad/afiliación sin distinguir los pendientes; falta correspondencia con semana 10. | Ficha por asistente con estado, URL probada, titularidad, semana, prueba gratuita y prompt/plantilla equivalente; mostrar «en desarrollo» hasta aprobarlo. | Cada botón abre el recurso anunciado; las 12 semanas tienen apoyo temático aprobado o alternativa documentada. |
| T09 | P1 | README y currículo implementado discrepan en las semanas 5–8 y 10. | Fijar `semanas.json` como inventario curricular aprobado y sincronizar README, evaluador, fichas, biblioteca y navegación. | Comparación automática y revisión editorial confirman títulos, resultados, entregables y tiempos iguales en todas las vistas. |
| T10 | P1 | La página pública observada todavía muestra la experiencia anterior. | Preparar publicación controlada de una versión aprobada y comprobar archivos, rutas y caché en el dominio público. | La URL pública muestra las 12 semanas y pasa la misma lista de pruebas que la versión local; se registra fecha y versión. |
| T11 | P1 | Se ofrece una sola ruta de «controles de datos» para proveedores distintos y se atribuye privacidad total a almacenamiento local, aunque existen servicios externos. | Redactar instrucciones separadas y fechadas para cada proveedor; distinguir datos guardados en el navegador de información enviada al abrir GPTs, videos o asistente externo. | Una persona identifica qué datos salen del sitio y cómo evitar cargar información sensible; enlaces a políticas oficiales vigentes. |
| T12 | P2 | Fuentes, videos, plantillas e infografías necesitan comprobación de pertinencia y acceso por semana. | Revisar contenido, destino, subtítulos, licencia, lectura móvil, alt y fuente primaria; reemplazar lo incorrecto. | Inventario de recursos con URL, fecha de verificación, responsable, semana y resultado; sin enlaces rotos ni títulos que describan otro recurso. |

## 3. Plan de ejecución por puertas de calidad

| Puerta | Trabajo | Entregables exigidos | Condición para avanzar |
|---|---|---|---|
| **A. Congelar base** | Guardar copia y listado de archivos de la implementación actual; numerar hallazgos T01–T12; registrar versión pública observada. | Inventario, historial de cambios y lista única de 12 semanas. | Existe un punto de comparación y ningún material anterior se sobrescribe sin respaldo. |
| **B. Recuperar recorrido** | Resolver T01–T03 y T06–T07; probar diagnóstico, unidades, progreso, biblioteca y enlaces históricos. | Evidencia de pruebas en navegador y registro de fallos corregidos. | Una persona de prueba recorre semana 1 y semana 12 sin bloqueos y puede reanudar. |
| **C. Cerrar diseño curricular** | Resolver T04, T09 y T12; revisar cada entrega, fuente, tiempo, acceso gratuito y asesoría. | 12 fichas y rúbricas coherentes, presupuesto de 25 horas y catálogo de recursos. | Revisión técnica y pedagógica firma cada ficha; 25 horas suman sin contradicciones. |
| **D. Formalizar acreditación** | Resolver T05 con CIOdD-UCR; definir evidencia suficiente, medio seguro, custodia y revisión. | Procedimiento institucional, texto aprobado, formulario o canal confirmado y casos de prueba. | No se anuncia una constancia automática ni se invita a enviar datos sensibles por un canal no validado. |
| **E. Completar GPTs** | Resolver T08; construir, probar y documentar los asistentes temáticos o su equivalente sin pago. | Fichas, prompts, plantillas, pruebas de seguridad, enlaces y estado por semana. | El catálogo distingue recursos publicados de pendientes y cada actividad obligatoria funciona gratis. |
| **F. Piloto y publicación** | Piloto con personas emprendedoras y empresarias; corregir hallazgos; resolver T10–T11 y repetir pruebas en sitio público. | Informe de piloto, aprobación editorial/institucional, versión desplegada y acta de verificación. | La versión pública coincide con la aprobada y reproduce los recorridos críticos. |

Estas puertas indican dependencias, no plazos prometidos. El equipo puede trabajar en fuentes, infografías y fichas mientras se corrigen los errores de carga, pero no debe declarar cerrado el curso antes de completar las pruebas integrales.

## 4. Matriz editorial de las 12 semanas

Para cada fila se debe verificar: **resultado observable, instrucciones paso a paso, ejemplo costarricense ficticio, tiempo total de 120 minutos, acceso gratuito, evidencia, rúbrica, nivel de asesoría, fuentes y enlaces**. La matriz usa los títulos de la implementación local revisada; cualquier cambio de título debe propagarse a todos los materiales.

| Semana | Producto que debe poder revisar una persona | Corrección o prueba específica | Asesoría antes de uso real |
|---|---|---|---|
| 1. Configuración y seguridad | Protocolo de uso de IA y comparación de dos respuestas sin datos reales. | Separar privacidad de ChatGPT, Gemini y Claude; actualizar modelos y planes con fecha. | A2 antes de ingresar datos identificables: responsable de datos o asesoría jurídica. |
| 2. Prompts CIFRCE | Dos versiones del prompt, comparación y respuesta corregida. | Rúbrica que mida verificación de información además de estructura del prompt. | A1 si se convierte en oferta, política o comunicación formal. |
| 3. FODA y cliente | FODA con hechos e hipótesis separados; perfil contrastado. | No presentar perfiles inventados por IA como evidencia de mercado. | A1 revisión del negocio; A2 para crédito o datos personales. |
| 4. Plan de 90 días | Acciones con responsable, plazo, costo, indicador y riesgo. | Coherencia entre prioridades de la semana 3 y plan final. | A1 revisión de viabilidad; A2 ante compromisos financieros o laborales. |
| 5. Automatización sin código | Mapa de proceso, prototipo ficticio, tres pruebas y reversión. | Probar ruta gratuita y límites reales de Make/n8n; no exigir conexión productiva. | A2 antes de conectar cuentas o datos reales: responsable de sistemas y datos. |
| 6. Chatbots | Diez consultas, respuestas, casos fuera de alcance y derivación humana. | Comprobar que las integraciones prometidas existan sin pago o dar alternativa manual. | A2 antes de atender clientes automáticamente: responsable comercial y de privacidad. |
| 7. CRM seguro | Hoja de ejemplo con campos mínimos, acceso y custodia. | Datos ficticios; fuente de cada campo y reglas de eliminación. | A2 antes de importar contactos reales: responsable de datos. |
| 8. ROI | Cálculo con línea de base, costos, supuestos y tres escenarios. | Recalcular fórmulas de forma independiente; separar estimación de ahorro observado. | A2 antes de inversión o contrato relevante: dirección y asesoría financiera. |
| 9. Identidad visual | Mini guía de marca y piezas legibles con derechos comprobados. | Revisar accesibilidad, licencia de imágenes y consistencia con público meta. | A2 antes de usar marcas, rostros o activos ajenos. |
| 10. Audiovisual | Storyboard o video con transcripción/subtítulos y ficha de permisos. | Crear asistente temático o alternativa; comprobar que avatar/voz no sean requisito pago. | A2 antes de clonar voz o imagen o publicar testimonios. |
| 11. Prefactibilidad | Costos, punto de equilibrio, escenarios y decisión provisional. | Cálculos auditables; IA no debe decidir por la persona. | A2 antes de comprometer capital: revisión financiera/sectorial competente. |
| 12. Campaña AIDA | Plan de cuatro semanas, piezas, presupuesto e indicadores; portafolio final. | Integrar evidencia de semanas 3, 8 y 11; revisar consentimiento y métricas. | A2 antes de publicar, gastar o contactar clientes. |

**Niveles:** A0 = ejercicio autónomo con datos ficticios; A1 = revisión recomendada antes de aplicar; A2 = revisión humana necesaria antes de actuar. En cada tarea A2 se debe nombrar **qué decisión se detiene, quién revisa y qué documento o cálculo revisa**. No se debe insinuar tutoría individual del CIOdD-UCR si esa capacidad no ha sido acordada.

## 5. Requisitos de GPTs y asistentes temáticos

El catálogo debe cubrir las 12 semanas sin confundir una página de acceso general con un asistente desarrollado. Cada ficha debe contener: nombre, semana, propósito, responsable, fecha, estado (**en diseño / en prueba / aprobado / retirado**), enlace efectivo, acceso gratuito comprobado desde Costa Rica, prompt y plantilla equivalentes, datos prohibidos, fuentes autorizadas y límites. Las actividades obligatorias deben poder completarse aunque el GPT no esté disponible.

Cada asistente pasa al menos cinco pruebas: caso típico, caso ambiguo, solicitud con dato personal, cálculo o fuente errónea, y petición fuera de su alcance. Registrar resultado, corrección y revisor. El sello o nombre institucional en una tarjeta se usa solo después de validación por CIOdD-UCR. Los asistentes sectoriales quedan diferenciados de los temáticos de esta ruta.

## 6. Reglas de evaluación y constancia CIOdD-UCR

1. El progreso de navegación es orientativo. La elegibilidad requiere los 12 entregables, revisión de calidad y requisitos de horas definidos institucionalmente.
2. El portafolio debe poder exportarse y recuperarse; el sitio debe explicar que un nombre de archivo vinculado no equivale a cargar y conservar el documento. Definir cómo se entrega una copia para revisión y durante cuánto tiempo se guarda.
3. La rúbrica debe calificar pertinencia al negocio, evidencia/fuentes, verificación humana, cálculo o ejecución reproducible, privacidad y utilidad de la decisión. CIOdD-UCR define umbrales, posibilidad de corrección y quién evalúa.
4. El texto público debe decir **constancia emitida por CIOdD-UCR**, curso gratuito y 25 horas solo tras validar el diseño horario. Distinguir colaboradores de emisor y confirmar dirección de contacto y calendario de respuesta.
5. Probar un caso aprobado, uno incompleto, uno con evidencia vacía y uno con dato sensible; registrar qué muestra el sitio y qué resuelve la revisión humana.

## 7. Pruebas de aceptación antes de publicar

- **Datos:** cargar paquete y JSON por separado; comprobar 12 semanas, 84 unidades previstas, rúbrica, preguntas, recursos y ausencia de claves vacías.
- **Recorrido:** diagnóstico completo; semana 1 y 12 de inicio a fin; avance y retorno; exportación e importación de portafolio; progreso por semana, módulo y total; reanudación en otro momento.
- **Evidencias:** impedir acreditación con campos vacíos; revisar rúbricas y caso de corrección; no confundir clics con horas cursadas.
- **Navegación:** menú, filtros, búsqueda, vínculos antiguos, infografías, videos, descargas, enlaces de GPT, canal institucional y estados de error.
- **Accesibilidad:** teclado, foco visible, texto alternativo, subtítulos/transcripciones, contraste y lectura móvil; documentar resultados sin declarar conformidad automática.
- **Contenido:** cada afirmación cambiante sobre modelos, precios, funciones y privacidad tiene fuente oficial, fecha de consulta y próxima revisión. Revisar cálculos financieros con una hoja independiente.
- **Publicación:** repetir pruebas en la URL pública, en una ventana limpia y en móvil; comprobar que muestra la misma versión aprobada y registrar fecha, versión y persona verificadora.

## 8. Bitácora mínima para gestionar la ruta

Usar una fila por tarea o semana con estas columnas: `ID | prioridad | semana o vista | problema | responsable | acción | fuente o archivo | estado | prueba realizada | evidencia de cierre | fecha | revisor`. Estados sugeridos: **pendiente**, **en curso**, **en revisión**, **aprobado** y **publicado**. Un cambio no queda cerrado solo porque el archivo haya sido editado: requiere la prueba indicada y revisión de contenido cuando corresponda.

## 9. Primera secuencia concreta

1. Corregir contrato de datos y comprobar diagnóstico completo (**T01**).
2. Corregir finalización de unidades/semanas y validación de evidencias (**T02–T03**).
3. Conciliar 25 horas y sincronizar currículo/documentación (**T04 y T09**).
4. Corregir biblioteca, evaluador, textos y rutas (**T06–T07**).
5. Formalizar el procedimiento CIOdD-UCR y separar progreso de acreditación (**T05**).
6. Desarrollar y probar GPTs temáticos, recursos y privacidad por proveedor (**T08, T11–T12**).
7. Hacer piloto, corregir, publicar y verificar la versión pública (**T10**).

**Decisiones institucionales por documentar antes de cerrar:** criterio y canal de constancia; responsable y capacidad de asesoría A1/A2; catálogo y titularidad de GPTs; umbral de rúbrica; tratamiento y conservación del portafolio. Hasta resolverlas, los materiales pueden avanzar como borradores probables, pero no deben presentarse como servicios o acreditaciones ya operativos.
