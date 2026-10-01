# Checklist de publicación — Jhon Guimaraens

Revisión del 2026-10-01. Publicado en `https://jhonweb.dev/` con Cloudflare Pages (proyecto `jhonweb`).

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
- [x] No se usa schema por ahora; no hay datos adicionales confirmados que lo justifiquen.
- [x] Revisión inicial de peso completada: portada estática y demos cargadas por separado. La demo más pesada es One Thread (JS de 622 KB antes de compresión, 184 KB con gzip).

## Dominio y entrega

- [x] Jhon registró `jhonweb.dev` en su cuenta de Cloudflare; el dominio figura Active.
- [x] DNS inspeccionado: CNAME proxied del dominio raíz y de `www` hacia `jhonweb.pages.dev`; no hay registros MX ni correo del dominio configurado.
- [x] Cloudflare Pages marca el dominio raíz Active con SSL enabled. `http://jhonweb.dev/` redirige a HTTPS y `www.jhonweb.dev` redirige con 301 a la raíz, conservando ruta y parámetros.
- [x] Copia del código fuente y de `dist` guardada en `backups/` el 2026-10-01.
- [x] Actualizaciones: compilar con `pnpm run build` en `clientes/jhon-guimaraens` y subir el contenido de `dist/` como nueva implementación Direct Upload del proyecto Pages `jhonweb`.
- [x] Publicado el 2026-10-01: `https://jhonweb.dev/`; demos en `/demos/forest-access/` y `/demos/one-thread/`.

