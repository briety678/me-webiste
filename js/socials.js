/* Bria would like to share her contacts with you.
   Both Accept and Decline reveal the real social links — this is a delight
   moment, never a gate that could block a hiring manager from the content. */

function playAirdropSound(){
  const audio = new Audio('assets/sounds/airdrop.mp3');
  audio.volume = 0.6;
  audio.play().catch(() => {});
}

const grid = document.getElementById('deviceGrid');
const msg = document.getElementById('socialsMsg');
const acceptBtn = document.querySelector('[data-action="accept"]');
const declineBtn = document.querySelector('[data-action="decline"]');

function reveal(){
  grid.classList.add('is-revealed');
  grid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

acceptBtn.addEventListener('click', () => {
  playAirdropSound();
  reveal();
});

declineBtn.addEventListener('click', () => {
  playAirdropSound();
  acceptBtn.disabled = true;
  declineBtn.disabled = true;
  if (msg) msg.textContent = 'declined... just kidding';
  setTimeout(reveal, 700);
});
