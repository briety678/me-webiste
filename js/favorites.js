// tap-to-flip for touch devices (hover already flips on desktop via CSS)
document.querySelectorAll('.fav-card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('flipped'));
});
