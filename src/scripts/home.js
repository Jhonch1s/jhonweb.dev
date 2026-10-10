let homeListeners;
let faviconInterval;
let sectionObserver;

function cleanUpHome() {
  homeListeners?.abort();
  homeListeners = undefined;
  clearInterval(faviconInterval);
  faviconInterval = undefined;
  sectionObserver?.disconnect();
  sectionObserver = undefined;
}

function initHome() {
  cleanUpHome();
  if (!document.querySelector('.hero')) return;

  document.documentElement.classList.add('has-js');
  homeListeners = new AbortController();
  const { signal } = homeListeners;
  const railLinks = [...document.querySelectorAll('.section-rail a')];
  if (railLinks.length) {
    const targets = railLinks.map((link) => document.querySelector(link.getAttribute('href')));
    const visible = new Set();
    const setCurrent = (target) => {
      railLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };
    setCurrent(document.querySelector(location.hash && railLinks.some((link) => link.getAttribute('href') === location.hash) ? location.hash : '#inicio'));
    railLinks.forEach((link, index) => link.addEventListener('click', (event) => {
      event.preventDefault();
      history.pushState(null, '', link.getAttribute('href'));
      targets[index].scrollIntoView({ behavior: 'instant', block: 'start' });
      setCurrent(targets[index]);
    }, { signal }));
    window.addEventListener('popstate', () => {
      if (location.pathname !== '/') return;
      const index = railLinks.findIndex((link) => link.getAttribute('href') === location.hash);
      const target = targets[index < 0 ? 0 : index];
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
      setCurrent(target);
    }, { signal });
    sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      const current = targets.findLast((target) => visible.has(target));
      if (current) setCurrent(current);
    }, { rootMargin: '-45% 0px -45% 0px' });
    targets.forEach((target) => sectionObserver.observe(target));
  }
  const favicon = document.querySelector('link[rel="icon"]');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const updateFaviconMotion = () => {
    clearInterval(faviconInterval);
    favicon.href = '/favicon.svg';
    if (reducedMotion.matches) return;
    let bright = true;
    faviconInterval = setInterval(() => {
      bright = !bright;
      favicon.href = bright ? '/favicon.svg' : '/favicon-dim.svg';
    }, 750);
  };
  reducedMotion.addEventListener('change', updateFaviconMotion, { signal });
  updateFaviconMotion();

  const preview = document.getElementById('demo-preview');
  const frame = preview.querySelector('iframe');
  const title = preview.querySelector('.demo-preview-title');
  const wideScreen = matchMedia('(min-width: 900px)');
  const hidePreview = () => preview.classList.remove('is-visible');
  wideScreen.addEventListener('change', hidePreview, { signal });

  for (const link of document.querySelectorAll('.project-demo-link')) {
    const showPreview = () => {
      if (!wideScreen.matches) return;
      title.textContent = link.closest('.project').querySelector('h3').textContent;
      if (frame.src !== link.href) frame.src = link.href;
      preview.classList.add('is-visible');
    };

    link.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'mouse') showPreview();
    }, { signal });
    link.addEventListener('pointerleave', hidePreview, { signal });
    link.addEventListener('focus', showPreview, { signal });
    link.addEventListener('blur', hidePreview, { signal });
    link.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') hidePreview();
    }, { signal });
  }

  for (const button of document.querySelectorAll('.project-toggle')) {
    button.addEventListener('click', () => {
      const project = button.closest('.project');
      const expanded = project.classList.toggle('is-detail');
      button.setAttribute('aria-expanded', String(expanded));
      button.setAttribute('aria-label', expanded
        ? `Volver al resumen de ${project.querySelector('h3').textContent}`
        : (button.dataset.expandLabel || `Ver mi aporte en ${project.querySelector('h3').textContent}`));
      for (const [index, panel] of project.querySelectorAll('.project-panel').entries()) {
        const hidden = expanded ? index === 0 : index === 1;
        panel.inert = hidden;
        panel.setAttribute('aria-hidden', String(hidden));
      }
    }, { signal });
  }

  const frost = document.querySelector('.jair-frost');
  frost.addEventListener('click', () => {
    frost.classList.add('is-clearing');
    frost.disabled = true;
  }, { signal });
}

document.addEventListener('astro:page-load', initHome);
document.addEventListener('astro:before-swap', cleanUpHome);
