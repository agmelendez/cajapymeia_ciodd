// --- CLASIFICADOR.JS ---

const Clasificador = {
  calcular(respuestas, preguntas) {
    const puntajes = {
      CD: 0,
      AIA: 0,
      AT: 0,
      CUB: 0,
      CME: 0
    };

    const maximos = {
      CD: 0,
      AIA: 0,
      AT: 0,
      CUB: 0,
      CME: 0
    };

    // Sum weights and values for each dimension
    preguntas.forEach(q => {
      const valor = respuestas[q.id];
      if (valor !== undefined && valor !== null) {
        // Skip q20 and q21 for numeric score calculation of dimensions as they are categorical/qualitative
        if (q.id === 'q20' || q.id === 'q21') return;

        const peso = q.peso || 1.0;
        const maxVal = 4; // Likert scale max is 4

        puntajes[q.dimension] += Number(valor) * peso;
        maximos[q.dimension] += maxVal * peso;
      }
    });

    // Calculate percentages
    const dimensiones = ['CD', 'AIA', 'AT', 'CUB', 'CME'];
    const resultadoPuntajes = {};
    
    dimensiones.forEach(d => {
      if (maximos[d] > 0) {
        resultadoPuntajes[d] = Math.round((puntajes[d] / maximos[d]) * 100);
      } else {
        resultadoPuntajes[d] = 0;
      }
    });

    // Determine Senda de Acompañamiento
    let senda = 'acelerada';
    let nivelacionRequerida = false;
    
    if (resultadoPuntajes.CD < 45 || resultadoPuntajes.AIA < 35 || resultadoPuntajes.AT < 40) {
      senda = 'guiada';
      nivelacionRequerida = true;
    } else if (resultadoPuntajes.CD >= 65 && resultadoPuntajes.AIA >= 65 && resultadoPuntajes.AT >= 60) {
      senda = 'profunda';
    }

    // Determine Módulo Inicial Sugerido
    let moduloInicial = 'm1';
    let justificacion = [];
    let modulosRecomendados = [];
    let modulosNoPrioritarios = [];
    let testOutSugerido = [];
    let ayudasActivas = [];

    const q16Val = Number(respuestas['q16']); // stage
    const q18Val = Number(respuestas['q18']); // validation
    const q19Val = Number(respuestas['q19']); // registration
    const q13Val = Number(respuestas['q13']); // repetitive load
    const q14Val = Number(respuestas['q14']); // marketing/sales/data interest
    const q20Val = Number(respuestas['q20']); // main urgency

    // Rules matching
    if (resultadoPuntajes.CD < 35 || resultadoPuntajes.AIA < 25) {
      moduloInicial = 'm1'; // start M1 but suggest leveler
      justificacion.push("Dado que sus competencias digitales o de IA están en fase inicial, le sugerimos iniciar por el Módulo I (Fundamentos y Diagnóstico) con apoyo constante.");
      ayudasActivas.push("glosario-basico", "nivelacion-basica");
    } else if (q20Val === 1 || q20Val === 2) {
      moduloInicial = 'm1';
      justificacion.push("Recomendado por su urgencia declarada en diagnosticar su empresa, dominar el prompting estructurado (CIFRCE) y estructurar un plan de acción estratégico.");
    } else if (q20Val === 3 && resultadoPuntajes.CD >= 45 && resultadoPuntajes.AT >= 40) {
      moduloInicial = 'm2';
      justificacion.push("Recomendado por su urgencia declarada en automatizar procesos repetitivos, chatbots de atención y CRM.");
    } else if (q20Val === 4) {
      moduloInicial = 'm3';
      justificacion.push("Recomendado por su urgencia declarada en mejorar ventas, crear contenidos con IA y lanzar una campaña comercial (AIDA).");
    } else if ((q16Val === 0 || q16Val === 1) && q18Val <= 2) {
      moduloInicial = 'm1';
      justificacion.push("Su negocio se encuentra en etapa inicial y requiere estructurar un diagnóstico honesto y plan de acción antes de invertir tiempo y capital.");
    } else if (q13Val >= 3 && resultadoPuntajes.CD >= 45 && resultadoPuntajes.AT >= 40) {
      moduloInicial = 'm2';
      justificacion.push("Usted tiene procesos operativos lentos o repetitivos y cuenta con la base para automatizar con Make, chatbots y CRM.");
    } else if (q14Val >= 3) {
      moduloInicial = 'm3';
      justificacion.push("Su prioridad actual se enfoca en comercialización, diseño de identidad visual y campaña estructurada con IA.");
    } else {
      // Fallback default
      moduloInicial = 'm1';
      justificacion.push("Basado en el perfil integral de su empresa, le recomendamos iniciar por el Módulo I para construir bases sólidas de seguridad y prompts.");
    }

    // Warnings on AT (access)
    if (resultadoPuntajes.AT < 45) {
      justificacion.push("⚠️ Advertencia: Su acceso tecnológico o conexión es limitado. Le recomendamos descargar las plantillas para trabajar fuera de línea cuando sea posible.");
      ayudasActivas.push("soporte-offline");
    }

    // Sequence of modules recommendation (canonical 3 modules)
    if (moduloInicial === 'm1') {
      modulosRecomendados = ['m1', 'm2', 'm3'];
      modulosNoPrioritarios = [];
    } else if (moduloInicial === 'm2') {
      modulosRecomendados = ['m2', 'm3'];
      modulosNoPrioritarios = ['m1'];
    } else {
      modulosRecomendados = ['m3', 'm2'];
      modulosNoPrioritarios = ['m1'];
    }

    // Test-out suggestions
    if (resultadoPuntajes.CD >= 70) {
      testOutSugerido.push("cuentas-basicas", "seguridad-2fa");
    }
    if (resultadoPuntajes.AIA >= 70) {
      testOutSugerido.push("prompting-basico");
    }

    // Active aids based on Senda
    if (senda === 'guiada') {
      ayudasActivas.push("glosario-siempre-visible", "mensajes-soporte");
    } else if (senda === 'acelerada') {
      ayudasActivas.push("checklists-colapsables");
    } else {
      ayudasActivas.push("retos-avanzados");
    }

    return {
      versionInstrumento: "2.3.0",
      fecha: new Date().toISOString(),
      puntajes: resultadoPuntajes,
      resultado: {
        senda: senda,
        nivelacionRequerida: nivelacionRequerida,
        moduloInicial: moduloInicial,
        modulosRecomendados: modulosRecomendados,
        modulosNoPrioritarios: modulosNoPrioritarios,
        testOutSugerido: testOutSugerido,
        ayudasActivas: ayudasActivas,
        confianzaClasificacion: (resultadoPuntajes.CD > 20) ? "alta" : "media",
        justificacion: justificacion,
        primerPaso: (moduloInicial === 'm1') ? "s1" : (moduloInicial === 'm2') ? "s5" : "s9"
      }
    };
  }
};
