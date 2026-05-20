document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const iconMenu = mobileMenuBtn?.querySelector('.icon-menu');
  const iconClose = mobileMenuBtn?.querySelector('.icon-close');

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenuDrawer.classList.contains('open');
      if (isOpen) {
        mobileMenuDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        if (iconMenu) iconMenu.style.display = 'block';
        if (iconClose) iconClose.style.display = 'none';
      } else {
        mobileMenuDrawer.classList.add('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        if (iconMenu) iconMenu.style.display = 'none';
        if (iconClose) iconClose.style.display = 'block';
      }
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenuDrawer.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        if (iconMenu) iconMenu.style.display = 'block';
        if (iconClose) iconClose.style.display = 'none';
      });
    });
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing once animated
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all elements to animate
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));

  // Navbar background change on scroll
  const navbar = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(233, 240, 236, 0.95)';
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
    } else {
      navbar.style.background = 'rgba(233, 240, 236, 0.9)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Simple interactions for feature tabs (visual mockups)
  const docTabs = document.querySelectorAll('.doc-tab-item');
  docTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      docTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // ── Rotating Hero Sub-headline ──
  const rotatingVariants = [
    'For smoother intake.',
    'For fewer missed calls.',
    'To reduce no-shows.',
    'For lower front-desk load.',
    'For faster patient flow.'
  ];
  let currentVariant = 0;
  const rotatingText = document.getElementById('rotating-text');
  const progressBar = document.getElementById('rotating-progress-bar');
  const CYCLE_MS = 3500;

  function startProgressBar() {
    if (!progressBar) return;
    progressBar.classList.remove('animate');
    // Force reflow so the class removal takes effect before re-adding
    void progressBar.offsetWidth;
    progressBar.classList.add('animate');
  }

  function rotateHeadline() {
    if (!rotatingText) return;

    // Exit animation
    rotatingText.classList.add('exit');

    setTimeout(() => {
      currentVariant = (currentVariant + 1) % rotatingVariants.length;
      rotatingText.textContent = rotatingVariants[currentVariant];

      // Prepare enter
      rotatingText.classList.remove('exit');
      rotatingText.classList.add('enter');

      // Force reflow
      void rotatingText.offsetWidth;

      // Enter animation
      rotatingText.classList.remove('enter');

      // Restart progress
      startProgressBar();
    }, 450);
  }

  // Kick off the first progress bar
  startProgressBar();

  let rotationInterval = setInterval(rotateHeadline, CYCLE_MS);

  // Pause rotation when tab is hidden, resume when visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(rotationInterval);
    } else {
      startProgressBar();
      rotationInterval = setInterval(rotateHeadline, CYCLE_MS);
    }
  });

  // ── Breeze AI — Proactive Voice Companion ──
  const breezeToast = document.getElementById('breezeToast');
  const breezeToastClose = document.getElementById('breezeToastClose');
  const breezeToastMsg = document.getElementById('breezeToastMsg');
  const breezeTalkBtn = document.getElementById('breezeTalkBtn');
  const breezeMicIcon = document.getElementById('breezeMicIcon');
  const breezePanel = document.getElementById('breezePanel');
  const breezeClose = document.getElementById('breezeClose');
  const breezeEndCall = document.getElementById('breezeEndCall');
  const capabilitiesSection = document.getElementById('capabilities');

  let toastDismissed = false;
  let toastShown = false;
  let contextUpdated = false;

  // Auto-show toast after 3 seconds
  setTimeout(() => {
    if (!toastDismissed && breezeToast) {
      breezeToast.classList.add('visible');
      toastShown = true;
    }
  }, 3000);

  // Update toast message when user scrolls to Section 4
  if (capabilitiesSection && breezeToastMsg) {
    const capObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !contextUpdated && toastShown && !toastDismissed) {
          breezeToastMsg.textContent = "Want to hear me in action? I'm the voice behind InnovateHealth's front desk.";
          contextUpdated = true;
        }
      });
    }, { threshold: 0.3 });
    capObserver.observe(capabilitiesSection);
  }

  // Dismiss toast → show collapsed mic icon
  function dismissToast() {
    if (!breezeToast || !breezeMicIcon) return;
    breezeToast.classList.remove('visible');
    toastDismissed = true;
    setTimeout(() => {
      breezeToast.classList.add('hidden');
      breezeMicIcon.classList.remove('hidden');
    }, 500);
  }

  // Open full voice panel
  function openPanel() {
    if (!breezeToast || !breezeMicIcon || !breezePanel) return;
    breezeToast.classList.remove('visible');
    breezeToast.classList.add('hidden');
    breezeMicIcon.classList.add('hidden');
    breezePanel.classList.add('active');
  }

  // Close panel → show mic icon
  function closePanel() {
    if (!breezePanel || !breezeMicIcon) return;
    breezePanel.classList.remove('active');
    setTimeout(() => {
      breezeMicIcon.classList.remove('hidden');
    }, 400);
  }

  if (breezeToastClose) breezeToastClose.addEventListener('click', dismissToast);
  if (breezeTalkBtn) breezeTalkBtn.addEventListener('click', openPanel);
  if (breezeMicIcon) breezeMicIcon.addEventListener('click', openPanel);
  if (breezeClose) breezeClose.addEventListener('click', closePanel);
  if (breezeEndCall) breezeEndCall.addEventListener('click', closePanel);

  // Also allow the bento card CTA to trigger the panel
  const bentoCTA = document.querySelector('.breeze-cta-btn');
  if (bentoCTA) {
    bentoCTA.addEventListener('click', (e) => {
      e.preventDefault();
      openPanel();
    });
  }

  // ── Before / After Tab Toggle ──
  const baTabs = document.querySelectorAll('.ba-tab');
  const baContentBefore = document.getElementById('ba-content-before');
  const baContentAfter = document.getElementById('ba-content-after');

  baTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      baTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-ba');
      if (target === 'before') {
        baContentBefore.classList.remove('ba-hidden');
        baContentAfter.classList.add('ba-hidden');
      } else {
        baContentBefore.classList.add('ba-hidden');
        baContentAfter.classList.remove('ba-hidden');
      }
    });
  });

  // ── Animated Count-Up for Outcome Metrics ──
  const outcomeNumbers = document.querySelectorAll('.outcome-number[data-count]');
  let countUpTriggered = false;

  function animateCountUp(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1800; // ms
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Temporary Google Form handoff for demo requests.
  const demoRequestForm = document.getElementById('demo-request-form');
  const demoFormSuccess = document.getElementById('demo-form-success');
  const demoRequestSubmit = document.getElementById('demo-request-submit');
  if (demoRequestForm && demoFormSuccess) {
    demoRequestForm.addEventListener('submit', () => {
      if (demoRequestSubmit) {
        demoRequestSubmit.disabled = true;
        demoRequestSubmit.classList.add('is-submitting');
        demoRequestSubmit.textContent = 'Sending Request...';
      }
      demoFormSuccess.classList.remove('visible');
      window.setTimeout(() => {
        demoRequestForm.reset();
        demoFormSuccess.classList.add('visible');
        demoFormSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        if (demoRequestSubmit) {
          demoRequestSubmit.disabled = false;
          demoRequestSubmit.classList.remove('is-submitting');
          demoRequestSubmit.textContent = 'Request Demo';
        }
      }, 250);
    });
  }

  if (outcomeNumbers.length > 0) {
    const countUpObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countUpTriggered) {
          countUpTriggered = true;
          outcomeNumbers.forEach(el => {
            el.textContent = '0';
            animateCountUp(el);
          });
          countUpObserver.disconnect();
        }
      });
    }, { threshold: 0.4 });

    const outcomeStrip = document.querySelector('.outcome-strip');
    if (outcomeStrip) {
      countUpObserver.observe(outcomeStrip);
    }
  }

  // ── FAQ Accordion ──
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items (single-open accordion)
      faqItems.forEach(other => {
        other.classList.remove('open');
        const otherBtn = other.querySelector('.faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
