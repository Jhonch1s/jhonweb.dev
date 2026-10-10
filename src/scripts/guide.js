const options = {
  landing: {
    title: 'Una landing page',
    reason: 'Tenés una propuesta principal y querés presentarla con claridad para facilitar las consultas.',
    href: '/servicios/#landing',
  },
  institucional: {
    title: 'Un sitio institucional',
    reason: 'Necesitás espacio para explicar varias áreas, servicios o partes de tu negocio.',
    href: '/servicios/#institucional',
  },
  catalogo: {
    title: 'Un catálogo',
    reason: 'Querés que la gente explore productos o trabajos y luego te consulte, sin comprar directamente en la web.',
    href: '/servicios/#catalogo',
  },
  tienda: {
    title: 'Una tienda online',
    reason: 'Querés que tus clientes puedan comprar en línea. Los pagos, envíos y demás funciones se definen según cómo trabajás.',
    href: '/servicios/#tienda',
  },
  auditoria: {
    title: 'Una auditoría y propuesta de rediseño',
    reason: 'Ya tenés una web y querés revisar qué conviene mejorar antes de decidir cómo implementar los cambios.',
    href: '/servicios/#redisenio',
  },
};

function initGuide() {
  const form = document.getElementById('site-guide');
  if (!form) return;

  const result = document.getElementById('guide-result');
  form.addEventListener('change', () => { result.hidden = true; });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answers = new FormData(form);
    const goal = answers.get('objetivo');
    const content = answers.get('contenido');
    const key = goal === 'mejorar' ? 'auditoria'
      : goal === 'vender' ? 'tienda'
      : goal === 'mostrar' ? 'catalogo'
      : content === 'varios' ? 'institucional' : 'landing';
    const choice = options[key];

    document.getElementById('result-title').textContent = choice.title;
    document.getElementById('result-reason').textContent = choice.reason;
    document.getElementById('result-service').href = choice.href;
    const message = `Hola Jhon, completé la guía de tu web. Busco ${choice.title.toLowerCase()}. Mi objetivo es: ${form.querySelector('input[name="objetivo"]:checked').parentElement.textContent.trim()}. Me gustaría conversar sobre mi proyecto.`;
    document.getElementById('result-contact').href = `https://wa.me/59892756977?text=${encodeURIComponent(message)}`;
    result.hidden = false;
    result.focus();
  });
}

document.addEventListener('astro:page-load', initGuide);
