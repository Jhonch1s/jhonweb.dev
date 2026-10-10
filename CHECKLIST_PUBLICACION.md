# Checklist de publicación — Jhon Guimaraens

Revisión del 2026-10-01; actualización SEO del 2026-10-02. Publicado en `https://jhonweb.dev/` con Cloudflare Pages (proyecto `jhonweb-git`, conectado a GitHub).

## Contenido

- [x] Nombre, servicios y zona verificados. No se publican precios, horarios ni mapa.
- [x] WhatsApp, correo y GitHub coinciden con los datos proporcionados por Jhon.
- [x] No quedan textos de muestra; las demos identifican sus datos como ficticios.
- [x] Jhon pidió pasar a publicación y confirmó autorización para exhibir la marca e imagen de Jair.

## Experiencia

- [x] Revisado en móvil y escritorio en la versión compilada.
- [x] Enlaces y botones tienen foco visible; existe enlace para saltar al contenido.
- [x] Contraste y tamaños de texto revisados visualmente.
- [x] No hay formularios.
- [x] Navegación principal y enlaces revisados; la portada y ambas demos cargan desde el dominio público sin errores de consola. WhatsApp, correo, repositorios y sitio de Jair apuntan a las direcciones proporcionadas.

## SEO y rendimiento

- [x] `title` y meta description de la portada configurados.
- [x] Un `h1` y jerarquía semántica revisados.
- [x] Canonical, favicon e imagen social absoluta configurados para `jhonweb.dev`.
- [x] `robots.txt` y sitemap configurados para la portada; las demos llevan `noindex`.
- [x] Imágenes dimensionadas, comprimidas y con `alt` según su función decorativa o informativa.
- [x] Datos estructurados `WebSite` y `Person` basados en el nombre, profesión y GitHub públicos; JSON-LD comprobado en la salida compilada.
- [x] Revisión inicial de peso completada: portada estática y demos cargadas por separado. La demo más pesada es One Thread (JS de 622 KB antes de compresión, 184 KB con gzip).

## Dominio y entrega

- [x] Jhon registró `jhonweb.dev` en su cuenta de Cloudflare; el dominio figura Active.
- [x] DNS inspeccionado: CNAME proxied del dominio raíz y de `www` hacia `jhonweb-git.pages.dev`; no hay registros MX ni correo del dominio configurado.
- [x] Cloudflare Pages marca el dominio raíz Active con SSL enabled. `http://jhonweb.dev/` redirige a HTTPS y `www.jhonweb.dev` redirige con 301 a la raíz, conservando ruta y parámetros.
- [x] Copia del código fuente y de `dist` guardada en `backups/` el 2026-10-01.
- [x] Actualizaciones: hacer push a `main` en `Jhonch1s/jhonweb.dev`; Cloudflare instala dependencias, ejecuta `pnpm run build` y publica `dist/` automáticamente.
- [x] Jhon confirmó la verificación de `jhonweb.dev` en Google Search Console el 2026-10-02.
- [x] Publicado el 2026-10-01: `https://jhonweb.dev/`; demos en `/demos/forest-access/` y `/demos/one-thread/`.

## Ampliación a cinco páginas — revisión previa al push del 2026-10-10

- [x] Publicación solicitada expresamente por Jhon en esta conversación. Nombre, oferta, zona y canales se cotejaron con `BRIEF.md`; no se publican precios ni horarios.
- [x] Compilados Astro y ambas demos. El build generó portada, Servicios, Orientación, Proyectos y Contacto; cada página tiene título y descripción únicos, un H1 y canonical propio.
- [x] El sitemap del build contiene esas cinco URL canónicas y `robots.txt` señala el sitemap. El sitemap público anterior aún contiene solo la portada hasta que se despliegue.
- [x] Comprobadas 74 referencias internas del build, sin recursos ni anclas faltantes. Las imágenes HTML tienen dimensiones y atributo `alt`.
- [x] Portada y Servicios revisados en escritorio y en móvil de 390 px, sin desbordamiento horizontal en la vista móvil. La guía de orientación tiene controles obligatorios y resultado en el navegador.
- [x] La portada incluye JSON-LD `WebSite` y `Person` válido como JSON. HTTP redirige 301 a HTTPS y HTTPS responde 200 antes del despliegue. La versión anterior permanece en Git (`fcd8ef0`).
- [ ] Pendiente de revisión posterior: navegación por teclado y consola en las cinco páginas, medición de contraste, Rich Results Test y Core Web Vitals de campo. La demo One Thread mantiene un bundle de 622 kB antes de compresión; el logo PNG de ForestAccess pesa 413 kB.
- [x] Despliegue público comprobado el 2026-10-10: el sitemap sirve las cinco URL y `/servicios/` muestra su nuevo título. No se modificaron DNS, correo ni cuentas de Google.

