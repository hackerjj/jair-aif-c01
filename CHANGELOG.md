# Changelog — Curso AIF-C01 (sitios de Jair y Gaby)

Historial de cambios de los dos sitios de estudio de AWS Certified AI Practitioner y de su guardado de resultados.
Formato: lo más reciente arriba. Fecha y hora local CDMX (DD mmm AAAA · HH:MM).
La misma lista se abre en el sitio de Jair al dar clic en el texto "vX.Y.Z — build AAAA-MM-DD" al final de la página.
En el sitio de Gaby ese texto solo muestra la versión actual; el historial no es visible para ella.

- Sitio de Jair: https://hackerjj.github.io/jair-aif-c01/ (repo hackerjj/jair-aif-c01)
- Sitio de Gaby: https://awsemjairgarcia.github.io/gaby-aif-c01/ (repo AWSEMJairGarcia/gaby-aif-c01)
- Backend de resultados: trento-social-backend en Render (repo hackerjj/trento-social-backend)

## v2.7.0 — 15 nov 2026 · 13:40
### Agregado
- **Práctica 3 · tus errores** (sitio de Jair): 20 ejercicios armados con los 15 errores del Simulacro 3. Mezcla unir parejas, completar frases, ordenar pasos y elegir, con verdadero o falso. Cubre clasificación contra clustering, sobreajuste, data drift, temperatura contra costo, prompting, Artifact contra Audit Manager, Ground Truth contra A2I, GAN, equidad y tres ejercicios de ordenar pasos.
- Se guarda sola en el servidor (módulo `practica3`) y entra a las gráficas y a Mis exámenes al terminarla. Tarjeta "Paso 8" en Material.
### Cambiado
- "Tu siguiente paso" ahora lleva a la Práctica 3; al terminarla, al Simulacro 4.
- En el sitio de Gaby solo cambia el número de versión.
## v2.6.1 — 15 nov 2026 · 13:02
### Agregado
- **Indicador "Guardado en el servidor"** en el Inicio de los dos sitios: dice en verde si el navegador llega al servidor y en rojo si algo lo bloquea. Sirve para saber por qué no llegan los resultados sin adivinar.
- Resultado del **Simulacro 3** (50 de 65, 77%, 30:45): entra a Mis exámenes, a las gráficas, al panel "¿Listo para el examen?" y a la lectura. Sus 15 errores están en Mis errores y en la sección 8 de la guía de errores.
- Hoja de contrastes, sección 13 (en los dos sitios): clasificación contra clustering, sobreajuste, drift, etiqueta, zero-shot, few-shot y plantilla, y por qué la temperatura no cambia el costo.
### Cambiado
- "Tu siguiente paso" ahora recomienda un repaso dirigido en lugar de otro simulacro, porque el 77% se repitió dos veces.
## v2.6.0 — 15 nov 2026 · 12:31
### Agregado
- Panel **"¿Listo para el examen?"** arriba de Mi progreso (sitio de Jair). Revisa cuatro criterios con tus resultados reales y muestra la prueba de cada uno: último simulacro en 90% o más, dos simulacros seguidos en 80% o más, ningún dominio debajo de 75%, y usar al menos 60 de los 90 minutos. Dice "Todavía no", "Casi listo" o "Listo para agendar el examen" y se actualiza solo con cada simulacro.
### Corregido
- `bajar-resultados.py` se rompía con los datos de Gaby (respuestas guardadas como lista).
- En el sitio de Gaby solo cambia el número de versión.
## v2.5.2 — 15 nov 2026 · 12:08
### Corregido
- Los resultados nuevos no llegaban al servidor: el guardado automático tenía una lista fija de módulos y el navegador conservaba la versión vieja. Ahora reconoce cualquier módulo (diagnóstico, guías, prácticas y simulacros) por su nombre y se recarga con número de versión (`sync.js?v=2.5.2`) en todas las páginas, para que no se quede en caché.
- La foto de avance ya no espera 30 minutos cuando hay un módulo terminado que todavía no se reportó: se manda al abrir el Inicio.
### Agregado
- Cada módulo guarda la **fecha y la hora en que lo terminaste** (`fin`). Se ven en Mis exámenes (por ejemplo "15 nov 2026 · 11:58") y llegan al servidor con el resultado.
- Práctica 2 registrada: 18 de 20 en 10:40. Se agregó a las gráficas y a Mis errores (Artifact contra Audit Manager por tercera vez y un ordenar de estrategia).
## v2.5.1 — 14 nov 2026 · 20:37
### Corregido
- **Mi progreso** estaba desactualizado: la gráfica de calificaciones se detenía en el Simulacro 1. Ahora muestra todos los intentos (incluidos Guía 2 y Simulacro 2). También las barras por dominio y la tabla traen el Simulacro 2, y la leyenda y los títulos ya no dicen "simulacro 1".
- El texto "Lectura honesta" se escribe solo con tus últimos resultados (hoy 60% y 77%, lo débil del último simulacro y cuánto tiempo usaste).
- **Mis errores** incluye los errores del Simulacro 2 y las confusiones nuevas: adaptar modelos, ordenar pasos, Artifact contra Audit Manager y Model Cards contra Data Wrangler. La guía completa de errores trae una sección 7 con tus 15 errores.
### Agregado
- La Práctica 2 y el Simulacro 3 se agregan solos a las gráficas, a Mis exámenes y a la lectura al terminarlos (el Simulacro 3, al abrir su calificación). Los segundos por pregunta del Simulacro 2 y 3 salen de tu navegador.
## v2.5.0 — 14 nov 2026 · 19:58
### Agregado
- **Práctica 2 · tus errores** (sitio de Jair): 20 ejercicios armados con los errores del Simulacro 2. Mezcla cuatro formas: unir parejas, completar frases, ordenar pasos y elegir (incluye verdadero o falso), con explicación al instante.
- **Simulacro 3** (sitio de Jair): 65 preguntas nuevas, 90 minutos, con su página de calificación y explicaciones. Pesa más en adaptar modelos, Artifact contra Audit Manager, KMS, Model Cards y ordenar pasos.
- **Hoja de contrastes**, en los dos sitios: secciones nuevas 9 a 12 con la escalera de adaptación de modelos, seguridad y cumplimiento, SageMaker (Model Cards contra Data Wrangler) y los órdenes que se repiten.
- El resultado del **Simulacro 2** (50 de 65, 77%) entra a las gráficas de Mi progreso y a Mis exámenes.
### Cambiado
- "Tu siguiente paso" ahora sigue la ruta Práctica 2, luego Simulacro 3. Los módulos nuevos se guardan solos en el servidor (módulos `practica2` y `simulacro3`).
- En el sitio de Gaby solo cambia la hoja de contrastes y el número de versión.
## v2.4.0 — 14 nov 2026 · 17:58
### Agregado
- **Simulacro 2** en el sitio de Jair: 65 preguntas nuevas, 90 minutos, mismos dominios y mezcla de tipos que el examen real (opción múltiple, respuesta múltiple, ordenar y relacionar). Pesa más en lo que se falló en la Guía 2: adaptar modelos, Clarify contra Model Monitor y temperatura contra costo.
- Página **"Mi calificación"** del Simulacro 2, con puntaje por dominio, filtro de errores y la explicación de cada pregunta.
- "Tu siguiente paso" ahora lleva a **Empezar el Simulacro 2** y, al terminarlo, a su calificación. Tarjeta "Paso 5" en Material.
- Guardado automático del Simulacro 2 en el servidor (módulo `simulacro2`; backend actualizado, falta el deploy en Render).
### Cambiado
- Solo el sitio de Jair recibe el Simulacro 2, porque se armó con sus errores. En el sitio de Gaby solo cambia el número de versión.
## v2.3.0 — 14 nov 2026 · 17:36
### Agregado
- Resultado de la **Guía paso a paso 2** de Jair (14 de 22, 91:58) en Mi progreso y en Mis exámenes. Se hizo en el archivo local viejo, que no guarda en el servidor, así que se registró a mano y también se subió al servidor.
### Cambiado
- Con la Guía 2 terminada, "Tu siguiente paso" ahora apunta al Simulacro 2. Solo aplica al sitio de Jair; en el de Gaby solo cambia el número de versión.
- Las guías viejas locales (`lectura/7` y `lectura/8`) muestran un aviso con la liga al sitio, para no volver a usarlas por error.
## v2.2.1 — 13 nov 2026 · 02:41
### Agregado
- Botón **Reiniciar** en la Práctica interactiva de los dos sitios (lo pidió Gaby en su encuesta). Pide confirmación y borra el avance, las respuestas y el tiempo para empezar de cero, igual que en las guías.
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
