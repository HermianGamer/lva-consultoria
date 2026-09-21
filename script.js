// ==========================================================================
// LVA Consultoría — Menú móvil y utilidades globales
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cierra el menú al hacer clic en un enlace (útil en móvil)
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('is-open')) {
          mainNav.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
          document.body.style.overflow = '';
        }
      });
    });

    // Cierra el menú con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });

    // Si la ventana crece a escritorio, asegura que el menú quede cerrado/reseteado
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
