/* Home entrance: everything drops in with a staggered bounce the first time
   you land here each session, then settles into a permanent gentle float.
   No gate, nothing to click through — it's part of the page, not a wall. */

const ENTRY_KEY = 'bria_home_entry_v2';
const canvas = document.getElementById('flatlayCanvas');
const isDesktop = window.matchMedia('(min-width: 861px)').matches;

if (sessionStorage.getItem(ENTRY_KEY) || !isDesktop){
  canvas.classList.add('settled');
} else {
  sessionStorage.setItem(ENTRY_KEY, '1');
  requestAnimationFrame(() => {
    canvas.classList.add('drop-playing');
    setTimeout(() => {
      canvas.classList.remove('drop-playing');
      canvas.classList.add('settled');
    }, 1500);
  });
}
