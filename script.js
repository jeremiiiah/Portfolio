// 
// DATA
// 

const work = [
  {
    role: "Plant Manager",
    company: "University of Surrey",
    period: "Jan 2026 – Jun 2026",
    desc: "Managed daily operations of the university's chemical engineering pilot plant, overseeing safety compliance, preventive maintenance, and commissioning of process units.",
    bullets: [
      "Directed safety compliance across the plant, including formal risk assessments and COSHH documentation to maintain a safe working environment.",
      "Mentored student cohorts through live plant work, raising their average grades from 64% to 73%.",
      "Oversaw preventive maintenance schedules and coordinated startup and shutdown sequences for continuous process units."
    ]
  },
  {
    role: "Scholars Summer Research Internship",
    company: "University of Surrey — Faculty of Engineering",
    period: "Jul 2025 – Oct 2025",
    desc: "One of only 2 candidates selected per faculty for this competitive research internship. Analysed material performance using simulation software and contributed to a research paper on sustainable gas storage.",
    bullets: [
      "Collaborated in a multidisciplinary team to model material selectivities for hydrocarbon separation using molecular simulation tools.",
      "Authored a research paper presenting findings on porous carbon gas adsorption, contributing to the understanding of sustainable storage solutions.",
      "Developed project planning, technical writing, and data presentation skills across a four-month research cycle."
    ]
  },
  {
    role: "Telephone Campaign — Fundraising",
    company: "University of Surrey",
    period: "Feb 2023 – Mar 2023",
    desc: "Engaged university alumni through personalised calls to raise support for student bursary programmes.",
    bullets: [
      "Secured over £18,000 in donations by building genuine rapport with alumni and communicating the impact of student bursaries.",
      "Strengthened communication, active listening, and client engagement skills in a fast-paced outreach environment."
    ]
  }
];

const projects = [
  {
    title: "Project 1: AI Cooling Scheme — Waterless Data Centre Simulator",
    badge: "Live System",
    desc: "Programmed a live web simulator modelling how an AI control scheme manages cooling in a zero-water-waste data centre. The site visualises energy optimisation decisions and thermal fluid behaviour in real time.",
    stack: ["TypeScript", "Process Control", "Numerical Modelling", "Vite/React"],
    link: "http://jeremiah-coolingsim.xyz/",
    linkLabel: "> jeremiah-coolingsim.xyz",
    full: true
  },
  {
    title: "Project 2: Molecular Simulations & Hydrocarbon Separation",
    badge: "Research",
    desc: "Examined molecular interactions on porous carbon materials, evaluating gas adsorption selectivities for hydrocarbon separation. Findings contributed to a self-written paper on sustainable gas storage, produced during the Scholars Summer Internship.",
    stack: ["Molecular Dynamics", "HYSYS", "Porous Carbon", "Data Analysis"]
  },
  {
    title: "Project 3: Private Home Server & Homelab",
    badge: "Infrastructure",
    desc: "Built and maintain a physical home server running Dockerised services, multiple Linux distributions, and custom network configurations — a hands-on environment for learning infrastructure and systems administration.",
    stack: ["Linux", "Docker", "Self-Hosting", "Networking"]
  },
  {
    title: "Project 4:Portfolio Website",
    badge: "Personal Build",
    desc: "Designed and devloped this personal portfolio website, with the of having as minimal reliance on templates/frameworks and AI assistancee as possible (outside of the ASCII Art), to teach myself the fundamentals of web development and design.",
    stack: ["HTML", "CSS", "JavaScript"]
  }
];

const albums = [
  {
    title:  "OK Computer",
    artist: "Radiohead",
    embed:  "https://open.spotify.com/embed/album/6dVIqQ8qmQ5GBnJ9shOYGE?utm_source=generator",
    link:   "https://open.spotify.com/album/6dVIqQ8qmQ5GBnJ9shOYGE",
    desc:   "What I believe to be my favourite record of all time. The album goes over seemingly dark and existential themes, going over what it means to be human in a digital age. On top of the brilliant themeing throughout the album, the production keeps to being incredible from beginning to end. Every song sounds so deep and spacious, with some standout tracks being 'Paranoid Android', 'Karma Police', and 'No Surprises' for me. The album is a masterpiece of both production and songwriting, making for what I think is an appropriatly number one album"
  },
  {
    title:  "Random Access Memories",
    artist: "Daft Punk",
    embed:  "https://open.spotify.com/embed/album/4m2880jivSbbyEGAKfITCa?utm_source=generator",
    link:   "https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa",
    desc:   "Anybody who knows me will know how much I love not only Daft Punk, but this album also. Throughout the albuum, it explores how to be music, as with a lot of Daft punk's previous work, they lean into the electronic and robotic side of themselves - this album takes a step back from all of it, and incredibly integrates both electronic and live instrumentation into such an amazing album. Important tracks for me include 'Get Lucky', 'Lose Yourself to Dance', the outro 'Contact'."
  },
  {
    title:  "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    embed:  "https://open.spotify.com/embed/album/7ycBtnsMtyVbbwTfJwRjSP?utm_source=generator",
    link:   "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP",
    desc:   "Throughout the album, Kendrick explores how to use music as storytelling. With a lot of hip-hop's previous work, artists lean into rigid, grid-perfect digital production—this album takes a step back from all of that. It incredibly integrates jazz instrumentation into such an amazing album. Important tracks for me include 'Wesley's Theory', 'How much a dollar cost', and the dark and heavy 'The blacker the berry'."
  },
  {
    title:  "Joy Techniques",
    artist: "Nate Mercereau",
    embed:  "https://open.spotify.com/embed/album/65h18a9wnA2wiecnMicp7D?utm_source=generator",
    link:   "https://open.spotify.com/album/65h18a9wnA2wiecnMicp7D",
    desc:   "Probably one of the lesser known albums on this list, but still one of my favourites. The prodction on this album is gorgeous. Some of the tracks are more minimalistic, yet still incredibly rich, where others are very loud, layered and full of energy. Big fan of this album!"
  },
  {
    title:  "Discovery",
    artist: "Daft Punk",
    embed:  "https://open.spotify.com/embed/album/2noRn2Aes5aoNVsU6iWThc?utm_source=generator",
    link:   "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc",
    desc:   "Yes another Daft Punk album, but understandably so, seeing as almost everyone reading this now wouldve heard at least 4-5 of the tracks on this classic album. The work by the frenchmen here is a great example of how to turn music into music - the sampling across the entire tracklist is unlike anything at least I've personally heard before and to come after."
  },
  {
    title:  "Blonde",
    artist: "Frank Ocean",
    embed:  "https://open.spotify.com/embed/album/3mH6qwIy9crq0I9YQbOuDf?utm_source=generator",
    link:   "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf",
    desc:   "A touching and heartfelt album, frank ocean may not have the most expansive of discographies, but what he's lacked in quality is more than made up for in quality. The album being themed around the concept of loss makes for a very emotional listen on every listen. Frank, if you're reading this, please release another album."
  },
  {
    title:  "Toxicity",
    artist: "System of a Down",
    embed:  "https://open.spotify.com/embed/album/6jWde94ln40epKIQCd8XUh?utm_source=generator",
    link:   "https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh",
    desc:   "A loud andunapologetic album. The energy and intensity is unmatched throughout, and despite its aggressive nature, remains to sound so well put together with some of the best production I've heard on a rock album. Important tracks for me include 'Chop Suey', 'Toxicity', and 'Forest'."
  },
  {
    title:  "Hellfire",
    artist: "black midi",
    embed:  "https://open.spotify.com/embed/album/68z6MWYYNmvTcru1QMcYId?utm_source=generator",
    link:   "https://open.spotify.com/album/68z6MWYYNmvTcru1QMcYId",
    desc:   "Maximalism done with terrifying precision. Another lesser known album, probably due to its experimental and at times abrasive nature. No track is like the one previous, collating to one of the most unique listening experiences ive had. Some of the most complex layering ive ever heard from any other work ive heard, this pseudo-jazz album never fails to impress me."
  },
  {
    title:  "Untrue",
    artist: "Burial",
    embed:  "https://open.spotify.com/embed/album/1oLxSFO8bJwsU2OmZY4cdU?utm_source=generator",
    link:   "https://open.spotify.com/album/1oLxSFO8bJwsU2OmZY4cdU",
    desc:   "A dark and atmosphereic electronic album, Burial's work here is a great example of how to use music to create a mood. Oftenly described as a minimalist album, i feel quite the opposite - there are so many sounds playing over and against each other that when structured correctly comes to create an incredibly in depth and immersive experiecne."
  },
  {
    title:  "The New Sound",
    artist: "Geordie Greep",
    embed:  "https://open.spotify.com/embed/album/07YS7ooqYtvPZLlW59MHY5?utm_source=generator",
    link:   "https://open.spotify.com/album/07YS7ooqYtvPZLlW59MHY5",
    desc:   "The most recent album on this list. With this being Geordie Greep's first solo album after disbanding from Black Midi (A band that also features on this list) it's clear to see how talented he is. Taking inspiration from Latin and jazz music, while also exploring initially quite crude themes, the album eventually turns to tell an incredible story about self-discovery and desire. The entire album sounds so grand and theatrical, it's clear to hear how much passion Geordie has for music."
  }
];


// 
// RENDER: timeline
// 

const tlEl = document.getElementById('timeline');
work.forEach(w => {
  const el = document.createElement('div');
  el.className = 'tl-entry';
  el.innerHTML = `
    <div class="tl-node"></div>
    <div class="tl-card">
      <div class="tl-header">
        <div>
          <div class="tl-role">${w.role}</div>
          <div class="tl-co">${w.company}</div>
        </div>
        <span class="tl-period">${w.period}</span>
      </div>
      <div class="tl-desc">${w.desc}</div>
      <span class="tl-bullets-label">Key Accomplishments</span>
      <div class="tl-bullets">
        ${w.bullets.map(b => `<div class="tl-bullet"><span class="tl-bullet-arrow">►</span><p>${b}</p></div>`).join('')}
      </div>
    </div>`;
  tlEl.appendChild(el);
});


// 
// RENDER: projects (1st full width, 2 and 3 side by side)
// 

const pgEl = document.getElementById('proj-grid');

function projCard(p) {
  return `
    <div class="proj-card">
      <div class="proj-header">
        <span class="proj-title">${p.title}</span>
        <span class="proj-badge">${p.badge}</span>
      </div>
      <p class="proj-desc">${p.desc}</p>
      <div class="tags">${p.stack.map(s => `<span class="tag">${s}</span>`).join('')}</div>
      ${p.link ? `<div style="margin-top:10px"><a class="proj-link" href="${p.link}" target="_blank" rel="noopener noreferrer">${p.linkLabel}</a></div>` : ''}
    </div>`;
}

pgEl.innerHTML = projCard(projects[0]) +
  `<div class="proj-two">${projCard(projects[1])}${projCard(projects[2])}</div>` +
  projCard(projects[3]);


// 
// RENDER: album list
// 

const alEl = document.getElementById('album-list');
albums.forEach((a, i) => {
  const btn = document.createElement('button');
  btn.className = 'album-btn' + (i === 0 ? ' active' : '');
  btn.dataset.idx = i;
  btn.innerHTML = `
    <span class="album-idx">${String(i + 1).padStart(2, '0')}</span>
    <span class="album-name">${a.title}</span>
    <span class="album-artist">${a.artist}</span>`;
  btn.addEventListener('click', () => selectAlbum(i));
  alEl.appendChild(btn);
});

function selectAlbum(idx) {
  const a = albums[idx];
  document.querySelectorAll('.album-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  document.getElementById('now-rank').textContent          = String(idx + 1).padStart(2, '0');
  document.getElementById('now-title').textContent         = a.title;
  document.getElementById('now-artist').textContent        = a.artist;
  document.getElementById('now-desc').textContent          = a.desc;
  document.getElementById('spotify-iframe-right').src      = a.embed;
  document.getElementById('spotify-ext').href              = a.link;
}
selectAlbum(0);


// 
// TAB SWITCHING
// 

const tabMeta = {
  home:     { doc: 'Profile',    leftTitle: 'Biography &amp; Academic Profile', leftSec: '' },
  work:     { doc: 'Experience', leftTitle: 'Experience',                       leftSec: '' },
  projects: { doc: 'Projects',   leftTitle: 'Projects',                         leftSec: '' },
  music:    { doc: 'Soundtrack', leftTitle: 'Soundtrack Index',                 leftSec: '' }
};

let activeTab = '';

function switchTab(tab) {
  if (tab === activeTab) return;
  activeTab = tab;

  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));

  // Home & Music use two-column layout; Experience & Projects go full width.
  const showLeft = (tab === 'home' || tab === 'music');
  const grid     = document.getElementById('main-grid');
  const leftCol  = document.getElementById('left-col');
  leftCol.style.display = showLeft ? '' : 'none';
  grid.className = 'main-grid' + (showLeft ? '' : ' wide');

  ['home', 'music'].forEach(id => {
    const el = document.getElementById('left-' + id);
    if (el) {
      const on = (id === tab);
      el.classList.toggle('active', on);
      el.classList.toggle('hidden', !on);
    }
  });

  ['home', 'work', 'projects', 'music'].forEach(id => {
    const el = document.getElementById('right-' + id);
    if (el) { el.classList.remove('active'); el.classList.add('hidden'); }
  });

  const activeRight = document.getElementById('right-' + tab);
  if (activeRight) {
    activeRight.classList.remove('hidden');
    activeRight.classList.add('active');
    activeRight.classList.remove('fade-up');
    void activeRight.offsetWidth; // force reflow to retrigger animation
    activeRight.classList.add('fade-up');
  }

  const m = tabMeta[tab];
  document.getElementById('doc-name').textContent     = m.doc;
  document.getElementById('left-win-title').innerHTML = m.leftTitle;
  document.getElementById('left-section').textContent = m.leftSec;
}

document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => switchTab(b.dataset.tab)));


// 
// CLOCK
// 

function tickClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toTimeString().slice(0, 8) + ' UTC';
}
setInterval(tickClock, 1000);
tickClock();


// 
// COPY PHONE
// 

function copyPhone() {
  navigator.clipboard.writeText('07450654554').catch(() => {});
  const lbl = document.getElementById('phone-label');
  lbl.textContent = 'Copied!';
  setTimeout(() => lbl.textContent = '07450654554', 2000);
}


// 
// ASCII MOLECULE
// 

(function () {
  const COLS = 64, ROWS = 18, ASP = 2.1;
  const pre  = document.getElementById('mol-pre');
  const S    = 1.0;

  const atoms = [
    { x:  0*S,     y:  1.4*S,  z: 0, t: 'C' },
    { x:  1.21*S,  y:  0.7*S,  z: 0, t: 'C' },
    { x:  1.21*S,  y: -0.7*S,  z: 0, t: 'C' },
    { x:  0*S,     y: -1.4*S,  z: 0, t: 'C' },
    { x: -1.21*S,  y: -0.7*S,  z: 0, t: 'C' },
    { x: -1.21*S,  y:  0.7*S,  z: 0, t: 'C' },
    { x:  2.42*S,  y:  1.4*S,  z: 0, t: 'C' },
    { x:  3.63*S,  y:  0.7*S,  z: 0, t: 'C' },
    { x:  3.63*S,  y: -0.7*S,  z: 0, t: 'C' },
    { x:  2.42*S,  y: -1.4*S,  z: 0, t: 'C' },
    { x: -2.42*S,  y:  1.4*S,  z: 0, t: 'C' },
    { x: -3.63*S,  y:  0.7*S,  z: 0, t: 'C' },
    { x: -3.63*S,  y: -0.7*S,  z: 0, t: 'C' },
    { x: -2.42*S,  y: -1.4*S,  z: 0, t: 'C' },
    { x:  0*S,     y:  2.5*S,  z: 0, t: 'H' },
    { x:  2.42*S,  y:  2.5*S,  z: 0, t: 'H' },
    { x:  4.74*S,  y:  1.4*S,  z: 0, t: 'H' },
    { x:  4.74*S,  y: -1.4*S,  z: 0, t: 'H' },
    { x:  2.42*S,  y: -2.5*S,  z: 0, t: 'H' },
    { x:  0*S,     y: -2.5*S,  z: 0, t: 'H' },
    { x: -2.42*S,  y: -2.5*S,  z: 0, t: 'H' },
    { x: -4.74*S,  y: -1.4*S,  z: 0, t: 'H' },
    { x: -4.74*S,  y:  1.4*S,  z: 0, t: 'H' },
    { x: -2.42*S,  y:  2.5*S,  z: 0, t: 'H' },
  ];

  const bonds = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
    [1,6],[6,7],[7,8],[8,9],[9,2],
    [5,10],[10,11],[11,12],[12,13],[13,4],
    [0,14],[6,15],[7,16],[8,17],[9,18],
    [3,19],[13,20],[12,21],[11,22],[10,23],
  ];

  let rx = 0.4, ry = 0;

  function rotX(p, a) { const c = Math.cos(a), s = Math.sin(a); return { x: p.x, y: p.y*c - p.z*s, z: p.y*s + p.z*c, t: p.t }; }
  function rotY(p, a) { const c = Math.cos(a), s = Math.sin(a); return { x: p.x*c + p.z*s, y: p.y, z: -p.x*s + p.z*c, t: p.t }; }
  function project(p) { const fov = 10, s = fov / (fov + p.z); return { cx: Math.round((p.x*s*5/ASP) + COLS/2), cy: Math.round((p.y*s*-3.2) + ROWS/2), z: p.z, t: p.t }; }
  function lerp(a, b, t) { return a + (b - a) * t; }

  function frame() {
    rx += 0.007; ry += 0.018;
    const buf  = Array.from({ length: ROWS }, () => new Array(COLS).fill(' '));
    const zbuf = Array.from({ length: ROWS }, () => new Array(COLS).fill(-Infinity));
    const proj = atoms.map(a => project(rotY(rotX(a, rx), ry)));

    bonds.forEach(([i, j]) => {
      const a = proj[i], b = proj[j], steps = 12;
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const cx = Math.round(lerp(a.cx, b.cx, t));
        const cy = Math.round(lerp(a.cy, b.cy, t));
        const z  = lerp(a.z, b.z, t);
        if (cx >= 0 && cx < COLS && cy >= 0 && cy < ROWS && z > zbuf[cy][cx]) {
          zbuf[cy][cx] = z;
          buf[cy][cx]  = '·';
        }
      }
    });

    proj.forEach(p => {
      const { cx, cy, z, t } = p;
      if (cx >= 0 && cx < COLS && cy >= 0 && cy < ROWS && z > zbuf[cy][cx]) {
        zbuf[cy][cx] = z;
        buf[cy][cx]  = t;
      }
    });

    pre.textContent = buf.map(r => r.join('')).join('\n');
    requestAnimationFrame(frame);
  }

  frame();
})();
