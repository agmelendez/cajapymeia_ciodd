# Protocolo de Privacidad y Uso de Datos en Actividades con IA

Este protocolo establece las medidas operativas obligatorias para asegurar la privacidad de la información comercial y la protección de datos personales de terceros (clientes, proveedores, colaboradores), de conformidad con la Ley N° 8968 (Ley de Protección de la Persona frente al tratamiento de sus datos personales) de Costa Rica.

---

## 1. Regla General No Negociable
La persona participante del programa **no debe ingresar datos personales identificables** en herramientas de inteligencia artificial generativa abiertas o gratuitas (como ChatGPT, Gemini, Claude, etc.).

---

## 2. Tipos de Datos que Deben Eliminarse o Anonimizarse
Antes de copiar, subir o procesar cualquier texto o archivo en una herramienta de IA, debes asegurarte de eliminar por completo:

*   Nombres y apellidos completos.
*   Números de identificación física o jurídica (cédulas, pasaportes).
*   Números telefónicos.
*   Direcciones de correo electrónico.
*   Direcciones físicas detalladas de viviendas.
*   Detalles de cuentas bancarias, tarjetas o información crediticia individual.
*   Fotografías, retratos o videos donde se identifique el rostro de personas.
*   Información médica o de salud.
*   Datos de menores de edad.
*   Conversaciones privadas completas de chats (ej. capturas de pantalla de chats con clientes sin anonimizar).

---

## 3. Guía Práctica de Anonimización
Reemplaza los datos reales por etiquetas genéricas que mantengan la lógica de la información sin revelar identidades:

*   *Dato Real:* "María Fernández, teléfono 8888-0000, vecina de Cartago, se quejó de que el pedido llegó frío."
*   *Dato Anonimizado:* "Cliente A, mujer adulta, zona urbana, reporta inconveniente con la temperatura de entrega del producto."
*   
*   *Dato Real:* "La empresa Agropecuaria XYZ S.A. nos debe ₡500.000 desde abril."
*   *Dato Anonimizado:* "Cliente corporativo del sector agrícola registra una cuenta por cobrar vencida de rango medio."

---

## 4. Consentimiento Informado para Actividades Prácticas
Cuando las actividades del programa requieran entrevistar a clientes potenciales, recolectar respuestas a encuestas o documentar testimonios reales, el emprendedor debe:
1.  Explicar claramente la finalidad de la recolección de datos.
2.  Garantizar que la información se analizará de forma agregada o anónima.
3.  Obtener la firma o aceptación explícita de la persona participante utilizando la [Plantilla de Consentimiento](../templates/plantilla-consentimiento-clientes.md) oficial del programa.

---

## 5. Uso de Datos Ficticios (Datos de Prueba)
Para todas las prácticas de configuración de CRM, chatbots, flujos automatizados de mensajería o simulaciones financieras, se debe hacer uso exclusivo de datos de prueba ficticios. Una vez que la persona participante valide el correcto funcionamiento técnico de la automatización, podrá trasladar el sistema a producción utilizando bases de datos reales en entornos locales cerrados que cumplan con medidas de ciberseguridad.

---

## 6. Guía Específica de Configuración de Privacidad por Proveedor (Setiembre 2026)
Para evitar que sus consultas y secretos comerciales sean utilizados para entrenar modelos de Inteligencia Artificial, siga estas instrucciones paso a paso según la herramienta que utilice:
- **OpenAI (ChatGPT):** Inicie sesión > Perfil > *Configuración* (Settings) > *Controles de datos* (Data Controls) > Desactive la casilla **"Mejorar el modelo para todos"** (Improve the model for everyone). También puede desactivar el historial si no requiere guardar conversaciones.
- **Google (Gemini):** Inicie sesión > *Actividad en las apps con Gemini* > Seleccione **Desactivar** (Turn off) para evitar que revisores humanos o algoritmos de entrenamiento procesen sus entradas.
- **Anthropic (Claude):** Inicie sesión > *Account / Settings* > *Privacy* > Asegúrese de verificar que la opción de entrenamiento de modelos permanezca desactivada conforme a los términos de privacidad para usuarios individuales.

---

## 7. Distinción entre Almacenamiento Local y Servicios Externos
- **Almacenamiento Local en el Navegador (LocalStorage):** Sus notas de reflexión, avances porcentuales y metadatos de portafolio se almacenan *exclusivamente en la memoria local de su dispositivo*. Ni la UCR ni terceros reciben sus respuestas a menos que usted decida exportar y enviar voluntariamente su archivo de respaldo.
- **Interacciones con Herramientas Externas (LLMs, YouTube, Canva, Make):** Al hacer clic en un enlace para abrir ChatGPT, un video de YouTube o un formulario externo, los datos que usted ingrese en esas plataformas son procesados directamente por los servidores de dichas empresas bajo sus respectivas políticas comerciales y de privacidad. **Nunca pegue datos reales de clientes en esas herramientas externas.**

