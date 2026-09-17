import json
import re
import os

workspace_dir = "/Users/agustingomez/Downloads/0. Caja Herramienta PYMEs Version 3.0"

with open(os.path.join(workspace_dir, "scratch_doc_v23_text.txt"), "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

# Load current json files for metadata reference
with open(os.path.join(workspace_dir, "contenido/semanas.json"), "r", encoding="utf-8") as f:
    semanas_list = json.load(f)

with open(os.path.join(workspace_dir, "contenido/unidades.json"), "r", encoding="utf-8") as f:
    unidades_list = json.load(f)

# Helper map to find base week and base units
semana_map = {s["id"]: s for s in semanas_list}
base_units_by_week = {}
for u in unidades_list:
    base_units_by_week.setdefault(u["semanaId"], []).append(u)

disclaimers_dict = {
    "mf": {
        "nuevo": "Configura la cuenta, controles de privacidad y proyectos para arrancar su emprendimiento con orden y seguridad desde el primer día.",
        "marcha": "Protege la información confidencial de clientes, expedientes y finanzas reales mientras estructura un espacio de trabajo profesional."
    },
    "ma": {
        "nuevo": "Estudiando o analizando si vale la pena lanzar su negocio o su nueva idea de producto/servicio antes de invertir tiempo y dinero.",
        "marcha": "Evaluando si vale la pena lanzar una nueva línea, producto, servicio adicional o canal dentro de su empresa actual sin arriesgar lo que ya opera."
    },
    "mb": {
        "nuevo": "Permite estructurar los primeros 90 días de operación y establecer un FODA de lanzamiento desde el arranque.",
        "marcha": "Brinda una radiografía estratégica honesta para identificar cuellos de botella, fortalezas internas y oportunidades de entorno."
    },
    "mc": {
        "nuevo": "Permite diseñar procesos simples y atención automatizada antes de recibir el primer volumen alto de consultas.",
        "marcha": "Le libera horas de trabajo operativo semanal documentando procesos repetitivos y automatizando respuestas de clientes."
    },
    "md": {
        "nuevo": "Define el tono de voz de su marca, precios psicológicos correctos y mensajes AIDA para salir al mercado con fuerza.",
        "marcha": "Ajusta precios, optimiza canales y crea campañas comerciales para aumentar la conversión y la rentabilidad."
    },
    "me": {
        "nuevo": "Calcula el punto de equilibrio mínimo y los costos fijos antes de asumir compromisos de inversión.",
        "marcha": "Evalúa proyectos de prefactibilidad, retorno de inversión (ROI) y escalamiento sostenible a 12 meses."
    }
}

weeks_info = [
    ("f-1", "F-1", "mf", 1, "Configuración, seguridad y primer contacto con ChatGPT"),
    ("f-2", "F-2", "mf", 2, "Prompting empresarial: el modelo CIFRCE en práctica"),
    ("a-1", "A-1", "ma", 3, "Tendencias de mercado: ¿hay interés real en mi idea?"),
    ("a-2", "A-2", "ma", 4, "El cliente ideal: quién compra y por qué"),
    ("a-3", "A-3", "ma", 5, "Encuesta de validación: preguntar bien antes de invertir"),
    ("a-4", "A-4", "ma", 6, "Modelo de negocio preliminar: ¿los números cuadran?"),
    ("a-5", "A-5", "ma", 7, "Cambiar o no de rumbo: ¿mi oferta tiene el potencial que creo?"),
    ("b-1", "B-1", "mb", 8, "FODA dinámico: radiografía del negocio con ChatGPT"),
    ("b-2", "B-2", "mb", 9, "Plan de Acción Estratégico con ChatGPT"),
    ("c-1", "C-1", "mc", 10, "Mapear procesos y encontrar cuellos de botella"),
    ("c-2", "C-2", "mc", 11, "Atención al cliente y seguimiento con ChatGPT"),
    ("c-3", "C-3", "mc", 12, "Documentar procesos: el manual básico del negocio"),
    ("d-1", "D-1", "md", 13, "Identidad de marca y voz del negocio"),
    ("d-2", "D-2", "md", 14, "Precios con inteligencia: psicología del precio"),
    ("d-3", "D-3", "md", 15, "Redes sociales que sí funcionan para MiPYMES"),
    ("d-4", "D-4", "md", 16, "Mensajes de venta y campaña AIDA"),
    ("e-1", "E-1", "me", 17, "Costos, precios y punto de equilibrio"),
    ("e-2", "E-2", "me", 18, "Prefactibilidad y decisiones de inversión"),
    ("e-3", "E-3", "me", 19, "Escalamiento y sostenibilidad: preparar el negocio para crecer")
]

new_semanas = []
new_unidades = []

for sid, scode, mid, sglobal, stitle in weeks_info:
    base_sem = semana_map.get(sid, {})
    mod_disc = disclaimers_dict.get(mid, disclaimers_dict["ma"])
    
    sem_obj = {
        "id": sid,
        "moduloId": mid,
        "semanaGlobal": sglobal,
        "codigoAnterior": f"Semana {scode}",
        "titulo": stitle,
        "objetivo": base_sem.get("objetivo", f"Desarrollar capacidades prácticas en {stitle.lower()} aplicadas a su empresa."),
        "entregable": base_sem.get("entregable", f"Evidencia práctica de {stitle.lower()} guardada en su portafolio local."),
        "tiempoEstimadoMin": 180,
        "infografias": base_sem.get("infografias", []),
        "disclaimer": {
            "negocioNuevo": mod_disc["nuevo"],
            "negocioEnMarcha": mod_disc["marcha"]
        }
    }
    new_semanas.append(sem_obj)
    
    old_units = base_units_by_week.get(sid, [])
    
    def find_old_unit(type_match):
        for u in old_units:
            if u.get("tipo") == type_match:
                return u
        return None

    # u01: Logro
    u01 = {
        "id": f"{sid}-u01",
        "semanaId": sid,
        "titulo": "Paso 1: Logro de la Semana",
        "tipo": "introduccion",
        "duracionMin": 15,
        "requiereAccion": False,
        "boton": "Avanzar a Texto Introductorio",
        "html": f"""
          <div class="learning-objectives-view" style="background: linear-gradient(135deg, #005da4 0%, #003466 100%); color: white; padding: 25px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-md);">
            <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #4daedb; display: block; margin-bottom: 5px;">Módulo {mid.upper()} · Semana {sglobal}</span>
            <h3 style="color: white; border: none; padding: 0; margin-top: 0; font-size: 1.6rem; font-family: 'Montserrat', sans-serif;"><i class="fas fa-trophy" style="color: #f39c12; margin-right: 10px;"></i> {stitle}</h3>
            <p style="font-size: 1.05rem; opacity: 0.95; line-height: 1.6; margin-top: 15px;">
              <strong>Meta práctica de la semana:</strong> {sem_obj['objetivo']}
            </p>
          </div>
          <div style="background-color: #fffdf5; padding: 20px; border-radius: var(--radius-md); font-size: 0.98rem; margin-bottom: 25px; border-left: 5px solid var(--accent-yellow); box-shadow: var(--shadow-sm);">
            <strong style="color: var(--ucr-dark); font-size: 1.05rem; display: block; margin-bottom: 8px;"><i class="fas fa-box-open" style="color: #f39c12;"></i> Entregable esperado al finalizar la semana:</strong>
            <span style="color: #444; line-height: 1.6;">{sem_obj['entregable']}</span>
          </div>
          <div style="display: flex; gap: 15px; align-items: center; background: #f8fafc; padding: 15px 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div style="font-size: 1.8rem; color: var(--ucr-blue);"><i class="fas fa-user-clock"></i></div>
            <div>
              <strong style="color: var(--ucr-dark); display: block;">Dedicación sugerida:</strong>
              <span style="font-size: 0.9rem; color: var(--text-light);">~180 minutos divididos a su propio ritmo durante la semana (70% Práctica / 30% Teoría).</span>
            </div>
          </div>
        """
    }
    
    # u02: Introductorio + Disclaimer
    u02 = {
        "id": f"{sid}-u02",
        "semanaId": sid,
        "titulo": "Paso 2: Texto Introductorio y Disclaimers",
        "tipo": "interpretacion_critica",
        "duracionMin": 20,
        "requiereAccion": False,
        "boton": "Ir al Texto Teórico",
        "html": f"""
          <div class="intro-presentation-card" style="margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7; color: #2c3e50;">
            <p><strong>Presentación del tema:</strong> Esta semana se enfoca de manera directa en <strong>{stitle.lower()}</strong>. A través de este módulo aprenderá a utilizar ChatGPT y herramientas de Inteligencia Artificial para obtener resultados reales en su empresa sin perder tiempo en conceptos abstractos.</p>
          </div>
          <div class="disclaimer-box" style="background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);">
            <h4 style="color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-info-circle"></i> ¿Esta semana aplica para mi negocio? ("Esta semana aplica porque...")
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;">
              <div style="background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;">
                <span class="badge" style="background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">🆕 Negocio Nuevo / Idea</span>
                <p style="font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;">{mod_disc['nuevo']}</p>
              </div>
              <div style="background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;">
                <span class="badge" style="background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">🏢 Negocio en Marcha</span>
                <p style="font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;">{mod_disc['marcha']}</p>
              </div>
            </div>
          </div>
        """
    }
    
    # u03 & u04: Texto teórico
    old_entender_1 = find_old_unit("entender")
    html_t1 = old_entender_1["html"] if old_entender_1 else f"<p>Explicación conceptual de {stitle}. La teoría se enfoca en principios clave de gestión empresarial sustentados en evidencia y marcos metodológicos modernos.</p>"
    
    u03 = {
        "id": f"{sid}-u03",
        "semanaId": sid,
        "titulo": "Paso 3: Texto Teórico — Conceptos Clave (Parte 1)",
        "tipo": "entender",
        "duracionMin": 25,
        "requiereAccion": False,
        "boton": "Continuar a Teoría Parte 2",
        "html": html_t1
    }
    
    u04 = {
        "id": f"{sid}-u04",
        "semanaId": sid,
        "titulo": "Paso 4: Texto Teórico — Marco de Aplicación (Parte 2)",
        "tipo": "entender",
        "duracionMin": 20,
        "requiereAccion": False,
        "boton": "Ver Video Tutorial",
        "html": f"""
          <div class="theoretical-card" style="font-size: 1.02rem; line-height: 1.7; color: #333;">
            <h4 style="color: var(--ucr-dark); margin-bottom: 12px;"><i class="fas fa-book-reader" style="color: var(--ucr-blue);"></i> Aplicación estratégica en la MiPYME</h4>
            <p>Para aplicar este concepto con éxito en su empresa, es fundamental mantener la perspectiva crítica: ChatGPT es un copiloto de aceleración que propone estructuras e hipótesis, pero la decisión final sobre su negocio, precios y clientes sigue perteneciendo a usted.</p>
            <div style="background-color: #f8fafc; padding: 15px 20px; border-radius: var(--radius-sm); border-left: 4px solid #34495e; margin-top: 15px;">
              <strong style="color: #2c3e50; display: block; margin-bottom: 5px;">Regla de oro de privacidad:</strong>
              <span style="font-size: 0.9rem; color: #555;">Recuerde anonimizar los nombres de clientes reales, claves de acceso o saldos bancarios sensibles antes de ingresarlos en cualquier herramienta de Inteligencia Artificial.</span>
            </div>
          </div>
        """
    }
    
    # u05: Video tutorial
    u05 = {
        "id": f"{sid}-u05",
        "semanaId": sid,
        "titulo": "Paso 5: Video Tutorial Paso a Paso (4 min)",
        "tipo": "video",
        "duracionMin": 20,
        "requiereAccion": False,
        "boton": "Ir a Tarea 1: Prompt CIFRCE",
        "html": f"""
          <div class="video-tutorial-card" style="background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 18px;">
              <div style="background-color: #e74c3c; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                <i class="fas fa-play"></i>
              </div>
              <div>
                <h3 style="border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);">Video Tutorial: ChatGPT en Acción (~4 min)</h3>
                <span style="font-size: 0.85rem; color: var(--text-light);">Demostración práctica de pantalla grabada para la Semana {sglobal}</span>
              </div>
            </div>
            
            <div class="video-container-placeholder" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: white; padding: 40px 20px; text-align: center; border-radius: var(--radius-md); margin-bottom: 20px; position: relative;">
              <i class="fas fa-video" style="font-size: 3.5rem; color: #38bdf8; margin-bottom: 15px; display: block;"></i>
              <h4 style="color: white; margin-bottom: 10px;">Demostración Práctica de {stitle}</h4>
              <p style="font-size: 0.9rem; color: #94a3b8; max-width: 500px; margin: 0 auto 15px auto;">
                Vea cómo ingresar el contexto de su negocio en ChatGPT, aplicar la plantilla CIFRCE y evaluar la calidad de las respuestas obtenidas.
              </p>
              <span class="btn btn-secondary" style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: white; pointer-events: none; padding: 8px 20px; font-size: 0.85rem; border-radius: 20px;">
                <i class="fas fa-clock"></i> Duración: 4:00 min
              </span>
            </div>

            <div style="background-color: #f8fafc; padding: 15px 20px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue);">
              <strong style="color: var(--ucr-dark); display: block; margin-bottom: 5px;"><i class="fas fa-list-ol" style="color: var(--ucr-blue);"></i> Pasos clave mostrados en el video:</strong>
              <ol style="margin: 0; padding-left: 20px; font-size: 0.92rem; color: #444; line-height: 1.6;">
                <li>Abrir el Proyecto de su negocio en ChatGPT (o chat especializado).</li>
                <li>Copiar la plantilla de Prompt CIFRCE de la siguiente pantalla.</li>
                <li>Reemplazar los corchetes <code>[DATOS]</code> con la información real de su PYME.</li>
                <li>Evaluar críticamente la respuesta y guardar el resultado.</li>
              </ol>
            </div>
          </div>
        """
    }
    
    # u06: Tarea 1: Prompt CIFRCE
    old_reto = find_old_unit("reto")
    html_prompt = old_reto["html"] if old_reto else f"""
      <p>Copie el siguiente prompt estructurado CIFRCE, complete los campos entre corchetes con los datos reales de su empresa, aplíquelo en ChatGPT y registre el resultado.</p>
      <div class="prompt-cifrce-box" style="background: #f4f6f8; padding: 20px; border-radius: 8px; border-left: 5px solid #9b59b6; margin: 20px 0; font-family: monospace;">
        <strong>CONTEXTO:</strong> Soy dueño de una MiPYME en Costa Rica del sector de {stitle}.<br>
        <strong>INSTRUCCIÓN:</strong> Analiza y propone estrategias concretas para optimizar mi negocio.<br>
        <strong>FORMATO:</strong> Presenta en una tabla con 3 columnas (Acción, Impacto, Recursos).<br>
        <strong>RESTRICCIONES:</strong> Sin tecnicismos, adaptado a recursos limitados.<br>
        <strong>CRITERIOS DE ÉXITO:</strong> Acciones realizables esta misma semana.
      </div>
    """
    
    u06 = {
        "id": f"{sid}-u06",
        "semanaId": sid,
        "titulo": "Paso 6: Tarea 1 — Prompt CIFRCE Aplicado",
        "tipo": "reto",
        "duracionMin": 35,
        "requiereAccion": True,
        "entregable": sem_obj["entregable"],
        "boton": "Continuar a Tarea Complementaria",
        "html": html_prompt
    }
    
    # u07: Tarea complementaria
    old_hacer = find_old_unit("hacer") or find_old_unit("compartir")
    html_compl = old_hacer["html"] if old_hacer else f"""
      <h4>Actividad Complementaria de Reflexión o Ejercicio de Campo</h4>
      <p>Realice un análisis reflexivo sobre los resultados obtenidos con ChatGPT o realice una verificación directa en el mercado con clientes o datos reales de su negocio.</p>
      <p><strong>Entregable:</strong> Documento escrito o captura de pantalla con su análisis de al menos 150 palabras guardado en su portafolio local.</p>
    """
    
    u07 = {
        "id": f"{sid}-u07",
        "semanaId": sid,
        "titulo": "Paso 7: Tarea Complementaria / Práctica",
        "tipo": "hacer",
        "duracionMin": 30,
        "requiereAccion": True,
        "entregable": "Registro escrito de la tarea complementaria o ejercicio de campo.",
        "boton": "Ir a Chispa de Innovación",
        "html": html_compl
    }
    
    # u08: Chispa de innovación
    u08 = {
        "id": f"{sid}-u08",
        "semanaId": sid,
        "titulo": "Paso 8: Chispa de Innovación",
        "tipo": "chispa",
        "duracionMin": 15,
        "requiereAccion": False,
        "boton": "Declarar Semana Completada",
        "html": f"""
          <div class="chispa-card" style="background: linear-gradient(135deg, #fffcf0 0%, #fff7d6 100%); border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 25px;">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
              <div style="background-color: #f39c12; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);">
                <i class="fas fa-lightbulb"></i>
              </div>
              <div>
                <h3 style="border: none; padding: 0; margin: 0; color: #b7791f; font-size: 1.4rem; font-family: 'Montserrat', sans-serif;">Chispa de Innovación</h3>
                <span style="font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;">Eje Transversal de Innovación · Semana {sglobal}</span>
              </div>
            </div>

            <p style="font-size: 1rem; color: #744210; line-height: 1.6; margin-bottom: 20px;">
              Tips breves y recomendaciones tecnológicas de vanguardia para mantener a su empresa a la delantera en <strong>{stitle.lower()}</strong>:
            </p>

            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.95rem; color: #744210; line-height: 1.7;">
              <li style="margin-bottom: 12px; display: flex; align-items: flex-start; gap: 10px;">
                <i class="fas fa-bolt" style="color: #f39c12; margin-top: 4px;"></i>
                <span><strong>Monitoreo continuo:</strong> Revise periódicamente las nuevas funciones de privacidad y proyectos en ChatGPT u otros modelos para aprovechar actualizaciones antes que su competencia.</span>
              </li>
              <li style="margin-bottom: 12px; display: flex; align-items: flex-start; gap: 10px;">
                <i class="fas fa-rocket" style="color: #f39c12; margin-top: 4px;"></i>
                <span><strong>Prompts encadenados:</strong> Utilice las respuestas del modelo CIFRCE como insumo de entrada para profundizar en la siguiente iteración de análisis sin repetir contexto.</span>
              </li>
              <li style="margin-bottom: 0; display: flex; align-items: flex-start; gap: 10px;">
                <i class="fas fa-star" style="color: #f39c12; margin-top: 4px;"></i>
                <span><strong>Banco de prompts propio:</strong> Guarde los prompts que mejor resultado le dieron en un documento personal; ese repositorio se convertirá en un activo digital muy valioso para su negocio.</span>
              </li>
            </ul>
          </div>
        """
    }
    
    new_unidades.extend([u01, u02, u03, u04, u05, u06, u07, u08])

# Save new json files
with open(os.path.join(workspace_dir, "contenido/semanas.json"), "w", encoding="utf-8") as f:
    json.dump(new_semanas, f, ensure_ascii=False, indent=2)

with open(os.path.join(workspace_dir, "contenido/unidades.json"), "w", encoding="utf-8") as f:
    json.dump(new_unidades, f, ensure_ascii=False, indent=2)

print("Saved contenido/semanas.json and contenido/unidades.json")

# Now update contenidoData.js
js_file = os.path.join(workspace_dir, "assets/js/contenidoData.js")
with open(js_file, "r", encoding="utf-8") as f:
    js_text = f.read()

prefix = "window.PROGRAMA_DATA = "
if js_text.startswith(prefix):
    json_str = js_text[len(prefix):].rstrip(";\n")
    data = json.loads(json_str)
    data["semanas"] = new_semanas
    data["unidades"] = new_unidades
    
    new_js_text = prefix + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    with open(js_file, "w", encoding="utf-8") as f:
        f.write(new_js_text)
    print("Saved assets/js/contenidoData.js successfully!")
else:
    print("Error: contenidoData.js does not start with expected prefix")
