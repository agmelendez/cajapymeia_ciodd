/**
 * PROGRAMA_DATA - Bundle autocontenido para ejecucion offline y local sin servidor web
 * Version 3.2.0 (Canonica 12 Semanas - CIOdD-UCR)
 */
window.PROGRAMA_DATA = {
  "modulos": [
    {
      "id": "m0",
      "codigo": "Módulo 0",
      "nombre": "Punto de Partida: Mi Perfil y Mi Negocio",
      "frase": "¿Dónde estoy y qué ruta necesita mi empresa?",
      "descripcion": "Autodiagnóstico inicial interactivo de 21 preguntas en 5 dimensiones (Competencias Digitales, Alfabetización en IA, Acceso a Tecnologías, Claridad de Beneficios y Contexto Pyme) para calcular su ruta formativa personalizada.",
      "orden": 0,
      "duracionSemanas": 0,
      "tipo": "diagnostico",
      "desbloqueadoPorDefecto": true,
      "paraQuien": "Para toda persona emprendedora o empresaria de Costa Rica que inicia el programa. Permite identificar brechas y personalizar el acompañamiento."
    },
    {
      "id": "m1",
      "codigo": "Módulo I",
      "nombre": "Diagnóstico Empresarial con IA",
      "frase": "Miremos el negocio con lupa y rigor ético",
      "descripcion": "En este módulo de 4 semanas configurará su ecosistema de herramientas de forma segura bajo la Ley 8968 de Costa Rica, dominará la ingeniería de prompts con el modelo CIFRCE, construirá un FODA dinámico cruzado (TOWS) con perfil de cliente y formulará un Plan de Acción Estratégico a 90 días.",
      "orden": 1,
      "duracionSemanas": 4,
      "tipo": "aprendizaje",
      "desbloqueadoPorDefecto": true,
      "paraQuien": "Aplica tanto a ideas nacientes (validación preliminar y plan de arranque) como a empresas en marcha (radiografía operativa y priorización estratégica)."
    },
    {
      "id": "m2",
      "codigo": "Módulo II",
      "nombre": "Automatización de Procesos y Operaciones",
      "frase": "Ahorrar tiempo y ordenar mejor con tecnología",
      "descripcion": "En este módulo de 4 semanas aprenderá a mapear tareas repetitivas y cuellos de botella, delegar flujos de trabajo sin código (No-Code en Make/n8n), diseñar asistentes virtuales (chatbots) para WhatsApp Business con escalamiento humano, estructurar un CRM seguro en Google Sheets y calcular el Retorno de Inversión (ROI).",
      "orden": 2,
      "duracionSemanas": 4,
      "tipo": "aprendizaje",
      "desbloqueadoPorDefecto": true,
      "paraQuien": "Aplica para negocios que sufren sobrecarga operativa y desean liberar horas semanales automatizando consultas y registros de clientes de forma segura."
    },
    {
      "id": "m3",
      "codigo": "Módulo III",
      "nombre": "Comercialización, Audiovisual y Viabilidad",
      "frase": "Vender mejor con evidencia y criterio de negocio",
      "descripcion": "En este módulo de 4 semanas creará o refinará la identidad visual de su marca en Canva asistida por IA, producirá contenidos audiovisuales y locuciones sintéticas éticas, calculará la prefactibilidad financiera y punto de equilibrio en colones, y estructurará una campaña comercial completa bajo el modelo AIDA.",
      "orden": 3,
      "duracionSemanas": 4,
      "tipo": "aprendizaje",
      "desbloqueadoPorDefecto": true,
      "paraQuien": "Aplica para emprendedores que necesitan aumentar sus ventas, mejorar su presencia digital profesional y fundamentar decisiones de inversión con números claros."
    }
  ],
  "semanas": [
    {
      "id": "s1",
      "moduloId": "m1",
      "semanaGlobal": 1,
      "codigoAnterior": "Semana 1",
      "titulo": "Configuración, Seguridad y Primer Contacto con la IA",
      "objetivo": "Configurar su ecosistema de herramientas de IA (ChatGPT, Claude, Gemini) de forma segura bajo la Ley 8968 de Costa Rica y redactar el protocolo de uso de IA de su empresa.",
      "entregable": "Protocolo de uso de IA de una página para el negocio y comparación crítica de dos respuestas con datos ficticios guardada en el portafolio.",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A0 / A2",
      "asesoriaCondicion": "A0 para simulación con datos ficticios. A2 obligatorio antes de ingresar datos personales de clientes, colaboradores o secretos comerciales reales.",
      "infografias": [
        "Infografias/Semana 1. Historia de la IA.png"
      ],
      "gptNombre": "Protocolo de Seguridad y LLMs",
      "gptUrl": "https://chatgpt.com",
      "gptDesc": "Espacio de trabajo seguro y lineamientos de privacidad bajo la Ley 8968 de Costa Rica.",
      "disclaimer": {
        "negocioNuevo": "Aprenda a iniciar su emprendimiento protegiendo su idea y configurando herramientas de IA con cero costo.",
        "negocioEnMarcha": "Proteja la información confidencial de su clientela y estandarice el uso seguro de IA en su equipo de trabajo."
      }
    },
    {
      "id": "s2",
      "moduloId": "m1",
      "semanaGlobal": 2,
      "codigoAnterior": "Semana 2",
      "titulo": "Ingeniería de Prompts: El Modelo CIFRCE en Práctica",
      "objetivo": "Dominar la técnica de formulación estructurada CIFRCE (Contexto, Instrucción, Formato, Restricciones y Criterios de Éxito) para obtener respuestas profesionales y reproducibles.",
      "entregable": "Plantilla CIFRCE completa aplicada a una necesidad real de su negocio, comparando dos versiones y verificando la salida con rúbrica.",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A0 / A1",
      "asesoriaCondicion": "A0 en simulación. A1 si el resultado se convertirá en oferta comercial formal, términos de servicio o política de la empresa.",
      "infografias": [
        "Infografias/Semana 2. Guía Maestra de Prompt Engineering.png"
      ],
      "gptNombre": "Entrenador de Prompts CIFRCE",
      "gptUrl": "https://chatgpt.com",
      "gptDesc": "Estructura instrucciones paso a paso en las 5 capas para eliminar ambigüedades y alucinaciones.",
      "disclaimer": {
        "negocioNuevo": "Redacte instrucciones claras para investigar competidores y redactar propuestas iniciales sin perder tiempo.",
        "negocioEnMarcha": "Estandarice las instrucciones de su negocio para generar cotizaciones, respuestas a reclamos y descripciones de catálogo."
      }
    },
    {
      "id": "s3",
      "moduloId": "m1",
      "semanaGlobal": 3,
      "codigoAnterior": "Semana 3",
      "titulo": "Diagnóstico Empresarial: FODA Dinámico y Perfil de Cliente",
      "objetivo": "Realizar una radiografía honesta del negocio combinando un análisis FODA dinámico cruzado (TOWS) con un perfil de Buyer Persona contrastado con datos reales.",
      "entregable": "Matriz FODA ponderada con las 3 prioridades críticas identificadas y perfil de cliente validado con al menos 3 personas reales.",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A1 / A2",
      "asesoriaCondicion": "A1 para validación de mercado. A2 antes de decisiones de crédito, endeudamiento o tratamiento de datos identificables.",
      "infografias": [
        "Infografias/Semana 3. Tendencias IA.png"
      ],
      "gptNombre": "Tu asesor empresarial crítico",
      "gptUrl": "https://chatgpt.com/g/g-6a320a847428819185fe2b2787c50ded-tu-asesor-empresarial-critico",
      "gptDesc": "Apoyo complementario para cuestionar supuestos; el FODA y perfil de cliente se trabajan con la plantilla del curso.",
      "disclaimer": {
        "negocioNuevo": "Identifique si su propuesta responde a un dolor real del cliente antes de gastar ahorros o solicitar préstamos.",
        "negocioEnMarcha": "Descubra debilidades operativas ocultas y oportunidades de mercado frente a competidores en su cantón o sector."
      }
    },
    {
      "id": "s4",
      "moduloId": "m1",
      "semanaGlobal": 4,
      "codigoAnterior": "Semana 4",
      "titulo": "Plan de Acción Estratégico a 90 Días",
      "objetivo": "Transformar los hallazgos del FODA y cliente en un Plan de Acción de 90 días ordenado por impacto y esfuerzo, con metas verificables.",
      "entregable": "Plan de Acción a 90 Días priorizado (Matriz Impacto vs. Esfuerzo) con 3 a 5 iniciativas clave, responsables e indicadores de logro.",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A1 / A2",
      "asesoriaCondicion": "A1 revisión de viabilidad interna. A2 para obligaciones laborales o financieras relevantes.",
      "infografias": [
        "Infografias/Semana 4. Plan de Acción.png"
      ],
      "gptNombre": "Tu asesor empresarial crítico",
      "gptUrl": "https://chatgpt.com/g/g-6a320a847428819185fe2b2787c50ded-tu-asesor-empresarial-critico",
      "gptDesc": "Apoyo complementario para revisar decisiones; estructure el plan de 90 días con la plantilla del curso.",
      "disclaimer": {
        "negocioNuevo": "Fije los hitos concretos de validación, registro y apertura para los primeros tres meses.",
        "negocioEnMarcha": "Enfoque la energía del equipo en las tareas que mueven la aguja de los ingresos y reducen costos operativos."
      }
    },
    {
      "id": "s5",
      "moduloId": "m2",
      "semanaGlobal": 5,
      "codigoAnterior": "Semana 5",
      "titulo": "Automatización Sin Código (No-Code) con Make / n8n",
      "objetivo": "Mapear un proceso repetitivo del negocio y construir un prototipo de automatización conectando aplicaciones sin escribir código.",
      "entregable": "Diagrama de flujo del proceso repetitivo y prototipo de automatización probado exitosamente con 3 casos de datos ficticios.",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A0 / A2",
      "asesoriaCondicion": "A0 en entorno de pruebas. A2 antes de conectar credenciales de producción o transferir datos reales de clientes.",
      "infografias": [
        "Infografias/Semana 5. Automatización de procesos .png"
      ],
      "gptNombre": "Diseñador de Flujos No-Code",
      "gptUrl": "https://chatgpt.com",
      "gptDesc": "Guía en el diseño de triggers, acciones y filtros en plataformas No-Code.",
      "disclaimer": {
        "negocioNuevo": "Diseñe procesos ordenados y automáticos desde el primer día para no saturarse cuando lleguen las primeras ventas.",
        "negocioEnMarcha": "Elimine la digitación manual repetitiva entre formularios, correo y hojas de cálculo para ahorrar horas hombre."
      }
    },
    {
      "id": "s6",
      "moduloId": "m2",
      "semanaGlobal": 6,
      "codigoAnterior": "Semana 6",
      "titulo": "Chatbots y Asistentes Virtuales de Atención al Cliente",
      "objetivo": "Diseñar y configurar un asistente virtual para responder preguntas frecuentes en WhatsApp Business o web con reglas de escalamiento humano.",
      "entregable": "Guion estructurado para 10 consultas frecuentes, árbol de decisión y prueba documentada de transferencia a un agente humano.",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A1 / A2",
      "asesoriaCondicion": "A1 revisión de tono comercial y exactitud de precios. A2 antes de conectar el bot a una línea telefónica o cuenta activa de clientes.",
      "infografias": [
        "Infografias/Semana 6. Guía de Asistentes Virtuales Inteligentes.png"
      ],
      "gptNombre": "Asistente de Atención y Chatbots",
      "gptUrl": "https://chatgpt.com",
      "gptDesc": "Diseñe respuestas y derivación humana con el prompt y la plantilla de esta semana.",
      "disclaimer": {
        "negocioNuevo": "Ofrezca atención profesional inmediata las 24 horas sin necesidad de contratar personal en etapa temprana.",
        "negocioEnMarcha": "Disminuya el tiempo de primera respuesta a consultas de WhatsApp y califique prospectos antes de atenderlos personalmente."
      }
    },
    {
      "id": "s7",
      "moduloId": "m2",
      "semanaGlobal": 7,
      "codigoAnterior": "Semana 7",
      "titulo": "Sistematización y CRM Básico Seguro",
      "objetivo": "Estructurar una base de datos de clientes (CRM) en Google Sheets protegida con permisos y respaldos, bajo estándares de la Ley 8968.",
      "entregable": "Plantilla de CRM en hoja de cálculo con campos mínimos, estados de cliente y protocolo de custodia de datos.",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A0 / A2",
      "asesoriaCondicion": "A0 para prototipo con datos de prueba. A2 obligatorio antes de migrar bases con cédulas, teléfonos o direcciones reales de clientes.",
      "infografias": [
        "Infografias/Semana 7. CRM y Automatización.png",
        "Infografias/Semana 7. SandBox Regulatorios.png"
      ],
      "gptNombre": "Estructurador de CRM y Datos",
      "gptUrl": "https://chatgpt.com",
      "gptDesc": "Estructura tablas relacionales simples y asesora sobre controles de acceso y privacidad.",
      "disclaimer": {
        "negocioNuevo": "Cree su base de contactos con orden y consentimiento desde su primera prospección comercial.",
        "negocioEnMarcha": "Deje de perder oportunidades comerciales unificando registros dispersos en WhatsApp, libretas y correos."
      }
    },
    {
      "id": "s8",
      "moduloId": "m2",
      "semanaGlobal": 8,
      "codigoAnterior": "Semana 8",
      "titulo": "Retorno de Inversión (ROI) de la Automatización",
      "objetivo": "Calcular con fórmula transparente cuánto dinero y horas ahorra su empresa con las automatizaciones implementadas, evaluando costos de fallos y mantenimiento.",
      "entregable": "Hoja de cálculo de ROI con supuestos visibles, horas ahorradas al mes, costos de herramientas y análisis de sensibilidad.",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A1 / A2",
      "asesoriaCondicion": "A1 revisión de costos internos. A2 antes de firmar contratos de software anuales o adquisiciones tecnológicas.",
      "infografias": [
        "Infografias/Semana 8. Valor de la automatización empresarial.png"
      ],
      "gptNombre": "Retorno de la Inversión por el uso de IA-PYMES",
      "gptUrl": "https://chatgpt.com/g/g-6a31f723c5988191b8f00d377d4a43e4-retorno-de-la-inversion-por-el-uso-de-ia-pymes",
      "gptDesc": "Apoya el análisis del retorno por uso de IA; compruebe supuestos y cálculos con la plantilla semanal.",
      "disclaimer": {
        "negocioNuevo": "Evite gastar en herramientas digitales innecesarias verificando si el ahorro justifica la complejidad.",
        "negocioEnMarcha": "Demuestre con números claros a socios o gerencia el valor tangible de modernizar los procesos operativos."
      }
    },
    {
      "id": "s9",
      "moduloId": "m3",
      "semanaGlobal": 9,
      "codigoAnterior": "Semana 9",
      "titulo": "Identidad Visual y Diseño de Marca con IA (Canva)",
      "objetivo": "Crear o actualizar la identidad visual del negocio (paleta de colores, tipografías, tono de voz) y producir piezas gráficas coherentes en Canva.",
      "entregable": "Kit de Marca estructurado (colores hexadecimales, tipografías y tono de voz) y enlace a 3 piezas listas para publicación digital.",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A1 / A2",
      "asesoriaCondicion": "A1 revisión de consistencia gráfica. A2 si se utilizan logotipos, marcas ajenas o rostros de personas reales sin autorización.",
      "infografias": [
        "Infografias/Semana 9. Canva para PYMES.png"
      ],
      "gptNombre": "Asistente para tu Marketing Digital",
      "gptUrl": "https://chatgpt.com/g/g-6a31f85ca4388191b71f421b7ade0f7b-asistente-para-tu-marketing-digital",
      "gptDesc": "Apoyo para la comunicación comercial; desarrolle la identidad visual con la guía semanal.",
      "disclaimer": {
        "negocioNuevo": "Diseñe una imagen profesional atractiva desde el arranque sin costos elevados de agencias publicitarias.",
        "negocioEnMarcha": "Renueve la presentación de sus productos y catálogos para transmitir mayor confianza y justificar mejores precios."
      }
    },
    {
      "id": "s10",
      "moduloId": "m3",
      "semanaGlobal": 10,
      "codigoAnterior": "Semana 10",
      "titulo": "Producción Audiovisual: Video, Locución y Avatares Éticos",
      "objetivo": "Producir un video corto promocional con guion estructurado, subtítulos y locución asistida por IA respetando derechos de imagen y voz.",
      "entregable": "Guion técnico estructurado (storyboard) con subtitulado y ficha de permisos de activos y locuciones sintéticas.",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A1 / A2",
      "asesoriaCondicion": "A1 revisión de claridad de mensaje. A2 obligatorio antes de clonar voz/imagen de terceros o publicar testimonios de clientes.",
      "infografias": [
        "Infografias/Semana 10. Creación Videos y avatares.png"
      ],
      "gptNombre": "Guionista Audiovisual y Locución",
      "gptUrl": "https://chatgpt.com",
      "gptDesc": "Genera guiones divididos en gancho (hook), problema, solución y llamado a la acción.",
      "disclaimer": {
        "negocioNuevo": "Pierda el miedo a la cámara apoyándose en herramientas audiovisuales accesibles para mostrar su producto.",
        "negocioEnMarcha": "Produzca testimonios, videos explicativos y tutoriales de producto con calidad constante para sus redes."
      }
    },
    {
      "id": "s11",
      "moduloId": "m3",
      "semanaGlobal": 11,
      "codigoAnterior": "Semana 11",
      "titulo": "Prefactibilidad y Análisis Financiero de Inversión",
      "objetivo": "Evaluar con asistencia crítica de IA la viabilidad de un nuevo producto, servicio o compra de equipo calculando el punto de equilibrio en colones.",
      "entregable": "Ficha de prefactibilidad con punto de equilibrio, costos fijos y variables detallados y tres escenarios (conservador, base, optimista).",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A2",
      "asesoriaCondicion": "A2 Obligatorio: toda cifra de prefactibilidad debe ser contrastada con facturas reales y criterio contable antes de comprometer fondos.",
      "infografias": [
        "Infografias/Semana 11. Guía de Viabilidad de IA.png"
      ],
      "gptNombre": "Ayudante para Costeo de productos para PYMES",
      "gptUrl": "https://chatgpt.com/g/g-6a31f7e1774c8191bbfe509c66859c1f-ayudante-para-costeo-de-productos-para-pymes",
      "gptDesc": "Apoya el costeo de productos; la prefactibilidad completa exige la plantilla y revisión humana.",
      "disclaimer": {
        "negocioNuevo": "Conozca cuántas unidades exactas debe vender al mes antes de alquilar un local o comprar inventario.",
        "negocioEnMarcha": "Evalúe si abrir una nueva sucursal o adquirir maquinaria es rentable o si comprometerá el flujo de caja actual."
      }
    },
    {
      "id": "s12",
      "moduloId": "m3",
      "semanaGlobal": 12,
      "codigoAnterior": "Semana 12",
      "titulo": "Campaña de Lanzamiento Integral (Modelo AIDA)",
      "objetivo": "Integrar todos los productos del programa en una campaña comercial de 4 semanas estructurada bajo el embudo AIDA (Atención, Interés, Deseo, Acción).",
      "entregable": "Plan de campaña de 4 semanas completo con piezas creativas, calendario de publicación, presupuesto de pauta e indicadores clave de conversión.",
      "tiempoEstimadoMin": 120,
      "teoriaMin": 36,
      "practicaMin": 84,
      "nivelAsesoria": "A1 / A2",
      "asesoriaCondicion": "A1 revisión del mensaje y propuesta comercial. A2 antes de invertir presupuesto en pauta digital o campañas masivas de mensajería.",
      "infografias": [
        "Infografias/Semana 12. Estrategia IA para Pequeños Empresarios.png"
      ],
      "gptNombre": "Estratega de Campaña AIDA",
      "gptUrl": "https://chatgpt.com",
      "gptDesc": "Calendariza y redacta los copies de lanzamiento integrando el embudo de ventas completo.",
      "disclaimer": {
        "negocioNuevo": "Ejecute su lanzamiento comercial formal al mercado con orden, activos profesionales y metas medibles.",
        "negocioEnMarcha": "Lance promociones estacionales o nuevas líneas de producto con una campaña articulada que maximice la conversión."
      }
    }
  ],
  "unidades": [
    {
      "id": "s1-u01",
      "semanaId": "s1",
      "titulo": "Paso 1: Logro y Objetivos — Semana 1",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO I · SEMANA 1</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Configuración, Seguridad y Primer Contacto con la IA</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Configurar su ecosistema de herramientas de IA (ChatGPT, Claude, Gemini) de forma segura bajo la Ley 8968 de Costa Rica y redactar el protocolo de uso de IA de su empresa.\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Protocolo de uso de IA de una página para el negocio y comparación crítica de dos respuestas con datos ficticios guardada en el portafolio.</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A0 / A2</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A0 para simulación con datos ficticios. A2 obligatorio antes de ingresar datos personales de clientes, colaboradores o secretos comerciales reales.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s1-u02",
      "semanaId": "s1",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-1: Auditoría de Seguridad y Primer Diálogo con IA\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Esta primera semana sienta las bases de seguridad, privacidad y orden de todo el programa. No empezamos gastando dinero en licencias ni configurando herramientas complejas: aprendemos a configurar un entorno de IA gratuito, seguro y alineado con la Ley 8968 de Costa Rica.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Configure su cuenta en una herramienta de IA generativa (ChatGPT, Claude o Gemini) desactivando la opción de compartir sus datos para entrenamiento de modelos. Luego, redacte un protocolo de privacidad de una página para su negocio y realice una consulta diagnóstica inicial utilizando datos ficticios.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Una soda en Alajuela desea consultar cómo estructurar sus turnos de fin de semana. En lugar de subir nombres reales o expedientes de sus 3 colaboradores, redacta un prompt anonimizado: 'Negocio gastronómico con 3 personas en cocina y atención, viernes a domingo de 11:00 am a 9:00 pm'.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Aprenda a iniciar su emprendimiento protegiendo su idea y configurando herramientas de IA con cero costo.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Proteja la información confidencial de su clientela y estandarice el uso seguro de IA en su equipo de trabajo.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s1-u03",
      "semanaId": "s1",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Protocolo de uso de IA de una página para el negocio y comparación crítica de dos respuestas con datos ficticios guardada en el portafolio.",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 1\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Tengo una microempresa del sector [SECTOR: ej. alimentos / servicios / comercio] ubicada en [CANTÓN/PROVINCIA] con [NÚMERO] personas colaboradoras. Quiero establecer una política interna de uso seguro de IA.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Formula 5 preguntas diagnósticas clave sobre mi operación para identificar en qué áreas la IA puede apoyarme sin poner en riesgo datos confidenciales ni secretos comerciales.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">Entrega una lista numerada del 1 al 5. Para cada pregunta incluye: a) La pregunta exacta, b) Por qué es relevante para una MiPYME en Costa Rica, c) Qué información sensible NO debo incluir al responder.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">No asumas datos que no te he proporcionado. Usa un lenguaje claro y directo sin tecnicismos complejos. Considera la realidad de negocios locales en colones costarricenses.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">El resultado me permitirá redactar un protocolo interno de uso responsable de IA en una sola página.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s1-u04",
      "semanaId": "s1",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">La Inteligencia Artificial Generativa no razona como un ser humano: predice palabras a partir de patrones estadísticos masivos. Por ello, puede cometer alucinaciones (afirmar falsedades con total seguridad). El principio fundamental de este curso es 'Human-in-the-Loop': la IA propone, pero el criterio humano dispone y valida.</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Bajo la Ley 8968 de Protección de la Persona frente al Tratamiento de sus Datos Personales en Costa Rica, las empresas tienen la obligación legal de proteger datos sensibles de clientes, proveedores y empleados. Tanto en planes gratuitos como pagos de ChatGPT, Gemini o Claude, es imperativo entrar en Configuración → Controles de datos y desactivar la mejora o entrenamiento con sus conversaciones.</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s1-u05",
      "semanaId": "s1",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">¿Qué herramientas digitales utiliza actualmente en su negocio y cuáles le generan mayor desconfianza respecto a la privacidad de sus clientes? Comparta esta reflexión con un socio o colega.</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s1-u06",
      "semanaId": "s1",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Protocolo de uso de IA de una página para el negocio y comparación crítica de dos respuestas con datos ficticios guardada en el portafolio.",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s1-u07",
      "semanaId": "s1",
      "titulo": "Paso 7: Chispa de Innovación — Semana 1",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 1</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              Configure en el navegador un perfil exclusivo para su negocio con marcadores ordenados a sus herramientas de IA. Active la autenticación de dos factores (2FA) en su cuenta para blindar sus accesos.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s2-u01",
      "semanaId": "s2",
      "titulo": "Paso 1: Logro y Objetivos — Semana 2",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO I · SEMANA 2</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Ingeniería de Prompts: El Modelo CIFRCE en Práctica</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Dominar la técnica de formulación estructurada CIFRCE (Contexto, Instrucción, Formato, Restricciones y Criterios de Éxito) para obtener respuestas profesionales y reproducibles.\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Plantilla CIFRCE completa aplicada a una necesidad real de su negocio, comparando dos versiones y verificando la salida con rúbrica.</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A0 / A1</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A0 en simulación. A1 si el resultado se convertirá en oferta comercial formal, términos de servicio o política de la empresa.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s2-u02",
      "semanaId": "s2",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-2: Comparación de Prompts Genéricos vs. CIFRCE\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">La calidad del resultado que entrega un modelo de IA depende directamente de la claridad y estructura de la instrucción. El modelo CIFRCE (Contexto, Instrucción, Formato, Restricciones y Criterios de Éxito) es el marco estándar de este curso para transformar peticiones vagas en resultados profesionales.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Seleccione una tarea repetitiva de redacción o consulta en su empresa (por ejemplo, redactar una cotización, una respuesta a un cliente o una descripción de producto). Pruébela primero con una frase corta ('prompt vago') y luego con la plantilla estructurada CIFRCE. Compare la diferencia de calidad.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Un taller de mecánica y repuestos en Cartago requiere responder a clientes de WhatsApp sobre el costo de cambio de aceite. El prompt vago entrega una respuesta genérica en euros o pesos. El prompt CIFRCE especifica rangos en colones (₡25.000 a ₡45.000), marcas de aceite y tono costarricense cordial.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Redacte instrucciones claras para investigar competidores y redactar propuestas iniciales sin perder tiempo.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Estandarice las instrucciones de su negocio para generar cotizaciones, respuestas a reclamos y descripciones de catálogo.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s2-u03",
      "semanaId": "s2",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Plantilla CIFRCE completa aplicada a una necesidad real de su negocio, comparando dos versiones y verificando la salida con rúbrica.",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 2\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Soy propietario/a de [NOMBRE DEL NEGOCIO], un negocio de [ACTIVIDAD COMERCIAL] en Costa Rica. Nuestros clientes principales son [TIPO DE CLIENTES: ej. familias locales / oficinas / jóvenes profesionales].</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Redacta una propuesta de respuesta estándar para atender la siguiente solicitud frecuente de un cliente: [DESCRIBIR CONSULTA DEL CLIENTE: ej. cotización de producto X o duda sobre horario].</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">Estructura la respuesta en 3 bloques: 1) Saludo personalizado y cordial en español de Costa Rica, 2) Respuesta precisa con precio estimado en colones costarricenses (₡), 3) Llamado a la acción con dos opciones de fecha/hora.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">No uses modismos de otros países. No inventes precios fuera del rango de [₡MONTO MÍNIMO a ₡MONTO MÁXIMO]. Máximo 120 palabras.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">La respuesta debe sonar cercana, profesional y lista para ser enviada por WhatsApp Business sin requerir casi edición.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s2-u04",
      "semanaId": "s2",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">El modelo CIFRCE descompone el prompt en 5 capas: Contexto (quién pregunta y situación), Instrucción (el verbo de acción preciso), Formato (cómo se presenta la salida), Restricciones (lo que NO debe hacer la IA) y Criterios de Éxito (cómo sabemos si el resultado es excelente).</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Técnica Few-Shot (aprender con ejemplos): Los modelos de lenguaje mejoran drásticamente cuando en el prompt se incluyen 1 o 2 ejemplos del resultado ideal antes de pedir la tarea final. Esto ancla el tono, la terminología y la longitud deseada.</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s2-u05",
      "semanaId": "s2",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">¿Qué diferencia observó entre la respuesta del prompt vago y el prompt CIFRCE? ¿Cuánto tiempo de edición manual le ahorró la versión estructurada?</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s2-u06",
      "semanaId": "s2",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Plantilla CIFRCE completa aplicada a una necesidad real de su negocio, comparando dos versiones y verificando la salida con rúbrica.",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s2-u07",
      "semanaId": "s2",
      "titulo": "Paso 7: Chispa de Innovación — Semana 2",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 2</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              Guarde sus mejores prompts CIFRCE en una nota compartida o en un documento local. Tener una biblioteca de prompts probados ahorra horas a cualquier equipo de trabajo.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s3-u01",
      "semanaId": "s3",
      "titulo": "Paso 1: Logro y Objetivos — Semana 3",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO I · SEMANA 3</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Diagnóstico Empresarial: FODA Dinámico y Perfil de Cliente</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Realizar una radiografía honesta del negocio combinando un análisis FODA dinámico cruzado (TOWS) con un perfil de Buyer Persona contrastado con datos reales.\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Matriz FODA ponderada con las 3 prioridades críticas identificadas y perfil de cliente validado con al menos 3 personas reales.</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A1 / A2</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A1 para validación de mercado. A2 antes de decisiones de crédito, endeudamiento o tratamiento de datos identificables.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s3-u02",
      "semanaId": "s3",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-3: Radiografía Estratégica FODA y Buyer Persona\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Un diagnóstico certero es la base de cualquier decisión de inversión o cambio de rumbo. Esta semana combinamos el análisis FODA dinámico con preguntas socráticas y la construcción de un perfil de cliente ideal (Buyer Persona) validado.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Construya la matriz FODA de su negocio identificando al menos 3 factores por cuadrante y priorice las 3 acciones más urgentes. Luego, elabore la ficha de su cliente ideal y compárela con al menos 3 clientes reales para validar si sus hipótesis coinciden con la realidad.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Una microempresa de repostería artesanal en Heredia identifica que su Fortaleza es la calidad del producto, pero su Debilidad es la falta de control de costos de entrega. Define su Buyer Persona: 'Oficinistas de 28 a 45 años que buscan regalos ejecutivos con presupuesto de ₡10.000 a ₡20.000'.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Identifique si su propuesta responde a un dolor real del cliente antes de gastar ahorros o solicitar préstamos.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Descubra debilidades operativas ocultas y oportunidades de mercado frente a competidores en su cantón o sector.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s3-u03",
      "semanaId": "s3",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Matriz FODA ponderada con las 3 prioridades críticas identificadas y perfil de cliente validado con al menos 3 personas reales.",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 3\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Gestiono un emprendimiento de [TIPO DE PRODUCTO/SERVICIO] en Costa Rica con [AÑOS/MESES] en el mercado. Mis ventas promedio mensuales son de aproximadamente [RANGO EN COLONES: ej. ₡500.000 a ₡1.500.000].</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Actúa como consultor senior de negocios para MiPYMES. Ayúdame a estructurar una matriz FODA cruzada (Estrategias FO, FA, DO, DA) a partir de los siguientes datos de mi negocio: [LISTAR 2 FORTALEZAS, 2 DEBILIDADES, 2 OPORTUNIDADES, 2 AMENAZAS].</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">Presenta una tabla clara con los 4 cuadrantes de estrategias cruzadas, seguida de un resumen ejecutivo con las 3 prioridades más críticas para los próximos 90 días.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">No uses fórmulas genéricas. Cada estrategia debe ser realista para una microempresa con recursos limitados en Costa Rica.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">Identificar al menos una oportunidad de mejora inmediata que no requiera endeudamiento y que aumente la retención de clientes.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s3-u04",
      "semanaId": "s3",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">El FODA estático suele quedar archivado en una gaveta. El FODA dinámico cruzado (Matriz TOWS) combina los factores: ¿Cómo uso mis Fortalezas para aprovechar Oportunidades (FO)? ¿Cómo supero Debilidades reduciendo Amenazas (DA)? Esta formulación genera líneas de acción inmediatas.</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">El Buyer Persona no es un personaje inventado: debe basarse en personas de carne y hueso. La técnica 'The Mom Test' enseña a preguntar a los clientes sobre sus hábitos pasados y dolores reales, en lugar de preguntarles si 'comprarían mi producto' (donde siempre dicen que sí por cortesía).</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s3-u05",
      "semanaId": "s3",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Al contrastar su Buyer Persona con clientes reales, ¿qué supuesto sobre sus motivaciones de compra resultó ser falso?</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s3-u06",
      "semanaId": "s3",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Matriz FODA ponderada con las 3 prioridades críticas identificadas y perfil de cliente validado con al menos 3 personas reales.",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s3-u07",
      "semanaId": "s3",
      "titulo": "Paso 7: Chispa de Innovación — Semana 3",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 3</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              Revise las tendencias de búsqueda en Costa Rica usando Google Trends (gratuito). Descubrirá si el interés por su categoría de producto crece o decrece en los últimos 12 meses.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s4-u01",
      "semanaId": "s4",
      "titulo": "Paso 1: Logro y Objetivos — Semana 4",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO I · SEMANA 4</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Plan de Acción Estratégico a 90 Días</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Transformar los hallazgos del FODA y cliente en un Plan de Acción de 90 días ordenado por impacto y esfuerzo, con metas verificables.\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Plan de Acción a 90 Días priorizado (Matriz Impacto vs. Esfuerzo) con 3 a 5 iniciativas clave, responsables e indicadores de logro.</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A1 / A2</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A1 revisión de viabilidad interna. A2 para obligaciones laborales o financieras relevantes.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s4-u02",
      "semanaId": "s4",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-4: Plan de Acción Táctico a 90 Días\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">El análisis sin ejecución produce parálisis. Esta semana convertimos el diagnóstico FODA y las metas de negocio en un Plan de Acción Estratégico a 90 días ordenado por la Matriz Impacto vs. Esfuerzo.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Seleccione de 3 a 5 iniciativas clave derivadas de su diagnóstico. Clasifíquelas en la matriz de Impacto vs. Esfuerzo, defina para cada una un responsable, plazo, costo estimado en colones e indicador de éxito verificable.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Una clínica dental independiente en San José prioriza: 1) Ganancia rápida: Automatizar recordatorios de citas por WhatsApp para reducir ausentismo (Alto Impacto, Bajo Esfuerzo); 2) Proyecto mayor: Rediseñar lista de precios y paquetes preventivos en 60 días.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Fije los hitos concretos de validación, registro y apertura para los primeros tres meses.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Enfoque la energía del equipo en las tareas que mueven la aguja de los ingresos y reducen costos operativos.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s4-u03",
      "semanaId": "s4",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Plan de Acción a 90 Días priorizado (Matriz Impacto vs. Esfuerzo) con 3 a 5 iniciativas clave, responsables e indicadores de logro.",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 4\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Tengo las siguientes 4 prioridades estratégicas para mi empresa en Costa Rica durante el próximo trimestre: [LISTAR ACCIONES 1, 2, 3 Y 4]. Cuento con un presupuesto estimado de [₡MONTO] y [HORAS DISPONIBLES A LA SEMANA] horas de dedicación.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Clasifica estas 4 acciones en la Matriz Impacto vs. Esfuerzo (Ganancias Rápidas, Proyectos Mayores, Tareas de Relleno, Sumideros de Tiempo). Luego, genera un cronograma semanal para los próximos 90 días.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">1) Matriz de clasificación en cuadrantes con justificación, 2) Cronograma mes a mes (Mes 1, Mes 2, Mes 3) con responsables, indicadores clave (KPI) y puntos de control quincenales.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">No programes más de 2 acciones de alto esfuerzo simultáneas en el mismo mes. Considera feriados y estacionalidad comercial de Costa Rica.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">El plan debe ser viable para ejecutar sin contratar personal adicional y debe incluir una revisión a los 45 días.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s4-u04",
      "semanaId": "s4",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">La Matriz Impacto vs. Esfuerzo permite vencer la procrastinación empresarial: siempre se debe comenzar por las 'Ganancias Rápidas' (Quick Wins: Alto Impacto y Bajo Esfuerzo) porque generan victorias tempranas, liberan flujo de caja y motivan al equipo.</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Un buen indicador de logro (KPI) debe ser observable y medible sin ambigüedad: por ejemplo, 'aumentar citas confirmadas de 65% a 85%' en lugar de 'mejorar la atención'. La revisión periódica evita desvíos antes del cierre del trimestre.</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s4-u05",
      "semanaId": "s4",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">¿Cuál es la 'Ganancia Rápida' que puede implementar esta misma semana con menos de 3 horas de esfuerzo y qué impacto espera?</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s4-u06",
      "semanaId": "s4",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Plan de Acción a 90 Días priorizado (Matriz Impacto vs. Esfuerzo) con 3 a 5 iniciativas clave, responsables e indicadores de logro.",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s4-u07",
      "semanaId": "s4",
      "titulo": "Paso 7: Chispa de Innovación — Semana 4",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 4</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              Utilice herramientas visuales gratuitas como Trello o Notion para crear un tablero Kanban (Por hacer, En proceso, Hecho) alineado con su plan de 90 días.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s5-u01",
      "semanaId": "s5",
      "titulo": "Paso 1: Logro y Objetivos — Semana 5",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO II · SEMANA 5</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Automatización Sin Código (No-Code) con Make / n8n</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Mapear un proceso repetitivo del negocio y construir un prototipo de automatización conectando aplicaciones sin escribir código.\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Diagrama de flujo del proceso repetitivo y prototipo de automatización probado exitosamente con 3 casos de datos ficticios.</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A0 / A2</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A0 en entorno de pruebas. A2 antes de conectar credenciales de producción o transferir datos reales de clientes.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s5-u02",
      "semanaId": "s5",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-5: Mapa de Proceso y Primer Flujo Automatizado\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">La automatización moderna no requiere programar código. Con plataformas No-Code como Make o n8n es posible conectar formularios, correos, hojas de cálculo y WhatsApp en flujos continuos que ahorran horas de trabajo repetitivo.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Mapee en papel o diagrama un proceso repetitivo de su empresa (ej. registro de consultas, envío de catálogos o confirmación de pedidos). Diseñe un prototipo en Make o n8n que capture una entrada (trigger) y ejecute una acción automática con datos de prueba.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Una distribuidora de suministros en Puntarenas recibe pedidos por formulario web. Antes, la dueña transcribía a mano cada pedido a Google Sheets y redactaba un correo de confirmación. Con un escenario en Make, la orden se guarda en Sheets y el cliente recibe su confirmación en 5 segundos.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Diseñe procesos ordenados y automáticos desde el primer día para no saturarse cuando lleguen las primeras ventas.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Elimine la digitación manual repetitiva entre formularios, correo y hojas de cálculo para ahorrar horas hombre.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s5-u03",
      "semanaId": "s5",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Diagrama de flujo del proceso repetitivo y prototipo de automatización probado exitosamente con 3 casos de datos ficticios.",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 5\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Tengo un proceso manual repetitivo en mi negocio: [DESCRIBIR PROCESO: ej. cuando un cliente llena un formulario en redes, tengo que pasar sus datos a mano a un Excel y enviarle un mensaje por WhatsApp].</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Mapea este proceso en un diagrama de flujo lógico para automatizar con Make o n8n. Define el Trigger (Disparador), los Filtros necesarios, las Acciones y un plan de respaldo en caso de que falle la conexión.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">1) Diagrama en texto paso a paso (Paso 1: Trigger, Paso 2: Filtro, Paso 3: Acción), 2) Módulos recomendados en Make (gratuito), 3) Protocolo de manejo de errores (qué hacer si el servicio se desconecta).</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">Mantén el flujo dentro del límite gratuito de Make (1.000 operaciones al mes). No uses herramientas de pago obligatorio.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">El diseño debe permitir que cualquier persona del equipo entienda qué pasa cuando un cliente envía sus datos.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s5-u04",
      "semanaId": "s5",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Un flujo automatizado se compone de tres elementos básicos: 1) Trigger o Disparador (el evento que inicia el flujo: un nuevo mensaje o formulario); 2) Routers o Filtros (las condiciones: si es cliente nuevo va por una ruta, si es reclamo va por otra); 3) Acciones (lo que la plataforma ejecuta: crear fila en Sheets, enviar notificación).</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Regla de oro de la automatización: 'Automatizar un proceso desordenado solo produce caos más rápido'. Primero se documenta y limpia el proceso a mano; una vez que funciona sin errores, se automatiza.</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s5-u05",
      "semanaId": "s5",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">¿Cuántas horas a la semana calcula que le toma actualmente la tarea manual que planea automatizar?</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s5-u06",
      "semanaId": "s5",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Diagrama de flujo del proceso repetitivo y prototipo de automatización probado exitosamente con 3 casos de datos ficticios.",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s5-u07",
      "semanaId": "s5",
      "titulo": "Paso 7: Chispa de Innovación — Semana 5",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 5</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              Programe sus automatizaciones en Make con un módulo final que le envíe una alerta a su correo si alguna operación falla. Así nunca perderá el rastro de un cliente.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s6-u01",
      "semanaId": "s6",
      "titulo": "Paso 1: Logro y Objetivos — Semana 6",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO II · SEMANA 6</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Chatbots y Asistentes Virtuales de Atención al Cliente</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Diseñar y configurar un asistente virtual para responder preguntas frecuentes en WhatsApp Business o web con reglas de escalamiento humano.\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Guion estructurado para 10 consultas frecuentes, árbol de decisión y prueba documentada de transferencia a un agente humano.</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A1 / A2</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A1 revisión de tono comercial y exactitud de precios. A2 antes de conectar el bot a una línea telefónica o cuenta activa de clientes.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s6-u02",
      "semanaId": "s6",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-6: Diseño del Asistente Virtual y Protocolo de Escalamiento\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">El canal rey de las ventas y consultas en Costa Rica es WhatsApp. Un chatbot bien diseñado no pretende engañar al cliente haciéndose pasar por humano: ofrece respuestas rápidas y precisas a dudas frecuentes y transfiere de inmediato a un agente cuando el caso lo amerita.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Diseñe un árbol de decisión con 10 respuestas rápidas estructuradas para las consultas más frecuentes de su negocio en WhatsApp Business. Defina las palabras clave que activan cada respuesta y la regla exacta de cuándo transferir al cliente a una persona real.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Una veterinaria y estética canina en Curridabat recibe 40 mensajes diarios preguntando: '¿cuánto vale el baño?', '¿horario de sábado?' y '¿tienen vacunas?'. Con respuestas rápidas y menú estructurado, atienden el 70% de consultas en segundos y dejan al veterinario libre para emergencias.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Ofrezca atención profesional inmediata las 24 horas sin necesidad de contratar personal en etapa temprana.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Disminuya el tiempo de primera respuesta a consultas de WhatsApp y califique prospectos antes de atenderlos personalmente.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s6-u03",
      "semanaId": "s6",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Guion estructurado para 10 consultas frecuentes, árbol de decisión y prueba documentada de transferencia a un agente humano.",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 6\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Tengo una microempresa en Costa Rica dedicada a [GIRO COMERCIAL]. Recibo muchas consultas repetitivas en WhatsApp Business sobre [TEMAS: precios, ubicación, disponibilidad, envíos por Correos de Costa Rica].</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Redacta un guion de atención para un menú conversacional de WhatsApp Business que incluya 5 opciones principales, con sus respuestas correspondientes y el protocolo de derivación a un asesor humano.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">1) Mensaje de bienvenida inicial (máximo 60 palabras), 2) Menú numérico de 1 a 5 con emojis sobrios, 3) Texto de cada una de las 5 respuestas directas con precios en colones, 4) Mensaje de transferencia a humano cuando el cliente escribe 'agente' o tiene una emergencia.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">Usa un tono cálido, costarricense y profesional. No prometas citas ni cobros automáticos que no se puedan garantizar sin confirmación humana.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">Cualquier cliente debe poder resolver su consulta en menos de 2 pasos o quedar conectado con un asesor en horario hábil.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s6-u04",
      "semanaId": "s6",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">El secreto de la atención conversacional es la claridad y la gestión de expectativas. Informar desde el primer mensaje: 'Hola, soy el asistente virtual de [Negocio]. Elija una opción o escriba AGENTE para hablar con nuestro equipo' genera confianza y evita frustraciones.</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Protocolos de Escalamiento Humano: Hay situaciones que NUNCA debe atender un bot sin supervisión: reclamos por producto defectuoso, cancelaciones, dudas sobre pagos no acreditados o emergencias. El bot debe derivar de inmediato con notificación al responsable.</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s6-u05",
      "semanaId": "s6",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Pruebe su guion con un familiar o cliente de confianza: ¿logró encontrar la información en menos de un minuto?</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s6-u06",
      "semanaId": "s6",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Guion estructurado para 10 consultas frecuentes, árbol de decisión y prueba documentada de transferencia a un agente humano.",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s6-u07",
      "semanaId": "s6",
      "titulo": "Paso 7: Chispa de Innovación — Semana 6",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 6</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              Configure las 'Respuestas Rápidas' nativas de WhatsApp Business usando atajos con barra inclinada (ej. /horario, /precios, /cuenta). Le permitirá responder con un solo toque desde el celular.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s7-u01",
      "semanaId": "s7",
      "titulo": "Paso 1: Logro y Objetivos — Semana 7",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO II · SEMANA 7</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Sistematización y CRM Básico Seguro</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Estructurar una base de datos de clientes (CRM) en Google Sheets protegida con permisos y respaldos, bajo estándares de la Ley 8968.\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Plantilla de CRM en hoja de cálculo con campos mínimos, estados de cliente y protocolo de custodia de datos.</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A0 / A2</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A0 para prototipo con datos de prueba. A2 obligatorio antes de migrar bases con cédulas, teléfonos o direcciones reales de clientes.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s7-u02",
      "semanaId": "s7",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-7: Estructuración del CRM Básico y Consentimiento\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Los clientes son el activo más valioso de cualquier negocio, pero muchas MiPYMES tienen sus contactos dispersos en el historial de WhatsApp, servilletas o la libreta del celular. Esta semana construimos un CRM básico y seguro en Google Sheets con controles de privacidad bajo la Ley 8968.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Cree una plantilla de CRM en Google Sheets con campos normalizados (nombre, teléfono, producto de interés, fecha de último contacto, etapa del embudo y consentimiento de contacto). Aplique validación de datos y proteja los permisos de acceso.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Un emprendimiento de servicios contables en Cartago organiza 50 prospectos que cotizaron declaraciones de impuestos en los últimos 6 meses. Clasifica los estados: 'Prospecto', 'Cotizado', 'Cliente Activo', 'Inactivo'. En el cierre fiscal, reactiva al 20% enviando un recordatorio personalizado con su consentimiento.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Cree su base de contactos con orden y consentimiento desde su primera prospección comercial.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Deje de perder oportunidades comerciales unificando registros dispersos en WhatsApp, libretas y correos.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s7-u03",
      "semanaId": "s7",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Plantilla de CRM en hoja de cálculo con campos mínimos, estados de cliente y protocolo de custodia de datos.",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 7\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Tengo una MiPYME de [TIPO DE PRODUCTO/SERVICIO] en Costa Rica con una base de prospectos y clientes que necesito ordenar en una hoja de cálculo protegida.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Diseña la estructura de columnas para un CRM básico en Google Sheets. Define los campos indispensables, las opciones para listas desplegables de validación (estados de cliente y canales) y las reglas de seguridad de datos.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">1) Tabla con nombres de columnas, tipo de dato y fórmula sugerida, 2) Lista de 5 estados del embudo comercial, 3) Cláusula breve de consentimiento para añadir al pie de formularios bajo la Ley 8968.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">No incluyas campos innecesarios como números de tarjeta o datos sensibles no relacionados con el servicio. Mantén el diseño simple para operar desde el móvil.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">Permitir a una sola persona actualizar el estado de 10 clientes en menos de 5 minutos al final del día.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s7-u04",
      "semanaId": "s7",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Un CRM (Customer Relationship Management) no es un software caro; es una disciplina de trabajo. Consiste en registrar cada interacción con el cliente para que cualquier miembro del equipo sepa en qué estado está la venta, qué preferencias tiene y cuándo se le debe dar seguimiento.</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Tratamiento de datos personales en Costa Rica: La Ley 8968 exige contar con el consentimiento libre, expreso e informado de las personas antes de incluir sus datos en bases comerciales. Nunca comparta ni venda sus listas de clientes a terceros.</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s7-u05",
      "semanaId": "s7",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">¿Cuántos prospectos de los últimos tres meses no volvieron a ser contactados por falta de un registro centralizado?</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s7-u06",
      "semanaId": "s7",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Plantilla de CRM en hoja de cálculo con campos mínimos, estados de cliente y protocolo de custodia de datos.",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s7-u07",
      "semanaId": "s7",
      "titulo": "Paso 7: Chispa de Innovación — Semana 7",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 7</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              Active el historial de versiones en Google Sheets (Archivo → Historial de versiones) para recuperar información en caso de que alguien borre datos por error en su CRM.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s8-u01",
      "semanaId": "s8",
      "titulo": "Paso 1: Logro y Objetivos — Semana 8",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO II · SEMANA 8</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Retorno de Inversión (ROI) de la Automatización</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Calcular con fórmula transparente cuánto dinero y horas ahorra su empresa con las automatizaciones implementadas, evaluando costos de fallos y mantenimiento.\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Hoja de cálculo de ROI con supuestos visibles, horas ahorradas al mes, costos de herramientas y análisis de sensibilidad.</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A1 / A2</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A1 revisión de costos internos. A2 antes de firmar contratos de software anuales o adquisiciones tecnológicas.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s8-u02",
      "semanaId": "s8",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-8: Hoja de Cálculo de ROI y Ahorro Empresarial\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">La tecnología solo tiene sentido si genera rentabilidad: ahorrando tiempo, reduciendo errores o aumentando las ventas. Esta semana aprendemos a calcular el Retorno de Inversión (ROI) de las herramientas y automatizaciones implementadas en su negocio.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Calcule el costo por hora de su trabajo y el de su equipo. Multiplíquelo por las horas mensuales que ahorran las automatizaciones implementadas y reste el costo de herramientas (si las hubiera). Obtenga el ROI en tiempo y dinero.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Una tienda de ropa deportiva en Pérez Zeledón ahorra 12 horas al mes que antes dedicaba a responder consultas de disponibilidad y registrar direcciones a mano. Valorando la hora del dueño en ₡5.000, el ahorro mensual es de ₡60.000. Si las herramientas utilizadas son 100% gratuitas, el retorno es inmediato y puro.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Evite gastar en herramientas digitales innecesarias verificando si el ahorro justifica la complejidad.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Demuestre con números claros a socios o gerencia el valor tangible de modernizar los procesos operativos.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s8-u03",
      "semanaId": "s8",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Hoja de cálculo de ROI con supuestos visibles, horas ahorradas al mes, costos de herramientas y análisis de sensibilidad.",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 8\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Soy dueño/a de un negocio en Costa Rica. He implementado automatizaciones de atención y registro de clientes que estimo me ahorran [NÚMERO DE HORAS] horas al mes. El costo por hora de trabajo en mi empresa es de aproximadamente [₡MONTO POR HORA].</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Ayúdame a estructurar una fórmula de Retorno de Inversión (ROI) anual. Incluye un análisis de sensibilidad con 3 escenarios (pesimista, realista y optimista) considerando posibles costos de mantenimiento o fallos.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">1) Fórmula de cálculo explicada en lenguaje sencillo, 2) Tabla con los 3 escenarios en colones costarricenses (₡), 3) Recomendación sobre si vale la pena o no escalar la tecnología a herramientas de pago.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">Considera que los costos deben ser conservadores y transparentes. No prometas retornos irreales.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">Demostrar con cifras comprobables si el tiempo liberado se puede reinvertir en actividades de venta para generar ingresos adicionales.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s8-u04",
      "semanaId": "s8",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Fórmula básica de ROI de Automatización: ROI = [(Ahorro generado - Costo de implementación) / Costo de implementación] × 100. En proyectos sin costo de licencia (usando planes gratuitos), el beneficio se mide en Horas Hombre Liberadas (HHL) reinvertidas en el negocio.</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Costos Ocultos de la Tecnología: Al calcular el ROI no solo se mira el precio de suscripción. Se deben considerar las horas de aprendizaje, el tiempo de mantenimiento cuando un servicio cambia de interfaz y el costo de supervisión humana permanente.</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s8-u05",
      "semanaId": "s8",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Al calcular el valor de su hora de trabajo, ¿qué actividad comercial de alto impacto realizará con las horas liberadas por la automatización?</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s8-u06",
      "semanaId": "s8",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Hoja de cálculo de ROI con supuestos visibles, horas ahorradas al mes, costos de herramientas y análisis de sensibilidad.",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s8-u07",
      "semanaId": "s8",
      "titulo": "Paso 7: Chispa de Innovación — Semana 8",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 8</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              Dedique al menos la mitad del tiempo liberado por la automatización a llamar personalmente a sus clientes más leales para fidelizarlos. Ese toque humano no lo reemplaza ningún algoritmo.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s9-u01",
      "semanaId": "s9",
      "titulo": "Paso 1: Logro y Objetivos — Semana 9",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO III · SEMANA 9</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Identidad Visual y Diseño de Marca con IA (Canva)</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Crear o actualizar la identidad visual del negocio (paleta de colores, tipografías, tono de voz) y producir piezas gráficas coherentes en Canva.\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Kit de Marca estructurado (colores hexadecimales, tipografías y tono de voz) y enlace a 3 piezas listas para publicación digital.</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A1 / A2</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A1 revisión de consistencia gráfica. A2 si se utilizan logotipos, marcas ajenas o rostros de personas reales sin autorización.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s9-u02",
      "semanaId": "s9",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-9: Kit de Marca y Diseño de Piezas en Canva\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">En el entorno digital, los negocios entran por los ojos. Esta semana trabajamos en la identidad visual de su marca en Canva asistida por IA: definiendo paleta de colores, tipografías, tono de comunicación y 3 piezas promocionales listas para publicar.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Utilice la IA para definir la personalidad de su negocio, una paleta de 4 colores hexadecimales y 2 tipografías armoniosas. Configure su Kit de Marca en Canva y diseñe 3 piezas promocionales coherentes para redes sociales.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Un café de especialidad en San Ramón utiliza Canva e IA para generar imágenes de grano de café y taza humeante. Define su paleta: Café tostado (#4A2E18), Crema (#F5EBE6) y Dorado (#D4AF37). Diseña 3 publicaciones para Instagram con el mismo estilo profesional.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Diseñe una imagen profesional atractiva desde el arranque sin costos elevados de agencias publicitarias.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Renueve la presentación de sus productos y catálogos para transmitir mayor confianza y justificar mejores precios.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s9-u03",
      "semanaId": "s9",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Kit de Marca estructurado (colores hexadecimales, tipografías y tono de voz) y enlace a 3 piezas listas para publicación digital.",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 9\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Tengo un emprendimiento de [TIPO DE PRODUCTO/SERVICIO] en Costa Rica. El concepto de mi marca transmite [3 VALORES: ej. frescura, tradición, confianza]. Mis clientes son personas que buscan calidad.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Sugiere una identidad visual completa: 1) Paleta de 4 colores con sus códigos hexadecimales (#HEX) y su función (fondo, acento, texto), 2) Dos tipografías gratuitas disponibles en Canva (un título y un cuerpo), 3) Una guía de tono de voz en 3 adjetivos con 2 ejemplos de saludos para redes.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">Entrega una ficha técnica ordenada y 3 ideas de publicaciones para redes sociales describiendo: imagen de fondo sugerida, titular principal y texto de copy con llamado a la acción.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">Los colores deben tener alto contraste para garantizar accesibilidad visual (WCAG AA). Evita diseños sobrecargados.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">El Kit de Marca debe permitir que cualquier diseño futuro mantenga la misma identidad reconocible.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s9-u04",
      "semanaId": "s9",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Consistencia de Marca: Un cliente necesita ver una marca entre 5 y 7 veces antes de recordarla. Si cada publicación tiene colores, tipos de letra y logos distintos, el negocio parece informal y pierde recordación. La disciplina visual genera percepción de valor.</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Derechos de Autor y Propiedad Intelectual: Las imágenes generadas por IA son herramientas de apoyo; asegúrese de no solicitar réplicas de personajes con derechos protegidos o marcas comerciales ajenas. Utilice siempre activos comerciales libres de regalías.</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s9-u05",
      "semanaId": "s9",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Muestre sus 3 piezas a dos clientes o conocidos: ¿logran identificar claramente qué vende y cuál es el precio o llamado a la acción?</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s9-u06",
      "semanaId": "s9",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Kit de Marca estructurado (colores hexadecimales, tipografías y tono de voz) y enlace a 3 piezas listas para publicación digital.",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s9-u07",
      "semanaId": "s9",
      "titulo": "Paso 7: Chispa de Innovación — Semana 9",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 9</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              En Canva, use la herramienta 'Diseño Mágico' subiendo una foto real de su producto con buena luz natural: la plataforma le generará múltiples plantillas adaptadas a su paleta automáticamente.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s10-u01",
      "semanaId": "s10",
      "titulo": "Paso 1: Logro y Objetivos — Semana 10",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO III · SEMANA 10</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Producción Audiovisual: Video, Locución y Avatares Éticos</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Producir un video corto promocional con guion estructurado, subtítulos y locución asistida por IA respetando derechos de imagen y voz.\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Guion técnico estructurado (storyboard) con subtitulado y ficha de permisos de activos y locuciones sintéticas.</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A1 / A2</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A1 revisión de claridad de mensaje. A2 obligatorio antes de clonar voz/imagen de terceros o publicar testimonios de clientes.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s10-u02",
      "semanaId": "s10",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-10: Storyboard y Video Promocional Subtitulado\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">El formato audiovisual domina el consumo en redes como TikTok, Instagram Reels y YouTube Shorts. Esta semana producimos un video corto promocional estructurando un guion profesional, subtítulos automáticos y locución con herramientas accesibles y éticas.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Escriba un guion de video de 30 a 45 segundos estructurado en 4 partes (Gancho, Problema, Solución y Llamado a la Acción). Grabe o arme el clip en CapCut o Canva incorporando subtítulos automáticos y locución clara.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Un centro de estética en Desamparados crea un reel de 30 segundos. Gancho: '¿Puntas abiertas después del tinte?'. Problema: 'Los tratamientos convencionales resecan'. Solución: 'Tratamiento de nutrición profunda'. Llamado: 'Escríbenos al WhatsApp y agenda tu cita con 15% de descuento'.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Pierda el miedo a la cámara apoyándose en herramientas audiovisuales accesibles para mostrar su producto.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Produzca testimonios, videos explicativos y tutoriales de producto con calidad constante para sus redes.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s10-u03",
      "semanaId": "s10",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Guion técnico estructurado (storyboard) con subtitulado y ficha de permisos de activos y locuciones sintéticas.",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 10\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Tengo una MiPYME de [PRODUCTO/SERVICIO] en Costa Rica. Quiero lanzar un video corto de 30 segundos en formato vertical (9:16) para promocionar [PRODUCTO ESTRELLA].</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Redacta un guion técnico audiovisual dividido segundo a segundo con la siguiente estructura: Gancho (0-3s), Problema del cliente (3-10s), Nuestra solución (10-22s), Llamado a la acción (22-30s).</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">Tabla de 3 columnas: 1) Segundo / Tiempo, 2) Lo que se ve en pantalla (video o foto), 3) Lo que se dice en voz en off (con tono costarricense cercano).</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">El texto hablado debe poder leerse fluidamente en 30 segundos (máximo 65 palabras en total). Incluye indicación de texto grande en pantalla para subtitulado.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">El gancho inicial debe captar la atención de inmediato para que el usuario no deslice hacia arriba en los primeros 3 segundos.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s10-u04",
      "semanaId": "s10",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Estructura de Retención en Video Corto: Más del 70% de los usuarios abandona un video en los primeros 3 segundos si no ve un problema relevante o una imagen atractiva. El gancho (hook) visual y sonoro es determinante para el alcance del algoritmo.</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Ética en Locución Sintética y Avatares: Si utiliza voces artificiales o avatares generados por IA, garantice que el mensaje sea transparente. Nunca clone la voz ni la imagen de personas reales sin su consentimiento explícito por escrito.</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s10-u05",
      "semanaId": "s10",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Vea su video sin sonido en el celular: ¿los subtítulos y las imágenes transmiten el mensaje completo sin necesidad de audio?</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s10-u06",
      "semanaId": "s10",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Guion técnico estructurado (storyboard) con subtitulado y ficha de permisos de activos y locuciones sintéticas.",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s10-u07",
      "semanaId": "s10",
      "titulo": "Paso 7: Chispa de Innovación — Semana 10",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 10</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              Más del 60% de los videos en redes sociales se consumen con el audio apagado. La herramienta de 'Subtítulos Automáticos' de CapCut es gratuita y duplica el tiempo de retención de los usuarios.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s11-u01",
      "semanaId": "s11",
      "titulo": "Paso 1: Logro y Objetivos — Semana 11",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO III · SEMANA 11</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Prefactibilidad y Análisis Financiero de Inversión</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Evaluar con asistencia crítica de IA la viabilidad de un nuevo producto, servicio o compra de equipo calculando el punto de equilibrio en colones.\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Ficha de prefactibilidad con punto de equilibrio, costos fijos y variables detallados y tres escenarios (conservador, base, optimista).</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A2</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A2 Obligatorio: toda cifra de prefactibilidad debe ser contrastada con facturas reales y criterio contable antes de comprometer fondos.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s11-u02",
      "semanaId": "s11",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-11: Ficha de Prefactibilidad y Punto de Equilibrio\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Antes de gastar dinero en inventario, locales o maquinaria, los números deben cuadrar en papel. Esta semana utilizamos la IA para calcular costos fijos, costos variables, margen de contribución y el punto de equilibrio exacto de su proyecto en colones costarricenses.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Liste los costos fijos mensuales y el costo variable unitario de su producto o servicio principal. Utilice la calculadora de prefactibilidad para determinar cuántas unidades exactas debe vender al mes para no perder dinero y evalué tres escenarios de ventas.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Un taller de encuadernación artesanal en San Pedro tiene costos fijos de ₡180.000 al mes (servicios, taller, envíos). Cada cuaderno cuesta ₡3.000 en materiales y se vende en ₡8.000. Margen de contribución: ₡5.000. Punto de equilibrio: 36 cuadernos al mes. Vender 37 ya genera ganancia.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Conozca cuántas unidades exactas debe vender al mes antes de alquilar un local o comprar inventario.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Evalúe si abrir una nueva sucursal o adquirir maquinaria es rentable o si comprometerá el flujo de caja actual.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s11-u03",
      "semanaId": "s11",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Ficha de prefactibilidad con punto de equilibrio, costos fijos y variables detallados y tres escenarios (conservador, base, optimista).",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 11\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Estoy evaluando lanzar un nuevo [PRODUCTO/SERVICIO] en Costa Rica. Tengo los siguientes costos estimados en colones: Costos fijos mensuales = [₡MONTO: ej. ₡200.000], Costo variable por unidad = [₡MONTO: ej. ₡4.000], Precio de venta previsto = [₡MONTO: ej. ₡9.000].</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Calcula: 1) Margen de contribución unitario y porcentual, 2) Punto de equilibrio en unidades y en colones mensuales, 3) Simulación de 3 escenarios: Conservador (vender 50% del PE), Base (Punto de equilibrio), Optimista (vender 150% del PE).</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">1) Fórmulas aplicadas con desglose numérico paso a paso, 2) Tabla comparativa de los 3 escenarios con ganancia o pérdida neta mensual, 3) Tres preguntas de alerta financiera que debo validar antes de invertir.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">No redondees cifras sin explicarlo. Todos los montos deben estar en colones costarricenses (₡). Incluye el cálculo del IVA correspondiente (13%) si aplica.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">Tener la cifra exacta de cuántas unidades mínimas debo vender cada semana para cubrir la inversión.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s11-u04",
      "semanaId": "s11",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">El Punto de Equilibrio es el umbral donde los ingresos totales igualan exactamente a los costos totales: la empresa ni gana ni pierde. Conocer este número es el mejor antídoto contra el endeudamiento irresponsable.</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Principio de Pérdida Aceptable: En el emprendimiento moderno (Lean Startup), no se apuesta todo el capital a un supuesto. Se define cuánto dinero y tiempo está dispuesto a arriesgar en un experimento de 30 días sin comprometer el patrimonio familiar.</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s11-u05",
      "semanaId": "s11",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">¿Su punto de equilibrio mensual le parece alcanzable con su capacidad actual de producción y comercialización? ¿Qué cuello de botella detectó?</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s11-u06",
      "semanaId": "s11",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Ficha de prefactibilidad con punto de equilibrio, costos fijos y variables detallados y tres escenarios (conservador, base, optimista).",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s11-u07",
      "semanaId": "s11",
      "titulo": "Paso 7: Chispa de Innovación — Semana 11",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 11</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              Antes de firmar contratos de alquiler o compras de equipo, simule siempre el escenario pesimista donde las ventas tarden 3 meses en despegar. La reserva de capital de trabajo es la que salva a las MiPYMES.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s12-u01",
      "semanaId": "s12",
      "titulo": "Paso 1: Logro y Objetivos — Semana 12",
      "tipo": "introduccion",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Avanzar a Texto Introductorio",
      "html": "\n          <div class=\"learning-objectives-view\" style=\"background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: #ffffff !important; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);\">\n            <span class=\"module-tag\" style=\"font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #ffffff !important; display: block; margin-bottom: 6px; opacity: 0.95;\">MÓDULO III · SEMANA 12</span>\n            <h3 style=\"color: #ffffff !important; border: none; padding: 0; margin-top: 0; font-size: 1.5rem; font-family: 'Montserrat', sans-serif;\"><i class=\"fas fa-trophy\" style=\"color: #f39c12; margin-right: 10px;\"></i> Campaña de Lanzamiento Integral (Modelo AIDA)</h3>\n            <p style=\"font-size: 1.05rem; color: #ffffff !important; line-height: 1.65; margin-top: 15px; margin-bottom: 0;\">\n              <strong style=\"color: #ffffff !important; font-weight: 700;\">Meta de Negocio de la Semana:</strong> Integrar todos los productos del programa en una campaña comercial de 4 semanas estructurada bajo el embudo AIDA (Atención, Interés, Deseo, Acción).\n            </p>\n          </div>\n          \n          <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 20px;\">\n            <div style=\"background-color: #fffdf5; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-box-open\" style=\"color: #f39c12;\"></i> Entregable esperado al finalizar:</strong>\n              <span style=\"color: #444; font-size: 0.92rem; line-height: 1.5;\">Plan de campaña de 4 semanas completo con piezas creativas, calendario de publicación, presupuesto de pauta e indicadores clave de conversión.</span>\n            </div>\n            <div style=\"background-color: #f0fdf4; padding: 18px; border-radius: var(--radius-md); border-left: 5px solid var(--accent-green); box-shadow: var(--shadow-sm);\">\n              <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-user-shield\"></i> Nivel de Asesoría: A1 / A2</strong>\n              <span style=\"color: #334155; font-size: 0.88rem; line-height: 1.5;\">A1 revisión del mensaje y propuesta comercial. A2 antes de invertir presupuesto en pauta digital o campañas masivas de mensajería.</span>\n            </div>\n          </div>\n\n          <div style=\"display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <div style=\"font-size: 1.8rem; color: var(--ucr-blue);\"><i class=\"fas fa-clock\"></i></div>\n            <div>\n              <strong style=\"color: var(--ucr-dark); display: block;\">Distribución 70/30 (2 Horas Formativas):</strong>\n              <span style=\"font-size: 0.9rem; color: var(--text-light);\">84 minutos de aplicación práctica en su empresa y 36 minutos de comprensión teórica y análisis crítico.</span>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s12-u02",
      "semanaId": "s12",
      "titulo": "Paso 2: Reto y Aplicabilidad Empresarial",
      "tipo": "interpretacion_critica",
      "duracionMin": 15,
      "requiereAccion": false,
      "boton": "Ver Práctica Guiada CIFRCE",
      "html": "\n          <div class=\"intro-presentation-card\" style=\"margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50; background: white; padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-color);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-bullseye\"></i> Reto S-12: Campaña Integral de Lanzamiento (AIDA)\n            </h4>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">¡Llegamos a la semana final de integración! Esta semana reúne todos los activos construidos (diagnóstico, automatización, CRM, identidad y números) en una Campaña de Lanzamiento Integral de 4 semanas bajo el modelo AIDA.</p>\n            <div style=\"background-color: #f8fafc; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem; display: block; margin-bottom: 5px;\">El Reto Práctico:</strong>\n              <p style=\"margin: 0; color: #334155; font-size: 0.95rem; line-height: 1.6;\">Diseñe un plan de campaña comercial para las próximas 4 semanas estructurado en el embudo AIDA (Atención, Interés, Deseo y Acción). Calendarice las publicaciones, defina la oferta irresistible, el canal de cierre en WhatsApp y complete su Portafolio Final.</p>\n            </div>\n            <div style=\"background-color: #fffdf5; padding: 15px 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 15px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 5px;\"><i class=\"fas fa-map-marker-alt\"></i> Caso Costarricense de Referencia:</strong>\n              <p style=\"margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;\">Ejemplo: Una empresa de productos naturales en Coronado lanza su línea de jabones faciales. Semana 1 (Atención): Reels sobre cuidado de la piel. Semana 2 (Interés): Infografía de ingredientes orgánicos locales. Semana 3 (Deseo): Testimonios y kit promocional con 20% descuento. Semana 4 (Acción): Cierre por WhatsApp con entrega por Correos de Costa Rica.</p>\n            </div>\n          </div>\n\n          <div class=\"disclaimer-box\" style=\"background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);\">\n            <h4 style=\"color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;\">\n              <i class=\"fas fa-info-circle\"></i> ¿Cómo aplica esta semana según la etapa de su negocio?\n            </h4>\n            <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;\">\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🆕 Idea o Negocio Naciente</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Ejecute su lanzamiento comercial formal al mercado con orden, activos profesionales y metas medibles.</p>\n              </div>\n              <div style=\"background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;\">\n                <span class=\"badge\" style=\"background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;\">🏢 Negocio en Marcha</span>\n                <p style=\"font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;\">Lance promociones estacionales o nuevas líneas de producto con una campaña articulada que maximice la conversión.</p>\n              </div>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s12-u03",
      "semanaId": "s12",
      "titulo": "Paso 3: Tarea — Prompt CIFRCE en Práctica",
      "tipo": "reto",
      "duracionMin": 35,
      "requiereAccion": true,
      "entregable": "Plan de campaña de 4 semanas completo con piezas creativas, calendario de publicación, presupuesto de pauta e indicadores clave de conversión.",
      "boton": "Avanzar a Fundamentación Conceptual",
      "html": "\n          <div class=\"cifrce-prompt-box\" style=\"background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h4 style=\"color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-terminal\" style=\"color: #f39c12;\"></i> PLANTILLA PROMPT CIFRCE · SEMANA 12\n              </h4>\n              <span class=\"badge\" style=\"background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Modelo CIFRCE Canónico</span>\n            </div>\n            \n            <p style=\"color: #475569; font-size: 0.92rem; margin-bottom: 15px;\">\n              Copie la siguiente plantilla estructurada en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información de su negocio o simulación y ejecútela en ChatGPT, Claude o Gemini gratuito:\n            </p>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-layer-group\"></i> 1. CONTEXTO:</strong>\n              <span style=\"color: #1e293b;\">Tengo todo listo para lanzar mi campaña comercial de [PRODUCTO/SERVICIO] en Costa Rica. Mi oferta especial de lanzamiento es [OFERTA: ej. 2x1 en 첫 compra / kit promocional a ₡15.000]. Mi canal principal de cierre es WhatsApp.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-tasks\"></i> 2. INSTRUCCIÓN:</strong>\n              <span style=\"color: #1e293b;\">Formula un calendario de campaña de 4 semanas aplicando el modelo AIDA: Semana 1 = Generar Atención, Semana 2 = Despertar Interés, Semana 3 = Construir Deseo y prueba social, Semana 4 = Llamado a la Acción y urgencia de cierre.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-table\"></i> 3. FORMATO DE SALIDA:</strong>\n              <span style=\"color: #1e293b;\">Tabla semanal con: a) Objetivo de la semana, b) Canal sugerido (Instagram / Facebook / WhatsApp), c) Idea creativa del contenido, d) Copy listo para publicar con hashtags locales (#PymesCR #CostaRica), e) Métrica de éxito.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-shield-alt\"></i> 4. RESTRICCIONES:</strong>\n              <span style=\"color: #1e293b;\">El presupuesto de pauta recomendado debe ser escalable desde ₡5.000 a ₡25.000 en total. Todo el flujo debe canalizar al CRM y respuestas de WhatsApp construidos en semanas anteriores.</span>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;\">\n              <strong style=\"color: #005da4; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-check-double\"></i> 5. CRITERIOS DE ÉXITO:</strong>\n              <span style=\"color: #1e293b;\">Tener el plan integral listo para ejecutar el próximo lunes con todas las piezas y mensajes preparados.</span>\n            </div>\n          </div>\n\n          <div style=\"background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 20px;\">\n            <strong style=\"color: #166534; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-check-circle\"></i> Alternativa 100% Gratuita Garantizada:</strong>\n            <p style=\"margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;\">\n              No requiere cuenta de pago ni ChatGPT Plus. Puede ejecutar este prompt en la versión gratuita de <strong>ChatGPT</strong>, en <strong>Google Gemini</strong> o en <strong>Claude</strong>. También puede descargar la plantilla en formato Markdown desde la Biblioteca para completarla sin conexión.\n            </p>\n          </div>\n        "
    },
    {
      "id": "s12-u04",
      "semanaId": "s12",
      "titulo": "Paso 4: Entender — Fundamentación y Criterio",
      "tipo": "entender",
      "duracionMin": 25,
      "requiereAccion": false,
      "boton": "Ver Reflexión y Compartir",
      "html": "\n          <div class=\"theoretical-card\" style=\"font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-blue); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;\">\n                <i class=\"fas fa-book-open\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">La Ciencia detrás de la Herramienta</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Marco Pedagógico · Ciclo RHEC</span>\n              </div>\n            </div>\n\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">El Modelo AIDA refleja la psicología natural de compra: nadie compra en el primer segundo. Primero se capta la Atención, luego se educa para generar Interés, se demuestra el beneficio para activar el Deseo y se facilita un canal simple para la Acción de compra.</p>\n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">Cierre del Programa y Portafolio: La verdadera ventaja competitiva de este curso no es la herramienta tecnológica, sino la capacidad que usted ha desarrollado para pensar críticamente, proteger los datos de sus clientes y combinar la inteligencia artificial con el corazón de su negocio.</p>\n            \n            <div style=\"background: #f8fafc; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-yellow); margin-top: 20px;\">\n              <strong style=\"color: #92400e; font-size: 0.95rem; display: block; margin-bottom: 6px;\"><i class=\"fas fa-exclamation-triangle\"></i> Límites de la IA y Supervisión Obligatoria:</strong>\n              <p style=\"margin: 0; font-size: 0.92rem; color: #451a03; line-height: 1.6;\">\n                La IA no asume responsabilidades legales ni contables. Toda cifra financiera, contrato, política de datos o consejo legal generado por un modelo debe ser revisado por una persona calificada antes de comprometer fondos o actuar sobre clientes reales.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s12-u05",
      "semanaId": "s12",
      "titulo": "Paso 5: Compartir — Reflexión Crítica",
      "tipo": "interpretacion_critica",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Ver Rúbrica de la Semana",
      "html": "\n          <div class=\"complementary-task-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;\">\n              <div style=\"background-color: var(--ucr-dark); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;\">\n                <i class=\"fas fa-comments\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);\">Reflexión Crítica y Contraste</h3>\n                <span style=\"font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;\">Aprender en Comunidad</span>\n              </div>\n            </div>\n            \n            <p style=\"margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;\">¡Felicitaciones por completar las 12 semanas! Exporte su portafolio consolidado en la sección Mi Portafolio y comparta su experiencia formativa con la comunidad.</p>\n            \n            <div style=\"background-color: #f8fafc; border-left: 4px solid var(--ucr-blue); padding: 15px 18px; border-radius: var(--radius-sm); margin-top: 15px;\">\n              <strong style=\"color: var(--ucr-dark); font-size: 0.95rem;\"><i class=\"fas fa-lightbulb\" style=\"color: var(--accent-yellow);\"></i> Ejercicio de Contraste con Pares:</strong>\n              <p style=\"margin: 5px 0 0 0; font-size: 0.92rem; color: #334155; line-height: 1.5;\">\n                Comente sus hallazgos con otra persona empresaria o miembro de su equipo. Pregúntele: <em>'¿Este entregable resuelve una necesidad real o solo añade complejidad tecnológica?'</em>. Anote el feedback en su bitácora.\n              </p>\n            </div>\n          </div>\n        "
    },
    {
      "id": "s12-u06",
      "semanaId": "s12",
      "titulo": "Paso 6: Rúbrica y Portafolio de Evidencias",
      "tipo": "evaluacion",
      "duracionMin": 15,
      "requiereAccion": true,
      "entregable": "Plan de campaña de 4 semanas completo con piezas creativas, calendario de publicación, presupuesto de pauta e indicadores clave de conversión.",
      "boton": "Ver Chispa de Innovación",
      "html": "\n          <div class=\"rubric-view-card\" style=\"background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;\">\n              <h3 style=\"border: none; padding: 0; margin: 0; font-size: 1.25rem; color: var(--ucr-dark); display: flex; align-items: center; gap: 8px;\">\n                <i class=\"fas fa-clipboard-check\" style=\"color: var(--accent-green);\"></i> Rúbrica de Calidad y Registro en Portafolio\n              </h3>\n              <span class=\"badge\" style=\"background-color: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;\">Autoevaluación UCR</span>\n            </div>\n\n            <p style=\"font-size: 0.92rem; color: #475569; margin-bottom: 15px;\">\n              Antes de marcar esta semana como completada, verifique que su entregable cumpla con los siguientes criterios de calidad (escala 0 a 3):\n            </p>\n\n            <div style=\"overflow-x: auto; margin-bottom: 25px;\">\n              <table style=\"width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;\">\n                <thead>\n                  <tr style=\"background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Criterio</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Excelente (3 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Aceptable (2 pts)</th>\n                    <th style=\"padding: 10px; color: var(--ucr-dark);\">Insuficiente (0-1 pt)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">1. Pertinencia al Negocio</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Aplica directamente a problemas reales de su MiPYME.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Aplica parcialmente; requiere ajustes de contexto.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Ejemplo genérico sin adaptación a su empresa.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">2. Calidad del Prompt CIFRCE</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Contiene las 5 capas completas sin ambigüedades.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Faltan 1 o 2 capas (ej. restricciones o formato).</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Prompt vago de una sola frase.</td>\n                  </tr>\n                  <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                    <td style=\"padding: 10px; font-weight: 700;\">3. Privacidad y Datos (Ley 8968)</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Datos anonimizados o ficticios sin exposición sensible.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Datos generales pero con referencias indirectas.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Expone cédulas, claves o datos reales sin permiso.</td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding: 10px; font-weight: 700;\">4. Supervisión Humana</td>\n                    <td style=\"padding: 10px; color: #15803d;\">Verificación de números, tono y viabilidad realizada.</td>\n                    <td style=\"padding: 10px; color: #b45309;\">Revisión superficial sin contraste numérico.</td>\n                    <td style=\"padding: 10px; color: #b91c1c;\">Acepta la respuesta de IA sin contrastar.</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            </div>\n        "
    },
    {
      "id": "s12-u07",
      "semanaId": "s12",
      "titulo": "Paso 7: Chispa de Innovación — Semana 12",
      "tipo": "chispa",
      "duracionMin": 10,
      "requiereAccion": false,
      "boton": "Declarar Semana Completada",
      "html": "\n          <div class=\"chispa-card\" style=\"background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;\">\n            <div style=\"display: flex; align-items: center; gap: 15px; margin-bottom: 15px;\">\n              <div style=\"background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);\">\n                <i class=\"fas fa-lightbulb\"></i>\n              </div>\n              <div>\n                <h3 style=\"border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.35rem; font-family: 'Montserrat', sans-serif;\">💡 Chispa de Innovación: Semana 12</h3>\n                <span style=\"font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;\">Vanguardia Tecnológica para MiPYMES de Costa Rica</span>\n              </div>\n            </div>\n\n            <p style=\"font-size: 1rem; color: #744210; line-height: 1.7; margin-bottom: 15px;\">\n              Conserve una rutina quincenal de revisión de sus procesos y herramientas. La tecnología seguirá evolucionando rápidamente, pero un negocio con procesos claros y foco en el cliente siempre prosperará.\n            </p>\n\n            <div style=\"background: white; padding: 15px 18px; border-radius: 8px; border: 1px solid #fed7aa; margin-top: 15px;\">\n              <strong style=\"color: #9a3412; font-size: 0.92rem; display: block; margin-bottom: 4px;\"><i class=\"fas fa-rocket\"></i> Próximo Paso en su Formación:</strong>\n              <span style=\"font-size: 0.88rem; color: #7c2d12; line-height: 1.5;\">\n                Al avanzar a la siguiente semana, aplicará lo aprendido sobre una nueva dimensión de su empresa, fortaleciendo progresivamente su portafolio de acreditación UCR.\n              </span>\n            </div>\n          </div>\n        "
    }
  ],
  "recursos": [
    {
      "id": "rec-1",
      "semanaId": "s1",
      "titulo": "¿Qué es la Inteligencia Artificial y qué NO es?",
      "tipo": "lectura",
      "url": "https://gemini.google.com/share/93280f9e37b4",
      "descripcion": "Conceptos fundamentales para comprender los alcances reales y las limitaciones de los LLMs sin mitos.",
      "fuente": "UCR / CIOdD - Guía Abierta",
      "moduloId": "m1"
    },
    {
      "id": "rec-2",
      "semanaId": "s1",
      "titulo": "Protocolo y Ley 8968 de Protección de Datos en Costa Rica",
      "tipo": "documento",
      "url": "politicas/protocolo-privacidad-datos.html",
      "descripcion": "Normas éticas y legales para el tratamiento seguro de datos en herramientas de IA dentro de Costa Rica.",
      "fuente": "CIOdD / UCR",
      "moduloId": "m1"
    },
    {
      "id": "rec-3",
      "semanaId": "s2",
      "titulo": "Guía Maestra de Prompt Engineering: Modelo CIFRCE",
      "tipo": "infografia",
      "url": "Infografias/Semana 2. Guía Maestra de Prompt Engineering.png",
      "descripcion": "Infografía oficial descargable en alta resolución con la anatomía de un prompt profesional.",
      "fuente": "UCR / CIOdD",
      "moduloId": "m1"
    },
    {
      "id": "rec-4",
      "semanaId": "s3",
      "titulo": "Video: La IA aplicada a los negocios reales",
      "tipo": "video",
      "url": "https://youtu.be/5Y_WAYQnO3c",
      "descripcion": "Conferencia aplicada sobre diagnóstico y oportunidades de adopción de IA en MiPYMES.",
      "fuente": "Canal Oficial UCR",
      "moduloId": "m1"
    },
    {
      "id": "rec-5",
      "semanaId": "s3",
      "titulo": "Plantilla Editable de Matriz FODA y TOWS",
      "tipo": "plantilla",
      "url": "templates/plantilla-foda.html",
      "descripcion": "Herramienta interactiva y descargable para realizar el análisis estratégico del negocio.",
      "fuente": "Caja de Herramientas MiPYME",
      "moduloId": "m1"
    },
    {
      "id": "rec-6",
      "semanaId": "s4",
      "titulo": "Plantilla del Plan de Acción a 90 Días",
      "tipo": "plantilla",
      "url": "templates/plantilla-ivu.html",
      "descripcion": "Matriz de priorización y cronograma de 90 días para ejecutar las metas de la empresa.",
      "fuente": "Caja de Herramientas MiPYME",
      "moduloId": "m1"
    },
    {
      "id": "rec-7",
      "semanaId": "s5",
      "titulo": "Video Tutorial: Automatización para PYMES con Make",
      "tipo": "video",
      "url": "https://youtu.be/ElhJ5GFQDgE",
      "descripcion": "Paso a paso para crear un escenario No-Code conectando formularios con correos automáticos.",
      "fuente": "Tutorial Práctico",
      "moduloId": "m2"
    },
    {
      "id": "rec-8",
      "semanaId": "s6",
      "titulo": "Manual de Automatización de WhatsApp con n8n o Make",
      "tipo": "lectura",
      "url": "https://gemini.google.com/share/43bc6db51c13",
      "descripcion": "Guía de diseño conversacional, árboles lógicos y protocolos de escalamiento a humanos.",
      "fuente": "CIOdD / UCR",
      "moduloId": "m2"
    },
    {
      "id": "rec-9",
      "semanaId": "s7",
      "titulo": "Plantilla de CRM Básico Seguro en Google Sheets",
      "tipo": "plantilla",
      "url": "templates/plantilla-crm-basico.html",
      "descripcion": "Estructura relacional de clientes, historial de interacciones y embudo comercial.",
      "fuente": "Caja de Herramientas MiPYME",
      "moduloId": "m2"
    },
    {
      "id": "rec-10",
      "semanaId": "s8",
      "titulo": "Video: El Valor y ROI de la Automatización Empresarial",
      "tipo": "video",
      "url": "https://youtu.be/AjG0NghxXzQ",
      "descripcion": "Cómo medir ahorros tangibles de tiempo y costes en micro y pequeñas empresas.",
      "fuente": "UCR / DIPROVID",
      "moduloId": "m2"
    },
    {
      "id": "rec-11",
      "semanaId": "s9",
      "titulo": "Video Tutorial: Canva y Generación de Imagen con IA",
      "tipo": "video",
      "url": "https://youtu.be/-nmNBOtHNig",
      "descripcion": "Técnicas de diseño para emprendedores utilizando el Kit de Marca y herramientas de IA.",
      "fuente": "Canva / Tutorial",
      "moduloId": "m3"
    },
    {
      "id": "rec-12",
      "semanaId": "s10",
      "titulo": "Video: Generación de Video, Voz y Avatares con IA",
      "tipo": "video",
      "url": "https://youtu.be/ReHGaWrwBfw",
      "descripcion": "Uso responsable de herramientas de síntesis de voz, subtitulado y clips promocionales.",
      "fuente": "Taller Aplicado",
      "moduloId": "m3"
    },
    {
      "id": "rec-13",
      "semanaId": "s11",
      "titulo": "Plantilla de Prefactibilidad Financiera y Punto de Equilibrio",
      "tipo": "plantilla",
      "url": "templates/plantilla-prefactibilidad.html",
      "descripcion": "Calculadora de costos fijos, variables, margen de contribución y punto de equilibrio en colones.",
      "fuente": "Caja de Herramientas MiPYME",
      "moduloId": "m3"
    },
    {
      "id": "rec-14",
      "semanaId": "s12",
      "titulo": "Plantilla de Plan de Campaña Comercial AIDA",
      "tipo": "plantilla",
      "url": "templates/plantilla-campana-aida.html",
      "descripcion": "Estructura completa para calendarizar 4 semanas de contenidos, pauta y conversiones.",
      "fuente": "Caja de Herramientas MiPYME",
      "moduloId": "m3"
    }
  ],
  "rubricaSemanal": {
    "criterios": [
      {
        "adecuado": "El entregable responde a una necesidad identificada del negocio o emprendimiento.",
        "id": "pertinencia",
        "inicial": "El entregable es genérico o no se relaciona con una necesidad concreta.",
        "nombre": "Pertinencia al negocio",
        "solido": "El entregable permite una decisión o mejora concreta y explica a quién beneficia."
      },
      {
        "adecuado": "La instrucción o técnica especifica tarea y contexto, pero omite restricciones o criterios de éxito.",
        "id": "cifrce",
        "inicial": "La instrucción o técnica es vaga y no permite reproducir el proceso.",
        "nombre": "Calidad del prompt CIFRCE o técnica aplicada",
        "solido": "La instrucción o técnica explicita contexto, tarea, formato, restricciones y criterios; se ajusta al tipo de actividad."
      },
      {
        "adecuado": "Se evitaron identificadores directos, pero los permisos y riesgos requieren una revisión adicional.",
        "id": "privacidad",
        "inicial": "Se exponen datos personales o material de terceros sin autorización.",
        "nombre": "Privacidad y ética",
        "solido": "Se usan datos ficticios o anonimizados, permisos cuando corresponda y transparencia sobre IA."
      },
      {
        "adecuado": "Hay revisión humana y algún soporte del proceso, aunque no permite comprobar todos los supuestos.",
        "id": "supervision",
        "inicial": "Se acepta la salida de IA sin comprobar cálculos, fuentes ni conservar evidencia.",
        "nombre": "Supervisión humana y evidencia verificable",
        "solido": "Se contrastan cálculos, fuentes y riesgos, y se conserva evidencia suficiente para reconstruir el resultado."
      }
    ],
    "id": "rubrica-semanal",
    "titulo": "Antes de avanzar, revise su evidencia con estos criterios"
  },
  "diagnosticoPreguntas": [
    {
      "bloque": "competencias_digitales",
      "dimension": "CD",
      "id": "q01",
      "opciones": [
        {
          "etiqueta": "Nunca o casi nunca",
          "valor": 0
        },
        {
          "etiqueta": "Pocas veces al mes",
          "valor": 1
        },
        {
          "etiqueta": "A veces por semana",
          "valor": 2
        },
        {
          "etiqueta": "Con frecuencia todos los días",
          "valor": 3
        },
        {
          "etiqueta": "Todos los días y dependen de ellas mis procesos",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Con qué frecuencia utiliza correo, formularios, hojas de cálculo o herramientas digitales para su negocio?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "competencias_digitales",
      "dimension": "CD",
      "id": "q02",
      "opciones": [
        {
          "etiqueta": "No sé cómo hacerlo",
          "valor": 0
        },
        {
          "etiqueta": "Tengo serias dificultades y ocupo ayuda",
          "valor": 1
        },
        {
          "etiqueta": "Puedo hacerlo pero me toma mucho tiempo",
          "valor": 2
        },
        {
          "etiqueta": "Lo hago con facilidad e independencia",
          "valor": 3
        },
        {
          "etiqueta": "Lo hago diariamente y conozco buenas prácticas de organización",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Puede crear, guardar, buscar y compartir archivos digitales (PDF, imágenes, hojas de cálculo) sin ayuda?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "competencias_digitales",
      "dimension": "CD",
      "id": "q03",
      "opciones": [
        {
          "etiqueta": "No sé qué es la verificación en dos pasos",
          "valor": 0
        },
        {
          "etiqueta": "Sé qué es, pero no sé cómo activarla",
          "valor": 1
        },
        {
          "etiqueta": "Tengo cuentas, pero ninguna tiene activada la seguridad doble",
          "valor": 2
        },
        {
          "etiqueta": "He activado seguridad doble en mis cuentas principales (banco, correo)",
          "valor": 3
        },
        {
          "etiqueta": "Tengo activada la seguridad doble en todas mis herramientas de negocio",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Ha creado cuentas en plataformas digitales y activado mecanismos de seguridad como verificación en dos pasos (2FA)?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "competencias_digitales",
      "dimension": "CD",
      "id": "q04",
      "opciones": [
        {
          "etiqueta": "No, siempre necesito que alguien me lo resuelva presencialmente",
          "valor": 0
        },
        {
          "etiqueta": "Busco ayuda pero casi nunca entiendo los tutoriales",
          "valor": 1
        },
        {
          "etiqueta": "A veces logro resolverlo con tutoriales si son sencillos",
          "valor": 2
        },
        {
          "etiqueta": "Normalmente busco guías y soluciono el problema de forma autónoma",
          "valor": 3
        },
        {
          "etiqueta": "Resuelvo problemas digitales con rapidez y ayudo a otros a hacerlo",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "Cuando una herramienta digital cambia o falla, ¿puede resolverlo buscando instrucciones o tutoriales en internet?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "alfabetizacion_ia",
      "dimension": "AIA",
      "id": "q05",
      "opciones": [
        {
          "etiqueta": "Nunca he escuchado de ellas o nunca las he abierto",
          "valor": 0
        },
        {
          "etiqueta": "Las he abierto una o dos veces por curiosidad",
          "valor": 1
        },
        {
          "etiqueta": "Las uso ocasionalmente para tareas sencillas",
          "valor": 2
        },
        {
          "etiqueta": "Las uso con frecuencia semanal para redactar o buscar ideas",
          "valor": 3
        },
        {
          "etiqueta": "Las uso diariamente como parte activa de mis flujos de trabajo",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Ha utilizado herramientas de IA generativa como ChatGPT, Gemini, Copilot u otras similares?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "alfabetizacion_ia",
      "dimension": "AIA",
      "id": "q06",
      "opciones": [
        {
          "etiqueta": "No sé qué es un prompt o cómo escribirle a la IA",
          "valor": 0
        },
        {
          "etiqueta": "Le escribo preguntas simples como si fuera un buscador común",
          "valor": 1
        },
        {
          "etiqueta": "Le doy instrucciones básicas pero a veces las respuestas son genéricas",
          "valor": 2
        },
        {
          "etiqueta": "Utilizo estructuras claras (rol, contexto, restricción) y obtengo buenos resultados",
          "valor": 3
        },
        {
          "etiqueta": "Domino técnicas avanzadas y adapto mis prompts de forma iterativa y precisa",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Sabe formular instrucciones o prompts específicos para obtener respuestas realmente útiles de la IA?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "alfabetizacion_ia",
      "dimension": "AIA",
      "id": "q07",
      "opciones": [
        {
          "etiqueta": "Nunca, asumo que todo lo que dice la IA es correcto",
          "valor": 0
        },
        {
          "etiqueta": "Casi nunca, solo si algo me parece muy extraño",
          "valor": 1
        },
        {
          "etiqueta": "A veces contrasto la información si es un tema importante",
          "valor": 2
        },
        {
          "etiqueta": "Siempre reviso y edito las respuestas de la IA antes de aplicarlas",
          "valor": 3
        },
        {
          "etiqueta": "Tengo un protocolo estricto para validar fuentes y datos generados por IA",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Verifica la información o contenidos que le entrega una IA antes de usarlos en una decisión de su negocio?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "alfabetizacion_ia",
      "dimension": "AIA",
      "id": "q08",
      "opciones": [
        {
          "etiqueta": "No conozco ningún riesgo de la IA",
          "valor": 0
        },
        {
          "etiqueta": "He oído que comete errores, pero no sé cómo me afecta",
          "valor": 1
        },
        {
          "etiqueta": "Entiendo los riesgos básicos pero no sé cómo prevenirlos con mis datos",
          "valor": 2
        },
        {
          "etiqueta": "Sé qué datos no debo compartir (datos personales, confidenciales) y cuido mi privacidad",
          "valor": 3
        },
        {
          "etiqueta": "Conozco las leyes de protección de datos (ej. Ley 8968) y aplico anonimización en mis prompts",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Reconoce los riesgos de usar IA, como errores (alucinaciones), sesgos, uso de datos personales o privacidad?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "acceso_tecnologico",
      "dimension": "AT",
      "id": "q09",
      "opciones": [
        {
          "etiqueta": "No tengo acceso a Internet propio ni estable",
          "valor": 0
        },
        {
          "etiqueta": "Uso datos móviles limitados y la señal es intermitente",
          "valor": 1
        },
        {
          "etiqueta": "Tengo acceso parcial (por ejemplo, solo en sitios públicos o en casa de familiares)",
          "valor": 2
        },
        {
          "etiqueta": "Tengo Internet residencial o en oficina con buena velocidad y estabilidad",
          "valor": 3
        },
        {
          "etiqueta": "Conexión de alta velocidad excelente y constante en todos mis dispositivos",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Cuenta con acceso estable a Internet para trabajar en este curso y probar herramientas externas?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "acceso_tecnologico",
      "dimension": "AT",
      "id": "q10",
      "opciones": [
        {
          "etiqueta": "No tengo dispositivos propios",
          "valor": 0
        },
        {
          "etiqueta": "Tengo un teléfono inteligente muy básico o antiguo",
          "valor": 1
        },
        {
          "etiqueta": "Tengo computadora compartida o teléfono intermedio, pero fallan con herramientas pesadas",
          "valor": 2
        },
        {
          "etiqueta": "Tengo computadora o teléfono moderno propio que funciona perfectamente",
          "valor": 3
        },
        {
          "etiqueta": "Dispongo de múltiples dispositivos de excelente rendimiento para mi negocio",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Dispone de computadora o teléfono inteligente con rendimiento suficiente para usar herramientas web avanzadas, reproducir videos y completar formularios?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "acceso_tecnologico",
      "dimension": "AT",
      "id": "q11",
      "opciones": [
        {
          "etiqueta": "No puedo hacerlo solo, requiero asistencia constante",
          "valor": 0
        },
        {
          "etiqueta": "Me da miedo o inseguridad registrarme en sitios nuevos",
          "valor": 1
        },
        {
          "etiqueta": "Puedo hacerlo si sigo una guía paso a paso muy detallada",
          "valor": 2
        },
        {
          "etiqueta": "Lo hago de forma independiente en la mayoría de los sitios web",
          "valor": 3
        },
        {
          "etiqueta": "Creo cuentas, administro contraseñas y vinculo herramientas con facilidad",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Puede registrarse, ingresar o instalar herramientas externas y crear cuentas cuando el curso lo solicite?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "uso_beneficios_ia",
      "dimension": "CUB",
      "id": "q12",
      "opciones": [
        {
          "etiqueta": "No tengo idea de cómo la IA podría ayudar a mi negocio",
          "valor": 0
        },
        {
          "etiqueta": "Sé que puede ayudar, pero no sé en qué áreas aplicarla",
          "valor": 1
        },
        {
          "etiqueta": "Tengo algunas ideas generales, pero no sé por dónde empezar",
          "valor": 2
        },
        {
          "etiqueta": "Tengo identificados uno o dos problemas específicos donde usaré IA",
          "valor": 3
        },
        {
          "etiqueta": "Tengo un mapa claro de oportunidades y prioridades de adopción para mi empresa",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Tiene claro qué problema de su negocio o idea le gustaría resolver prioritariamente usando IA?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "uso_beneficios_ia",
      "dimension": "CUB",
      "id": "q13",
      "opciones": [
        {
          "etiqueta": "No identifico ninguna tarea repetitiva en mi rutina",
          "valor": 0
        },
        {
          "etiqueta": "Casi todo lo que hago es manual, pero no sé qué se puede automatizar",
          "valor": 1
        },
        {
          "etiqueta": "Identifico procesos lentos (ej. pasar datos a mano), pero no sé cómo conectarlos",
          "valor": 2
        },
        {
          "etiqueta": "Tengo identificadas tareas repetitivas claras que quiero automatizar (mensajes, facturas, etc.)",
          "valor": 3
        },
        {
          "etiqueta": "Tengo diagramados mis flujos operativos y sé exactamente qué integrar",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Puede identificar tareas repetitivas o lentas en sus operaciones diarias que podrían automatizarse?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "uso_beneficios_ia",
      "dimension": "CUB",
      "id": "q14",
      "opciones": [
        {
          "etiqueta": "No sé cómo me ayudaría en ventas o datos",
          "valor": 0
        },
        {
          "etiqueta": "Creo que solo sirve para escribir textos para redes sociales",
          "valor": 1
        },
        {
          "etiqueta": "Sé que puede ayudar a analizar ventas o hacer copy comercial de forma parcial",
          "valor": 2
        },
        {
          "etiqueta": "Tengo claridad del beneficio en redacción publicitaria, segmentación y análisis financiero básico",
          "valor": 3
        },
        {
          "etiqueta": "Uso la IA activamente para modelar escenarios financieros y optimizar mi comunicación comercial",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Tiene claro cómo la IA podría ayudarle a vender, comunicar, atender clientes o tomar decisiones financieras con datos?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "uso_beneficios_ia",
      "dimension": "CUB",
      "id": "q15",
      "opciones": [
        {
          "etiqueta": "No veo la diferencia, quiero usarla porque todos lo hacen",
          "valor": 0
        },
        {
          "etiqueta": "Me cuesta saber si vale la pena o si es solo mercadeo",
          "valor": 1
        },
        {
          "etiqueta": "Entiendo que debe resolver problemas, pero a veces me desvío probando herramientas",
          "valor": 2
        },
        {
          "etiqueta": "Sé priorizar el proceso de mi negocio antes de decidir qué IA utilizar",
          "valor": 3
        },
        {
          "etiqueta": "Tengo un enfoque pragmático basado en la regla 70/30 (humano/IA) y retorno de inversión",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Sabe distinguir entre usar IA por moda y usarla para resolver un problema estratégico concreto de su negocio?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "contexto_madurez",
      "dimension": "CME",
      "id": "q16",
      "opciones": [
        {
          "etiqueta": "Tengo una idea en mente, pero aún no he iniciado el desarrollo ni vendido",
          "valor": 0
        },
        {
          "etiqueta": "Tengo un prototipo o modelo de negocio y estoy definiendo el producto",
          "valor": 1
        },
        {
          "etiqueta": "Ya tengo ventas iniciales, aunque sean pocas e informales",
          "valor": 3
        },
        {
          "etiqueta": "Tengo un negocio funcionando con procesos definidos y estructura regular",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿En qué etapa se encuentra actualmente su emprendimiento o empresa?",
      "tipo": "seleccion_unica"
    },
    {
      "bloque": "contexto_madurez",
      "dimension": "CME",
      "id": "q17",
      "opciones": [
        {
          "etiqueta": "No, vendo lo que surja a cualquiera que pregunte",
          "valor": 0
        },
        {
          "etiqueta": "Tengo una idea vaga, pero no sé quién es mi cliente ideal",
          "valor": 1
        },
        {
          "etiqueta": "Tengo definida mi propuesta pero no he formalizado el perfil de mi cliente",
          "valor": 2
        },
        {
          "etiqueta": "Tengo definidos cliente ideal, valor y oferta de forma escrita",
          "valor": 3
        },
        {
          "etiqueta": "Tengo mi modelo de negocio estructurado y validado con segmentos específicos de mercado",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Tiene claramente definida su oferta comercial, cliente principal (Buyer Persona) y propuesta de valor única?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "contexto_madurez",
      "dimension": "CME",
      "id": "q18",
      "opciones": [
        {
          "etiqueta": "No he hecho ninguna validación ni tengo ventas",
          "valor": 0
        },
        {
          "etiqueta": "Solo le he preguntado a amigos o familiares cercanos",
          "valor": 1
        },
        {
          "etiqueta": "He hecho algunas encuestas básicas o vendido de forma muy inicial",
          "valor": 2
        },
        {
          "etiqueta": "He recopilado datos de clientes reales y ajustado mi producto según el mercado",
          "valor": 3
        },
        {
          "etiqueta": "Tengo un circuito continuo de retroalimentación de clientes y datos de tracción reales",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Ha validado su idea, producto o servicio con datos, ventas reales, entrevistas o evidencia real de mercado?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "contexto_madurez",
      "dimension": "CME",
      "id": "q19",
      "opciones": [
        {
          "etiqueta": "No registro nada de información",
          "valor": 0
        },
        {
          "etiqueta": "Anoto ventas e ingresos en cuadernos de forma manual e inconsistente",
          "valor": 1
        },
        {
          "etiqueta": "Registro ventas en cuadernos o un Excel muy básico, pero sin control de costos",
          "valor": 2
        },
        {
          "etiqueta": "Tengo un registro digital estructurado (Excel, sistema propio) de mis números principales",
          "valor": 3
        },
        {
          "etiqueta": "Tengo un sistema de información o CRM/ERP y analizo mis datos regularmente",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Registra la información de ventas, costos, clientes, inventario o procesos de forma ordenada y digital?",
      "tipo": "likert_0_4"
    },
    {
      "bloque": "contexto_madurez",
      "dimension": "CME",
      "id": "q20",
      "opciones": [
        {
          "etiqueta": "Validar si mi idea o producto nuevo tiene mercado antes de gastar dinero",
          "valor": 1
        },
        {
          "etiqueta": "Entender qué está fallando en mi negocio, hacer un FODA y ordenar mis números básicos",
          "valor": 2
        },
        {
          "etiqueta": "Ahorrar tiempo y automatizar tareas administrativas o de atención repetitivas",
          "valor": 3
        },
        {
          "etiqueta": "Aumentar mis ventas, mejorar mi copy comercial, contenido digital y decidir con datos",
          "valor": 4
        }
      ],
      "peso": 1,
      "requerida": true,
      "texto": "¿Cuál es la urgencia principal de su negocio para los próximos tres meses?",
      "tipo": "seleccion_unica_ponderada"
    },
    {
      "bloque": "contexto_madurez",
      "dimension": "CME",
      "id": "q21",
      "opciones": [
        {
          "etiqueta": "Menos de 2 horas por semana (ritmo lento)",
          "valor": 1
        },
        {
          "etiqueta": "De 2 a 5 horas por semana (ritmo recomendado)",
          "valor": 2
        },
        {
          "etiqueta": "Más de 5 horas por semana (ritmo intensivo)",
          "valor": 3
        }
      ],
      "peso": 0.5,
      "requerida": false,
      "texto": "¿Cuánto tiempo real por semana puede dedicar al estudio y aplicación de este programa?",
      "tipo": "seleccion_unica"
    }
  ],
  "glosario": [
    {
      "definicion": "Inteligencia Artificial: Campo de la informática dedicado a la creación de sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.",
      "termino": "IA"
    },
    {
      "definicion": "Tipo de inteligencia artificial capaz de generar nuevo contenido (texto, imágenes, música, código) a partir de datos de entrenamiento y las instrucciones del usuario.",
      "termino": "IA generativa"
    },
    {
      "definicion": "Large Language Model (Modelo de Lenguaje Grande): Modelo de IA entrenado con grandes volúmenes de texto para comprender, resumir, traducir y generar texto coherente en lenguaje natural.",
      "termino": "LLM"
    },
    {
      "definicion": "Instrucción o texto de entrada que el usuario le da a un modelo de IA para indicarle qué tarea realizar y cómo estructurar la respuesta.",
      "termino": "prompt"
    },
    {
      "definicion": "Framework de prompting (Contexto, Instrucción, Formato, Restricciones, Conexión, Ejemplos) utilizado para estructurar instrucciones precisas para la IA.",
      "termino": "CIFRCE"
    },
    {
      "definicion": "Ciclo metodológico del programa de aprendizaje: Reto (exploración), Hacer (práctica principal), Entender (teoría y conceptos) y Compartir (colaboración).",
      "termino": "RHEC"
    },
    {
      "definicion": "Principio ético y metodológico que exige que un ser humano supervise, valide, corrija y apruebe las decisiones o contenidos generados por la IA antes de aplicarlos.",
      "termino": "Human-in-the-Loop"
    },
    {
      "definicion": "Autenticación de Dos Factores: Método de seguridad que requiere dos formas independientes de verificación para acceder a una cuenta digital.",
      "termino": "2FA"
    },
    {
      "definicion": "Interfaz de Programación de Aplicaciones: Conjunto de reglas y especificaciones que permite a diferentes aplicaciones comunicarse y compartir datos entre sí.",
      "termino": "API"
    },
    {
      "definicion": "Enfoque de desarrollo de software que permite crear aplicaciones, integraciones y automatizaciones mediante interfaces visuales, sin escribir código de programación.",
      "termino": "no-code"
    },
    {
      "definicion": "Plataforma visual de integración y automatización no-code que permite conectar múltiples aplicaciones y servicios web mediante flujos lógicos.",
      "termino": "Make"
    },
    {
      "definicion": "Herramienta de automatización de flujos de trabajo de código abierto y autoalojable, similar a Make.",
      "termino": "n8n"
    },
    {
      "definicion": "Disparador: Evento inicial que inicia la ejecución de un flujo de trabajo o automatización (ej. la recepción de un correo o un nuevo formulario).",
      "termino": "trigger"
    },
    {
      "definicion": "Mecanismo que permite a una aplicación enviar datos en tiempo real a otra tan pronto como ocurre un evento.",
      "termino": "webhook"
    },
    {
      "definicion": "Enrutador en Make o n8n: Módulo que permite bifurcar el flujo de trabajo en múltiples caminos basados en filtros y condiciones específicas.",
      "termino": "router"
    },
    {
      "definicion": "Customer Relationship Management: Software para gestionar todas las relaciones e interacciones de la empresa con sus clientes y clientes potenciales.",
      "termino": "CRM"
    },
    {
      "definicion": "Retorno de la Inversión: Medida financiera que evalúa el rendimiento o la utilidad de una inversión en comparación con su costo.",
      "termino": "ROI"
    },
    {
      "definicion": "Análisis preliminar de la viabilidad técnica, financiera y operativa de un proyecto antes de invertir recursos significativos.",
      "termino": "prefactibilidad"
    },
    {
      "definicion": "Proceso de modificar datos personales para eliminar cualquier información que identifique directamente a un individuo, asegurando su privacidad.",
      "termino": "anonimización"
    },
    {
      "definicion": "Información personal de especial protección legal (ej. salud, opiniones políticas, orientación sexual, ingresos detallados) que no debe ser expuesta ni compartida sin consentimiento expreso.",
      "termino": "dato sensible"
    },
    {
      "definicion": "Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales en Costa Rica, orientada a proteger la autodeterminación informativa.",
      "termino": "Ley 8968"
    },
    {
      "definicion": "Modelo clásico de marketing que describe las 4 etapas por las que pasa un cliente: Atención, Interés, Deseo y Acción. Se usa para estructurar anuncios, correos y embudos de venta.",
      "termino": "AIDA"
    },
    {
      "definicion": "Kit de Marca: conjunto de elementos visuales y de comunicación de un negocio (paleta de colores, tipografías, logo y tono de voz) que se definen una vez y se reutilizan para mantener consistencia.",
      "termino": "Brand Kit"
    },
    {
      "definicion": "Funcion de Canva (en ingles 'Magic Design') que, a partir de una imagen o una idea, genera automaticamente propuestas de diseno editables para redes sociales y otros formatos.",
      "termino": "Diseño Mágico"
    },
    {
      "definicion": "Nivel de ventas en el que los ingresos igualan a los costos totales: a partir de ahi el negocio empieza a generar ganancia. Se calcula como Costos fijos / (Precio unitario - Costo variable unitario).",
      "termino": "punto de equilibrio"
    },
    {
      "definicion": "Proyeccion de las entradas y salidas de dinero de un negocio en un periodo, que permite ver si habra liquidez suficiente mes a mes.",
      "termino": "flujo de caja"
    }
  ]
};
