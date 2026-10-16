const ROLES = [
  {
    isPassportBio: true,
    company: 'Passport',
    role: 'Passport',
    color: 'var(--stampc-pink)'
  },
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
  if (r.isPassportBio){
    return `
      <div class="visa-page visa-page--passport-stamps">
        <div class="pp-page-head"><span>VISAS</span><span>VISTOS</span></div>

        <div class="ink-stamp" style="--w:176px; --x:5%; --y:5%; --rot:-8deg; --ink:#b8362e; z-index:2"
             data-detail="born here — the thread that runs through everything i care about, especially education">
          <svg viewBox="0 0 200 200" role="img" aria-label="China, born here"><g filter="url(#inkRough)" fill="none" stroke="currentColor">
            <circle cx="100" cy="100" r="94" stroke-width="4"/>
            <circle cx="100" cy="100" r="85" stroke-width="1.4"/>
            <circle cx="100" cy="100" r="55" stroke-width="2"/>
            <path id="arcChina" d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" stroke="none"/>
            <text font-family="Josefin Sans, sans-serif" font-weight="700" font-size="13" letter-spacing="2" fill="currentColor" stroke="none"><textPath href="#arcChina" startOffset="0" textLength="432" lengthAdjust="spacing">IMMIGRATION · CHINA · ORIGIN ·</textPath></text>
            <text x="100" y="97" text-anchor="middle" font-family="Josefin Sans, sans-serif" font-weight="700" font-size="25" letter-spacing="2" fill="currentColor" stroke="none">CHINA</text>
            <text x="100" y="118" text-anchor="middle" font-family="Courier Prime, monospace" font-weight="700" font-size="13" letter-spacing="3" fill="currentColor" stroke="none">★ BORN ★</text>
          </g></svg>
        </div>

        <div class="ink-stamp" style="--w:178px; --x:49%; --y:7%; --rot:6deg; --ink:#2f4f9e; z-index:3"
             data-detail="part of my education happened here, between the UK and the US">
          <svg viewBox="0 0 220 132" role="img" aria-label="United Kingdom arrival"><g filter="url(#inkRough)" fill="none" stroke="currentColor">
            <rect x="4" y="4" width="212" height="124" rx="8" stroke-width="4"/>
            <rect x="12" y="12" width="196" height="108" rx="4" stroke-width="1.3"/>
            <text x="110" y="36" text-anchor="middle" font-family="Josefin Sans, sans-serif" font-weight="600" font-size="12.5" letter-spacing="3.2" fill="currentColor" stroke="none">UNITED KINGDOM</text>
            <line x1="26" y1="46" x2="194" y2="46" stroke-width="1.3"/>
            <text x="110" y="82" text-anchor="middle" font-family="Josefin Sans, sans-serif" font-weight="700" font-size="34" letter-spacing="3" fill="currentColor" stroke="none">ARRIVAL</text>
            <line x1="26" y1="92" x2="194" y2="92" stroke-width="1.3"/>
            <text x="110" y="110" text-anchor="middle" font-family="Courier Prime, monospace" font-weight="700" font-size="12" letter-spacing="2" fill="currentColor" stroke="none">LONDON · SURREY</text>
          </g></svg>
        </div>

        <div class="ink-stamp" style="--w:176px; --x:27%; --y:27%; --rot:5deg; --ink:#c2185b; z-index:4"
             data-detail="Ed.M at Harvard — and where my first venture, an education startup, got its start">
          <svg viewBox="0 0 200 200" role="img" aria-label="Cambridge, Harvard Ed.M"><g filter="url(#inkRough)" fill="none" stroke="currentColor">
            <polygon points="100,5 195,100 100,195 5,100" stroke-width="4"/>
            <polygon points="100,16 184,100 100,184 16,100" stroke-width="1.3"/>
            <text x="100" y="72" text-anchor="middle" font-family="Courier Prime, monospace" font-weight="700" font-size="11.5" letter-spacing="3" fill="currentColor" stroke="none">ARRIVAL</text>
            <text x="100" y="101" text-anchor="middle" font-family="Josefin Sans, sans-serif" font-weight="700" font-size="22" letter-spacing="1" fill="currentColor" stroke="none">CAMBRIDGE</text>
            <line x1="52" y1="110" x2="148" y2="110" stroke-width="1.4"/>
            <text x="100" y="130" text-anchor="middle" font-family="Courier Prime, monospace" font-weight="700" font-size="11.5" letter-spacing="2" fill="currentColor" stroke="none">HARVARD ED.M</text>
          </g></svg>
        </div>

        <div class="ink-stamp" style="--w:184px; --x:3%; --y:47%; --rot:-5deg; --ink:#d2691e; z-index:3"
             data-detail="based here since diving deep into tech startups">
          <svg viewBox="0 0 220 132" role="img" aria-label="New York, based here now"><g filter="url(#inkRough)" fill="none" stroke="currentColor">
            <rect x="4" y="4" width="212" height="124" rx="6" stroke-width="4"/>
            <rect x="4" y="4" width="212" height="30" fill="currentColor" stroke="none" opacity=".95"/>
            <text x="110" y="25" text-anchor="middle" font-family="Josefin Sans, sans-serif" font-weight="700" font-size="14" letter-spacing="4" fill="#fff" stroke="none" style="mix-blend-mode:normal">U.S. · ADMITTED</text>
            <text x="110" y="72" text-anchor="middle" font-family="Josefin Sans, sans-serif" font-weight="700" font-size="21" letter-spacing=".6" fill="currentColor" stroke="none">NEW YORK, NY</text>
            <line x1="22" y1="84" x2="198" y2="84" stroke-width="1.4"/>
            <text x="110" y="109" text-anchor="middle" font-family="Courier Prime, monospace" font-weight="700" font-size="13" letter-spacing="3" fill="currentColor" stroke="none">BASED HERE NOW</text>
          </g></svg>
        </div>

        <div class="ink-stamp" style="--w:196px; --x:44%; --y:50%; --rot:7deg; --ink:#1f6f78; z-index:4"
             data-detail="the language i grew up thinking in">
          <svg viewBox="0 0 220 140" role="img" aria-label="Mandarin, native"><g filter="url(#inkRough)" fill="none" stroke="currentColor">
            <ellipse cx="110" cy="70" rx="105" ry="65" stroke-width="3.6" stroke-dasharray="9 5"/>
            <ellipse cx="110" cy="70" rx="93" ry="53" stroke-width="1.3"/>
            <text x="110" y="75" text-anchor="middle" font-family="serif" font-weight="700" font-size="44" fill="currentColor" stroke="none">文</text>
            <text x="110" y="29" text-anchor="middle" font-family="Josefin Sans, sans-serif" font-weight="700" font-size="13" letter-spacing="4" fill="currentColor" stroke="none">MANDARIN</text>
            <text x="110" y="117" text-anchor="middle" font-family="Courier Prime, monospace" font-weight="700" font-size="13" letter-spacing="4" fill="currentColor" stroke="none">NATIVE</text>
          </g></svg>
        </div>

        <div class="ink-stamp" style="--w:150px; --x:13%; --y:72%; --rot:-4deg; --ink:#3b7d4f; z-index:3"
             data-detail="still practicing — send me your favorite k-dramas">
          <svg viewBox="0 0 200 140" role="img" aria-label="Korean, learning"><g filter="url(#inkRough)" fill="none" stroke="currentColor">
            <polygon points="52,5 148,5 195,70 148,135 52,135 5,70" stroke-width="3.8"/>
            <polygon points="56,15 144,15 184,70 144,125 56,125 16,70" stroke-width="1.2"/>
            <text x="100" y="64" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="34" fill="currentColor" stroke="none">한</text>
            <text x="100" y="88" text-anchor="middle" font-family="Josefin Sans, sans-serif" font-weight="700" font-size="14" letter-spacing="3" fill="currentColor" stroke="none">KOREAN</text>
            <text x="100" y="106" text-anchor="middle" font-family="Courier Prime, monospace" font-weight="700" font-size="10.5" letter-spacing="3" fill="currentColor" stroke="none">LEARNING</text>
          </g></svg>
        </div>

        <div class="ink-stamp ink-stamp--static" aria-hidden="true" style="--w:196px; --x:46%; --y:79%; --rot:-13deg; --ink:#34609e; z-index:5">
          <svg viewBox="0 0 240 84"><g filter="url(#inkRough)" fill="none" stroke="currentColor">
            <rect x="4" y="4" width="232" height="76" rx="5" stroke-width="4.5"/>
            <rect x="11" y="11" width="218" height="62" rx="2" stroke-width="1.3"/>
            <text x="120" y="55" text-anchor="middle" font-family="Josefin Sans, sans-serif" font-weight="700" font-size="38" letter-spacing="5" fill="currentColor" stroke="none">APPROVED</text>
          </g></svg>
        </div>

        <div class="pp-page-num">2</div>
      </div>

      <div class="visa-page visa-page--passport-id">
        <div class="pid-title">Bria's Passport</div>

        <div class="pid-main">
          <div class="pid-photo">
            <img src="assets/life/photo-professional.jpg" alt="Bria Han">
          </div>
          <div class="pid-fields">
            <div class="pid-field">
              <div class="pid-label">Name</div>
              <div class="pid-bar">BRIA HAN</div>
            </div>
            <div class="pid-field-row">
              <div class="pid-field">
                <div class="pid-label">Based in</div>
                <div class="pid-bar">NEW YORK, NY</div>
              </div>
              <div class="pid-field">
                <div class="pid-label">Experience</div>
                <div class="pid-bar">4+ YRS · SINCE 2021</div>
              </div>
            </div>
            <div class="pid-field">
              <div class="pid-label">Field</div>
              <div class="pid-bar pid-bar--hand">mysterious gorg girl in tech</div>
            </div>
          </div>
        </div>

        <div class="pid-field">
          <div class="pid-label">Education</div>
          <div class="pid-bar pid-bar--edu">
            <div class="edu-logos">
              <div class="edu-logo-item"><img src="assets/logos/harvard-word.png" alt="Harvard University"></div>
              <div class="edu-logo-item"><img src="assets/logos/surrey-word.png" alt="University of Surrey"></div>
            </div>
          </div>
        </div>

        <div class="pid-field">
          <div class="pid-label">Fun fact</div>
          <div class="pid-bar pid-bar--hand">i'm a fun person and that is a fact :)</div>
        </div>

        <div class="pid-foot">
          <div class="pid-property">PROPERTY OF<strong>bria.han</strong></div>
          <div class="pid-sig">
            <div class="pid-label">Signature</div>
            <div class="pid-sig-script">Bria Han</div>
          </div>
        </div>

        <div class="pid-mrz">
          P&lt;USA&lt;HAN&lt;&lt;BRIA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br>
          GROWTH&lt;MARKETER&lt;&lt;NYC&lt;&lt;SINCE&lt;2021&lt;&lt;&lt;&lt;&lt;&lt;&lt;
        </div>
      </div>
    `;
  }
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

// passport stamps — click to "press" the stamp and reveal a detail.
// re-wired every render since the stamps are fresh DOM nodes each time
// (same behavior that used to live on the about-me page's passport).
let activeTip = null;
let activeStamp = null;
function closeStampTip(){
  if (!activeTip) return;
  const tip = activeTip;
  if (window.gsap) gsap.to(tip, { scale: 0.85, autoAlpha: 0, duration: 0.18, ease: 'power1.in', onComplete: () => tip.remove() });
  else tip.remove();
  activeTip = null;
  activeStamp = null;
}
function wireStampDetails(root){
  const stamps = root.querySelectorAll('.stamp[data-detail], .ink-stamp[data-detail]');
  if (!stamps.length || !window.gsap) return;
  stamps.forEach(stamp => {
    stamp.addEventListener('click', (e) => {
      e.stopPropagation();
      gsap.timeline()
        .to(stamp, { scale: 0.85, duration: 0.08, ease: 'power2.out' })
        .to(stamp, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.45)' });

      const reopening = activeStamp === stamp;
      closeStampTip();
      if (reopening) return;

      const tip = document.createElement('div');
      tip.className = 'stamp-tip';
      tip.textContent = stamp.dataset.detail;
      document.body.appendChild(tip);

      const r = stamp.getBoundingClientRect();
      tip.style.left = (r.left + r.width / 2 + window.scrollX) + 'px';
      tip.style.top = (r.top + window.scrollY - 12) + 'px';

      gsap.fromTo(tip,
        { scale: 0.7, autoAlpha: 0, y: 8 },
        { scale: 1, autoAlpha: 1, y: 0, duration: 0.4, ease: 'back.out(1.8)' }
      );

      activeTip = tip;
      activeStamp = stamp;
    });
  });
}
document.addEventListener('click', closeStampTip);
window.addEventListener('scroll', closeStampTip, { passive: true });

function renderSpread(){
  const r = ROLES[current];
  caseOpen = false;
  spreadEl.innerHTML = spreadHTML(r);
  spreadEl.classList.toggle('is-passport-page', !!r.isPassportBio);
  wireStampDetails(spreadEl);

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
  renderStack();
}

// the rest of the book, peeking from behind the open spread — pages
// already read on the left, pages still ahead on the right. Click one
// to jump straight to it, like fanning through a physical book.
const stackLeftEl = document.getElementById('bookStackLeft');
const stackRightEl = document.getElementById('bookStackRight');
const MAX_PEEK = 4;
function renderStack(){
  if (!stackLeftEl || !stackRightEl) return;

  const ahead = ROLES.slice(current + 1, current + 1 + MAX_PEEK);
  const behind = ROLES.slice(Math.max(0, current - MAX_PEEK), current).reverse();

  stackRightEl.innerHTML = ahead.map((r, i) => `
    <div class="book-stack-page" data-i="${current + 1 + i}" style="--i:${i}; --c:${r.color || 'var(--line)'}"></div>
  `).join('');
  stackLeftEl.innerHTML = behind.map((r, i) => `
    <div class="book-stack-page" data-i="${current - 1 - i}" style="--i:${i}; --c:${r.color || 'var(--line)'}"></div>
  `).join('');

  stackRightEl.querySelectorAll('.book-stack-page').forEach(el => {
    el.addEventListener('click', () => goTo(Number(el.dataset.i), 'next'));
  });
  stackLeftEl.querySelectorAll('.book-stack-page').forEach(el => {
    el.addEventListener('click', () => goTo(Number(el.dataset.i), 'prev'));
  });
}

function goTo(index, direction){
  if (animating || index < 0 || index >= ROLES.length || index === current) return;
  const dir = direction || (index > current ? 'next' : 'prev');
  const sign = dir === 'next' ? -1 : 1; // which way the page rotates
  animating = true;

  // only the right page actually turns — a real book's left page doesn't
  // fly anywhere when you flip forward, it just sits there while the
  // right page peels away from the spine. Clone just that half, sized
  // and positioned to match its real box exactly, so its own left edge
  // always IS the true spine (no more per-page-type origin math needed).
  const isPassport = spreadEl.classList.contains('is-passport-page');
  const oldRightPage = spreadEl.children[1];
  const stageRect = stageEl.getBoundingClientRect();
  const rightRect = oldRightPage.getBoundingClientRect();

  const leaf = document.createElement('div');
  leaf.className = 'flip-leaf passport-paper ' + oldRightPage.className;
  if (isPassport) leaf.classList.add('is-passport-page');
  // inline, not just the .flip-leaf class rule — some cloned content
  // classes (.visa-page--passport-id) set their own `position: relative`
  // for their own pseudo-elements, and since they're copied onto this
  // same leaf, a same-specificity class-vs-class tie let that win and
  // silently drop the leaf into normal document flow (visible as the old
  // page flashing in below the book for the whole animation). An inline
  // style always wins, so this can't happen no matter what content class
  // ends up riding along.
  leaf.style.position = 'absolute';
  leaf.style.left = (rightRect.left - stageRect.left) + 'px';
  leaf.style.top = (rightRect.top - stageRect.top) + 'px';
  leaf.style.width = rightRect.width + 'px';
  leaf.style.height = rightRect.height + 'px';
  leaf.innerHTML = oldRightPage.innerHTML;
  const leafBack = document.createElement('div');
  leafBack.className = 'flip-leaf-back';
  leaf.appendChild(leafBack);
  const leafGlow = document.createElement('div');
  leafGlow.className = 'flip-leaf-glow ' + (dir === 'next' ? 'flip-leaf-glow--next' : 'flip-leaf-glow--prev');
  leaf.appendChild(leafGlow);
  stageEl.appendChild(leaf);

  // swap the real content underneath immediately — the left page updates
  // in place since it was never part of the animation; the right page is
  // simply covered by the turning leaf until it clears
  current = index;
  renderSpread();

  const done = () => { leaf.remove(); animating = false; };
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!window.gsap || reduceMotion){
    done();
    return;
  }

  // a GSAP timeline driving the actual 3D rotation, instead of a CSS
  // @keyframes triggered through a raw requestAnimationFrame — same visual
  // idea (turn on the spine, shadow builds then eases off, a highlight
  // sweeps across it) but timed against real animation progress, plus a
  // page that visibly isn't rigid: it bows (skewY) and narrows slightly
  // as it turns edge-on (scaleX), both peaking exactly at the midpoint
  gsap.timeline({ onComplete: done })
    .set(leaf, { transformPerspective: 2000, force3D: true })
    .to(leaf, {
      rotationY: sign * 178,
      duration: 0.62,
      ease: 'power2.inOut',
      onUpdate(){
        const bow = Math.sin(this.progress() * Math.PI); // 0 → 1 → 0
        gsap.set(leaf, {
          skewY: sign * -bow * 2.2,
          scaleX: 1 - bow * 0.035
        });
      }
    }, 0)
    .to(leaf, {
      boxShadow: `${sign < 0 ? '-20px' : '20px'} 20px 50px rgba(0,0,0,0.3)`,
      duration: 0.28,
      ease: 'power1.in'
    }, 0)
    .to(leaf, {
      boxShadow: '0 30px 60px rgba(0,0,0,0.16)',
      duration: 0.34,
      ease: 'power1.out'
    }, 0.28)
    .fromTo(leafGlow,
      { backgroundPositionX: '120%', opacity: 0 },
      { backgroundPositionX: '-60%', opacity: 1, duration: 0.34, ease: 'power1.in' },
      0
    )
    .to(leafGlow, { opacity: 0, duration: 0.28, ease: 'power1.out' }, 0.34);
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
