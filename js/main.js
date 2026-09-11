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

  // Form validation for collaborazioniForm
  const form = document.getElementById('collaborazioniForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear previous errors
      document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
      const feedback = document.getElementById('form-feedback');
      if (feedback) {
        feedback.setAttribute('hidden', '');
      }

      const nome = form.querySelector('#nome').value.trim();
      const email = form.querySelector('#email').value.trim();
      const messaggio = form.querySelector('#messaggio').value.trim();

      let isValid = true;

      // Validate nome
      if (!nome) {
        document.getElementById('error-nome').textContent = 'Il campo nome è obbligatorio.';
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        document.getElementById('error-email').textContent = 'Inserisci un indirizzo email valido.';
        isValid = false;
      }

      // Validate messaggio
      if (!messaggio) {
        document.getElementById('error-messaggio').textContent = 'Il campo messaggio è obbligatorio.';
        isValid = false;
      }

      if (isValid) {
        // Show feedback message
        if (feedback) {
          feedback.textContent = 'Grazie! La funzione di invio sarà attiva a breve.';
          feedback.removeAttribute('hidden');
        }
      }
    });
  }

  // Blog filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const blogCards = document.querySelectorAll('.blog-card');

  if (filterBtns.length > 0 && blogCards.length > 0) {
      filterBtns.forEach(btn => {
          btn.addEventListener('click', () => {
              // Remove active class from all buttons
              filterBtns.forEach(b => b.classList.remove('active'));
              // Add active class to clicked button
              btn.classList.add('active');

              const filterValue = btn.getAttribute('data-filter');

              blogCards.forEach(card => {
                  if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                      card.classList.remove('hidden');
                  } else {
                      card.classList.add('hidden');
                  }
              });
          });
      });
  }
});
