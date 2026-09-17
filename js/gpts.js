// Renderizado de GPTs Genéricos y Sectoriales
export async function loadGPTs() {
  const containerGenericos = document.getElementById('gpts-genericos-container');
  const containerSectoriales = document.getElementById('gpts-sectoriales-container');

  if (!containerGenericos && !containerSectoriales) return;

  try {
    const response = await fetch('./data/gpts_v23.json');
    const data = await response.json();

    // Render GPTs Genéricos
    if (containerGenericos && data.fases.fase1_genericos) {
      containerGenericos.innerHTML = data.fases.fase1_genericos.map(g => `
        <div class="module-card">
          <div class="module-header" style="background-color: var(--ucr-secondary);">
            <span>${g.icono} ${g.nombre}</span>
            <span class="badge" style="background-color: rgba(255,255,255,0.2);">${g.modulo}</span>
          </div>
          <div class="module-body">
            <p class="module-desc">${g.descripcion}</p>
          </div>
        </div>
      `).join('');
    }

    // Render GPTs Sectoriales
    if (containerSectoriales && data.fases.fase2_sectoriales) {
      containerSectoriales.innerHTML = data.fases.fase2_sectoriales.map(s => `
        <div class="module-card">
          <div class="module-header" style="background-color: var(--ucr-primary);">
            <span>${s.icono} ${s.sector}</span>
            <span class="badge badge-sector">${s.porcentaje_sondeo} sondeo</span>
          </div>
          <div class="module-body">
            <p class="module-desc">GPTs recomendados para este sector:</p>
            <ul style="padding-left: 20px; font-size: 0.95rem; color: var(--text-dark);">
              ${s.gpts.map(item => `<li style="margin-bottom: 6px;"><strong>${item}</strong></li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('');
    }
  } catch (error) {
    console.error("Error al cargar el catálogo de GPTs:", error);
  }
}
