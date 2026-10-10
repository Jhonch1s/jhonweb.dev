# Jhon Guimaraens — brief de web personal

## Estado

- Fecha: 2026-09-28.
- Etapa: portfolio publicado en `https://jhonweb.dev/` el 2026-10-01 mediante Cloudflare Pages (proyecto `jhonweb-git`, conectado a `Jhonch1s/jhonweb.dev`).
- Identidad elegida: Jhon Guimaraens como profesional independiente. «Jhon» puede usarse en el trato cercano.

## Perfil y oferta

- Formación declarada por Jhon: tecnólogo en informática y docente de informática recibido.
- Oferta actual declarada: landing pages, sitios institucionales de una o varias páginas (incluidos catálogos y galerías), tiendas online personalizadas y auditoría con propuesta de rediseño.
- La auditoría contempla interfaz, velocidad de carga y SEO; entrega un prototipo visual y documentación de los cambios propuestos y sus motivos. La implementación se cotiza aparte.
- Precio de la auditoría aún no definido para publicación; Jhon considera unos USD 100, sujeto a definir alcance y entregables.
- Posicionamiento provisorio: desarrollo web independiente, con la landing como puerta de entrada.
- Base geográfica: Paysandú. Zona de atención: todo Uruguay.
- Público prioritario: negocios que necesitan una landing; segmento más específico pendiente de precisar.

## Proyectos para evaluar en el portfolio

### Jair Toscanini Climatización Automotriz

- [Sitio publicado](https://jairtoscanini.com/), landing comercial para el taller de Paysandú.
- La página presenta áreas de servicio, equipamiento y trabajos reales; WhatsApp es la acción principal.
- Incorporado como primer proyecto del portfolio local con enlace al sitio en vivo. La tarjeta reutiliza el logo y la fotografía del hero guardados en `clientes/jair-toscanini/dist/assets/`.
- Jhon confirmó la autorización de Jair para mostrar su marca e imágenes en el portfolio.

### ForestAccess

- [Frontend](https://github.com/Jhonch1s/forest_access_front) y [backend](https://github.com/Jhonch1s/forest_access).
- Aplicación de gestión forestal; el repositorio muestra React/TypeScript/Vite, Spring Boot y PostgreSQL.
- Según Jhon, su complejidad principal está en las entidades y relaciones, el registro de actividades en tiempo real, resúmenes diarios, gestión de campos > rodales > parcelas, tratamientos y empleados. Jhon desarrolló la mayor parte de estas funciones.
- La gestión de cuadrillas forma parte del proyecto, pero no fue desarrollada por Jhon.
- Pendiente: precisar el estado actual y las capturas autorizadas.
- Demo estática React/Vite integrada en `demos/forest-access/` y publicada bajo `/demos/forest-access/`. Usa datos ficticios; también muestra gestión de cuadrillas, desarrollada por otro integrante del equipo.

### One Thread

- [Repositorio](https://github.com/MatiasParente/one-thread).
- Proyecto académico en equipo para centralizar y clasificar mensajes. El README acredita a Jhon como integrante.
- El proyecto integra Telegram, correo, n8n y Gemini; usa Laravel, React e Inertia.
- Aporte declarado por Jhon: principalmente frontend y backend, con menor participación en la integración de n8n.
- Pendiente: concretar las funcionalidades que implementó personalmente y el estado de la demostración pública.
- Demo estática React/Vite integrada en `demos/one-thread/` y publicada bajo `/demos/one-thread/`. Usa datos ficticios y no conecta Laravel, n8n ni Gemini.

### Exhume

- [Repositorio](https://github.com/Jhonch1s/Exhume.edu).
- Videojuego en desarrollo con Godot, diálogos y sistemas de interacción documentados.
- Según Jhon, el sistema de interacciones aspira a seguir reglas del juego de mesa Dungeons & Dragons. El juego usa pixel art en interfaces y escenarios.
- Proyecto en equipo. Según Jhon, hasta ahora ha aportado aproximadamente el 95 % del código; para la web, describir su participación como «desarrollé la mayor parte del código».
- Pendiente: precisar el material visual disponible y la contribución de diseño, arte y narrativa antes de atribuir esas áreas.

## Dirección inicial del sitio

- Presentar primero el servicio de landings; seguir con sitios institucionales, tiendas online y auditoría/rediseño. Usar los proyectos como evidencia de capacidad técnica.
- Mostrar catálogos y galerías dentro de los sitios institucionales, sin prometer funcionalidades ni precios no definidos.
- Ofrecer WhatsApp y correo para consultas, con WhatsApp como acción principal provisional.
- WhatsApp para publicar: +598 92 756 977.
- Correo publicado actualmente: jhoncforever@gmail.com. Jhon eligió `contacto@jhonweb.dev` como futura dirección pública; aún no hay buzón configurado.
- Distinguir proyectos académicos, proyectos en desarrollo y trabajos para clientes.
- Usar capturas reales o mockups identificados como tales; no atribuir a Jhon todo el trabajo de un equipo.
- Tecnología elegida: Astro con salida estática. El borrador actual se migró sin copiar el código de las plantillas de referencia.
- Referencias de dirección: estructura clara de Astro MultiPage Portfolio y presencia visual del nombre en Nikola; el contenido prioriza la oferta para negocios.
- Dirección de color a revisar: fondo carbón `#121413`, superficies `#1D211E`, texto marfil `#F3F4EE`, secundario `#B6BDB5` y un solo acento lima `#D9F067`.
- Identidad visual elegida: monograma `JG.` y puntos finales de los títulos principales alternando entre brillo y opacidad en intervalos iguales; el favicon alterna entre los mismos dos estados. Con movimiento reducido, todos permanecen fijos.
- Imagen social preparada en `public/social-preview.png` (1200 × 630). `jhonweb.dev` está registrado y publicado; `site` de Astro genera la URL pública, imagen social absoluta y canonical.
- SEO de la página principal: título, descripción y hero mencionan el desarrollo web en Paysandú y la atención a todo Uruguay. Las demos con datos ficticios llevan `noindex`; `robots.txt` y sitemap apuntan al dominio elegido.
- Preparar una sección «Sitios para clientes» que solo aparezca cuando haya trabajos concretos con publicación autorizada. Los logos de ForestAccess y One Thread están en `public/assets/` y se usan en sus tarjetas; el de Exhume sigue pendiente.
- Orden del contenido: inicio, servicios, presentación personal, proyectos y contacto. El saludo aparece cerca del comienzo.
- El símbolo de One Thread usa el SVG como máscara con el color de acento y sin fondo; se muestra más grande que antes.
- En escritorio, enfocar o pasar el cursor sobre «Probar demo» muestra una vista previa flotante de la demo; el clic abre la demo completa. En móvil, el enlace abre la demo directamente.
- Navegación visual por módulos de altura de pantalla con CSS scroll snap. El hero debe leerse completo al entrar; en pantallas estrechas se omite su gráfico decorativo y en pantallas bajas el encaje del scroll es flexible para no cortar contenido.
- Arquitectura acordada durante la ampliación: el menú superior navega entre Inicio, Servicios, Orientación, Proyectos y Contacto con transición lateral; la portada conserva sus módulos verticales y un índice lateral de esos bloques en escritorio. La presentación personal se integra en el inicio, sin una página ni un destino «Sobre mí» separados. El menú de páginas y el índice de bloques tienen funciones diferentes.
- Publicado en Cloudflare Pages desde la raíz del repositorio `Jhonch1s/jhonweb.dev`: rama `main`, comando `pnpm run build`, salida `dist`. El mismo build incorpora las demos de ForestAccess y One Thread. Cada push a `main` inicia un nuevo despliegue.

## Contenido futuro: cómo trabajo

- Jhon prefiere conversar en persona o por videollamada al iniciar un proyecto y mantener el contacto durante el trabajo. Considera que ese intercambio aporta cercanía y permite entender mejor las necesidades del cliente que una conversación limitada a mensajes. No presentar las reuniones presenciales como disponibles fuera de la zona donde pueda realizarlas.
- Suele entregar el código fuente del proyecto al cliente: forma parte de lo que este paga. Al redactar la web, distinguir el código y los archivos finales del sitio de posibles servicios de hosting o mantenimiento; respetar la entrega al completar el pago acordado según `negocio/REGLAS.md`.
- Jhon quiere ofrecer tanto pago único como cuotas mensuales para el desarrollo y, por separado, una modalidad mensual de servicio continuo (hosting/mantenimiento según se acuerde). Todavía falta definir las condiciones antes de publicarlas: seña, calendario de cuotas, alcance del servicio recurrente, propiedad y entrega del código, cancelación y migración. Distinguir claramente cuotas para pagar un proyecto de la cuota por un servicio continuo; no prometer condiciones ni precios aún.

## Presencia en Google y canales — 2026-10-02

- Jhon verificó la propiedad de dominio `jhonweb.dev` en Google Search Console desde su cuenta. El sitemap público `https://jhonweb.dev/sitemap.xml` responde 200 con XML válido y la portada, pero Search Console mostró «No se pudo obtener» tras el primer envío. Volver a revisar el estado; no dar por resuelta la indexación ni inferirla de una búsqueda `site:`.
- La portada publicada incluye datos estructurados `WebSite` y `Person` con el nombre profesional y el GitHub público (commit `fcd8ef0`); `robots.txt` permite el rastreo y anuncia el sitemap. Para GEO, priorizar contenido original y verificable sobre servicios y trabajos reales; no prometer presencia en respuestas de IA.
- [Perfil público de Google Maps](https://maps.app.goo.gl/TppSGanwzt9pcAgZ6): aparece como «Jhon Guimaraens», con `jhonweb.dev` y el teléfono 092 756 977 correctos. La categoría visible es «Empresa de software»; evaluar una categoría de diseño de sitios web si Google la ofrece.
- **Privacidad pendiente:** Maps muestra una dirección exacta y la acción «Cómo llegar». No guardar esa dirección en este repositorio. Jhon trabaja desde casa y visita clientes en Paysandú; si no mantiene un local con señalización permanente y atención durante el horario publicado, configurar la ficha como negocio de área de servicio y ocultar la dirección pública. Confirmar el cambio desde una vista pública.
- Horario declarado por Jhon: lunes a viernes 08:00–20:00, sábado 12:30–20:00 y domingo cerrado. La ficha pública mostraba el sábado 00:00–20:00; corregirlo. Atención presencial en Paysandú y a distancia para todo Uruguay. Falta precisar si «todo Paysandú» significa ciudad o departamento antes de ampliar áreas de servicio.
- La descripción de negocio fue redactada para que Jhon la cargue; no se confirmó si ya figura públicamente. Tampoco se confirmó el estado de verificación de la ficha. Cuando corresponda, pedir valoraciones solo a clientes reales, sin incentivos.
- Facebook: Jhon decidió comenzar una presencia profesional; se preparó un prompt para un chat dedicado. Aún no se proporcionó una página pública para enlazar desde la web.
- Correo: dirección elegida `contacto@jhonweb.dev`, pendiente de configurar un **buzón completo** para enviar y recibir. Comparar proveedores y definir titularidad/coste; configurar los registros MX y de autenticación que indique el elegido, sin alterar los CNAME de la web ni el TXT de Search Console. Cambiar el `mailto:` del sitio solo después de comprobar recepción y envío.
- Jhon realiza personalmente los pasos en Google, Cloudflare y otras cuentas; el asistente solo guía con la información que él comparte. No modificar cuentas ni publicar cambios por iniciativa propia.

## Pendientes actuales

- Definir el segmento de negocio prioritario.
- Confirmar perfiles públicos adicionales a enlazar, una vez creados y revisados.
- Seleccionar proyectos y verificar aporte personal, estado, capturas y autorización de publicación.
