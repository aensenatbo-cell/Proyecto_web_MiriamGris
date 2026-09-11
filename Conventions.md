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