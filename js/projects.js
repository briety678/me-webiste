/* Projects — rendered from data, same pattern as the career page's ROLES
   array. Add/remove a project by editing this list; the folder markup,
   filter wiring, and case-study panel are all generated from it. */

const PROJECTS = [
  {
    filter: 'writing',
    tone: 'blue',
    category: 'content/writing',
    title: 'Content strategy for a crypto research org',
    org: 'IC3',
    role: 'Community Manager',
    stat: '116K+ X impressions',
    papers: [
      { num: '116K+', label: 'X impressions' },
      { note: "produced developer videos for The Defiant's DYOR podcast" }
    ],
    caseStudy: {
      problem: 'IC3 needed a consistent editorial voice across newsletters, blog posts, and video content to stay credible with a technical academic + industry audience.',
      strategy: 'Own the full content calendar instead of treating it as an afterthought — writing, editing, and producing across every format the audience actually reads or watches.',
      execution: "Wrote and edited monthly newsletters and blog posts, ran social content, and produced developer video clips for The Defiant's DYOR YouTube podcast series.",
      result: "A steady editorial cadence that fed directly into SBC'24's 1,067 newsletter signups and 116K+ X impressions."
    }
  },
  {
    filter: 'community',
    tone: 'pink',
    category: 'community',
    title: 'Scaling one of the largest Discord servers in web3',
    org: 'Nexus Labs',
    role: 'Community Marketing Manager',
    stat: '230K Discord members',
    papers: [
      { num: '230K', label: 'discord members' },
      { note: '2.3M+ social engagements along the way' }
    ],
    caseStudy: {
      problem: "Nexus's Discord had strong early traction but no real structure: no clear norms, channel architecture, or programs to keep members engaged as the community scaled.",
      strategy: 'Rebuild the community from the ground up: restructure the server, set the norms, and layer in always-on programming instead of one-off campaigns.',
      execution: 'Restructured Discord from scratch, including channel architecture and community norms; launched gamified campaigns; ran AMAs, livestreams, and community calls with product and engineering; and handled community feedback and support day to day.',
      result: 'Scaled the community to 230K members in a year, one of the largest Discord servers in web3, and generated 2.3M+ social engagements and 170K+ new X followers along the way.'
    },
    extraLink: { href: 'https://discord.gg/ad3dYM7dd', text: 'join the Discord ↗' }
  },
  {
    filter: 'launch',
    tone: 'blue',
    category: 'product launch',
    title: 'Launching an AI sim-city style game with zero ad spend',
    org: 'Interface (YC S25)',
    role: 'Head of Growth',
    stat: '1,000+ people reached',
    papers: [
      { num: '1,000+', label: 'people reached' },
      { note: 'gave a talk at Harvard XR Conference' }
    ],
    caseStudy: {
      problem: 'Interface needed to launch an AI visual simulation game (gaussian splatting + 3D rendering, sim-city style) in a crowded consumer AI space with zero brand awareness and no hiring pipeline.',
      strategy: 'Lead with community and credibility — get the product in front of the right rooms before paid channels, and turn events into a recruiting funnel at the same time.',
      execution: 'Ran 2 NYC AI community events, gave a presentation at Harvard XR Conference, and built direct partnerships with tech@NYU and NYC AI meetup organizers.',
      result: '1,000+ attendees reached, inbound interest driven via targeted PR, and a live hiring pipeline through local tech communities.'
    },
    extraLink: { href: 'events.html?city=nyc', text: 'see the field events on the map ↗' }
  },
  {
    filter: 'founder',
    tone: 'pink',
    category: '0→1 · founder',
    title: 'Bootstrapping an EdTech startup at Harvard iLab',
    org: 'Rimor Education',
    role: 'Co-founder & CEO',
    stat: 'B2B partnership secured',
    papers: [
      { num: 'B2B', label: 'partnership secured' },
      { note: 'founded the first consulting club at HGSE' }
    ],
    caseStudy: {
      problem: 'Founded from zero — no product, no users, no go-to-market playbook.',
      strategy: 'Ship a tutoring product fast, then grow through B2B partnerships instead of pure consumer acquisition.',
      execution: 'Built and launched an online tutoring product inside Harvard Innovation Labs; ran growth strategy and day-to-day execution as co-founder.',
      result: 'Launched the product, secured a B2B tutoring partnership in Korea, and founded the first consulting club at HGSE.'
    }
  }
];

function paperHTML(p){
  return p.num
    ? `<div class="pfolder-paper pfolder-paper--stat"><span class="pfolder-paper-num">${p.num}</span><span class="pfolder-paper-label">${p.label}</span></div>`
    : `<div class="pfolder-paper pfolder-paper--note"><p>${p.note}</p></div>`;
}

function caseBlockHTML(label, text){
  return `<div class="pfc-block"><div class="label">${label}</div><p>${text}</p></div>`;
}

function projectHTML(p, i){
  return `
    <div class="project-card" data-filter="${p.filter}">
      <div class="pfolder" data-tone="${p.tone}" tabindex="0" role="button"
           aria-label="${p.title} — read the case study">
        <div class="pfolder-shadow" aria-hidden="true"></div>
        <div class="pfolder-tab"><span class="pfolder-tab-label">${p.category}</span></div>
        <div class="pfolder-back"></div>
        <div class="pfolder-papers" aria-hidden="true">
          ${p.papers.map(paperHTML).join('')}
        </div>
        <div class="pfolder-front">
          <h3 class="pfolder-title">${p.title}</h3>
          <div class="pfolder-meta">${p.org} · ${p.role}</div>
          <div class="pfolder-stat">${p.stat}</div>
          <button class="pfolder-link" type="button">read the case study →</button>
        </div>
      </div>
      <div class="pfolder-case" id="case-${i}">
        <div class="pfolder-case-inner">
          ${caseBlockHTML('problem', p.caseStudy.problem)}
          ${caseBlockHTML('strategy', p.caseStudy.strategy)}
          ${caseBlockHTML('execution', p.caseStudy.execution)}
          ${caseBlockHTML('result', p.caseStudy.result)}
          ${p.extraLink ? `<a class="pfolder-case-link" href="${p.extraLink.href}" target="_blank" rel="noopener">${p.extraLink.text}</a>` : ''}
        </div>
      </div>
    </div>
  `;
}

/* Carousel — one project front-and-center at a time, rotating through on
   arrows / dots / a slow autoplay. Filtering narrows which indices the
   carousel cycles through rather than hiding cards in a grid. */

const stageEl = document.getElementById('carouselStage');
const dotsEl = document.getElementById('carouselDots');
const prevBtn = document.querySelector('.carousel-arrow--prev');
const nextBtn = document.querySelector('.carousel-arrow--next');
const carouselEl = document.querySelector('.pfolder-carousel');
const chips = document.querySelectorAll('.filter-chip');

let filterValue = 'all';
let visible = PROJECTS.map((_, i) => i);
let pos = 0;
let activeHandle = null;
let autoTimer = null;

function computeVisible(){
  visible = filterValue === 'all'
    ? PROJECTS.map((_, i) => i)
    : PROJECTS.map((_, i) => i).filter(i => PROJECTS[i].filter === filterValue);
}

function renderDots(){
  dotsEl.innerHTML = visible.map((_, i) =>
    `<button type="button" class="carousel-dot${i === pos ? ' is-active' : ''}" data-pos="${i}" aria-label="Go to project ${i + 1}"></button>`
  ).join('');
}

function updateArrows(){
  const only1 = visible.length <= 1;
  prevBtn.disabled = only1;
  nextBtn.disabled = only1;
}

function mountCard(projIdx, direction){
  stageEl.innerHTML = projectHTML(PROJECTS[projIdx], projIdx);
  const cardEl = stageEl.querySelector('.project-card');
  const folderEl = stageEl.querySelector('.pfolder');

  if (window.gsap && direction){
    gsap.set(cardEl, {
      rotationY: direction === 'next' ? 65 : -65,
      x: direction === 'next' ? 40 : -40,
      opacity: 0,
      transformPerspective: 1600
    });
    gsap.to(cardEl, { rotationY: 0, x: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.4)' });
  }

  activeHandle = initProjectFolder(folderEl);
}

function goTo(newPos, direction){
  if (newPos === pos) return;
  window.closeOpenFolder();
  if (activeHandle) activeHandle.destroy();

  const outgoing = stageEl.querySelector('.project-card');
  const finish = () => {
    pos = newPos;
    mountCard(visible[pos], direction);
    renderDots();
  };

  if (window.gsap && outgoing){
    gsap.to(outgoing, {
      rotationY: direction === 'next' ? -65 : 65,
      x: direction === 'next' ? -40 : 40,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: finish
    });
  } else {
    finish();
  }
  restartAutoplay();
}

function next(){ goTo((pos + 1) % visible.length, 'next'); }
function prev(){ goTo((pos - 1 + visible.length) % visible.length, 'prev'); }

function restartAutoplay(){
  clearInterval(autoTimer);
  if (visible.length <= 1) return;
  autoTimer = setInterval(() => {
    if (activeHandle && activeHandle.isOpen && activeHandle.isOpen()) return;
    next();
  }, 7000);
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
dotsEl.addEventListener('click', (e) => {
  const dot = e.target.closest('.carousel-dot');
  if (!dot) return;
  const target = Number(dot.dataset.pos);
  goTo(target, target > pos ? 'next' : 'prev');
});
carouselEl.addEventListener('mouseenter', () => clearInterval(autoTimer));
carouselEl.addEventListener('mouseleave', restartAutoplay);

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    if (chip.classList.contains('is-active')) return;
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    window.closeOpenFolder();
    if (activeHandle) activeHandle.destroy();
    filterValue = chip.dataset.filter;
    computeVisible();
    pos = 0;
    mountCard(visible[0], 'next');
    renderDots();
    updateArrows();
    restartAutoplay();
  });
});

computeVisible();
mountCard(visible[0]);
renderDots();
updateArrows();
restartAutoplay();
