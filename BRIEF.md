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
- Correo para publicar: jhoncforever@gmail.com. Jhon considera cambiarlo por una dirección con su dominio cuando lo tenga.
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
- Publicado en Cloudflare Pages desde la raíz del repositorio `Jhonch1s/jhonweb.dev`: rama `main`, comando `pnpm run build`, salida `dist`. El mismo build incorpora las demos de ForestAccess y One Thread. Cada push a `main` inicia un nuevo despliegue.

## Pendiente para pasar a contenido y diseño

- Definir el segmento de negocio prioritario.
- Confirmar perfiles públicos adicionales a enlazar.
- Seleccionar proyectos y verificar aporte personal, estado, capturas y autorización de publicación.
- Confirmar si hay una landing propia o de cliente que pueda exhibirse.
- Elegir dirección visual, dominio y modalidad de hosting.
