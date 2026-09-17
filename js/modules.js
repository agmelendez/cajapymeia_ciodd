// Renderizador dinámico de Módulos Curriculares v23
export async function loadModules() {
  const container = document.getElementById('modules-container');
  const toolkitContainer = document.getElementById('toolkit-container');
  
  if (!container && !toolkitContainer) return;

  try {
    const response = await fetch('./data/modulos_v23.json');
    const data = await response.json();

    // Render Toolkit 1 (Pre-operativo)
    if (toolkitContainer && data.toolkit_preoperativo) {
      const tk = data.toolkit_preoperativo;
      toolkitContainer.innerHTML = `
        <div class="module-card">
          <div class="module-header" style="background-color: var(--ucr-highlight);">
            <span>${tk.titulo}</span>
            <span class="badge badge-toolkit">Fase Inicial</span>
          </div>
          <div class="module-body">
            <p class="module-desc">${tk.descripcion}</p>
            <div class="weeks-list">
              ${tk.semanas.map(s => renderWeekItem(s, true)).join('')}
            </div>
          </div>
        </div>
      `;
    }

    // Render Módulos Principales (A a E)
    if (container && data.modulos_principales) {
      container.innerHTML = data.modulos_principales.map(m => `
        <div class="module-card">
          <div class="module-header">
            <span>${m.titulo}</span>
            <span class="badge" style="background-color: rgba(255,255,255,0.2);">Módulo ${m.letra}</span>
          </div>
          <div class="module-body">
            <p class="module-desc">${m.descripcion}</p>
            <div class="weeks-list">
              ${m.semanas.map(s => renderWeekItem(s, false)).join('')}
            </div>
          </div>
        </div>
      `).join('');
    }
  } catch (error) {
    console.error("Error al cargar los módulos curriculares:", error);
  }
}

function renderWeekItem(semana, isToolkit) {
  const promptRHEC = semana.prompt_rhec ? `
    <div class="prompt-box">
      <div class="prompt-box-header">
        <span class="prompt-label">Prompt RHEC Sugerido (${semana.herramienta})</span>
        <button class="btn btn-copy" onclick="copyPrompt('${semana.id || semana.semana}')">Copiar Prompt</button>
      </div>
      <div id="prompt-text-${semana.id || semana.semana}">
ROL: ${semana.prompt_rhec.rol}
HISTORIA: ${semana.prompt_rhec.historia}
EXACTITUD: ${semana.prompt_rhec.exactitud}
CONTEXTO: ${semana.prompt_rhec.contexto}
      </div>
    </div>
  ` : '';

  return `
    <div class="week-item">
      <div class="week-title">${semana.semana}: ${semana.titulo}</div>
      <div class="week-meta"><strong>Herramienta:</strong> ${semana.herramienta || semana.concepto}</div>
      <div class="week-meta"><strong>Entregable:</strong> ${semana.entregable}</div>
      ${promptRHEC}
    </div>
  `;
}
