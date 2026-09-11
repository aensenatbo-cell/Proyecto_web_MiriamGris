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

  // Form validation for #collaborazioni
  const form = document.getElementById('collaborazioniForm');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const messaggioInput = document.getElementById('messaggio');
  const nomeError = document.getElementById('nomeError');
  const emailError = document.getElementById('emailError');
  const messaggioError = document.getElementById('messaggioError');
  const successMessage = document.getElementById('formSuccessMessage');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Reset errors
      nomeError.textContent = '';
      emailError.textContent = '';
      messaggioError.textContent = '';
      successMessage.style.display = 'none';

      // Validate nome
      if (!nomeInput.value.trim()) {
        nomeError.textContent = 'Il nome è obbligatorio.';
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Inserisci un\'email valida.';
        isValid = false;
      }

      // Validate messaggio
      if (!messaggioInput.value.trim()) {
        messaggioError.textContent = 'Il messaggio è obbligatorio.';
        isValid = false;
      }

      if (isValid) {
        successMessage.style.display = 'block';
        form.reset();
      }
    });
  }
});
