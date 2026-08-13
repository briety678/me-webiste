const ROLES = [
  {
    company: 'Interface (YC S25)',
    logo: 'assets/logos/interface.png',
    color: 'var(--stampc-blue)',
    shape: 'stamp--hex',
    role: 'Head of Growth',
    start: 'Jan 2026', end: 'Present',
    purpose: 'NYC · AI visual simulation game (gaussian splatting + 3D rendering), sim-city style',
    endorsements: [
      'Owned end-to-end marketing for an AI visual simulation game (gaussian splatting + 3D rendering), sim-city style',
      'Organized 2 AI community events in NYC; gave a presentation at Harvard XR Conference (1,000+ attendees)',
      'Built hiring-pipeline partnerships with NYC AI/tech communities (tech@NYU, NYC AI meetups)'
    ],
    caseStudy: {
      problem: 'Interface needed to launch an AI visual simulation game (gaussian splatting + 3D rendering, sim-city style) in a crowded consumer AI space with zero brand awareness and no hiring pipeline.',
      strategy: 'Lead with community and credibility — get the product in front of the right rooms before paid channels, and turn events into a recruiting funnel at the same time.',
      execution: 'Ran 2 NYC AI community events, gave a presentation at Harvard XR Conference, and built direct partnerships with tech@NYU and NYC AI meetup organizers.',
      result: '1,000+ attendees reached, inbound interest driven via targeted PR, and a live hiring pipeline through local tech communities.'
    }
  },
  {
    company: 'Nexus Labs',
    logo: 'assets/logos/nexus.png',
    color: 'var(--stampc-red)',
    shape: 'stamp--circle',
    role: 'Community Marketing Manager',
    start: 'Mar 2025', end: 'Feb 2026',
    purpose: 'NYC · Series A blockchain, global Discord/Telegram community',
    endorsements: [
      'Restructured Discord from scratch: channel architecture, community norms, and always-on programming',
      'Scaled the community to 230K members in a year, one of the largest Discord servers in web3',
      'Ran AMAs, livestreams, and community calls with product and engineering; handled community feedback and support day to day'
    ],
    caseStudy: {
      problem: "Nexus's Discord had strong early traction but no real structure: no clear norms, channel architecture, or programs to keep members engaged, and engagement was concentrated in the US with a small core group instead of scaling with the network.",
      strategy: 'Rebuild the community from the ground up (structure, norms, programming), then build a regional KOL network to establish APAC and turn casual members into repeat contributors.',
      execution: 'Restructured Discord from scratch, including channel architecture and community norms; launched gamified campaigns; ran AMAs, livestreams, and community calls with product and engineering; handled community feedback and support day to day; and coordinated 15+ regional KOLs with field marketing and ABM programs across APAC and the US.',
      result: 'Scaled the community to 230K members in a year, one of the largest Discord servers in web3. Also generated 2.3M+ social engagements, 170K+ new X followers, 12K YouTube subscribers, and 920K prover network users.'
    }
  },
  {
    company: 'OpenMind',
    logo: 'assets/logos/openmind.png',
    color: 'var(--stampc-green)',
    shape: 'stamp--tri',
    role: 'Marketing Operations (Part-time)',
    start: 'Oct 2024', end: 'Jan 2025',
    purpose: 'Remote · Series A robotics',
    endorsements: [
      'Built the marketing funnel from scratch and launched content channels (X, newsletter, Discord)',
      'Drove 10+ partnership outreach across the Crypto × AI ecosystem, including NEAR Protocol'
    ],
    caseStudy: {
      problem: 'OpenMind had no marketing infrastructure and no consistent way to reach the Crypto × AI ecosystem it needed for partnerships.',
      strategy: 'Stand up the funnel and channels first, then use direct outreach to open ecosystem doors.',
      execution: 'Built and launched X, newsletter, and Discord channels; ran 10+ targeted partnership conversations across the Crypto × AI space.',
      result: 'A functioning marketing funnel and an active outreach pipeline, including a NEAR Protocol connection.'
    }
  },
  {
    company: 'IC3',
    logo: 'assets/logos/ic3.png',
    color: 'var(--stampc-mustard)',
    shape: 'stamp--rect',
    role: 'Community Manager',
    start: 'Jan 2023', end: 'Jan 2025',
    purpose: 'NYC · The Initiative for Cryptocurrencies and Contracts',
    endorsements: [
      'Built 10+ industry partnerships, including Ethereum Foundation and Chainlink',
      "Organized SBC'24: 1,400+ attendees, 1,067 newsletter signups, 116K+ X impressions",
      "Led content strategy for The Defiant's DYOR YouTube podcast series"
    ],
    caseStudy: {
      problem: "IC3's flagship conference needed to grow attendance and industry credibility in a crowded crypto-events calendar.",
      strategy: 'Anchor the event with real partnerships and a content engine that built buzz months before the date.',
      execution: "Built 10+ partnerships including Ethereum Foundation and Chainlink, ran monthly newsletters and social content, and produced developer video content for The Defiant's DYOR podcast.",
      result: "SBC'24 drew 1,400+ attendees, 1,067 newsletter signups, and 116K+ X impressions — and helped launch the inaugural IC3-Cornell Accelerator cohort."
    }
  },
  {
    company: 'Rimor Education',
    color: 'var(--stampc-blue)',
    shape: 'stamp--hex',
    role: 'Co-founder & CEO',
    start: 'Nov 2021', end: 'Jan 2023',
    purpose: 'Boston, MA · Harvard Innovation Labs–incubated EdTech',
    endorsements: [
      'Co-founded a Harvard Innovation Labs–incubated EdTech startup',
      'Owned growth strategy and on-the-ground execution end to end',
      'Secured a B2B tutoring partnership in Korea',
      'Founded the first consulting club at HGSE'
    ],
    caseStudy: {
      problem: 'Founded from zero — no product, no users, no go-to-market playbook.',
      strategy: 'Ship a tutoring product fast, then grow through B2B partnerships instead of pure consumer acquisition.',
      execution: 'Built and launched an online tutoring product inside Harvard Innovation Labs; ran growth strategy and day-to-day execution as co-founder.',
      result: 'Launched the product, secured a B2B tutoring partnership in Korea, and founded the first consulting club at HGSE.'
    }
  },
  {
    company: 'Bybit',
    logo: 'assets/logos/bybit.svg',
    color: 'var(--stampc-green)',
    shape: 'stamp--circle',
    role: 'Digital Asset Research Intern',
    start: 'Dec 2021', end: 'Feb 2022',
    purpose: 'Remote · digital asset research',
    endorsements: [
      "First cohort of interns in Bybit's digital asset research department",
      'Delivered crypto evaluations and market intelligence to inform internal trading strategy'
    ],
    caseStudy: {
      problem: 'The trading desk needed a faster, more structured read on emerging digital assets.',
      strategy: 'Build a repeatable evaluation framework instead of one-off research.',
      execution: 'Delivered ongoing cryptocurrency evaluations and data-driven market intelligence as part of the first research intern cohort.',
      result: 'Research directly informed internal trading strategy.'
    }
  },
  {
    company: 'McKinsey & Accenture',
    logoPair: ['assets/logos/mckinsey.svg', 'assets/logos/accenture.svg'],
    color: 'var(--stampc-red)',
    shape: 'stamp--rect',
    role: 'Strategy Consulting (Project Assistant / Intern)',
    start: 'Jul 2021', end: 'Nov 2021',
    purpose: 'Shanghai, China · non-profit education & TMF/ERP research',
    endorsements: [
      "McKinsey: analyzed 10+ NGO models and built a PESTEL framework for China's non-profit education sector",
      'Accenture: investigated 50+ TMF storage regulations and Sage 300 ERP modules for client DMS analysis'
    ],
    caseStudy: {
      problem: 'Two client problems, same skill needed: turn messy regulatory and market landscapes into a framework leadership could act on.',
      strategy: 'Structured research first, synthesis second.',
      execution: 'At McKinsey, analyzed 10+ NGO models and built a PESTEL framework for market access. At Accenture, investigated 50+ TMF storage regulations and Sage 300 ERP modules, then mapped findings into DMS flow diagrams.',
      result: 'Delivered frameworks both teams used directly in client recommendations.'
    }
  },
  {
    isSkills: true,
    company: 'Skills & Toolkit',
    color: 'var(--ink)',
    shape: 'stamp--hex',
    role: 'What I actually do, by stage',
    start: '', end: '',
    funnel: [
      { label: 'Awareness', color: 'var(--stampc-blue)', tags: ['content strategy', 'social (X, RedNote)', 'PR & speaking', 'community events'] },
      { label: 'Acquisition', color: 'var(--stampc-red)', tags: ['partnerships', 'KOL & ambassador programs', 'field marketing / ABM', 'hackathons'] },
      { label: 'Activation', color: 'var(--stampc-green)', tags: ['Discord/Telegram ops', 'onboarding campaigns', 'Creator Academy', 'UGC'] },
      { label: 'Retention', color: 'var(--stampc-mustard)', tags: ['gamified campaigns', 'Ambassador Program', 'regional KOL network'] },
      { label: 'Growth', color: 'var(--ink)', tags: ['GTM strategy & positioning', 'hiring-pipeline partnerships', 'B2B partnerships'] }
    ],
    tools: ['Adobe Creative Suite', 'Figma', 'Canva', 'Google Analytics', 'WordPress', 'Discord / Telegram', 'Notion', 'HubSpot']
  }
];

let current = 0;
let caseOpen = false;
let animating = false;

const stageEl = document.getElementById('bookStage');
const spreadEl = document.getElementById('visaSpread');
const tocEl = document.getElementById('visaToc');
const progressEl = document.getElementById('visaProgress');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderTOC(){
  tocEl.innerHTML = ROLES.map((r, i) => {
    const inner = r.logoPair
      ? `<span class="toc-logo-pair">${r.logoPair.map(l => `<img src="${l}" alt="">`).join('')}</span>`
      : r.logo
        ? `<img class="toc-logo" src="${r.logo}" alt="">`
        : r.company;
    return `<button data-i="${i}" class="${i === current ? 'active' : ''}" aria-label="${r.company}" title="${r.company}">${inner}</button>`;
  }).join('');
  tocEl.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => goTo(parseInt(btn.dataset.i, 10)));
  });
}

function spreadHTML(r){
  if (r.isSkills){
    return `
      <div class="visa-page visa-page--stamp">
        <div class="stamp ${r.shape} rot-2" style="--c:${r.color}">
          <div class="stamp-icon">✦</div>
          <div class="stamp-title">SKILLS</div>
          <div class="stamp-sub">&amp; TOOLKIT</div>
        </div>
        <div class="visa-company">${r.company}</div>
      </div>
      <div class="visa-page visa-page--skills">
        <div class="label">${r.role}</div>
        <div class="skills-funnel">
          ${r.funnel.map(f => `
            <div class="skills-row">
              <span class="sk-label" style="background:${f.color}">${f.label}</span>
              <span class="sk-tags">${f.tags.map(t => `<span>${t}</span>`).join('')}</span>
            </div>
          `).join('')}
        </div>
        <div>
          <div class="label" style="margin-bottom:8px;">the toolkit</div>
          <div class="skills-tools">${r.tools.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
      </div>
    `;
  }
  const logoHTML = r.logoPair
    ? `<div class="stamp-logo-pair">${r.logoPair.map(l => `<img src="${l}" alt="">`).join('')}</div>`
    : r.logo
      ? `<img class="stamp-logo" src="${r.logo}" alt="">`
      : `<div class="stamp-icon">✈</div>`;
  return `
    <div class="visa-page visa-page--stamp">
      <div class="stamp ${r.shape} rot-2" style="--c:${r.color}">
        ${logoHTML}
        <div class="stamp-title">${r.role}</div>
        <div class="stamp-sub">ENTRY · ${r.start}</div>
      </div>
      <div class="visa-company">${r.company}</div>
      <div class="visa-dates">ENTRY ${r.start} &nbsp;·&nbsp; EXIT ${r.end}</div>
    </div>
    <div class="visa-page visa-page--detail">
      <div class="label">purpose of visit</div>
      <div class="visa-role">${r.role}</div>
      <div class="visa-sub-purpose">${r.purpose}</div>
      <ul class="visa-endorsements">
        ${r.endorsements.map(e => `<li>${e}</li>`).join('')}
      </ul>
      <button class="btn btn--accent case-toggle" id="caseToggle">view full case study ↓</button>
      <div class="case-study" id="caseStudy">
        <div class="case-study-inner">
          <div class="case-block"><div class="label">problem</div><p>${r.caseStudy.problem}</p></div>
          <div class="case-block"><div class="label">strategy</div><p>${r.caseStudy.strategy}</p></div>
          <div class="case-block"><div class="label">execution</div><p>${r.caseStudy.execution}</p></div>
          <div class="case-block"><div class="label">result</div><p>${r.caseStudy.result}</p></div>
        </div>
      </div>
    </div>
  `;
}

function renderSpread(){
  const r = ROLES[current];
  caseOpen = false;
  spreadEl.innerHTML = spreadHTML(r);

  const toggle = document.getElementById('caseToggle');
  if (toggle){
    toggle.addEventListener('click', (e) => {
      caseOpen = !caseOpen;
      document.getElementById('caseStudy').classList.toggle('open', caseOpen);
      e.target.textContent = caseOpen ? 'hide case study ↑' : 'view full case study ↓';
    });
  }

  progressEl.textContent = `${current + 1} / ${ROLES.length}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === ROLES.length - 1;
  renderTOC();
}

function goTo(index, direction){
  if (animating || index < 0 || index >= ROLES.length || index === current) return;
  const dir = direction || (index > current ? 'next' : 'prev');
  animating = true;

  // clone the current page as a "leaf" that physically flips away
  const leaf = document.createElement('div');
  leaf.className = 'flip-leaf visa-spread passport-paper';
  leaf.innerHTML = spreadEl.innerHTML;
  stageEl.appendChild(leaf);

  // swap the real content underneath immediately (revealed as the leaf turns)
  current = index;
  renderSpread();

  requestAnimationFrame(() => {
    leaf.classList.add(dir === 'next' ? 'flip-next' : 'flip-prev');
  });
  leaf.addEventListener('animationend', () => {
    leaf.remove();
    animating = false;
  }, { once: true });
}

prevBtn.addEventListener('click', () => goTo(current - 1, 'prev'));
nextBtn.addEventListener('click', () => goTo(current + 1, 'next'));
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') goTo(current + 1, 'next');
  if (e.key === 'ArrowLeft') goTo(current - 1, 'prev');
});

// ---- tactile hover: the page tilts toward the cursor like a real passport ----
const EDGE_ZONE = 0.14; // outer 14% of the spread reads as a "grab the corner" zone

stageEl.addEventListener('mousemove', (e) => {
  if (animating) return;
  const rect = stageEl.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width;   // 0 (left) → 1 (right)
  const py = (e.clientY - rect.top) / rect.height;    // 0 (top) → 1 (bottom)
  const rotY = (px - 0.5) * 10;   // subtle left/right tilt
  const rotX = (0.5 - py) * 4;    // subtle up/down tilt
  spreadEl.style.transform = `perspective(2000px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;

  const nearLeft = px < EDGE_ZONE && current > 0;
  const nearRight = px > 1 - EDGE_ZONE && current < ROLES.length - 1;
  stageEl.classList.toggle('at-left-edge', nearLeft);
  stageEl.classList.toggle('at-right-edge', nearRight);
});
stageEl.addEventListener('mouseleave', () => {
  spreadEl.style.transform = '';
  stageEl.classList.remove('at-left-edge', 'at-right-edge');
});
stageEl.addEventListener('click', (e) => {
  if (e.target.closest('button, a')) return; // let real controls behave normally
  const rect = stageEl.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width;
  if (px < EDGE_ZONE) goTo(current - 1, 'prev');
  else if (px > 1 - EDGE_ZONE) goTo(current + 1, 'next');
});

renderSpread();
