/* Project folder — hover reveal + click-to-open, GSAP-driven.
   Closed: a plain folder face (title, meta, quiet stat, text link).
   Hover: the papers tucked inside rise up and fan out, the front flap
   tilts forward and lifts, the shadow softens and grows. Springy, not
   linear — this thing has weight.
   Click: opens the case study below it; click again (or click another
   folder) closes it. */

function initProjectFolder(el){
  const front = el.querySelector('.pfolder-front');
  const papers = Array.from(el.querySelectorAll('.pfolder-paper'));
  const shadow = el.querySelector('.pfolder-shadow');
  const card = el.closest('.project-card') || el;
  const caseEl = card.querySelector('.pfolder-case');
  const linkBtn = el.querySelector('.pfolder-link');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;

  function toggleCase(open){
    if (!caseEl) return;
    caseEl.classList.toggle('open', open);
    if (linkBtn) linkBtn.textContent = open ? 'hide the case study ↑' : 'read the case study →';
  }

  if (!window.gsap || reduceMotion){
    // no GSAP, or the user asked for no motion — the click-to-open case
    // study still works, it just doesn't animate the folder itself
    let opened = false;
    el.addEventListener('click', () => { opened = !opened; toggleCase(opened); });
    return { open: () => toggleCase(true), close: () => toggleCase(false), destroy(){} };
  }

  gsap.set(papers, { transformOrigin: '50% 100%' });

  const hoverTl = gsap.timeline({ paused: true })
    .to(el, { y: -8, duration: 0.5, ease: 'back.out(1.6)' }, 0)
    .to(front, {
      rotationX: 10,
      y: -6,
      duration: 0.5,
      ease: 'back.out(1.5)'
    }, 0)
    .to(shadow, { opacity: 0.55, scaleX: 1.12, y: 4, duration: 0.45, ease: 'power2.out' }, 0);

  // each paper gets its own rise height / fan rotation / stagger, so they
  // don't move as one rigid block
  const fan = [
    { y: -50, x: -34, rotation: -11, delay: 0.03 },
    { y: -44, x: 30,  rotation: 8,   delay: 0.1 }
  ];
  papers.forEach((paper, i) => {
    const f = fan[i % fan.length];
    hoverTl.to(paper, {
      opacity: 1,
      y: f.y,
      x: f.x,
      rotation: f.rotation,
      scale: 1,
      duration: 0.55,
      ease: 'back.out(1.7)'
    }, f.delay);
  });

  // a very quiet idle float — barely-there, just enough that the row of
  // closed folders doesn't feel static. Runs on its own GSAP tween
  // (never a CSS animation) so it can't fight the hover timeline above
  // for control of the same transform.
  const idleTl = gsap.to(el, {
    y: -4,
    duration: 2.6 + Math.random() * 0.8,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    paused: false
  });

  let hovering = false;
  let opened = false;

  function playHover(){
    if (opened) return;
    hovering = true;
    idleTl.pause();
    hoverTl.play();
  }
  function reverseHover(){
    hovering = false;
    if (opened) return;
    hoverTl.reverse();
    // only resume idle drifting once the hover-out has fully settled
    gsap.delayedCall(hoverTl.duration(), () => { if (!hovering && !opened) idleTl.resume(); });
  }

  if (!isTouch){
    el.addEventListener('mouseenter', playHover);
    el.addEventListener('mouseleave', reverseHover);
    el.addEventListener('focus', playHover);
    el.addEventListener('blur', reverseHover);
  }

  function open(){
    opened = true;
    idleTl.pause();
    hoverTl.play();
    el.classList.add('is-open');
    toggleCase(true);
  }
  function close(){
    opened = false;
    el.classList.remove('is-open');
    toggleCase(false);
    if (!hovering){
      hoverTl.reverse();
      gsap.delayedCall(hoverTl.duration(), () => { if (!hovering && !opened) idleTl.resume(); });
    }
  }

  el.addEventListener('click', (e) => {
    e.stopPropagation(); // don't let this bubble to the document click-away listener below
    if (opened) close(); else openExclusive();
  });
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      e.stopPropagation();
      if (opened) close(); else openExclusive();
    }
  });

  // opening one folder closes whichever other one was open — keeps the
  // page from filling up with several case studies at once
  function openExclusive(){
    if (currentlyOpen && currentlyOpen !== handle) currentlyOpen.close();
    open();
    currentlyOpen = handle;
  }

  function destroy(){
    idleTl.kill();
    hoverTl.kill();
  }

  const handle = { open, close, isOpen: () => opened, destroy };
  return handle;
}

let currentlyOpen = null;
const projectFolders = Array.from(document.querySelectorAll('.pfolder')).map(initProjectFolder);

// click anywhere outside every folder card closes whichever one is open
document.addEventListener('click', (e) => {
  if (!currentlyOpen) return;
  currentlyOpen.close();
  currentlyOpen = null;
});

// exposed so other scripts (the projects carousel) can close whatever is
// open without reaching into this file's module-level state directly
window.closeOpenFolder = function(){
  if (currentlyOpen){ currentlyOpen.close(); currentlyOpen = null; }
};
