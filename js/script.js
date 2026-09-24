/* ============================================================
   PORTFOLIO — script.js

   Structure:
     1. Portfolio Data  — edit personal info, projects, skills here
     2. DOM References
     3. Navigation
     4. Left Panel     — swap image per page
     5. Home Page      — render social links + project grid
     6. Work Page      — render project rows
     7. About Page     — render skills + timeline
     8. Contact Page   — render info blocks
     9. Project Modal
    10. Contact Form   — validation + submission
    11. Mobile Menu
    12. Init
   ============================================================ */


/* ============================================================
   1. PORTFOLIO DATA
   Substitute your real information here before publishing.
   ============================================================ */
const portfolioData = {

  personal: {
    name: 'Luiz Gustavo de Oliveira',
    role: 'Dev. FullStack em formação',
    email: 'ogusta321@gmail.com',
    location: 'Brasil',
    bio: 'Movido por código, curiosidade e vontade de construir soluções digitais que realmente fazem a diferença. Com uma paixão por unir estética e funcionalidade.',
  },

  // Substitute with your real URLs before publishing.
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/lg-devhub', icon: 'github', openNewTab: true },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/luiz-gustavo-de-oliveira-abab43259/', icon: 'linkedin', openNewTab: true },
    { label: 'Instagram', url: 'https://instagram.com/acc.gustavo', icon: 'instagram', openNewTab: true },
    { label: 'Email', url: 'mailto:ogusta321@gmail.com', icon: 'email', openNewTab: false },
  ],

  projects: [
    {
      id: 'shelfscanner',
      title: 'ShelfScanner',
      badge: 'Python',
      tagline: 'Visão Computacional com IA para identificação de livros',
      description: 'Visão computacional com inteligência artificial para identificação e busca de livros em estantes através de OCR e APIs.',
      objective: 'Explorar visão computacional e IA aplicadas a um problema real, combinando OCR, processamento de imagens e integração com APIs externas para identificar e catalogar livros automaticamente.',
      technologies: ['Python', 'OpenCV', 'AI', 'OCR'],
      features: [
        'Extração de texto de imagens via OCR',
        'Processamento e análise de imagens de estantes',
        'Consulta a APIs externas de livros',
        'Retorno de dados estruturados (título e autor)',
        'Integração entre visão computacional e consumo de APIs',
      ],
      year: '2026',
      image: 'assets/books.jpg',
      github: 'https://github.com/lg-devhub/machine_learning_projects',
      demo: '',
    },
    {
      id: 'sua-casa-container',
      title: 'Sua Casa, Seu Contêiner',
      badge: 'HTML · CSS · JS',
      tagline: 'Site institucional moderno e responsivo',
      description: 'Site institucional desenvolvido com foco em responsividade, performance e experiência visual cinematográfica.',
      objective: 'Criar uma presença digital marcante para arquitetura sustentável em contêineres, aliando estética refinada e arquitetura web fluida.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Design limpo, elegante e cinematográfico',
        'Adaptação responsiva precisa para desktop, tablet e mobile',
        'Transições suaves e micro-interações refinadas',
        'Estruturação semântica e boas práticas de acessibilidade',
      ],
      year: '2026',
      image: 'assets/img4.jpg',
      github: 'https://github.com/lg-devhub',
      demo: '',
    },
    {
      id: 'catequese',
      title: 'Paróquia Sagrada Família',
      badge: 'Python',
      tagline: 'Sistema de Inscrições para Catequese · Extensão Universitária',
      description: 'Sistema web para digitalização e controle de inscrições para catequese com gerenciamento administrativo.',
      objective: 'Contribuir com a comunidade local através da tecnologia, oferecendo à paróquia uma ferramenta simples e eficiente para gerenciar candidatos inscritos na catequese.',
      technologies: ['Python', 'Flask', 'MySQL', 'API'],
      features: [
        'Cadastro e inscrição online de catequizandos',
        'Painel administrativo para controle de inscrições',
        'Listagem e filtragem de inscritos',
        'Projeto em grupo — extensão comunitária universitária',
        'Desenvolvido para a Paróquia Sagrada Família de Taubaté',
      ],
      year: '2026',
      image: 'assets/pomba.jpg',
      github: 'https://github.com/lg-devhub/EXTENSION_PROJECTS',
      demo: '',
    },
    {
      id: 'snake',
      title: 'Snake Game',
      badge: 'JavaScript',
      tagline: 'Jogo clássico desenvolvido com Canvas e Sprites',
      description: 'Recriação do clássico jogo da cobrinha em JavaScript puro com renderização em Canvas, animações e sprites.',
      objective: 'Consolidar conceitos fundamentais de game loop, detecção de colisões em grade, física simples e renderização 2D no navegador.',
      technologies: ['JavaScript', 'HTML5 Canvas', 'Game Dev'],
      features: [
        'Game loop nativo com requestAnimationFrame',
        'Sistema de colisão, pontuação e recorde dinâmico',
        'Sprites gráficos personalizados e animação fluida',
        'Controles reativos por teclado e touch',
      ],
      year: '2026',
      image: 'assets/img1.jpg',
      github: 'https://github.com/lg-devhub',
      demo: '',
    },
    {
      id: 'golang-projects',
      title: 'Golang Projects',
      badge: 'Go',
      tagline: 'Coleção de projetos desenvolvidos em Go',
      description: 'Repositório com projetos práticos em Go, explorando concorrência com Goroutines, channels e microsserviços.',
      objective: 'Consolidar o aprendizado em Go através de projetos reais, explorando os principais recursos da linguagem e as melhores práticas do ecossistema backend.',
      technologies: ['Go', 'Goroutines', 'REST API'],
      features: [
        'Fundamentos de Go e tipagem forte',
        'APIs e Serviços Web com alto throughput',
        'Concorrência com Goroutines e Canais',
        'Integração de Banco de Dados',
        'Código Limpo e Melhores Práticas',
      ],
      year: '2026',
      image: 'assets/golanggif.gif',
      github: 'https://github.com/lg-devhub/GOLANG-PROJECTS',
      demo: '',
    },
    {
      id: 'nodejs-projects',
      title: 'Node.js Projects',
      badge: 'TypeScript',
      tagline: 'Projetos em JavaScript e TypeScript com Node.js',
      description: 'Construção de APIs REST robustas com Node.js e TypeScript, gerenciamento de rotas, middlewares e banco de dados.',
      objective: 'Aprofundar o domínio do ecossistema Node.js, explorando boas práticas de desenvolvimento backend com JavaScript e TypeScript.',
      technologies: ['Node.js', 'TypeScript', 'Express'],
      features: [
        'APIs REST com Node.js e Express',
        'Rotas, middlewares e autenticação JWT',
        'JavaScript e TypeScript com tipagem estrita',
        'Integração com Banco de Dados',
        'Boas práticas de desenvolvimento backend',
      ],
      year: '2026',
      image: 'assets/node.png',
      github: 'https://github.com/lg-devhub/nodejs-projects',
      demo: '',
    },
  ],

  skills: [
    {
      group: 'Front-End',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular'],
    },
    {
      group: 'Back-End',
      items: ['TypeScript', 'Node.JS', 'Golang (GO)', 'Python', 'Flask', 'FastAPI', 'Java'],
    },
    {
      group: 'Infraestrutura',
      items: ['Docker', 'Amazon Web Services'],
    },
    {
      group: 'Banco de Dados',
      items: ['MySQL', 'HeidiSQL', 'XAMPP'],
    },
    {
      group: 'Inteligências Artificiais',
      items: ['Machine Learning', 'Linguagem R'],
    },
  ],

  experience: {
    military: {
      role: 'Militar - Exército Brasileiro',
      department: 'Atuação em Seção de Informática, Almoxarifado e Secretaria',
      image: 'assets/exercito.png',
      activities: [
        'Atuação na Seção de Informática, realizando manutenção de hardware e software, equipamentos de vigilância, suporte técnico aos usuários e atendimento às demandas relacionadas aos recursos de Tecnologia da Informação.',
        'Realização de atividades de manutenção, configuração e suporte de equipamentos de informática, contribuindo para o funcionamento dos recursos tecnológicos da unidade.',
        'Atuação no Almoxarifado, realizando controle, organização e movimentação de materiais e equipamentos.',
        'Apoio às atividades da Secretaria do Batalhão, auxiliando no despacho, recebimento, conferência e correção de documentações administrativas.',
        'Organização e controle de documentos e informações, garantindo maior precisão e organização dos processos internos.',
        'Desenvolvimento de experiência profissional em ambiente organizacional, com atuação em suporte técnico, resolução de problemas, organização, responsabilidade e atendimento às demandas internas.',
      ],
    },
    education: [
      {
        title: 'Graduação em Análise e Desenvolvimento de Sistemas',
        status: 'Cursando',
        subtitle: 'Ensino Superior',
      },
      {
        title: 'Técnico em Desenvolvimento de Sistemas',
        period: '2021 – 2022',
        institution: 'SENAI Félix Guisard',
        image: 'assets/senai.png',
      },
    ],
  },

  // Images used per page on the left panel
  pageImages: {
    home: 'assets/homewallpaper.png',
    work: 'assets/orb.gif',
    about: 'assets/blackwall.gif',
    contact: 'assets/img3.jpg',
  },
};


/* ============================================================
   2. DOM REFERENCES
   ============================================================ */
const dom = {
  navLinks: document.querySelectorAll('.nav-link'),
  mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
  allPages: document.querySelectorAll('.page'),
  panelLeftImage: document.getElementById('panel-left-image'),
  homeProjectsGrid: document.getElementById('home-projects-grid'),
  socialLinksList: document.querySelector('.home-social-stack'),
  workProjectList: document.getElementById('work-project-list'),
  carouselWindow: document.getElementById('carousel-window'),
  carouselTrack: document.getElementById('carousel-track'),
  carouselPrev: document.getElementById('carousel-prev'),
  carouselNext: document.getElementById('carousel-next'),
  carouselPagination: document.getElementById('carousel-pagination'),
  skillsGrid: document.getElementById('skills-grid'),
  timeline: document.getElementById('timeline'),
  contactInfoGrid: document.getElementById('contact-info-grid'),
  viewAllLink: document.querySelector('.section-view-all'),

  // Modal
  modal: document.getElementById('project-modal'),
  modalBackdrop: document.getElementById('modal-backdrop'),
  modalClose: document.getElementById('modal-close'),
  modalImage: document.getElementById('modal-image'),
  modalImagePlaceholder: document.getElementById('modal-image-placeholder'),
  modalYear: document.getElementById('modal-year'),
  modalTechList: document.getElementById('modal-tech-list'),
  modalTitle: document.getElementById('modal-title'),
  modalDescription: document.getElementById('modal-description'),
  modalObjective: document.getElementById('modal-objective'),
  modalFeaturesWrapper: document.getElementById('modal-features-wrapper'),
  modalFeaturesList: document.getElementById('modal-features-list'),
  modalActions: document.getElementById('modal-actions'),

  // Form
  contactForm: document.getElementById('contact-form'),
  inputName: document.getElementById('input-name'),
  inputEmail: document.getElementById('input-email'),
  inputMessage: document.getElementById('input-message'),
  formSuccess: document.getElementById('form-success'),

  // Mobile menu
  hamburger: document.querySelector('.nav-hamburger'),
  mobileMenu: document.getElementById('mobile-menu'),
};


/* ============================================================
   3. NAVIGATION
   ============================================================ */

// Pages available and their corresponding hash
const PAGES = ['home', 'work', 'about', 'contact'];

function getActivePage() {
  const hash = window.location.hash.replace('#', '');
  return PAGES.includes(hash) ? hash : 'home';
}

function navigateTo(pageId) {
  if (!PAGES.includes(pageId)) return;

  // Update URL hash without reloading
  history.pushState(null, '', `#${pageId}`);

  document.body.dataset.activePage = pageId;
  showPage(pageId);
  updateNavActiveState(pageId);
  updateLeftPanelImage(pageId);
  closeMobileMenu();

  if (pageId === 'work' && typeof updateCarouselPosition === 'function') {
    requestAnimationFrame(() => {
      renderCarouselPagination();
      updateCarouselPosition();
    });
  }

  // Scroll the right panel back to top on page change
  const panelRight = document.getElementById('panel-right');
  if (panelRight) panelRight.scrollTop = 0;
}

function showPage(pageId) {
  dom.allPages.forEach(page => {
    const isTarget = page.dataset.page === pageId;
    page.hidden = !isTarget;
  });
}

function updateNavActiveState(pageId) {
  [...dom.navLinks, ...dom.mobileNavLinks].forEach(link => {
    const isActive = link.dataset.page === pageId;
    link.classList.toggle('is-active', isActive);
    link.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
}

// Intercept all navigation clicks — nav links, mobile links, brand, and CTA
function bindNavigationClicks() {
  const allNavLinks = [
    ...dom.navLinks,
    ...dom.mobileNavLinks,
  ];

  allNavLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });

  // Nav brand logo link to home
  const navBrand = document.querySelector('.nav-dock-brand');
  if (navBrand) {
    navBrand.addEventListener('click', e => {
      e.preventDefault();
      navigateTo('home');
    });
  }

  // Hero CTA button "Ver projetos"
  const heroCtaWork = document.getElementById('hero-cta-work');
  if (heroCtaWork) {
    heroCtaWork.addEventListener('click', e => {
      e.preventDefault();
      navigateTo('work');
    });
  }

  // "View All" link on Home
  if (dom.viewAllLink) {
    dom.viewAllLink.addEventListener('click', e => {
      e.preventDefault();
      navigateTo('work');
    });
  }

  // Circular action button on left panel
  const panelLeftAction = document.querySelector('.panel-left-action');
  if (panelLeftAction) {
    panelLeftAction.addEventListener('click', e => {
      e.preventDefault();
      navigateTo('work');
    });
  }
}

// Handle browser back/forward
window.addEventListener('popstate', () => {
  const page = getActivePage();
  document.body.dataset.activePage = page;
  showPage(page);
  updateNavActiveState(page);
  updateLeftPanelImage(page);
  if (page === 'work' && typeof updateCarouselPosition === 'function') {
    requestAnimationFrame(() => {
      renderCarouselPagination();
      updateCarouselPosition();
    });
  }
});


/* ============================================================
   4. LEFT PANEL IMAGE
   Ensures the left image is always present, visible, and edge-to-edge
   ============================================================ */
function updateLeftPanelImage(pageId) {
  const video = document.getElementById('panel-left-video');
  const playPauseBtn = document.getElementById('panel-video-playpause');

  if (pageId === 'contact') {
    // Show video, hide image
    if (dom.panelLeftImage) {
      dom.panelLeftImage.style.opacity = '0';
    }
    if (video) {
      video.classList.add('is-visible');
      video.muted = false;
      video.volume = 0.4;
      video.play();
    }
    // Show play/pause button
    if (playPauseBtn) {
      playPauseBtn.hidden = false;
      syncPlayPauseIcon(video, playPauseBtn);
    }
    return;
  }

  // Hide video and play/pause button, show image
  if (video) {
    video.classList.remove('is-visible');
    video.pause();
    video.currentTime = 0;
  }
  if (playPauseBtn) {
    playPauseBtn.hidden = true;
  }

  const src = portfolioData.pageImages[pageId] || portfolioData.pageImages.home;
  if (!dom.panelLeftImage) return;

  dom.panelLeftImage.style.display = 'block';

  // Check if target image is already loaded
  const currentSrc = dom.panelLeftImage.getAttribute('src');
  if (currentSrc === src) {
    dom.panelLeftImage.style.opacity = '1';
    return;
  }

  dom.panelLeftImage.style.opacity = '0';

  setTimeout(() => {
    dom.panelLeftImage.src = src;
    dom.panelLeftImage.alt = `Imagem da seção ${pageId}`;
    dom.panelLeftImage.style.opacity = '1';
  }, 150);
}

function syncPlayPauseIcon(video, btn) {
  if (!video || !btn) return;
  const playing = !video.paused;
  btn.querySelector('.icon-play').style.display  = playing ? 'none' : 'block';
  btn.querySelector('.icon-pause').style.display = playing ? 'block' : 'none';
  btn.setAttribute('aria-label', playing ? 'Pausar vídeo' : 'Reproduzir vídeo');
}

function initVideoPlayPause() {
  const video = document.getElementById('panel-left-video');
  const btn   = document.getElementById('panel-video-playpause');
  if (!video || !btn) return;

  btn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    syncPlayPauseIcon(video, btn);
  });

  // Keep icon in sync if video ends or is played externally
  video.addEventListener('play',  () => syncPlayPauseIcon(video, btn));
  video.addEventListener('pause', () => syncPlayPauseIcon(video, btn));
}


/* ============================================================
   5. HOME PAGE — social links + project grid
   ============================================================ */

// SVG icons for social platforms
const socialIcons = {
  github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" fill="currentColor"/>
  </svg>`,

  linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2V9Zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  instagram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>`,

  email: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="m22 6-10 7L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  external: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};

function renderSocialLinks() {
  if (!dom.socialLinksList) return;

  dom.socialLinksList.innerHTML = portfolioData.socialLinks
    .map(link => `
      <li>
        <a
          class="social-link-item"
          href="${link.url}"
          ${link.openNewTab ? 'target="_blank" rel="noopener noreferrer"' : ''}
          aria-label="${link.label}"
        >
          <span class="social-link-label">${link.label}</span>
          <span class="social-link-icon">${socialIcons[link.icon] || socialIcons.external}</span>
        </a>
      </li>
    `)
    .join('');
}

function renderHomeProjects() {
  if (!dom.homeProjectsGrid) return;

  // Show only the first 4 projects on the home page
  const featured = portfolioData.projects.slice(0, 4);

  dom.homeProjectsGrid.innerHTML = featured
    .map((project, index) => `
      <div
        class="project-card"
        role="listitem"
        tabindex="0"
        data-project-id="${project.id}"
        aria-label="Ver projeto ${project.title}"
      >
        <div class="project-card-image-wrapper">
          <span class="project-card-tab">${project.title}</span>
          <img
            src="${project.image}"
            alt="Imagem do projeto ${project.title}"
            class="project-card-image"
            loading="lazy"
          />
        </div>
        <div class="project-card-body">
          <p class="project-card-number">${String(index + 1).padStart(2, '0')}</p>
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-description">${project.description}</p>
          <div class="project-card-tech">
            ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `)
    .join('');

  // Click and keyboard handlers for project cards
  dom.homeProjectsGrid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openProjectModal(card.dataset.projectId));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(card.dataset.projectId);
      }
    });
  });
}


/* ============================================================
   6. WORK PAGE — Cinematic Projects Carousel
   ============================================================ */
let carouselCurrentIndex = 0;
let carouselTouchStartX = 0;
let carouselTouchStartY = 0;
let carouselIsSwiping = false;

function getCarouselVisibleCount() {
  const width = window.innerWidth;
  if (width >= 1200) return 4;
  if (width >= 900) return 3;
  if (width >= 640) return 2;
  return 1;
}

function getCarouselMaxIndex() {
  const visible = getCarouselVisibleCount();
  return Math.max(0, portfolioData.projects.length - visible);
}

function updateCarouselPosition() {
  if (!dom.carouselTrack) return;
  const maxIdx = getCarouselMaxIndex();
  if (carouselCurrentIndex > maxIdx) {
    carouselCurrentIndex = maxIdx;
  }
  if (carouselCurrentIndex < 0) {
    carouselCurrentIndex = 0;
  }

  const cards = dom.carouselTrack.children;
  if (cards.length === 0) return;

  const firstCard = cards[0];
  const cardRect = firstCard.getBoundingClientRect();
  const cardWidth = cardRect.width;
  const computedGap = parseFloat(window.getComputedStyle(dom.carouselTrack).gap) || 22;

  const offset = carouselCurrentIndex * (cardWidth + computedGap);
  dom.carouselTrack.style.transform = `translateX(-${offset}px)`;

  // Update arrow buttons
  if (dom.carouselPrev) {
    dom.carouselPrev.disabled = carouselCurrentIndex <= 0;
    dom.carouselPrev.classList.toggle('is-disabled', carouselCurrentIndex <= 0);
  }
  if (dom.carouselNext) {
    dom.carouselNext.disabled = carouselCurrentIndex >= maxIdx;
    dom.carouselNext.classList.toggle('is-disabled', carouselCurrentIndex >= maxIdx);
  }

  // Update pagination dots
  if (dom.carouselPagination) {
    const dots = dom.carouselPagination.querySelectorAll('.pagination-dot');
    dots.forEach((dot, idx) => {
      const isActive = idx === carouselCurrentIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }
}

function renderCarouselPagination() {
  if (!dom.carouselPagination) return;
  const maxIdx = getCarouselMaxIndex();

  let dotsHtml = '';
  for (let i = 0; i <= maxIdx; i++) {
    const isActive = i === carouselCurrentIndex;
    dotsHtml += `
      <button
        class="pagination-dot ${isActive ? 'is-active' : ''}"
        data-slide-index="${i}"
        aria-label="Ir para slide ${i + 1}"
        aria-selected="${isActive ? 'true' : 'false'}"
        role="tab"
      ></button>
    `;
  }
  dom.carouselPagination.innerHTML = dotsHtml;

  dom.carouselPagination.querySelectorAll('.pagination-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      carouselCurrentIndex = parseInt(dot.dataset.slideIndex, 10);
      updateCarouselPosition();
    });
  });
}

function renderWorkProjects() {
  if (!dom.carouselTrack) return;

  dom.carouselTrack.innerHTML = portfolioData.projects
    .map(project => `
      <article
        class="project-carousel-card"
        data-project-id="${project.id}"
        tabindex="0"
        role="group"
        aria-label="${project.title}"
      >
        <!-- Card Image Header -->
        <div class="project-card-image-box">
          <img src="${project.image}" alt="${project.title}" class="project-card-img" loading="lazy" />
          <div class="project-card-overlay"></div>
          ${project.badge ? `<span class="project-card-badge">${project.badge}</span>` : ''}
        </div>

        <!-- Card Body -->
        <div class="project-card-body">
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-description">${project.description}</p>

          <div class="project-card-footer">
            <div class="project-card-tags">
              ${project.technologies.slice(0, 3).map(tech => `<span class="project-tag">${tech}</span>`).join('')}
            </div>
            <button class="project-card-action-btn" aria-label="Ver detalhes de ${project.title}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `)
    .join('');

  // Click & keyboard handlers to open modal
  dom.carouselTrack.querySelectorAll('.project-carousel-card').forEach(card => {
    card.addEventListener('click', () => openProjectModal(card.dataset.projectId));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(card.dataset.projectId);
      }
    });
  });

  renderCarouselPagination();
  updateCarouselPosition();

  // Prev / Next button listeners (bind only once)
  if (dom.carouselPrev && !dom.carouselPrev.dataset.bound) {
    dom.carouselPrev.dataset.bound = 'true';
    dom.carouselPrev.addEventListener('click', () => {
      if (carouselCurrentIndex > 0) {
        carouselCurrentIndex--;
        updateCarouselPosition();
      }
    });
  }

  if (dom.carouselNext && !dom.carouselNext.dataset.bound) {
    dom.carouselNext.dataset.bound = 'true';
    dom.carouselNext.addEventListener('click', () => {
      const maxIdx = getCarouselMaxIndex();
      if (carouselCurrentIndex < maxIdx) {
        carouselCurrentIndex++;
        updateCarouselPosition();
      }
    });
  }

  // Touch Swipe on carousel track for mobile & tablet
  if (dom.carouselTrack && !dom.carouselTrack.dataset.boundTouch) {
    dom.carouselTrack.dataset.boundTouch = 'true';

    dom.carouselTrack.addEventListener('touchstart', e => {
      carouselTouchStartX = e.changedTouches[0].screenX;
      carouselTouchStartY = e.changedTouches[0].screenY;
      carouselIsSwiping = true;
    }, { passive: true });

    dom.carouselTrack.addEventListener('touchend', e => {
      if (!carouselIsSwiping) return;
      carouselIsSwiping = false;
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - carouselTouchStartX;
      const diffY = touchEndY - carouselTouchStartY;

      // Ensure horizontal swipe intent
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        const maxIdx = getCarouselMaxIndex();
        if (diffX < 0 && carouselCurrentIndex < maxIdx) {
          carouselCurrentIndex++;
          updateCarouselPosition();
        } else if (diffX > 0 && carouselCurrentIndex > 0) {
          carouselCurrentIndex--;
          updateCarouselPosition();
        }
      }
    }, { passive: true });
  }

  // Window resize handler (debounced)
  if (!window._carouselResizeBound) {
    window._carouselResizeBound = true;
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        renderCarouselPagination();
        updateCarouselPosition();
      }, 100);
    });
  }
}


/* ============================================================
   7. ABOUT PAGE — skills + timeline
   ============================================================ */
function renderSkills() {
  if (!dom.skillsGrid) return;

  dom.skillsGrid.innerHTML = portfolioData.skills
    .map(group => `
      <div class="skills-group">
        <p class="skills-group-name">${group.group}</p>
        ${group.items.map(item => `<span class="skill-item">${item}</span>`).join('')}
      </div>
    `)
    .join('');
}

function renderTimeline() {
  if (!dom.timeline) return;

  dom.timeline.innerHTML = portfolioData.experience
    .map(entry => `
      <div class="timeline-entry">
        <p class="timeline-period">${entry.period}</p>
        <div>
          <p class="timeline-body-title">${entry.title}</p>
          <p class="timeline-body-subtitle">${entry.subtitle}</p>
          <p class="timeline-body-description">${entry.description}</p>
        </div>
      </div>
    `)
    .join('');
}


/* ============================================================
   8. CONTACT PAGE — info blocks
   ============================================================ */
function renderContactInfo() {
  if (!dom.contactInfoGrid) return;

  const { email, location } = portfolioData.personal;
  const { github, linkedin } = Object.fromEntries(
    portfolioData.socialLinks.map(l => [l.label.toLowerCase(), l.url])
  );

  const contactItems = [
    { label: 'Email', value: email, href: `mailto:${email}` },
    { label: 'GitHub', value: github?.replace('https://', '') || '', href: github || '#' },
    { label: 'LinkedIn', value: linkedin?.replace('https://', '') || '', href: linkedin || '#' },
    { label: 'Localização', value: location, href: null },
  ];

  dom.contactInfoGrid.innerHTML = contactItems
    .map(item => `
      <div class="contact-info-item">
        <p class="contact-info-label">${item.label}</p>
        ${item.href
        ? `<a class="contact-info-value" href="${item.href}" ${item.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${item.value}</a>`
        : `<p class="contact-info-value">${item.value}</p>`
      }
      </div>
    `)
    .join('');
}


/* ============================================================
   9. PROJECT MODAL
   ============================================================ */
function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  // Populate modal fields
  dom.modalYear.textContent = project.year;

  dom.modalTechList.innerHTML = project.technologies
    .map(t => `<span class="tech-tag">${t}</span>`)
    .join('');

  dom.modalTitle.textContent = project.title;
  dom.modalDescription.textContent = project.description;
  dom.modalObjective.textContent = project.objective || '';

  // Features list (optional)
  if (project.features && project.features.length > 0) {
    dom.modalFeaturesList.innerHTML = project.features
      .map(f => `<li>${f}</li>`)
      .join('');
    dom.modalFeaturesWrapper.hidden = false;
  } else {
    dom.modalFeaturesWrapper.hidden = true;
  }

  // Action buttons
  dom.modalActions.innerHTML = '';
  if (project.github) {
    dom.modalActions.insertAdjacentHTML('beforeend', `
      <a class="modal-action-btn is-primary" href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="Ver código no GitHub">
        ${socialIcons.github} GitHub
      </a>
    `);
  }
  if (project.demo) {
    dom.modalActions.insertAdjacentHTML('beforeend', `
      <a class="modal-action-btn" href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="Ver demo do projeto">
        ${socialIcons.external} Demo
      </a>
    `);
  }

  // Modal image
  if (project.image) {
    dom.modalImage.src = project.image;
    dom.modalImage.alt = `Imagem do projeto ${project.title}`;
    dom.modalImage.style.display = 'block';
    dom.modalImagePlaceholder.style.display = 'block';
  } else {
    dom.modalImage.style.display = 'none';
  }

  dom.modal.hidden = false;
  document.body.style.overflow = 'hidden';
  dom.modalClose.focus();
}

function closeProjectModal() {
  dom.modal.hidden = true;
  document.body.style.overflow = '';
}

function bindModalEvents() {
  dom.modalClose.addEventListener('click', closeProjectModal);
  dom.modalBackdrop.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !dom.modal.hidden) closeProjectModal();
  });
}


/* ============================================================
   10. CONTACT FORM — EmailJS integration
   ============================================================ */

// ─── EmailJS Configuration ───────────────────────────────────
// As chaves são carregadas de js/config.js (definidas via .env e protegidas pelo .gitignore)
const EMAILJS_CONFIG = {
  publicKey:  window.ENV?.EMAILJS_PUBLIC_KEY  || '',
  serviceId:  window.ENV?.EMAILJS_SERVICE_ID  || '',
  templateId: window.ENV?.EMAILJS_TEMPLATE_ID || '',
};
// ─────────────────────────────────────────────────────────────

// Template variables expected in your EmailJS template:
//   {{from_name}}    — name filled by visitor
//   {{from_email}}   — email filled by visitor
//   {{subject}}      — subject filled by visitor
//   {{message}}      — message filled by visitor
//   {{to_email}}     — your email (set in template or here)

function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }
}

function getErrorElement(input) {
  return input.parentElement.querySelector('.form-error');
}

function setFieldError(input, message) {
  input.classList.add('has-error');
  const error = getErrorElement(input);
  if (error) error.textContent = message;
}

function clearFieldError(input) {
  input.classList.remove('has-error');
  const error = getErrorElement(input);
  if (error) error.textContent = '';
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateForm() {
  let isValid = true;

  clearFieldError(dom.inputName);
  clearFieldError(dom.inputEmail);
  clearFieldError(dom.inputMessage);

  if (!dom.inputName.value.trim()) {
    setFieldError(dom.inputName, 'Por favor, informe seu nome.');
    isValid = false;
  }

  if (!dom.inputEmail.value.trim()) {
    setFieldError(dom.inputEmail, 'Por favor, informe seu email.');
    isValid = false;
  } else if (!isValidEmail(dom.inputEmail.value.trim())) {
    setFieldError(dom.inputEmail, 'Por favor, informe um email válido.');
    isValid = false;
  }

  if (!dom.inputMessage.value.trim()) {
    setFieldError(dom.inputMessage, 'Por favor, escreva uma mensagem.');
    isValid = false;
  }

  return isValid;
}

function setFormLoading(isLoading) {
  const btn       = document.getElementById('form-submit');
  const label     = btn?.querySelector('.btn-label');
  const loading   = btn?.querySelector('.btn-loading');
  if (!btn) return;

  btn.disabled          = isLoading;
  if (label)   label.hidden   = isLoading;
  if (loading) loading.hidden = !isLoading;
}

function showFormSuccess() {
  dom.contactForm.reset();
  document.getElementById('form-error-msg').hidden = true;
  dom.formSuccess.hidden = false;
  setTimeout(() => { dom.formSuccess.hidden = true; }, 6000);
}

function showFormError() {
  document.getElementById('form-error-msg').hidden = false;
  dom.formSuccess.hidden = true;
  setTimeout(() => { document.getElementById('form-error-msg').hidden = true; }, 8000);
}

function handleFormSubmit(e) {
  e.preventDefault();
  if (!validateForm()) return;

  setFormLoading(true);

  const name = dom.inputName.value.trim();
  const email = dom.inputEmail.value.trim();
  const subject = document.getElementById('input-subject')?.value.trim() || '(sem assunto)';
  const message = dom.inputMessage.value.trim();

  const templateParams = {
    name: name,
    from_name: name,
    email: email,
    from_email: email,
    reply_to: email,
    subject: subject,
    message: message,
  };

  emailjs
    .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
    .then(() => {
      setFormLoading(false);
      showFormSuccess();
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      setFormLoading(false);
      showFormError();
    });
}

function bindFormEvents() {
  if (!dom.contactForm) return;

  dom.contactForm.addEventListener('submit', handleFormSubmit);

  // Clear errors on input
  [dom.inputName, dom.inputEmail, dom.inputMessage].forEach(input => {
    input.addEventListener('input', () => clearFieldError(input));
  });
}


/* ============================================================
   11. MOBILE MENU
   ============================================================ */
function openMobileMenu() {
  if (!dom.mobileMenu || !dom.hamburger) return;
  dom.mobileMenu.classList.add('is-open');
  dom.hamburger.classList.add('is-open');
  dom.hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (!dom.mobileMenu || !dom.hamburger) return;
  dom.mobileMenu.classList.remove('is-open');
  dom.hamburger.classList.remove('is-open');
  dom.hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function bindMobileMenuEvents() {
  if (!dom.hamburger || !dom.mobileMenu) return;

  dom.hamburger.addEventListener('click', () => {
    const isOpen = dom.mobileMenu.classList.contains('is-open');
    isOpen ? closeMobileMenu() : openMobileMenu();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && dom.mobileMenu && dom.mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });
}


/* ============================================================
   12. INIT — entry point
   ============================================================ */
function init() {
  const initialPage = getActivePage();
  document.body.dataset.activePage = initialPage;

  // Render all dynamic content once
  renderSocialLinks();
  renderHomeProjects();
  renderWorkProjects();
  renderSkills();
  renderTimeline();
  renderContactInfo();

  // Show the correct page based on URL hash
  showPage(initialPage);
  updateNavActiveState(initialPage);
  updateLeftPanelImage(initialPage);

  // Bind all event listeners
  bindNavigationClicks();
  bindModalEvents();
  bindFormEvents();
  bindMobileMenuEvents();
  initVideoPlayPause();
  initEmailJS();
}

document.addEventListener('DOMContentLoaded', init);
