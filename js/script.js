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
    name:     'SEU NOME',
    role:     'Software Developer',
    email:    'seuemail@email.com',
    location: 'Brasil',
    bio:      'Sou desenvolvedor de software focado na criação de aplicações modernas, funcionais e bem estruturadas. Gosto de transformar problemas em soluções através da tecnologia, combinando desenvolvimento, lógica e experiência do usuário.',
  },

  // Substitute with your real URLs before publishing.
  socialLinks: [
    { label: 'GitHub',   url: 'https://github.com/seuusuario',          icon: 'github',   openNewTab: true  },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/seuusuario',     icon: 'linkedin', openNewTab: true  },
    { label: 'Instagram',url: 'https://instagram.com/seuusuario',       icon: 'instagram',openNewTab: true  },
    { label: 'Email',    url: 'mailto:seuemail@email.com',              icon: 'email',    openNewTab: false },
  ],

  projects: [
    {
      id: 'stocka',
      title:       'Stocka',
      tagline:     'Sistema de Gestão de Laboratórios e Ativos',
      description: 'Plataforma completa para gerenciamento de ativos, equipamentos e laboratórios. Permite controle de inventário, rastreio de movimentações e geração de relatórios.',
      objective:   'Automatizar a gestão de ativos físicos em ambientes educacionais e corporativos, reduzindo falhas humanas e aumentando a rastreabilidade.',
      technologies:['Java', 'Vue.js', 'PostgreSQL'],
      features:    ['Cadastro e controle de ativos', 'Relatórios e histórico de movimentações', 'Autenticação com controle de acesso', 'Dashboard administrativo'],
      year:        '2026',
      image:       'assets/img2.jpg',
      github:      'https://github.com/seuusuario/stocka',
      demo:        '',
    },
    {
      id: 'devlinks',
      title:       'DevLinks',
      tagline:     'Agregador de Links para Desenvolvedores',
      description: 'Aplicação web estilo link-in-bio para desenvolvedores consolidarem seus perfis, projetos e redes sociais em uma única página personalizada.',
      objective:   'Oferecer uma alternativa simples e rápida para centralizar links profissionais sem depender de plataformas de terceiros.',
      technologies:['HTML', 'CSS', 'JavaScript'],
      features:    ['Personalização de tema claro/escuro', 'Links externos com preview', 'Responsivo para todos os dispositivos'],
      year:        '2026',
      image:       'assets/img5.jpg',
      github:      'https://github.com/seuusuario/devlinks',
      demo:        '',
    },
    {
      id: 'apigo',
      title:       'API Go',
      tagline:     'REST API com Autenticação JWT',
      description: 'API RESTful construída em Go com autenticação via JWT, estrutura MVC e integração com banco de dados relacional. Projetada para ser performática e simples de escalar.',
      objective:   'Demonstrar domínio de Go e arquitetura de APIs para projetos backend profissionais.',
      technologies:['Go', 'PostgreSQL', 'JWT'],
      features:    ['Autenticação e autorização JWT', 'CRUD completo de recursos', 'Middleware de logging e rate limiting', 'Deploy via Docker'],
      year:        '2026',
      image:       'assets/img3.jpg',
      github:      'https://github.com/seuusuario/api-go',
      demo:        '',
    },
    {
      id: 'taskboard',
      title:       'TaskBoard',
      tagline:     'Gerenciador de Tarefas Kanban',
      description: 'Aplicação Kanban para organização de tarefas com drag-and-drop, categorias e filtros. Interface limpa e focada em produtividade.',
      objective:   'Construir uma ferramenta pessoal de produtividade explorando manipulação de DOM e persistência local.',
      technologies:['HTML', 'CSS', 'JavaScript'],
      features:    ['Drag-and-drop entre colunas', 'Persistência via localStorage', 'Filtro e busca de tarefas', 'Exportação de tarefas'],
      year:        '2025',
      image:       'assets/img4.jpg',
      github:      'https://github.com/seuusuario/taskboard',
      demo:        '',
    },
  ],

  skills: [
    { group: 'Frontend',  items: ['HTML', 'CSS', 'JavaScript', 'Vue.js'] },
    { group: 'Backend',   items: ['Java', 'Go'] },
    { group: 'Database',  items: ['MySQL', 'PostgreSQL'] },
    { group: 'Tools',     items: ['Git', 'GitHub', 'VS Code', 'Docker'] },
  ],

  experience: [
    {
      period:      'Em andamento',
      title:       'Graduação',
      subtitle:    'Análise e Desenvolvimento de Sistemas',
      description: 'Formação superior focada em desenvolvimento de software, banco de dados, engenharia de sistemas e arquitetura de aplicações.',
    },
    {
      period:      '2024',
      title:       'Formação Técnica',
      subtitle:    'Desenvolvimento de Sistemas',
      description: 'Curso técnico com base em lógica de programação, desenvolvimento web, banco de dados relacional e boas práticas de engenharia de software.',
    },
    {
      period:      '2024 – 2025',
      title:       'Experiência Prática',
      subtitle:    'Tecnologia & Suporte',
      description: 'Experiência em ambientes que exigem organização, responsabilidade e resolução de problemas com foco em tecnologia e sistemas.',
    },
  ],

  // Images used per page on the left panel
  pageImages: {
    home:    'assets/img1.jpg',
    work:    'assets/img2.jpg',
    about:   'assets/img4.jpg',
    contact: 'assets/img3.jpg',
  },
};


/* ============================================================
   2. DOM REFERENCES
   ============================================================ */
const dom = {
  navLinks:          document.querySelectorAll('.nav-link'),
  mobileNavLinks:    document.querySelectorAll('.mobile-nav-link'),
  allPages:          document.querySelectorAll('.page'),
  panelLeftImage:    document.getElementById('panel-left-image'),
  homeProjectsGrid:  document.getElementById('home-projects-grid'),
  socialLinksList:   document.querySelector('.home-social-stack'),
  workProjectList:   document.getElementById('work-project-list'),
  skillsGrid:        document.getElementById('skills-grid'),
  timeline:          document.getElementById('timeline'),
  contactInfoGrid:   document.getElementById('contact-info-grid'),
  viewAllLink:       document.querySelector('.section-view-all'),

  // Modal
  modal:             document.getElementById('project-modal'),
  modalBackdrop:     document.getElementById('modal-backdrop'),
  modalClose:        document.getElementById('modal-close'),
  modalImage:        document.getElementById('modal-image'),
  modalImagePlaceholder: document.getElementById('modal-image-placeholder'),
  modalYear:         document.getElementById('modal-year'),
  modalTechList:     document.getElementById('modal-tech-list'),
  modalTitle:        document.getElementById('modal-title'),
  modalDescription:  document.getElementById('modal-description'),
  modalObjective:    document.getElementById('modal-objective'),
  modalFeaturesWrapper: document.getElementById('modal-features-wrapper'),
  modalFeaturesList: document.getElementById('modal-features-list'),
  modalActions:      document.getElementById('modal-actions'),

  // Form
  contactForm:       document.getElementById('contact-form'),
  inputName:         document.getElementById('input-name'),
  inputEmail:        document.getElementById('input-email'),
  inputMessage:      document.getElementById('input-message'),
  formSuccess:       document.getElementById('form-success'),

  // Mobile menu
  hamburger:         document.querySelector('.nav-hamburger'),
  mobileMenu:        document.getElementById('mobile-menu'),
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

  showPage(pageId);
  updateNavActiveState(pageId);
  updateLeftPanelImage(pageId);
  closeMobileMenu();

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

// Intercept all navigation clicks — nav links, mobile links, and "View All" link
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
  showPage(page);
  updateNavActiveState(page);
  updateLeftPanelImage(page);
});


/* ============================================================
   4. LEFT PANEL IMAGE
   Ensures the left image is always present, visible, and edge-to-edge
   ============================================================ */
function updateLeftPanelImage(pageId) {
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
          ${index === 0 ? `
          <div class="project-card-action" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>` : ''}
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
   6. WORK PAGE — project list rows
   ============================================================ */
function renderWorkProjects() {
  if (!dom.workProjectList) return;

  dom.workProjectList.innerHTML = portfolioData.projects
    .map(project => `
      <div
        class="work-project-row"
        role="listitem"
        tabindex="0"
        data-project-id="${project.id}"
        aria-label="Ver projeto ${project.title}"
      >
        <div class="work-project-main">
          <h2 class="work-project-name">${project.title}</h2>
          <p class="work-project-tagline">${project.tagline}</p>
          <div class="work-project-tech">
            ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="work-project-year">${project.year}</div>
      </div>
    `)
    .join('');

  dom.workProjectList.querySelectorAll('.work-project-row').forEach(row => {
    row.addEventListener('click', () => openProjectModal(row.dataset.projectId));
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(row.dataset.projectId);
      }
    });
  });
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
    { label: 'Email',       value: email,    href: `mailto:${email}` },
    { label: 'GitHub',      value: github?.replace('https://', '') || '',  href: github  || '#' },
    { label: 'LinkedIn',    value: linkedin?.replace('https://', '') || '', href: linkedin || '#' },
    { label: 'Localização', value: location,  href: null },
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
   10. CONTACT FORM — validation + submission
   ============================================================ */
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

// handleFormSubmit is the single place to plug in Formspree, EmailJS, or a custom backend.
function handleFormSubmit(e) {
  e.preventDefault();

  if (!validateForm()) return;

  /*
    To integrate Formspree: replace the block below with:
      fetch('https://formspree.io/f/SEU_ID', {
        method: 'POST',
        body: new FormData(dom.contactForm),
        headers: { 'Accept': 'application/json' }
      }).then(() => showFormSuccess());

    To use EmailJS:
      emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', dom.contactForm)
        .then(showFormSuccess);
  */

  showFormSuccess();
}

function showFormSuccess() {
  dom.contactForm.reset();
  dom.formSuccess.hidden = false;

  setTimeout(() => { dom.formSuccess.hidden = true; }, 6000);
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
  dom.mobileMenu.classList.add('is-open');
  dom.hamburger.classList.add('is-open');
  dom.hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  dom.mobileMenu.classList.remove('is-open');
  dom.hamburger.classList.remove('is-open');
  dom.hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function bindMobileMenuEvents() {
  dom.hamburger.addEventListener('click', () => {
    const isOpen = dom.mobileMenu.classList.contains('is-open');
    isOpen ? closeMobileMenu() : openMobileMenu();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && dom.mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });
}


/* ============================================================
   12. INIT — entry point
   ============================================================ */
function init() {
  const initialPage = getActivePage();

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
}

document.addEventListener('DOMContentLoaded', init);
