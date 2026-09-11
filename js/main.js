document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
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

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

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
  const formElement = document.getElementById('collaborazioniForm');
  if (formElement && window.formspree) {
    window.formspree('initForm', { 
      formElement: formElement, 
      formId: 'xqpknnyr',
      onSuccess: (form) => {
        // The library automatically handles showing the success message
        // via the data-fs-success attribute.
        // We can add custom logic here if needed, e.g., logging.
        console.log('Form submitted successfully!');
      },
      onError: (form, errors) => {
        // The library automatically handles showing error messages
        // via the data-fs-error attributes.
        console.error('Form submission failed:', errors);
      }
    });
  } else if (formElement) {
    // Fallback if Formspree script fails to load
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMessage = document.getElementById('formSuccessMessage');
      if (successMessage) {
        successMessage.textContent = "Lo sentimos, el servicio de formularios no está disponible en este momento. Por favor, inténtalo de nuevo más tarde.";
        successMessage.style.display = 'block';
        successMessage.style.color = 'var(--pomodoro)';
      }
    });
  }
});
