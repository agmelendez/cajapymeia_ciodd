import json
import re
import os

workspace_dir = "/Users/agustingomez/Downloads/0. Caja Herramienta PYMEs Version 3.0"
src_file = os.path.join(workspace_dir, "fuente_contenido_v23.md")

with open(src_file, "r", encoding="utf-8") as f:
    text = f.read()

# Clean UTF-8 artifacts
text = (text
    .replace('ðŸ †', '🏆')
    .replace('ðŸ†•ðŸ ¢', '🆕🏢')
    .replace('ðŸ“‹', '📋')
    .replace('â€”', '—')
    .replace('â€“', '–')
    .replace('Â·', '·')
    .replace('Â¿', '¿')
    .replace('Â¡', '¡')
    .replace('Ã¡', 'á')
    .replace('Ã©', 'é')
    .replace('Ã*', 'í')
    .replace('Ã³', 'ó')
    .replace('Ãº', 'ú')
    .replace('Ã±', 'ñ')
)

weeks_meta = [
    ("f-1", "F-1", "mf", 1, "Configuración, seguridad y primer contacto con ChatGPT", None),
    ("f-2", "F-2", "mf", 2, "Prompting empresarial: el modelo CIFRCE en práctica", None),
    ("a-1", "A-1", "ma", 3, "Tendencias de mercado: ¿hay interés real en mi idea?", None),
    ("a-2", "A-2", "ma", 4, "El cliente ideal: quién compra y por qué", "Constructor de Buyer Persona"),
    ("a-3", "A-3", "ma", 5, "Encuesta de validación: preguntar bien antes de invertir", "Constructor de Encuestas / Mom Test"),
    ("a-4", "A-4", "ma", 6, "Modelo de negocio preliminar: ¿los números cuadran?", None),
    ("a-5", "A-5", "ma", 7, "Cambiar o no de rumbo: ¿mi oferta tiene el potencial que creo?", None),
    ("b-1", "B-1", "mb", 8, "FODA dinámico: radiografía del negocio con ChatGPT", "GPT FODA Dinámico"),
    ("b-2", "B-2", "mb", 9, "Plan de Acción Estratégico con ChatGPT", "GPT Plan de Acción 90 días"),
    ("c-1", "C-1", "mc", 10, "Mapear procesos y encontrar cuellos de botella", None),
    ("c-2", "C-2", "mc", 11, "Atención al cliente y seguimiento con ChatGPT", None),
    ("c-3", "C-3", "mc", 12, "Documentar procesos: el manual básico del negocio", None),
    ("d-1", "D-1", "md", 13, "Identidad de marca y voz del negocio", None),
    ("d-2", "D-2", "md", 14, "Precios con inteligencia: psicología del precio", None),
    ("d-3", "D-3", "md", 15, "Redes sociales que sí funcionan para MiPYMES", "GPT Creador de Contenido"),
    ("d-4", "D-4", "md", 16, "Mensajes de venta y campaña AIDA", None),
    ("e-1", "E-1", "me", 17, "Costos, precios y punto de equilibrio", "GPT Asesor Financiero Básico"),
    ("e-2", "E-2", "me", 18, "Prefactibilidad y decisiones de inversión", "GPT Asesor Financiero Básico"),
    ("e-3", "E-3", "me", 19, "Escalamiento y sostenibilidad: preparar el negocio para crecer", None)
]

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

week_positions = []
for sid, scode, mid, sglobal, stitle, gpt_note in weeks_meta:
    match = re.search(rf"Semana {scode}\b", text)
    if match:
        week_positions.append((match.start(), sid, scode, mid, sglobal, stitle, gpt_note))

week_positions.sort(key=lambda x: x[0])

def sanitize_text(txt):
    if not txt:
        return ""
    # Truncate if video table, tasks, or chispa starts
    for stop_kw in ["+-------+\n| **▶**", "| **▶** |", "Video ", "### **Tareas", "CHISPA DE INNOVACIÓN"]:
        stop_pos = txt.find(stop_kw)
        if stop_pos != -1:
            txt = txt[:stop_pos]
            
    lines = txt.split('\n')
    cleaned_lines = []
    for line in lines:
        l = line.strip()
        # Skip table border lines, dashed lines, and table rows
        if not l or l.startswith('+') or l.startswith('| **▶**') or l.startswith('| **•**') or l == '|' or '----------------' in l or '================' in l:
            if not l:
                cleaned_lines.append("") # preserve blank line for paragraph split
            continue
        if l.startswith('|') and l.endswith('|'):
            l = l[1:-1].strip()
        if 'Video ' in l and ('min' in l or '▶' in l):
            continue
        if re.match(r'^PANTALLA \d/\d', l) or re.match(r'^\*\*PANTALLA \d/\d', l):
            continue
        # Clean inline dashes and markdown junk
        l = l.replace('---', ' — ').replace('--', ' — ').replace('  ', ' ')
        cleaned_lines.append(l)
        
    res = '\n'.join(cleaned_lines)
    # Normalize multiple blank lines to exactly 2 newlines
    res = re.sub(r'\n{3,}', '\n\n', res).strip()
    return res

def text_to_html(txt):
    clean = sanitize_text(txt)
    paras = [p.strip() for p in clean.split('\n\n') if p.strip()]
    
    html_parts = []
    for p in paras:
        # Check if item is bullet list
        if p.startswith('•') or p.startswith('-'):
            items = [it.strip('•- ').strip() for it in p.split('\n') if it.strip('•- ').strip()]
            li_htmls = []
            for it in items:
                it_h = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', it)
                it_h = re.sub(r'\*(.*?)\*', r'<em>\1</em>', it_h).replace("\\'", "'").replace('\\"', '"')
                li_htmls.append(f'<li style="margin-bottom: 0.6rem; line-height: 1.6;">{it_h}</li>')
            html_parts.append(f'<ul style="margin-bottom: 1.2rem; padding-left: 20px; color: #2c3e50;">\n' + '\n'.join(li_htmls) + '\n</ul>')
        else:
            p_html = p.replace('\n', ' ')
            p_html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', p_html)
            p_html = re.sub(r'\*(.*?)\*', r'<em>\1</em>', p_html)
            p_html = p_html.replace("\\'", "'").replace('\\"', '"')
            p_html = re.sub(r'([\.?!])([A-ZÁÉÍÓÚÑ])', r'\1 \2', p_html)
            html_parts.append(f'<p style="margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;">{p_html}</p>')
            
    return '\n'.join(html_parts)

new_semanas = []
new_unidades = []

for idx, (start_idx, sid, scode, mid, sglobal, stitle, gpt_note) in enumerate(week_positions):
    end_idx = week_positions[idx+1][0] if idx+1 < len(week_positions) else len(text)
    w_text = text[start_idx:end_idx]
    
    # 1. Logro
    logro_match = re.search(r"LOGRO DE LA SEMANA:\*\*\s*(.*?)(?=\n---|$$|\n\n###|\n\n\*|\n\n\+)", w_text, re.DOTALL)
    logro_txt = logro_match.group(1).strip() if logro_match else f"Desarrollar capacidades prácticas en {stitle.lower()} aplicadas a su empresa."
    logro_clean = sanitize_text(logro_txt).replace('\n', ' ')
    logro_clean = re.sub(r'\*\*(.*?)\*\*', r'\1', logro_clean)
    
    # 2. Intro
    intro_match = re.search(r"### \*\*Texto introductorio\*\*\s*(.*?)(?=\n\s*---|PANTALLA 1|\*\*PANTALLA|\n\s*PANTALLA)", w_text, re.DOTALL)
    intro_raw = intro_match.group(1).strip() if intro_match else f"Esta semana se enfoca de manera directa en {stitle.lower()}."
    intro_html = text_to_html(intro_raw)
    
    # 3. Pantalla 1/2 or 1/1
    p1_match = re.search(r"PANTALLA 1/\d\s*·\s*\*\*\s*Texto teórico\s*---?\s*(.*?)(?=PANTALLA 2/2|\*\*PANTALLA 2/2|\+-------+|\n\| \*\*▶\*\* \||\n### \*\*Tareas|\n\+------+\n\| \*\*📋)", w_text, re.DOTALL)
    if p1_match:
        p1_full = p1_match.group(0).strip()
        p1_header_match = re.search(r"PANTALLA 1/\d\s*·\s*\*\*\s*Texto teórico\s*---?\s*([^\n\*]+)", p1_full)
        p1_title = p1_header_match.group(1).strip() if p1_header_match else "Conceptos Clave"
        p1_title = p1_title.replace('---', ' — ').replace('--', ' — ').strip()
        p1_body = re.sub(r"^.*?---|^\s*\*\*PANTALLA[^\n]+\n", "", p1_full, flags=re.DOTALL).strip()
        p1_body = p1_body.replace(p1_title, "").strip()
        p1_html_content = text_to_html(p1_body)
    else:
        p1_title = "Conceptos Clave"
        p1_html_content = f"<p style='margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;'>Explicación conceptual de {stitle}. La teoría se enfoca en principios clave de gestión empresarial sustentados en evidencia.</p>"
        
    # 4. Pantalla 2/2
    p2_match = re.search(r"PANTALLA 2/2\s*·\s*\*\*\s*Texto teórico\s*---?\s*(.*?)(?=\+-------+|\n\| \*\*▶\*\* \||\n### \*\*Tareas|\n\+------+\n\| \*\*📋)", w_text, re.DOTALL)
    if p2_match:
        p2_full = p2_match.group(0).strip()
        p2_header_match = re.search(r"PANTALLA 2/2\s*·\s*\*\*\s*Texto teórico\s*---?\s*([^\n\*]+)", p2_full)
        p2_title = p2_header_match.group(1).strip() if p2_header_match else "Marco de Aplicación Práctica"
        p2_title = p2_title.replace('---', ' — ').replace('--', ' — ').strip()
        p2_body = re.sub(r"^.*?---|^\s*\*\*PANTALLA[^\n]+\n", "", p2_full, flags=re.DOTALL).strip()
        p2_body = p2_body.replace(p2_title, "").strip()
        p2_html_content = text_to_html(p2_body)
        p2_subtitle = f"Parte 2: {p2_title}"
    else:
        p2_subtitle = "Marco de Aplicación Práctica en la MiPYME"
        p2_html_content = f"""
          <p style="margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;">Para aplicar este concepto con éxito en su empresa, es fundamental mantener la perspectiva crítica: ChatGPT es un copiloto de aceleración que propone estructuras e hipótesis, pero la decisión final sobre su negocio, precios y clientes sigue perteneciendo a usted.</p>
          <div style="background-color: #f8fafc; padding: 15px 20px; border-radius: var(--radius-sm); border-left: 4px solid #34495e; margin-top: 15px;">
            <strong style="color: #2c3e50; display: block; margin-bottom: 5px;"><i class="fas fa-user-shield"></i> Regla de oro de privacidad:</strong>
            <span style="font-size: 0.9rem; color: #555;">Recuerde anonimizar los nombres de clientes reales, claves de acceso o saldos bancarios sensibles antes de ingresarlos en cualquier herramienta de Inteligencia Artificial.</span>
          </div>
        """
        
    # 5. Video
    vid_match = re.search(r"\*\*Video ([^\n]+)\*\*\s*·?\s*(\d+\s*min)?\s*\n+(.*?)(?=\+=======+|\+------+\n\n|\n### \*\*Tareas|\n\+------+\n\| \*\*📋)", w_text, re.DOTALL)
    if vid_match:
        vid_title_raw = vid_match.group(1).strip()
        vid_synopsis_raw = vid_match.group(3).strip()
        vid_title = sanitize_text(vid_title_raw).replace('\n', ' ')
        vid_synopsis = sanitize_text(vid_synopsis_raw).replace('\n', ' ')
    else:
        vid_title = f"Video Tutorial: ChatGPT en Acción — {stitle}"
        vid_synopsis = f"Demostración práctica de pantalla grabada para la aplicación en ChatGPT de {stitle.lower()}."
        
    # 6. Tarea 1 (Prompt CIFRCE)
    t1_match = re.search(r"(\*\*📋 TAREA[^\n]+\*\*.*?)(?=\+------+\n\| \*\*|\n\+------+\n\| \*\*🔍|\n\+------+\n\| \*\*💬|\n\+------+\n\| \*\*📊|\n\+------+\n\| \*\*🚶|\n\+------+\n\| \*\*💡|\n\+=======+)", w_text, re.DOTALL)
    t1_raw = t1_match.group(1).strip() if t1_match else ""
    
    cxt_m = re.search(r"\*\*CONTEXTO:\*\*\s*(.*?)(?=\*\*INSTRUCCIÓN:\*\*|\*\*FORMATO:\*\*)", t1_raw, re.DOTALL)
    ins_m = re.search(r"\*\*INSTRUCCIÓN:\*\*\s*(.*?)(?=\*\*FORMATO:\*\*|\*\*RESTRICCIONES:\*\*)", t1_raw, re.DOTALL)
    fmt_m = re.search(r"\*\*FORMATO:\*\*\s*(.*?)(?=\*\*RESTRICCIONES:\*\*|\*\*CRITERIOS DE ÉXITO:\*\*)", t1_raw, re.DOTALL)
    rst_m = re.search(r"\*\*RESTRICCIONES:\*\*\s*(.*?)(?=\*\*CRITERIOS DE ÉXITO:\*\*|\+-------+|$)", t1_raw, re.DOTALL)
    crt_m = re.search(r"\*\*CRITERIOS DE ÉXITO:\*\*\s*(.*?)(?=\+-------+|$)", t1_raw, re.DOTALL)
    
    cxt = sanitize_text(cxt_m.group(1)).replace('\n', ' ') if cxt_m else f"Tengo una MiPYME en Costa Rica del sector de {stitle}. Llevo [TIEMPO] operando."
    ins = sanitize_text(ins_m.group(1)).replace('\n', ' ') if ins_m else f"Analiza y propone estrategias concretas para optimizar mi negocio en {stitle.lower()}."
    fmt = sanitize_text(fmt_m.group(1)).replace('\n', ' ') if fmt_m else "Presenta una tabla con 3 columnas (Acción, Impacto, Recursos)."
    rst = sanitize_text(rst_m.group(1)).replace('\n', ' ') if rst_m else "Sin tecnicismos, adaptado a recursos limitados de una MiPYME."
    crt = sanitize_text(crt_m.group(1)).replace('\n', ' ') if crt_m else "Acciones realizables esta misma semana con los recursos actuales."
    
    # 7. Tarea 2 / Complementaria
    t2_match = re.search(r"(\*\*(?:🔍 ANÁLISIS|📋 TAREA 2|📝 EJERCICIO|💬 FORO|📊 ANÁLISIS|🚶 EJERCICIO)[^\n]+\*\*.*?)(?=\| \*\*💡|\n\| \*\*💡|\n\+------+\n\| \*\*💡|\n### Semana|\n\+------+\n\| Semana|$)", w_text, re.DOTALL)
    t2_raw = t2_match.group(1).strip() if t2_match else ""
    if t2_raw:
        lines_t2 = t2_raw.split('\n')
        t2_header_line = ""
        for l in lines_t2:
            if any(kw in l for kw in ["ANÁLISIS", "TAREA", "EJERCICIO", "FORO"]):
                t2_header_line = l
                break
        t2_title_m = re.search(r"\*\*([^\*]+)\*\*", t2_header_line)
        t2_title = t2_title_m.group(1).strip() if t2_title_m else "Tarea Complementaria"
        t2_title = t2_title.replace('---', ' — ').replace('--', ' — ').replace('  ', ' ')
        
        t2_body = t2_raw.replace(t2_header_line, "").strip()
        t2_html = text_to_html(t2_body)
    else:
        t2_title = "Actividad Complementaria de Reflexión o Ejercicio de Campo"
        t2_html = f"<p style='margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;'>Realice un análisis reflexivo sobre los resultados obtenidos con ChatGPT o realice una verificación directa en el mercado con clientes o datos reales de su negocio.</p><p style='margin-bottom: 1.2rem; line-height: 1.7; color: #2c3e50;'><strong>Entregable:</strong> Documento escrito o captura de pantalla con su análisis de al menos 150 palabras guardado en su portafolio local.</p>"
        
    # 8. Chispa
    chispa_match = re.search(r"\*\*💡 CHISPA DE INNOVACIÓN[^\n]+\*\*\s*\n+(.*?)(?=\+=======+|\+------+\n\n|\n\+------+\n\| Semana|\n### Semana|$)", w_text, re.DOTALL)
    chispa_raw = chispa_match.group(1).strip() if chispa_match else ""
    if chispa_raw:
        chispa_clean = sanitize_text(chispa_raw)
        chispa_bullets = [b.strip('•- ').strip() for b in chispa_clean.split('\n') if b.strip('•- ').strip()]
        chispa_lis = []
        for b in chispa_bullets:
            b_html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', b)
            b_html = re.sub(r'\*(.*?)\*', r'<em>\1</em>', b_html).replace("\\'", "'").replace('\\"', '"')
            chispa_lis.append(f"<li style='margin-bottom: 0.8rem; line-height: 1.6;'><span>{b_html}</span></li>")
        chispa_html_items = '\n'.join(chispa_lis)
    else:
        chispa_html_items = f"""
          <li style="margin-bottom: 0.8rem; line-height: 1.6;">
            <span><strong>Monitoreo continuo:</strong> Revise periódicamente las nuevas funciones en ChatGPT u otros modelos de Inteligencia Artificial para aprovechar actualizaciones antes que su competencia.</span>
          </li>
          <li style="margin-bottom: 0.8rem; line-height: 1.6;">
            <span><strong>Prompts encadenados:</strong> Utilice las respuestas del modelo CIFRCE como insumo de entrada para profundizar en la siguiente iteración de análisis sin repetir contexto.</span>
          </li>
        """

    sem_obj = {
        "id": sid,
        "moduloId": mid,
        "semanaGlobal": sglobal,
        "codigoAnterior": f"Semana {scode}",
        "titulo": stitle,
        "objetivo": logro_clean,
        "entregable": f"Entregable práctico de {stitle.lower()} guardado en su portafolio.",
        "tiempoEstimadoMin": 180,
        "infografias": [f"assets/img/Semana {sglobal}.png"],
        "disclaimer": {
            "negocioNuevo": disclaimers_dict[mid]["nuevo"],
            "negocioEnMarcha": disclaimers_dict[mid]["marcha"]
        }
    }
    new_semanas.append(sem_obj)

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
            <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #4daedb; display: block; margin-bottom: 5px;">Módulo {mid.upper()} · Semana {sglobal} ({scode})</span>
            <h3 style="color: white; border: none; padding: 0; margin-top: 0; font-size: 1.6rem; font-family: 'Montserrat', sans-serif;"><i class="fas fa-trophy" style="color: #f39c12; margin-right: 10px;"></i> {stitle}</h3>
            <p style="font-size: 1.05rem; opacity: 0.95; line-height: 1.6; margin-top: 15px;">
              <strong>Meta práctica de la semana:</strong> {logro_clean}
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

    # u02: Texto Introductorio y Disclaimers
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
            {intro_html}
          </div>
          <div class="disclaimer-box" style="background-color: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid var(--ucr-blue); padding: 20px; border-radius: var(--radius-md); margin-bottom: 25px; box-shadow: var(--shadow-sm);">
            <h4 style="color: var(--ucr-blue); margin-top: 0; margin-bottom: 12px; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-info-circle"></i> ¿Esta semana aplica para mi negocio? ("Esta semana aplica porque...")
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin-top: 10px;">
              <div style="background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;">
                <span class="badge" style="background-color: var(--ucr-blue); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">🆕 Negocio Nuevo / Idea</span>
                <p style="font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;">{disclaimers_dict[mid]['nuevo']}</p>
              </div>
              <div style="background: white; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e0eeff;">
                <span class="badge" style="background-color: var(--ucr-dark); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">🏢 Negocio en Marcha</span>
                <p style="font-size: 0.9rem; color: #444; margin-top: 8px; margin-bottom: 0; line-height: 1.5;">{disclaimers_dict[mid]['marcha']}</p>
              </div>
            </div>
          </div>
        """
    }

    # u03: Texto Teórico - Parte 1
    u03 = {
        "id": f"{sid}-u03",
        "semanaId": sid,
        "titulo": f"Paso 3: Texto Teórico — {p1_title}",
        "tipo": "entender",
        "duracionMin": 25,
        "requiereAccion": False,
        "boton": "Continuar a Teoría Parte 2",
        "html": f"""
          <div class="theoretical-card" style="font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;">
              <div style="background-color: var(--ucr-blue); color: white; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
                <i class="fas fa-book-open"></i>
              </div>
              <div>
                <h3 style="border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);">{p1_title}</h3>
                <span style="font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;">Texto Teórico · Parte 1 de 2</span>
              </div>
            </div>
            {p1_html_content}
          </div>
        """
    }

    # u04: Texto Teórico - Parte 2
    u04 = {
        "id": f"{sid}-u04",
        "semanaId": sid,
        "titulo": f"Paso 4: Texto Teórico — {p2_subtitle}",
        "tipo": "entender",
        "duracionMin": 20,
        "requiereAccion": False,
        "boton": "Ver Video Tutorial",
        "html": f"""
          <div class="theoretical-card" style="font-size: 1.02rem; line-height: 1.7; color: #2c3e50; background: white; padding: 25px; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;">
              <div style="background-color: var(--ucr-dark); color: white; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
                <i class="fas fa-lightbulb"></i>
              </div>
              <div>
                <h3 style="border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);">{p2_subtitle}</h3>
                <span style="font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;">Texto Teórico · Parte 2 de 2</span>
              </div>
            </div>
            {p2_html_content}
          </div>
        """
    }

    # u05: Video Tutorial
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
                <h3 style="border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);">{vid_title}</h3>
                <span style="font-size: 0.85rem; color: var(--text-light);">Demostración práctica de pantalla grabada (~4 min)</span>
              </div>
            </div>
            
            <div class="video-container-placeholder" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: white; padding: 40px 20px; text-align: center; border-radius: var(--radius-md); margin-bottom: 20px; position: relative;">
              <i class="fas fa-video" style="font-size: 3.5rem; color: #38bdf8; margin-bottom: 15px; display: block;"></i>
              <h4 style="color: white; margin-bottom: 10px;">{stitle}</h4>
              <p style="font-size: 0.9rem; color: #94a3b8; max-width: 550px; margin: 0 auto 15px auto;">
                {vid_synopsis}
              </p>
              <span class="btn btn-secondary" style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: white; pointer-events: none; padding: 8px 20px; font-size: 0.85rem; border-radius: 20px;">
                <i class="fas fa-clock"></i> Duración: 4:00 min (Demostración en Video — Próximamente)
              </span>
            </div>

            <div style="background-color: #f8fafc; padding: 15px 20px; border-radius: var(--radius-sm); border-left: 4px solid var(--ucr-blue);">
              <strong style="color: var(--ucr-dark); display: block; margin-bottom: 5px;"><i class="fas fa-list-ol" style="color: var(--ucr-blue);"></i> Pasos clave mostrados en el video:</strong>
              <ol style="margin: 0; padding-left: 20px; font-size: 0.92rem; color: #444; line-height: 1.6;">
                <li>Abrir el Proyecto de su negocio en ChatGPT (o el chat especializado).</li>
                <li>Copiar la plantilla del Prompt CIFRCE de la siguiente pantalla.</li>
                <li>Reemplazar los corchetes <code>[DATOS]</code> con la información real de su PYME.</li>
                <li>Evaluar críticamente la respuesta obtenida y guardar la evidencia en su Portafolio.</li>
              </ol>
            </div>
          </div>
        """
    }

    # u06: Tarea 1 Prompt CIFRCE
    gpt_banner = ""
    if gpt_note:
        gpt_banner = f"""
          <div style="background: #f0f7ff; border: 1px solid #bde0fe; border-left: 5px solid #2980b9; padding: 15px 20px; border-radius: var(--radius-sm); margin-bottom: 20px;">
            <strong style="color: #2980b9; font-size: 1rem; display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-robot"></i> Chat Especializado Disponible: {gpt_note}
            </strong>
            <p style="font-size: 0.9rem; color: #333; margin-top: 5px; margin-bottom: 0;">
              Esta semana cuenta con el GPT especializado <strong>"{gpt_note}"</strong>. Puede utilizarlo directamente en la biblioteca de GPTs o usar el prompt CIFRCE abajo en su chat habitual.
            </p>
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
        "html": f"""
          {gpt_banner}
          <div class="cifrce-prompt-box" style="background-color: #fffdf5; border: 2px solid #f39c12; padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); font-size: 0.98rem; line-height: 1.7; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #f39c12; padding-bottom: 10px; margin-bottom: 18px;">
              <h4 style="color: var(--ucr-blue); margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-terminal" style="color: #f39c12;"></i> TAREA 1 — PROMPT CIFRCE DE LA SEMANA
              </h4>
              <span class="badge" style="background: var(--ucr-blue); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">Modelo CIFRCE v2.3</span>
            </div>
            
            <p style="color: #555; font-size: 0.92rem; margin-bottom: 15px;">
              Copie el siguiente prompt estructurado en las 5 capas del modelo CIFRCE, complete los campos entre corchetes <code>[DATOS]</code> con la información real de su PYME y ejecútelo en ChatGPT:
            </p>
            
            <div style="background: #f8fafc; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;">
              <strong style="color: #005da4; font-size: 0.95rem; display: block; margin-bottom: 4px;"><i class="fas fa-layer-group"></i> 1. CONTEXTO:</strong>
              <span style="color: #2c3e50;">{cxt}</span>
            </div>
            
            <div style="background: #f8fafc; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;">
              <strong style="color: #005da4; font-size: 0.95rem; display: block; margin-bottom: 4px;"><i class="fas fa-tasks"></i> 2. INSTRUCCIÓN:</strong>
              <span style="color: #2c3e50;">{ins}</span>
            </div>
            
            <div style="background: #f8fafc; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;">
              <strong style="color: #005da4; font-size: 0.95rem; display: block; margin-bottom: 4px;"><i class="fas fa-table"></i> 3. FORMATO DE SALIDA:</strong>
              <span style="color: #2c3e50;">{fmt}</span>
            </div>
            
            <div style="background: #f8fafc; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0; margin-bottom: 12px;">
              <strong style="color: #005da4; font-size: 0.95rem; display: block; margin-bottom: 4px;"><i class="fas fa-shield-alt"></i> 4. RESTRICCIONES:</strong>
              <span style="color: #2c3e50;">{rst}</span>
            </div>
            
            <div style="background: #f8fafc; padding: 15px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;">
              <strong style="color: #005da4; font-size: 0.95rem; display: block; margin-bottom: 4px;"><i class="fas fa-check-double"></i> 5. CRITERIOS DE ÉXITO:</strong>
              <span style="color: #2c3e50;">{crt}</span>
            </div>
          </div>
        """
    }

    # u07: Tarea Complementaria
    u07 = {
        "id": f"{sid}-u07",
        "semanaId": sid,
        "titulo": f"Paso 7: {t2_title}",
        "tipo": "hacer",
        "duracionMin": 30,
        "requiereAccion": True,
        "entregable": "Registro escrito de la tarea complementaria o ejercicio de campo guardado en su portafolio.",
        "boton": "Ir a Chispa de Innovación",
        "html": f"""
          <div class="complementary-task-card" style="background: white; border: 1px solid var(--border-color); padding: 25px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;">
              <div style="background-color: var(--ucr-blue); color: white; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
                <i class="fas fa-clipboard-check"></i>
              </div>
              <div>
                <h3 style="border: none; padding: 0; margin: 0; font-size: 1.3rem; color: var(--ucr-dark);">{t2_title}</h3>
                <span style="font-size: 0.8rem; color: var(--text-light); font-weight: 600; text-transform: uppercase;">Actividad Complementaria de Aplicación</span>
              </div>
            </div>
            {t2_html}
          </div>
        """
    }

    # u08: Chispa de Innovación
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
                <span style="font-size: 0.85rem; color: #d69e2e; font-weight: 700; text-transform: uppercase;">Eje Transversal de Innovación · Semana {sglobal} ({scode})</span>
              </div>
            </div>

            <p style="font-size: 1rem; color: #744210; line-height: 1.6; margin-bottom: 20px;">
              Recomendaciones tecnológicas clave para mantener a su empresa a la delantera en <strong>{stitle.lower()}</strong>:
            </p>

            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.95rem; color: #744210; line-height: 1.7;">
              {chispa_html_items}
            </ul>
          </div>
        """
    }

    new_unidades.extend([u01, u02, u03, u04, u05, u06, u07, u08])

print(f"Generated {len(new_semanas)} semanas and {len(new_unidades)} unidades.")

with open(os.path.join(workspace_dir, "contenido/semanas.json"), "w", encoding="utf-8") as f:
    json.dump(new_semanas, f, ensure_ascii=False, indent=2)

with open(os.path.join(workspace_dir, "contenido/unidades.json"), "w", encoding="utf-8") as f:
    json.dump(new_unidades, f, ensure_ascii=False, indent=2)

print("Saved contenido/semanas.json and contenido/unidades.json")

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
    print("Error: contenidoData.js prefix mismatch")
