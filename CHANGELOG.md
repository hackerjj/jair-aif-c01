# Changelog — Curso AIF-C01 (sitios de Jair y Gaby)

Historial de cambios de los dos sitios de estudio de AWS Certified AI Practitioner y de su guardado de resultados.
Formato: lo más reciente arriba. Fecha y hora local CDMX (DD mmm AAAA · HH:MM).
La misma lista se abre en el sitio de Jair al dar clic en el texto "vX.Y.Z — build AAAA-MM-DD" al final de la página.
En el sitio de Gaby ese texto solo muestra la versión actual; el historial no es visible para ella.

- Sitio de Jair: https://hackerjj.github.io/jair-aif-c01/ (repo hackerjj/jair-aif-c01)
- Sitio de Gaby: https://awsemjairgarcia.github.io/gaby-aif-c01/ (repo AWSEMJairGarcia/gaby-aif-c01)
- Backend de resultados: trento-social-backend en Render (repo hackerjj/trento-social-backend)

## v2.2.0 — 13 nov 2026 · 02:21
### Cambiado
- El chip naranja de versión del encabezado se cambió por un texto pequeño al final de la página, "v2.2.0 — build 2026-11-13", igual que en el POS de Sushi Queen.
- En el sitio de Jair ese texto abre el "Historial de versiones": versión actual y fecha arriba, una etiqueta por versión, la marca "actual" en la más nueva, cada cambio con una palomita y botón "Cerrar".
- En el sitio de Gaby el texto solo muestra la versión, sin historial.
- La numeración pasa a tres partes (mayor.menor.parche).
## v2.1 — 13 nov 2026 · 02:14
### Agregado
- Banner **"Tu siguiente paso"**. En el sitio de Jair va arriba de la pestaña Material y dice qué hacer ahora y por qué (hoy: Guía 2). En el sitio de Gaby va arriba del Inicio y sigue el orden Diagnóstico → Guía 1 → Práctica → Guía 2 → Simulacro, con "Empezar" o "Continuar" según su avance.
- El módulo que sigue se resalta con un borde naranja y la etiqueta "Siguiente".
- Chip de versión en el encabezado de los dos sitios. En el de Jair abre este historial; en el de Gaby solo muestra la versión.
- `CHANGELOG.md` en el repo del sitio de Jair.

## v2.0 — 12 nov 2026 · 20:35
### Agregado
- Guardado automático de resultados (`sync.js`) en los dos sitios: manda el avance de cada módulo cada 2 minutos como máximo, el resultado completo al terminar un módulo y una foto de todo el avance al entrar al Inicio (máximo cada 30 minutos). Usa `sendBeacon` con texto simple para no depender de CORS.
- Backend (commit `89f619a` de trento-social-backend): `POST /api/aif/resultado` (público, 30 por minuto) y `GET /api/aif/resultados` (con el token de admin). Colección nueva `aif_resultados`, aislada de los datos de Trento. Desplegado en Render el 13 nov 2026 · 00:34 y probado de punta a punta.
- Script `Estudio/bajar-resultados.py`: baja los resultados de Jair y Gaby a `Estudio/resultados-remotos/` y califica el diagnóstico y el simulacro.
### Cambiado
- Aviso en el Inicio de Gaby: sus resultados se comparten con Jair para ajustar su plan.

## v1.3 — 11 nov 2026 · 19:55
### Agregado
- Sitio de Jair con pestañas: Mi progreso (indicadores y gráficas de calificación, dominios y tiempos), Mis exámenes (historial y revisiones), Mis errores y Material.
- Revisiones con las respuestas reales de Jair: diagnóstico, ronda 2, ronda 3 y simulacro 1.
### Cambiado
- El repo viejo `hackerjj/gaby-aif-c01` se renombró a `hackerjj/jair-aif-c01`. Liga corta `tinyurl.com/jair-ai-cert`.

## v1.2 — 11 nov 2026 · 19:47
### Agregado
- Paso 0 en el sitio de Gaby: diagnóstico de 20 preguntas con timer de 30 minutos, calificación automática y revisión con explicaciones.
- Sección "Tu ruta": ordena sus 4 temas del más débil al más fuerte y marca cada paso como Prioridad alta, Recomendado o Puedes ir rápido.

## v1.0 — 11 nov 2026 · 19:37
### Agregado
- Sitio de Gaby: login con contraseña, Guía 1, Práctica interactiva, Guía 2, simulacro de 65 preguntas que se califica solo, revisión con explicaciones y hoja de contrastes.
- Respaldo en JSON (descargar y cargar), cambio de contraseña y encuesta de satisfacción que llega por correo.
### Cambiado
- Publicado en la cuenta de GitHub AWSEMJairGarcia. Liga corta `tinyurl.com/gaby-ai-cert`.
