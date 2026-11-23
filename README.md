
# Costa Rica Global Hub

## Descripción
Proyecto académico de Diseño Web 1 diseñado por Gerald Fernandez Villalta 

El sitio presenta información sobre sectores productivos, exportaciones, inversión, innovación y tecnología en Costa Rica.

En el segundo avance se mejoró el diseño del proyecto utilizando Mobile First y Media Queries para adaptar las páginas a celulares, tabletas y computadoras.

Se conservó la estructura del Avance 1 y se mejoraron los estilos y la navegación.

## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript

El proyecto utiliza estilos propios, sin Bootstrap ni otros frameworks CSS.

## Páginas del proyecto
- index.html: Página principal.
- sectores.html: Sectores productivos.
- exportaciones.html: Exportaciones.
- inversion.html: Inversión.
- hubs.html: Centros de innovación.
- landing.html: Costa Rica Tech Hub.

## Diseño responsive

Se utilizó la metodología Mobile First, comenzando con los estilos para celulares y adaptando el contenido a pantallas más grandes.

Se utilizaron CSS Grid, Flexbox, porcentajes, unidades REM y Media Queries.

### Breakpoints utilizados

- Móvil: menos de 576 px.
- Tableta: desde 576 px hasta 991 px.
- Escritorio: desde 992 px en adelante.

Se eligieron estos puntos de ruptura para adaptar las columnas, imágenes, textos y navegación según el espacio disponible.

## Problemas encontrados y soluciones

Durante la adaptación responsive se encontraron algunos problemas de distribución y tamaños.

- Algunas tarjetas dejaban espacios vacíos en pantallas grandes.
- Las imágenes necesitaban ajustarse al ancho disponible.
- Algunos botones eran demasiado grandes en celulares.
- La navegación necesitaba adaptarse a pantallas pequeñas.
- Las columnas de texto e imágenes necesitaban reorganizarse.

Estos problemas se corrigieron mediante cambios en CSS Grid, Flexbox y Media Queries.

## Cambios en CSS Grid

Se modificó la distribución de las tarjetas para aprovechar mejor el espacio disponible.

- Móvil: una tarjeta por fila.
- Tableta: dos tarjetas por fila.
- Escritorio: cuatro tarjetas por fila.

Esta distribución se utiliza en las secciones de tarjetas del proyecto.

## Cambios en Flexbox

Se utilizó Flexbox para organizar diferentes secciones de texto, imágenes y navegación.

En celulares, las columnas se muestran verticalmente.

En tabletas y computadoras, las columnas pueden colocarse una al lado de la otra.

También se ajustaron los espacios y la alineación de los elementos.

## Navegación responsive

El sitio cuenta con un menú de navegación entre las diferentes páginas.

En dispositivos móviles se utiliza un menú hamburguesa que abre y cierra mediante JavaScript.

En escritorio se muestra el menú de navegación completo.

La página actual permanece resaltada en verde para facilitar la navegación.

## Imágenes y tipografía

Las imágenes se adaptaron para evitar que se salgan de sus contenedores.

Se utilizaron fotografías en formatos WebP, JPG y PNG.

También se ajustaron los tamaños de los títulos, textos y espacios para mejorar la lectura en diferentes dispositivos.

## Página Costa Rica Tech Hub

La página landing.html presenta información sobre innovación, talento humano, áreas estratégicas, historias de éxito y sostenibilidad.

Incluye:

- Diseño responsive.
- Tarjetas con fotografías.
- Iconos SVG.
- Preguntas frecuentes interactivas.
- Botones de navegación.
- Botón flotante de WhatsApp.
- Botón ScrollTop para regresar al inicio.
- Efecto visual parallax.
- Animaciones y transiciones CSS.

## JavaScript

Se utiliza JavaScript para controlar las principales interacciones del sitio.

- Apertura y cierre del menú hamburguesa.
- Funcionamiento de preguntas frecuentes.
- Botón ScrollTop.
- Interacciones de navegación.

## Animaciones y transiciones

Se agregaron transiciones suaves en botones, tarjetas y elementos de navegación.

También se utilizó @keyframes para animar la entrada del título principal de la landing desde la izquierda.

Las animaciones se mantienen sencillas para no afectar la lectura del contenido.

## Pruebas responsive

Se realizaron pruebas utilizando Google Chrome DevTools en modo dispositivo.

Los tamaños revisados fueron:

- 320 px: celular pequeño.
- 375 px: celular.
- 768 px: tableta.
- 1024 px: escritorio pequeño.
- 1440 px: escritorio grande.

Durante las pruebas se revisaron:

- Menú de navegación.
- Distribución de tarjetas.
- Imágenes responsivas.
- Textos y botones.
- Preguntas frecuentes.
- Botón de WhatsApp.
- Botón ScrollTop.
- Animaciones y transiciones.

Se realizaron correcciones en los elementos que presentaban problemas de tamaño o distribución.

## Organización de archivos

- css/: Archivos de estilos.
- js/: Archivos JavaScript.
- img/: Fotografías e imágenes.
- svg/: Iconos utilizados.
- wireframes/: Diseños de referencia.

## Validación

Se revisó el funcionamiento de los enlaces, las imágenes, los botones, el menú hamburguesa y las preguntas frecuentes.

También se verificó el diseño responsive mediante Google Chrome DevTools.

## Cómo abrir el proyecto

1. Abrir la carpeta del proyecto.
2. Buscar el archivo index.html.
3. Abrir index.html en un navegador.
4. Utilizar el menú para navegar entre las páginas.

## Sitio web publicado

https://gfernandezv-bit.github.io/Costa-Rica-global-hub/

## Autor

Gerald Fernandez Villalta

Universidad CENFOTEC

Curso: Diseño Web 1

Año: 2026
