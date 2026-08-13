const folderSound = new Audio('assets/sounds/folder-open.mp3');
folderSound.volume = 0.5;

document.querySelectorAll('.folder-front').forEach(front => {
  front.addEventListener('click', () => {
    const card = front.closest('.project-card');
    const panel = card.querySelector('.project-case');
    const btn = front.querySelector('.project-toggle');
    const open = panel.classList.toggle('open');
    card.classList.toggle('is-open', open);
    btn.textContent = open ? 'hide case study ↑' : 'read full case study →';
    if (open) {
      folderSound.currentTime = 0;
      folderSound.play().catch(() => {});
    }
  });
});

// filter chips — level-select for case studies
const chips = document.querySelectorAll('.filter-chip');
const cards = document.querySelectorAll('.project-card');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const filter = chip.dataset.filter;
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.filter === filter;
      card.classList.toggle('is-hidden', !match);
    });
  });
});

// animated stat counters — count up when scrolled into view
function animateStat(el){
  const raw = el.dataset.stat;
  const match = raw.match(/^([\d,]+)(.*)$/);
  if (!match) { el.textContent = raw; return; } // non-numeric (e.g. "B2B")

  const target = parseInt(match[1].replace(/,/g, ''), 10);
  const suffix = match[2];
  const useComma = match[1].includes(',');
  const duration = 1100;
  const start = performance.now();

  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    el.textContent = (useComma ? current.toLocaleString('en-US') : current) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statEls = document.querySelectorAll('.stat-value[data-stat]');
if ('IntersectionObserver' in window && statEls.length) {
  const statIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStat(entry.target);
        statIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  statEls.forEach(el => statIO.observe(el));
} else {
  statEls.forEach(el => { el.textContent = el.dataset.stat; });
}
