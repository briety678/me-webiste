const foodTrigger = document.getElementById('foodTrigger');
const foodModal = document.getElementById('foodModal');

if (foodTrigger && foodModal) {
  const openModal = () => {
    foodModal.classList.add('is-open');
    foodModal.setAttribute('aria-hidden', 'false');
  };
  const closeModal = () => {
    foodModal.classList.remove('is-open');
    foodModal.setAttribute('aria-hidden', 'true');
  };

  foodTrigger.addEventListener('click', openModal);
  foodModal.querySelectorAll('[data-food-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// the letter — an almost-imperceptible tilt toward the cursor, like a real
// sheet of paper resting on a desk rather than a floating UI card
const letterWrap = document.getElementById('letterWrap');
const letterPage = letterWrap ? letterWrap.querySelector('.letter-page') : null;
const letterReduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const letterIsTouch = window.matchMedia('(hover: none)').matches;
if (letterWrap && letterPage && !letterReduceMotion && !letterIsTouch) {
  letterWrap.addEventListener('mousemove', (e) => {
    const rect = letterWrap.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    letterPage.style.setProperty('--letter-tilt-x', `${(px - 0.5) * 1.1}deg`);
    letterPage.style.setProperty('--letter-tilt-y', `${(0.5 - py) * 0.8}deg`);
  });
  letterWrap.addEventListener('mouseleave', () => {
    letterPage.style.setProperty('--letter-tilt-x', '0deg');
    letterPage.style.setProperty('--letter-tilt-y', '0deg');
  });
}
