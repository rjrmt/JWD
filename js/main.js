(function () {
  'use strict';

  const COURSES = {
    'concealed-carry': {
      title: 'Concealed Carry Course',
      price: '$125',
      description: 'Firearm safety, storage, and responsibility — carry with confidence.',
      emailSubject: 'Register for Concealed Carry Course ($125)',
    },
    'private-lessons': {
      title: 'Private Lessons',
      price: '$65',
      description: 'One-on-one coaching. Your pace, your goals, your schedule.',
      emailSubject: 'Register for Private Lessons ($65/session)',
    },
    'gun-safety': {
      title: 'Gun Safety Seminar',
      price: '$200',
      description: 'Learn the rules. Build safe habits. Solid foundation guaranteed.',
      emailSubject: 'Register for Gun Safety Seminar ($200)',
    },
  };

  const header = document.querySelector('.header');
  const navToggle = document.getElementById('navToggle');
  const navDrawer = document.getElementById('navDrawer');
  let navOpen = false;

  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (navToggle && navDrawer) {
    const closeNav = () => {
      navOpen = false;
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
      navDrawer.classList.remove('open');
      document.body.style.overflow = '';
    };

    navToggle.addEventListener('click', () => {
      navOpen = !navOpen;
      navToggle.setAttribute('aria-expanded', String(navOpen));
      navToggle.setAttribute('aria-label', navOpen ? 'Close menu' : 'Open menu');
      navDrawer.classList.toggle('open', navOpen);
      document.body.style.overflow = navOpen ? 'hidden' : '';
    });

    navDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navOpen) closeNav();
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  const registerModal = document.getElementById('registerModal');
  const modalTitle = document.getElementById('registerModalTitle');
  const modalPrice = document.getElementById('registerModalPrice');
  const modalDesc = document.getElementById('registerModalDesc');
  const modalEmail = document.getElementById('registerModalEmail');
  const modalFull = document.getElementById('registerModalFull');
  let modalOpen = false;
  let lastFocused = null;

  const getCourse = (id) => COURSES[id] || COURSES['concealed-carry'];

  const openRegisterModal = (courseId) => {
    if (!registerModal) return;
    const course = getCourse(courseId);
    if (modalTitle) modalTitle.textContent = course.title;
    if (modalPrice) modalPrice.textContent = course.price;
    if (modalDesc) modalDesc.textContent = course.description;
    if (modalEmail) {
      modalEmail.href = `mailto:Info@justwrightdefense.com?subject=${encodeURIComponent(course.emailSubject)}`;
    }
    if (modalFull) {
      modalFull.href = `register.html?course=${encodeURIComponent(courseId)}`;
    }
    lastFocused = document.activeElement;
    registerModal.hidden = false;
    modalOpen = true;
    document.body.style.overflow = 'hidden';
    const closeBtn = registerModal.querySelector('.register-modal-close');
    if (closeBtn) closeBtn.focus();
  };

  const closeRegisterModal = () => {
    if (!registerModal || !modalOpen) return;
    registerModal.hidden = true;
    modalOpen = false;
    if (!navOpen) document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  };

  document.querySelectorAll('[data-register-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openRegisterModal(btn.getAttribute('data-course') || 'concealed-carry');
    });
  });

  if (registerModal) {
    registerModal.querySelectorAll('[data-register-close]').forEach((el) => {
      el.addEventListener('click', closeRegisterModal);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOpen) closeRegisterModal();
    });
  }

  const courseParam = new URLSearchParams(window.location.search).get('course');
  const coursePicker = document.querySelector('.course-picker');
  if (coursePicker && courseParam && COURSES[courseParam]) {
    const selected = coursePicker.querySelector(`[data-course="${courseParam}"]`);
    if (selected) {
      selected.classList.add('is-selected');
      selected.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }
})();
