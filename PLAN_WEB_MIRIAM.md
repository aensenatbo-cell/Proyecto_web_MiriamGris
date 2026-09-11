# Plan de la web — Miriam Grisonich

Documento de trabajo. Cada tarea trae el prompt listo para pegar en Aider, los archivos que hay que cargar antes, y cómo verificar que salió bien.

---

## Parte 1 — Decisiones

### 1.1 Qué tiene que hacer esta web

Tres visitantes distintos, tres trabajos distintos:

| Quién llega | De dónde | Qué quiere | Qué tiene que conseguir la web |
|---|---|---|---|
| Seguidoras | Instagram | Más de lo mismo, y consejos rápidos | Que se queden, vean vídeos y vuelvan |
| Marcas | Búsqueda o contacto directo | Evaluar si encaja y cuánto cuesta | Media kit y formulario de contacto |
| Clientas | Instagram, tras verla | Hablar con ella en persona | Reservar y pagar sin fricción |

Los tres entran por sitios distintos de la misma página. No compiten si el orden es correcto.

La investigación de 2026 sobre páginas enlazadas desde bio coincide: las que funcionan son micrositios orientados a conversión construidos alrededor de un objetivo principal a la vez, no listas de enlaces. Por eso el orden de las secciones importa más que su número.

### 1.2 Estructura

Una sola página con navegación por anclas. Siete secciones más pie.

```
1. Hero              → gancho + dos salidas (ver / reservar)
2. Chi sono          → quién es, corto
3. Le tre avventure  → Expat · Becoming · Caos e Ordine
4. Consigli veloci   → cocina, gimnasio, maquillaje, sueño, bebés
5. Ultimi video      → su contenido real
6. Prenota           → agenda de pago (Cal.com)
7. Collaborazioni    → media kit + formulario para marcas
8. Footer            → redes, newsletter
```

Por qué este orden: las seguidoras se quedan en 1-5 y no necesitan bajar más. Quien quiere reservar llega a 6 ya convencida. Las marcas van directas a `#collaborazioni` desde un enlace. Si más adelante hace falta separar 6 y 7 en páginas propias, la estructura ya lo permite.

**Idioma:** italiano, con detalles en español donde el chiste lo pida (el choque cultural es parte del contenido). Nunca al revés.

### 1.3 Sistema de diseño

**El razonamiento.** El mundo visual de Miriam no es una revista de estilo de vida mediterránea. Eso es Cabana, y es exactamente lo aspiracional que ella dice rechazar. Su mundo real es vídeo vertical, notas de voz, capturas de pantalla, instrucciones de IKEA y la nevera llena de pósits. El diseño sale de ahí.

Y sobre el color: lo apagado y de buen gusto *es* la estética tóxica que ella critica. La respuesta correcta no es terracota apagado, es color italiano de comida — rojo, verde y amarillo sobre blanco. Alegre, fuerte, sin pedir permiso. Es además la lección de La DoubleJ, que el informe anterior citaba y luego contradecía.

**Paleta** (6 valores, en `:root`)

| Variable | Hex | Uso |
|---|---|---|
| `--gesso` | `#FBFAF7` | Fondo. Blanco de yeso, no crema |
| `--inchiostro` | `#1C2321` | Texto. Negro verdoso, no gris |
| `--pomodoro` | `#E24E38` | Acento principal: botones, enlaces activos |
| `--basilico` | `#3B6E4F` | Acento secundario: fondos de sección alterna |
| `--limone` | `#F2C14E` | Resaltados, subrayados, anotaciones |
| `--cemento` | `#C9C5BC` | Líneas, bordes, texto secundario |

Regla: el fondo es `--gesso` casi siempre. `--pomodoro` solo en lo que se pulsa. `--limone` solo para llamar la atención sobre una palabra. Nunca los tres saturados juntos en el mismo bloque.

**Tipografía** (3 familias, todas en Google Fonts)

- **Fraunces** — títulos. Es variable y tiene un eje `WONK` que deforma ligeramente las letras a propósito. Literalmente una tipografía imperfecta por diseño, y mucho menos vista que Playfair Display.
- **Instrument Sans** — cuerpo, navegación, botones.
- **Caveat** — anotaciones manuscritas. **Solo ahí**, y máximo ocho en toda la página. Es el condimento, no el plato.

**Concepto de maqueta**

El formato nativo de Miriam es el vídeo vertical. La página lo respeta: los contenedores de imagen son 9:16, no panorámicos de revista.

```
┌──────────────────────────────────────────┐
│ MG              chi · cosa · prenota     │
├────────────────────┬─────────────────────┤
│                    │      ┌────────┐     │
│  Qui NON è         │      │        │     │
│  tutto perfetto    │      │  9:16  │     │
│  (e ci piace)      │      │        │     │
│                    │      │        │     │
│  Italiana a        │      └────────┘     │
│  Barcellona.       │    ↖ terza ripresa  │
│  Vlog settimanali. │      (Caveat)       │
│                    │                     │
│  [Guarda]  [Prenota]                     │
└────────────────────┴─────────────────────┘
```

Texto alineado a la izquierda en todo el sitio. Nada centrado salvo el pie.

**Los cinco principios**

1. Vertical antes que panorámico. Sus imágenes son 9:16.
2. Una anotación manuscrita por sección, máximo. Es la voz autoirónica.
3. Nada simulado. Si algo no funciona todavía, no está en la página.
4. Movimiento solo como respuesta a una acción. Nada de aparecer al hacer scroll en cada sección.
5. Si una decoración no sirve al mensaje, fuera.

### 1.4 Servicios externos (todos gratuitos)

| Necesidad | Servicio | Nota |
|---|---|---|
| Agenda de pago | **Cal.com** | Plan gratuito con tipos de evento ilimitados y pagos por Stripe |
| Formulario de contacto | **Formspree** o **Web3Forms** | Plan gratuito suficiente para el volumen inicial |
| Alojamiento | **GitHub Pages** | Gratis, y el sitio es estático |

Ninguno se toca hasta la fase 4. Hasta entonces, esas secciones existen pero con un aviso claro de que aún no están activas.

---

## Parte 2 — Cómo trabajar

Antes de nada, sustituye tu `CONVENTIONS.md` por el de la Parte 4 de este documento. Añade la paleta, las fuentes y las reglas de este plan, para no repetirlas en cada prompt.

**El ciclo, sin excepciones:**

```
1. aider
2. /add <solo los archivos de esta tarea>
3. Pegar el prompt de la tarea
4. Revisar el diff → aceptar o rechazar
5. Mirar el navegador (Live Server)
6. /tokens → si pasa de 25.000, /clear
7. /drop de lo que no vayas a tocar
8. Siguiente tarea
```

Si el diff toca algo que no pediste, **di que no** y reformula más acotado. No aceptes por inercia.

---

## Parte 3 — Las tareas

### Fase 1 · Cimientos

---

**Tarea 1 — Esqueleto**

`/add` — ninguno (los va a crear)

```
Crea tres archivos: index.html, css/styles.css y js/main.js.

index.html: doctype, lang="it", charset UTF-8, viewport, título
"Miriam Grisonich — Italiana a Barcellona", meta description,
enlace a css/styles.css en el head y script a js/main.js al final del body.

En el body: un <header> con nav vacío, y siete <section> vacías con los ids
home, chi-sono, avventure, consigli, video, prenota, collaborazioni,
más un <footer>.

css/styles.css y js/main.js vacíos por ahora.
```

✅ **Verificar:** existen los tres archivos. `index.html` abre en Live Server: página en blanco. Correcto.

---

**Tarea 2 — Sistema de diseño**

`/add css/styles.css`

```
En styles.css añade, en este orden:

1. Import de Google Fonts: Fraunces (variable, ejes opsz/wght/SOFT/WONK),
   Instrument Sans (400, 500, 600) y Caveat (400).

2. Reset básico: margin 0, padding 0, box-sizing border-box en todo.

3. Variables en :root:
   --gesso #FBFAF7, --inchiostro #1C2321, --pomodoro #E24E38,
   --basilico #3B6E4F, --limone #F2C14E, --cemento #C9C5BC

4. Escala tipográfica con variables: --t-xs 0.875rem, --t-s 1rem,
   --t-m 1.25rem, --t-l 2rem, --t-xl 3rem, --t-xxl 4.5rem

5. body: fondo --gesso, color --inchiostro, familia Instrument Sans,
   line-height 1.6.

6. h1-h3: Fraunces con font-variation-settings de WONK 1 y SOFT 20,
   line-height 1.1.

7. Clase .nota: Caveat, color --basilico, rotada -2 grados.

8. Un contenedor .wrap: max-width 1100px, margen auto, padding lateral 1.5rem.
```

✅ **Verificar:** el fondo cambia a blanco roto. Si sigue blanco puro, el CSS no está enlazado.

Después: `/clear`

---

**Tarea 3 — Navegación**

`/add index.html css/styles.css`

```
Rellena el header: logo "MG" en Fraunces, y enlaces a
#chi-sono (Chi sono), #consigli (Consigli), #video (Video),
#prenota (Prenota), #collaborazioni (Collabora).

CSS: header fijo arriba, fondo --gesso, borde inferior 1px --cemento,
altura 68px, enlaces en Instrument Sans sin subrayado, color --inchiostro.
El enlace hover cambia a --pomodoro.
Añade scroll-behavior smooth al html y scroll-margin-top de 80px a las secciones.

Sin menú móvil todavía.
```

✅ **Verificar:** la barra se ve arriba. Al pulsar un enlace, la página salta suave.

Después: `/clear`

---

### Fase 2 · Contenido

---

**Tarea 4 — Hero**

`/add index.html css/styles.css`

```
Rellena #home con dos columnas.

Izquierda:
- h1: "Qui NON è tutto perfetto" y debajo, más pequeño, "(e ci piace)"
- Párrafo: "Italiana a Barcellona. Vlog settimanali su come provare a essere
  un'adulta funzionante, senza riuscirci del tutto."
- Dos botones: "Guarda i video" que enlaza a #video, y "Prenota un caffè"
  que enlaza a #prenota.

Derecha:
- Un contenedor con proporción 9:16 (aspect-ratio) con una imagen de
  https://picsum.photos/seed/miriam-hero/600/1067
- Debajo, un span con clase .nota que diga "terza ripresa. le prime due
  non esistono."

CSS: grid de dos columnas, la izquierda más ancha. El botón principal
con fondo --pomodoro y texto --gesso; el secundario con borde 2px --inchiostro
y fondo transparente. En móvil (max-width 768px), una sola columna.
```

✅ **Verificar:** hero a dos columnas con la imagen vertical a la derecha. Reduce la ventana: debe apilarse.

Después: `/clear`

---

**Tarea 5 — Chi sono**

`/add index.html css/styles.css`

```
Rellena #chi-sono.

Título h2: "Chi sono (versione onesta)".

Tres párrafos cortos, en italiano, basados en esto: es italiana, vive en
Barcelona, empezó a grabar porque estaba cansada de la perfección
inalcanzable de las redes. Documenta el detrás de escena de intentar ser
adulta en el extranjero. Promete risas, cero toxicidad estética y la
tranquilidad de saber que nadie tiene la vida tan resuelta como parece.

A la izquierda, imagen 9:16 con
https://picsum.photos/seed/miriam-ritratto/500/889

Una sola .nota al margen: "sì, il nome è vero. no, non so perché."

CSS: dos columnas, imagen izquierda y texto derecha. Ancho de línea
del texto por debajo de 70 caracteres. Una columna en móvil.
```

✅ **Verificar:** se lee cómodo, la línea no es demasiado larga.

Después: `/clear`

---

**Tarea 6 — Le tre avventure**

`/add index.html css/styles.css`

```
Rellena #avventure.

Título h2: "Le tre avventure".

Tres tarjetas en fila:

1. "Sopravvivere da expat" — Todo lo que me habría gustado saber antes de
   mudarme. Choque cultural, cenar a las ocho, supermercados cerrados en
   domingo y la humedad de la ciudad.

2. "Becoming" — Mi viaje a prueba y error para ponerme en forma y aprender
   a maquillarme. Celebramos los intentos fallidos con el contouring.

3. "Tra caos e ordine" — Montar muebles de IKEA por un lado, la paz mental
   de ordenar el armario por el otro.

Cada tarjeta con imagen 9:16 arriba (seeds miriam-expat, miriam-becoming,
miriam-ordine), título en Fraunces y el texto debajo.

CSS: grid de tres columnas, una en móvil. Sin sombras. Borde 1px --cemento.
Al pasar el ratón, el borde pasa a --pomodoro. Nada más.
```

✅ **Verificar:** tres tarjetas alineadas, imágenes verticales, sin sombras genéricas.

Después: `/clear`

---

**Tarea 7 — Consigli veloci**

`/add index.html css/styles.css`

```
Rellena #consigli. Esta es la sección más importante para el público objetivo.

Título h2: "Consigli veloci" y bajada: "Cinque minuti, zero perfezionismo."

Cinco bloques, cada uno con un título y una frase:
- Cucina — Comidas sanas pero reales, de las que se hacen entre semana.
- Palestra a casa — Cardio y fuerza sin material y sin excusas.
- Trucco — Rutinas de maquillaje que aguantan un día normal.
- Sonno e calma — Iniciación a la meditación y rutinas para dormir.
- Con i piccoli — Juegos con recién nacidos hasta los dos años.

Fondo de la sección en --basilico con el texto en --gesso, para separarla
visualmente del resto de la página.

CSS: grid que se adapte (auto-fit, minmax 240px). Sin imágenes aquí:
es una sección de texto y debe leerse rápido.
```

✅ **Verificar:** franja verde a lo ancho, cinco bloques legibles, se reordena al estrechar.

Después: `/clear`

---

**Tarea 8 — Ultimi video**

`/add index.html css/styles.css`

```
Rellena #video.

Título h2: "Ultimi video".

Seis contenedores 9:16 en cuadrícula, con imágenes
https://picsum.photos/seed/miriam-video-1/400/711 hasta miriam-video-6.
Cada uno con un pie de una línea en italiano, con humor, sobre un tema
distinto: IKEA, contouring, supermercado en domingo, meal prep,
reset del armario, cardio en casa.

Cada contenedor es un enlace <a> con href="#" y un
comentario HTML: <!-- TODO: sustituir por el enlace real al Reel o vídeo -->

CSS: grid de tres columnas en escritorio, dos en tablet, una en móvil.
El pie aparece debajo de la imagen, no encima.
```

✅ **Verificar:** seis tarjetas verticales en cuadrícula. Los TODO están en el HTML.

Después: `/clear`

---

**Tarea 9 — Prenota**

`/add index.html css/styles.css`

```
Rellena #prenota.

Título h2: "Prenota un caffè virtuale".

Un párrafo explicando qué es: una conversación de treinta minutos, para
hablar de mudanza a España, rutinas o lo que haga falta.

Un bloque destacado con borde 2px --inchiostro que contenga:
- El texto "Prenotazioni aperte a breve."
- Un comentario HTML:
  <!-- TODO: sustituir este bloque por el embed de Cal.com -->
  <!-- Instrucciones: cal.com > Event type > Embed > copiar el iframe -->

No inventes un calendario ni un formulario simulado. Si aún no funciona,
la página lo dice claramente.
```

✅ **Verificar:** se ve el bloque con el aviso. **No** debe haber ningún calendario falso.

Después: `/clear`

---

**Tarea 10 — Collaborazioni**

`/add index.html css/styles.css`

```
Rellena #collaborazioni. Esta sección es para marcas, no para seguidoras.
El tono aquí es más directo y menos autoirónico.

Título h2: "Collaborazioni".

Un párrafo breve sobre qué tipo de marcas encajan: cuidado personal,
cocina, hogar, bienestar, productos para bebés.

Un enlace destacado "Scarica il media kit" apuntando a
media-kit.pdf con un comentario:
<!-- TODO: añadir el PDF del media kit a la raíz del proyecto -->

Debajo, un formulario con campos nome, email, azienda y messaggio,
y un botón "Invia". El atributo action con
<!-- TODO: sustituir por el endpoint de Formspree -->

Fondo de la sección en --gesso, con un borde superior de 1px --cemento
para separarla.
```

✅ **Verificar:** el formulario se ve. Todavía no envía, y está bien.

Después: `/clear`

---

**Tarea 11 — Footer**

`/add index.html css/styles.css`

```
Rellena el footer.

- Enlaces a Instagram, YouTube y TikTok, en texto, sin iconos externos.
- La frase "Fatto con amore, caffè e un po' di caos."
- Línea legal: "© 2026 Miriam Grisonich · Barcellona"

CSS: fondo --inchiostro, texto --gesso, centrado, padding generoso.
```

✅ **Verificar:** franja oscura al final.

Después: `/clear`

---

### Fase 3 · Interacción

Solo lo que responde a una acción de la persona. Nada de animaciones automáticas.

---

**Tarea 12 — Menú móvil**

`/add index.html css/styles.css js/main.js`

```
Añade un botón hamburguesa al header, visible solo por debajo de 768px.
Al pulsarlo, el menú se despliega en vertical ocupando el ancho.
Al pulsar un enlace, se cierra.

JavaScript vanilla, sin librerías. El botón necesita aria-expanded
y aria-label.
```

✅ **Verificar:** en ventana estrecha aparece el botón y el menú abre y cierra.

---

**Tarea 13 — Enlace activo**

`/add index.html css/styles.css js/main.js`

```
Con IntersectionObserver, marca en el menú el enlace de la sección
que se está viendo. El enlace activo lleva la clase .attivo, con
un subrayado de 3px en --limone.
```

✅ **Verificar:** al bajar, el subrayado va cambiando de enlace.

---

**Tarea 14 — Validación del formulario**

`/add index.html css/styles.css js/main.js`

```
Valida el formulario de #collaborazioni al enviar: nome y messaggio no
vacíos, email con formato válido.

Los errores se muestran bajo cada campo, en --pomodoro, con texto que diga
qué falta y cómo arreglarlo. Nada de alertas del navegador.

Si todo es válido, muestra por ahora un mensaje de que el envío se activará
pronto. No simules un envío correcto.
```

✅ **Verificar:** enviar vacío muestra errores bajo los campos.

---

**Tarea 15 — Accesibilidad y remate**

`/add index.html css/styles.css`

```
Repasa el sitio entero:
- Todas las imágenes con alt descriptivo en italiano.
- Foco visible en todo lo interactivo: outline 2px --pomodoro con offset.
- Un enlace "salta al contenuto" al principio, oculto hasta recibir foco.
- Regla @media (prefers-reduced-motion: reduce) que anule las transiciones.
- ::selection con fondo --limone.
```

✅ **Verificar:** navega con Tab de arriba abajo. Debes ver siempre dónde estás.

---

### Fase 4 · Conectar lo real

Estas tres no son de Aider. Las haces tú.

---

**Tarea 16 — Cal.com**

1. Cuenta gratuita en cal.com
2. Crear un tipo de evento de 30 minutos
3. Conectar Stripe y ponerle precio
4. Embed → copiar el iframe
5. Pegarlo en `#prenota` sustituyendo el bloque de aviso

✅ **Verificar:** reserva una cita a ti mismo de principio a fin.

---

**Tarea 17 — Formulario**

1. Cuenta en Formspree, crear formulario
2. Copiar el endpoint
3. Ponerlo en el `action` del formulario
4. Cambiar el mensaje de éxito por uno real

✅ **Verificar:** envíate un mensaje y compruébalo en tu correo.

---

**Tarea 18 — Publicar**

1. Repo en GitHub, subir el proyecto
2. Settings → Pages → rama principal
3. Esperar unos minutos

✅ **Verificar:** la URL carga desde el móvil, con datos y sin wifi.

---

## Parte 4 — CONVENTIONS.md actualizado

Sustituye el archivo entero por esto:

```markdown
# Convenzioni del progetto

## Stack
- HTML + CSS + JavaScript vanilla. Sin frameworks, sin build, sin backend.
- Estructura: index.html, css/styles.css, js/main.js
- Todo el CSS en css/styles.css. Todo el JS en js/main.js.
  Nada embebido en el HTML.

## Rutas
- Siempre relativas y con barras normales: css/styles.css
- Nunca rutas absolutas ni barras invertidas.

## Colores (usar siempre las variables, nunca hex sueltos)
--gesso #FBFAF7 (fondo) · --inchiostro #1C2321 (texto)
--pomodoro #E24E38 (acento) · --basilico #3B6E4F (secundario)
--limone #F2C14E (resaltado) · --cemento #C9C5BC (líneas)

## Tipografía
- Fraunces: títulos, con font-variation-settings WONK 1, SOFT 20
- Instrument Sans: cuerpo, navegación, botones
- Caveat: solo anotaciones con clase .nota, máximo 8 en toda la página

## Reglas visuales
- Imágenes en proporción 9:16. Nunca panorámicas.
- Sin sombras. Los bordes son de 1px --cemento.
- Nada centrado salvo el footer.
- Sin mayúsculas sostenidas en etiquetas.
- Movimiento solo como respuesta a una acción. Nada de aparecer al scroll.

## Imágenes
- https://picsum.photos/seed/{semilla}/{ancho}/{alto}, semilla distinta cada una.
- Nunca busques imágenes en internet ni descargues archivos.

## Estilo de trabajo
- Cambios pequeños. No reescribas archivos enteros por un cambio parcial.
- Sin dependencias, sin CDNs, sin librerías. Solo Google Fonts.
- Nunca crees funcionalidad simulada. Si algo no funciona, ponlo por escrito
  en la página y deja un comentario TODO.
- Responde en español.

## Contenido
- Idioma de la web: italiano, con detalles en español donde el chiste lo pida.
- Tono: autoirónico, cercano, imperfecto a propósito, cero toxicidad estética.
- En la sección de colaboraciones el tono es directo y profesional.
```

---

## Parte 5 — Después

Cuando el P1 esté publicado, por orden de valor:

1. **Sustituir las imágenes de picsum por las suyas.** Es lo que más cambia la percepción del sitio.
2. **Enlazar los vídeos reales** en `#video`.
3. **Hacer el media kit.** Un PDF de una página: quién es, audiencia, datos de las redes, tres ejemplos de colaboraciones, tarifas y contacto. Los análisis de 2026 coinciden en que el error más común es listar características en vez de resultados: enséñales datos y ejemplos, no adjetivos.
4. **Separar `#collaborazioni` en su propia página** cuando quieras enviar a las marcas un enlace directo.
5. **Añadir blog** solo si la publicación de reportajes se vuelve regular. Ahí sí tiene sentido pasar a Astro con el contenido en Markdown.

Nada de esto es urgente. La web tiene que existir primero.
