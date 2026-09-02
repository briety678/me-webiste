const EVENTS = [
  {
    city: 'New York, NY', cityId: 'nyc', flag: '🇺🇸', category: 'conference',
    title: "SBC'24 — Science of Blockchain Conference",
    cover: 'assets/events/sbc24.jpg', color: 'var(--stampc-blue)',
    note: '1,400+ attendees · Columbia University · featured in a16z crypto',
    links: [
      { label: 'full recording ↗', url: 'https://www.youtube.com/watch?v=pE34qhR-_ZM' },
      { label: 'a16z crypto feature ↗', url: 'https://a16zcrypto.com/posts/article/science-of-blockchain-conference-24-field-notes/' }
    ]
  },
  {
    city: 'New York, NY', cityId: 'nyc', flag: '🇺🇸', category: 'launch party',
    title: 'Interface — OFFICIAL Launch Party',
    cover: 'assets/events/launch-party.jpg', color: 'var(--stampc-blue)',
    links: [{ label: 'view event ↗', url: 'https://luma.com/tnyqevnx' }]
  },
  {
    city: 'New York, NY', cityId: 'nyc', flag: '🇺🇸', category: 'happy hour',
    title: 'Interface — AI Startup Office Warming',
    cover: 'assets/events/office-warming.jpg', color: 'var(--stampc-blue)',
    links: [{ label: 'view event ↗', url: 'https://luma.com/78xsw6s7' }]
  },
  {
    city: 'Les Diablerets, Switzerland', cityId: 'switzerland', flag: '🇨🇭', category: 'retreat',
    title: 'IC3 Winter Retreat 2024',
    cover: 'assets/events/ic3-retreat.jpg', color: 'var(--stampc-mustard)',
    note: 'Jan 8–11, 2024 · Eurotel Victoria, Les Diablerets',
    links: [{ label: 'event page ↗', url: 'https://ic3research.org/2024-01-08-ic3-winter-retreat-2024/' }]
  },
  {
    city: 'Shanghai, China', cityId: 'shanghai', flag: '🇨🇳', category: 'meetup',
    title: 'Proof of Nexus Meetup — Shanghai',
    cover: 'assets/events/shanghai-nexus.jpg', color: 'var(--stampc-green)',
    note: 'global city community meetup series',
    links: [{ label: 'view post ↗', url: 'https://x.com/NexusLabs/status/2019824664449790273' }]
  },
  {
    city: 'Denver, CO', cityId: 'denver', flag: '🇺🇸', category: 'side event',
    title: 'White Paper Reading Club — Deep Dive into ElizaOS w/ Sam Gao (AI16Z)',
    cover: 'assets/events/whitepaper-reading.jpg', color: 'var(--stampc-red)',
    links: [{ label: 'view event ↗', url: 'https://luma.com/e3228vr9' }]
  },
  {
    city: 'Denver, CO', cityId: 'denver', flag: '🇺🇸', category: 'cowork/hackathon',
    title: 'ETHDenver AI Cowork Hub — Build & Pitch AI Agents',
    cover: 'assets/events/ethdenver-cowork.jpg', color: 'var(--stampc-red)',
    note: 'Feb 23–26, 2025',
    links: [{ label: 'view event ↗', url: 'https://luma.com/vuqczgxe' }]
  },
  {
    city: 'Chengdu, China', cityId: 'chengdu', flag: '🇨🇳', category: 'meetup',
    title: 'Proof of Nexus Meetup — Chengdu',
    cover: 'assets/events/chengdu-nexus.jpg', color: 'var(--stampc-purple)',
    note: '85+ participants · global city community meetup series',
    links: [{ label: 'view post ↗', url: 'https://x.com/NexusLabs/status/2018949430058393696' }]
  },
  {
    city: 'Bangkok, Thailand', cityId: 'bangkok', flag: '🇹🇭', category: 'meetup',
    title: 'DeFi, PayFi, DeAI, not Decaf',
    cover: 'assets/events/defi-payfi.jpg', color: 'var(--stampc-teal)',
    note: '~399 attendees · Devcon Bangkok · Nov 12, 2024',
    links: [{ label: 'view event ↗', url: 'https://luma.com/jaoqfh58' }]
  },
  {
    city: 'Shenzhen, China', cityId: 'shenzhen', flag: '🇨🇳', category: 'meetup',
    title: 'Proof of Nexus Meetup — Shenzhen',
    cover: 'assets/events/shenzhen-nexus.jpg', color: 'var(--stampc-babyblue)',
    note: 'global city community meetup series',
    links: [{ label: 'view post ↗', url: 'https://x.com/NexusLabs/status/1971316166917501093' }]
  }
];

/*!
 * 3D ring carousel — vanilla-JS port of the OriginKit "Round Carousel"
 * component (auto-rotate + drag-with-inertia on a CSS 3D transform ring).
 * Faces use background-size:cover so every photo — whatever its native
 * size — gets cropped identically to the same card box.
 */
const carousel = document.getElementById('roundCarousel');
const ring = document.getElementById('rcRing');
const caption = document.getElementById('rcCaption');
const N = EVENTS.length;

const CONFIG = {
  imageWidth: 210,
  imageHeight: 280,
  spacing: 3,
  speed: 5,        // auto-rotate speed (matches the OriginKit "speed" prop)
  direction: 'right',
  sensitivity: 5,  // drag-to-rotation sensitivity
  tilt: -8,
  cornerRadius: 18,
  innerDim: 3.5
};

const angle = 360 / N;
const factor = 1 + CONFIG.spacing * 0.15;
const radius = (CONFIG.imageWidth * factor) / (2 * Math.tan(Math.PI / N));
const degPerSec = CONFIG.speed * 6 * (CONFIG.direction === 'left' ? -1 : 1);

ring.style.width = CONFIG.imageWidth + 'px';
ring.style.height = CONFIG.imageHeight + 'px';
document.querySelector('.rc-stage').style.transform = `rotateX(${CONFIG.tilt}deg)`;

ring.innerHTML = EVENTS.map((e, i) => `
  <div class="rc-item" data-index="${i}" data-url="${e.links[0].url}" data-city="${e.cityId}"
       style="transform: rotateY(${i * angle}deg) translateZ(${radius}px); --c:${e.color};">
    <div class="rc-face" style="background-image:url('${e.cover}'); border-radius:${CONFIG.cornerRadius}px;"></div>
    <div class="rc-face rc-back" style="background-image:url('${e.cover}'); border-radius:${CONFIG.cornerRadius}px; filter:brightness(${CONFIG.innerDim / 10});"></div>
  </div>
`).join('');

const items = Array.from(ring.children);

function renderCaption(e){
  caption.innerHTML = `
    <div class="event-loc" style="--c:${e.color};"><span>${e.flag}</span> ${e.city}</div>
    <div class="event-type" style="--c:${e.color};">${e.category}</div>
    <a class="event-name" style="--c:${e.color};" href="${e.links[0].url}" target="_blank" rel="noopener">${e.title}</a>
    ${e.note ? `<p class="event-note">${e.note}</p>` : ''}
    ${e.links.length > 1 ? `
      <div class="event-links">
        ${e.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
      </div>` : ''}
  `;
}

// ---- rotation state + auto-rotate / inertia loop ----
let rotY = 0, vel = 0, lastTime = 0, dragging = false, dragX = 0, dragMoved = false, downX = 0;
let lastFront = -1;

function angleDiff(a){
  let m = ((a % 360) + 360) % 360;
  return m > 180 ? m - 360 : m;
}
function frontIndex(){
  let best = 0, bestDiff = Infinity;
  items.forEach((_, i) => {
    const d = Math.abs(angleDiff(i * angle + rotY));
    if (d < bestDiff) { bestDiff = d; best = i; }
  });
  return best;
}
function apply(){
  ring.style.transform = `translateZ(${-radius}px) rotateY(${rotY}deg)`;
  const i = frontIndex();
  if (i !== lastFront){
    lastFront = i;
    renderCaption(EVENTS[i]);
  }
}
apply();

function draw(now){
  const dt = lastTime ? (now - lastTime) / 1000 : 0;
  lastTime = now;
  const f = Math.min(dt, 0.1);
  if (!dragging){
    if (Math.abs(vel) > 0.01){ rotY += vel * f; vel *= 0.94; }
    else { rotY += degPerSec * f; }
  }
  apply();
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

// ---- drag-to-spin, with inertia on release ----
carousel.addEventListener('pointerdown', (e) => {
  // state first — if setPointerCapture ever throws, the drag should still start
  dragging = true;
  dragMoved = false;
  dragX = e.clientX;
  downX = e.clientX;
  vel = 0;
  carousel.classList.add('grabbing');
  try { carousel.setPointerCapture(e.pointerId); } catch(_){}
});
carousel.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  const dx = e.clientX - dragX;
  dragX = e.clientX;
  if (Math.abs(e.clientX - downX) > 4) dragMoved = true;
  const k = 0.3 * CONFIG.sensitivity;
  rotY += dx * k;
  vel = dx * k * 60;
  // don't wait on the rAF loop to reflect this — a throttled/backgrounded
  // tab can stall it, and a drag should always feel immediately responsive
  apply();
});
function endDrag(e){
  if (!dragging) return;
  dragging = false;
  carousel.classList.remove('grabbing');
  if (e && e.pointerId != null) { try { carousel.releasePointerCapture(e.pointerId); } catch(_){} }
}
carousel.addEventListener('pointerup', endDrag);
carousel.addEventListener('pointerleave', endDrag);
carousel.addEventListener('pointercancel', endDrag);

// a real drag shouldn't also open the card's link
carousel.addEventListener('click', (e) => {
  if (!dragMoved) return;
  e.preventDefault();
  e.stopPropagation();
}, true);

// clicking a face (without dragging) opens that event directly
carousel.addEventListener('click', (e) => {
  if (dragMoved) return;
  const item = e.target.closest('.rc-item');
  if (item) window.open(item.dataset.url, '_blank', 'noopener');
});

// ---- deep link: events.html?city=nyc spins that card to the front ----
const params = new URLSearchParams(location.search);
const wantedCity = params.get('city');
if (wantedCity){
  const index = EVENTS.findIndex(e => e.cityId === wantedCity);
  if (index !== -1){
    setTimeout(() => {
      const from = rotY;
      const to = -index * angle;
      // shortest angular path
      let delta = ((to - from) % 360 + 540) % 360 - 180;
      const duration = 700, start = performance.now();
      dragging = true; // pause auto-rotate/inertia while we tween
      (function tween(now){
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        rotY = from + delta * eased;
        apply();
        if (t < 1) requestAnimationFrame(tween);
        else {
          dragging = false;
          const target = items[index];
          target.classList.add('flash');
          setTimeout(() => target.classList.remove('flash'), 1800);
        }
      })(start);
    }, 400);
  }
}
