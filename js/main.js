document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.header__menu-toggle');
  const nav = document.querySelector('.header__nav');
  const links = nav ? nav.querySelectorAll('a') : [];

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isOpen);
      nav.classList.toggle('is-open');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  // Active link highlighting using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          link.classList.remove('attivo');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('attivo');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Initialize Cal.com embed
  const calEmbed = document.getElementById('cal-embed');
  if (calEmbed && window.Cal) {
    window.Cal('init', { origin: 'https://cal.com' });
    window.Cal('inline', {
      elementOrSelector: '#cal-embed',
      calLink: 'amador-ensenat-miriam-grisonich-ve3fgl'
    });
  }

  // Initialize Formspree form
  if (window.formspree) {
    window.formspree('initForm', { 
      formElement: '#collaborazioniForm', 
      formId: 'xqpknnyr' 
    });
  }
});
