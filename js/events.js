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

const grid = document.getElementById('eventsGrid');

function renderGrid(){
  grid.innerHTML = EVENTS.map((e, i) => `
    <div class="event-tile" data-city="${e.cityId}" style="--c:${e.color}; --tilt:${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3))}deg;">
      <a class="event-cover" href="${e.links[0].url}" target="_blank" rel="noopener">
        <img src="${e.cover}" alt="" loading="lazy">
      </a>
      <div class="event-info">
        <div class="event-loc"><span>${e.flag}</span> ${e.city}</div>
        <div class="event-type">${e.category}</div>
        <a class="event-name" href="${e.links[0].url}" target="_blank" rel="noopener">${e.title}</a>
        ${e.note ? `<p class="event-note">${e.note}</p>` : ''}
        ${e.links.length > 1 ? `
          <div class="event-links">
            ${e.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
          </div>` : ''}
      </div>
    </div>
  `).join('');
}

renderGrid();

const params = new URLSearchParams(location.search);
const wantedCity = params.get('city');
if (wantedCity){
  const match = grid.querySelector(`.event-tile[data-city="${wantedCity}"]`);
  if (match){
    setTimeout(() => {
      match.scrollIntoView({ behavior: 'smooth', block: 'center' });
      match.classList.add('flash');
      setTimeout(() => match.classList.remove('flash'), 1800);
    }, 400);
  }
}
