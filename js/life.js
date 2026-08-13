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
