// El orden visual del menú, incluido Contacto, determina el sentido del slide.
// No usamos el historial: volver a una página situada a la derecha también
// debe entrar desde la derecha, aunque el navegador esté retrocediendo.
document.addEventListener('astro:before-preparation', (event) => {
  if (event.from.pathname === event.to.pathname) return;

  const pages = [...document.querySelectorAll('.site-nav a, .header-contact')]
    .map((link) => new URL(link.href).pathname);
  const from = pages.indexOf(event.from.pathname);
  const to = pages.indexOf(event.to.pathname);
  if (from < 0 || to < 0) return;

  event.direction = to > from ? 'forward' : 'back';
});

// El router cambia de documento sin una carga completa; aseguramos que los
// enlaces a secciones de otra página terminen en su sección de destino.
document.addEventListener('astro:page-load', () => {
  if (!location.hash) return;
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (!target) return;
  target.scrollIntoView({ behavior: 'instant', block: 'start' });
});
