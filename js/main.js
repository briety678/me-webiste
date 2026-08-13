// Shared behavior: mobile nav toggle + scroll-reveal for stamps/cards
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // draggable objects (home flatlay/deco, life polaroids) — desktop only,
  // mobile keeps its static stacked layout. Anchors and the Spotify iframe
  // still work normally: a real click (no movement) passes through, only
  // an actual drag suppresses the click/navigation that follows.
  const draggables = document.querySelectorAll('[data-drag]');
  if (draggables.length && window.matchMedia('(min-width: 861px)').matches) {
    draggables.forEach(el => {
      let startX, startY, startLeft, startTop, dragging = false, moved = false;
      let pendingX = 0, pendingY = 0, rafId = null;

      const applyPosition = () => {
        rafId = null;
        el.style.left = `${startLeft + pendingX}px`;
        el.style.top = `${startTop + pendingY}px`;
      };
      const onMove = (e) => {
        if (!dragging) return;
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        const y = e.touches ? e.touches[0].clientY : e.clientY;
        pendingX = x - startX;
        pendingY = y - startY;
        if (Math.abs(pendingX) > 4 || Math.abs(pendingY) > 4) moved = true;
        if (rafId === null) rafId = requestAnimationFrame(applyPosition);
      };
      const onUp = () => {
        dragging = false;
        el.classList.remove('is-dragging');
        if (rafId !== null) { cancelAnimationFrame(rafId); applyPosition(); }
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);
        window.removeEventListener('touchmove', onMove);
        window.removeEventListener('touchend', onUp);
      };
      const onDown = (e) => {
        if (e.target.tagName === 'IFRAME') return; // let the embed handle its own clicks
        const container = el.offsetParent;
        const elRect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        startLeft = elRect.left - containerRect.left;
        startTop = elRect.top - containerRect.top;
        el.style.left = `${startLeft}px`;
        el.style.top = `${startTop}px`;
        el.style.right = 'auto';
        pendingX = 0; pendingY = 0;
        startX = e.touches ? e.touches[0].clientX : e.clientX;
        startY = e.touches ? e.touches[0].clientY : e.clientY;
        dragging = true;
        moved = false;
        el.classList.add('is-dragging');
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        window.addEventListener('touchmove', onMove, { passive: true });
        window.addEventListener('touchend', onUp);
      };
      const onClickCapture = (e) => {
        if (moved) {
          e.preventDefault();
          e.stopPropagation();
          moved = false;
        }
      };

      el.addEventListener('mousedown', onDown);
      el.addEventListener('touchstart', onDown, { passive: true });
      el.addEventListener('click', onClickCapture, true);
    });
  }

  // AirDrop sound on the home page's AirDrop object
  document.querySelectorAll('.obj-airdrop').forEach(el => {
    el.addEventListener('click', () => {
      const audio = new Audio('assets/sounds/airdrop.mp3');
      audio.volume = 0.6;
      audio.play().catch(() => {});
    });
  });

  // home flatlay icons: a little sound on hover (coffee, whoosh, shutter, typing)
  document.querySelectorAll('[data-sound]').forEach(el => {
    const audio = new Audio(el.dataset.sound);
    audio.volume = 0.5;
    el.addEventListener('mouseenter', () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    });
  });

  const revealables = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealables.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    revealables.forEach(el => io.observe(el));
  } else {
    revealables.forEach(el => el.classList.add('is-visible'));
  }
});
