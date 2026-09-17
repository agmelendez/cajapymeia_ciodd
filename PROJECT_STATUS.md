# PROJECT_STATUS.md — Estado del Proyecto & Matriz Curricular y de Seguridad

## 📌 Identificación del Proyecto
- **Proyecto:** Caja de Herramientas de Inteligencia Artificial para la MiPYME
- **Versión Oficial:** v3.1.0 (Alineación Canónica 12 Semanas — CIOdD-UCR)
- **Institución Emisora Principal:** Universidad de Costa Rica (UCR) — Centro de Investigación Observatorio del Desarrollo (CIOdD)
- **Coordinación y Colaboración:** Dirección de Promoción de la Vinculación para el Desarrollo (DIPROVID) & Programa AUGE (UCR)
- **Carga Horaria:** 25 horas certificadas (1h inducción + 12 semanas x 2h: 84 min práctica / 36 min teoría)
- **Política Financiera:** 100% Gratuito (sin barrera de pago en ChatGPT Plus/Team)
- **Ciberseguridad:** Fortificación OWASP Top 10, Ley 8968 Costa Rica & Content Security Policy (CSP).
- **Entorno de Despliegue:** GitHub Pages (100% Estático / Modo `file://` local compatible)
- **Estado:** Versión Final v3.1.0 Canónica — Auditada, Actualizada y Verificada.

---

## 🛡️ Matriz de Auditoría y Estado Técnico-Pedagógico

| Vector / Dimensión | Estado | Medida Implementada |
|:---|:---:|:---|
| **1. Estructura Curricular** | ✅ Canónica 12 Semanas | M0 (Inducción) + M1 (Diagnóstico con IA), M2 (Automatización), M3 (Comercialización). |
| **2. Emisión de Certificados** | ✅ CIOdD-UCR | Certificado único de 25 horas emitido por CIOdD-UCR con colaboración DIPROVID/AUGE. |
| **3. Acceso Gratuito** | ✅ 100% Libre | Eliminado requisito de $100 en suscripciones. Rutas gratuitas y plantillas abiertas integradas. |
| **4. Privacidad Ley 8968** | ✅ Asegurado | Arquitectura Cero Backend: Almacenamiento 100% local en `localStorage`. Protocolo de anonimización. |
| **5. Prevención XSS & Inyecciones** | ✅ Asegurado | Sanitización estricta de HTML y URLs en `Estado.sanitizeText()` y `sanitizeUrl()`. |
| **6. Enlaces y Rutas Relativas** | ✅ Verificado | Eliminadas rutas absolutas `file:///Users/...`. Todos los enlaces son relativos o URLs públicas seguras. |
| **7. Infografías Oficiales** | ✅ Vinculadas | 12 infografías de alta resolución en `Infografias/*.png` vinculadas con visor lightbox y descarga. |
| **8. Contenido y Unidades** | ✅ Sincronizado | 84 unidades (7 por semana) con esquema RHEC + Chispa y niveles de asesoría A0/A1/A2. |
| **9. Bundle Local Offline** | ✅ Regenerado | `assets/js/contenidoData.js` actualizado con modulos, semanas, unidades y recursos canónicos. |
