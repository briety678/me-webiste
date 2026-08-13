/* Entry interstitial — AirDrop, with a real photo behind the dialog.
   Both accept AND decline always lead into the site — this is a delight moment,
   never a gate that could block a hiring manager from the content. */

const INTRO_KEY = 'bria_intro_shown_v4';
const params = new URLSearchParams(location.search);
const forceShow = params.has('intro');
const INTRO_PHOTO = 'assets/life/photo-1.jpg';

function playAirdropSound(){
  const audio = new Audio('assets/sounds/airdrop.mp3');
  audio.volume = 0.6;
  audio.play().catch(() => {}); // ignore autoplay-policy rejections
}

function markup(){
  return `
    <div class="intro-backdrop" style="background-image:url('${INTRO_PHOTO}')"></div>
    <div class="intro-card intro-card--airdrop">
      <div class="intro-airdrop-top">
        <div class="intro-airdrop-title">AirDrop</div>
        <div class="intro-airdrop-msg" id="introSub">Bria would like to share a space with you</div>
      </div>
      <img class="intro-airdrop-photo" src="${INTRO_PHOTO}" alt="">
      <div class="intro-airdrop-bottom">
        <button class="intro-link" data-action="decline" type="button">Decline</button>
        <button class="intro-link intro-link--bold" data-action="accept" type="button">Accept</button>
      </div>
    </div>
  `;
}

function enter(overlay){
  sessionStorage.setItem(INTRO_KEY, '1');
  overlay.classList.add('intro-exit');
  document.body.classList.remove('intro-locked');
  setTimeout(() => overlay.remove(), 700);
}

function wire(overlay){
  const sub = overlay.querySelector('#introSub');
  const acceptBtn = overlay.querySelector('[data-action="accept"]');
  const declineBtn = overlay.querySelector('[data-action="decline"]');

  acceptBtn.addEventListener('click', () => {
    playAirdropSound();
    enter(overlay);
  });

  declineBtn.addEventListener('click', () => {
    playAirdropSound();
    acceptBtn.disabled = true;
    declineBtn.disabled = true;
    if (sub) sub.textContent = 'declined... just kidding';
    setTimeout(() => enter(overlay), 850);
  });
}

function renderIntro(){
  document.body.classList.add('intro-locked');
  const overlay = document.createElement('div');
  overlay.className = 'intro-overlay';
  overlay.innerHTML = markup();
  document.body.appendChild(overlay);
  wire(overlay);
}

if (forceShow || !sessionStorage.getItem(INTRO_KEY)){
  renderIntro();
}
