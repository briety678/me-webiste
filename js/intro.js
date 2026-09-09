/* Entry interstitial — BriDrop opener.
   Both Accept AND Decline always lead into the site — this is a delight
   moment, never a gate that could block a hiring manager from the content. */

const INTRO_KEY = 'bria_intro_shown_v4';
const params = new URLSearchParams(location.search);
const forceShow = params.has('intro');
const INTRO_PHOTO = 'assets/life/photo-1.jpg';

function markup(){
  return `
    <div class="intro-card intro-card--airdrop">
      <div class="intro-airdrop-top">
        <div class="intro-airdrop-title">BriDrop</div>
        <div class="intro-airdrop-msg" id="introSub">Bria would like to share her world with you</div>
      </div>
      <img class="intro-airdrop-photo" src="${INTRO_PHOTO}" alt="">
      <div class="intro-airdrop-bottom" id="introActions">
        <button class="intro-link" data-action="decline" type="button">Decline</button>
        <button class="intro-link intro-link--bold" data-action="accept" type="button">Accept</button>
      </div>
    </div>
  `;
}

function enter(overlay){
  sessionStorage.setItem(INTRO_KEY, '1');
  // drop ?intro from the URL/history entry itself — otherwise the browser's
  // Back button returns to this exact URL, forceShow is still true, and the
  // overlay pops right back up instead of just landing on the desk
  if (forceShow){
    const url = new URL(location.href);
    url.searchParams.delete('intro');
    history.replaceState(null, '', url.pathname + url.search + url.hash);
  }
  overlay.classList.add('intro-exit');
  document.body.classList.remove('intro-locked');
  setTimeout(() => overlay.remove(), 550);
}

function wire(overlay){
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sub = overlay.querySelector('#introSub');
  const actions = overlay.querySelector('#introActions');
  const acceptBtn = overlay.querySelector('[data-action="accept"]');
  const declineBtn = overlay.querySelector('[data-action="decline"]');

  function setMessage(text){
    if (!sub) return;
    if (reduceMotion){ sub.textContent = text; return; }
    sub.classList.add('is-swapping');
    setTimeout(() => {
      sub.textContent = text;
      sub.classList.remove('is-swapping');
    }, 160);
  }

  function press(btn){
    if (reduceMotion) return;
    btn.classList.remove('is-pressed');
    // eslint-disable-next-line no-unused-expressions
    void btn.offsetWidth; // restart the keyframe if clicked twice in a row
    btn.classList.add('is-pressed');
  }

  function runTransfer(onDone){
    actions.hidden = true;
    setMessage('Sharing Bria’s world…');
    setTimeout(onDone, reduceMotion ? 200 : 900);
  }

  acceptBtn.addEventListener('click', () => {
    press(acceptBtn);
    acceptBtn.disabled = true;
    declineBtn.disabled = true;
    runTransfer(() => {
      setMessage('Bria’s world received.');
      setTimeout(() => enter(overlay), reduceMotion ? 200 : 550);
    });
  });

  declineBtn.addEventListener('click', () => {
    press(declineBtn);
    acceptBtn.disabled = true;
    declineBtn.disabled = true;
    setMessage('Nice try :)');
    setTimeout(() => enter(overlay), reduceMotion ? 200 : 750);
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
