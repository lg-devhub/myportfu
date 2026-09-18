# Portfolio — SEU NOME

Portfólio pessoal profissional construído com HTML5, CSS3 e JavaScript Vanilla.  
Sem frameworks, sem dependências externas. Apenas abra o `index.html` no browser.

---

## Estrutura

```
portfolio/
│
├── index.html          ← Estrutura HTML e marcação semântica
├── css/
│   └── style.css       ← Todos os estilos organizados por seção
├── js/
│   └── script.js       ← Lógica SPA, dados, navegação, modal, formulário
├── assets/
│   ├── profile.jpg     ← Foto de perfil (Home e Work)
│   ├── about.jpg       ← Foto da página About
│   ├── contact.jpg     ← Foto da página Contact
│   ├── project-01.jpg  ← Thumbnail do Projeto 01
│   ├── project-02.jpg  ← Thumbnail do Projeto 02
│   ├── project-03.jpg  ← Thumbnail do Projeto 03
│   └── project-04.jpg  ← Thumbnail do Projeto 04
└── README.md
```

---

## Como personalizar

Abra `js/script.js` e edite o objeto `portfolioData` no topo do arquivo.

### Dados pessoais

```js
personal: {
  name:     'SEU NOME',
  role:     'Software Developer',
  email:    'seuemail@email.com',
  location: 'Brasil',
  bio:      'Sua bio aqui...',
},
```

### Redes sociais

```js
socialLinks: [
  { label: 'GitHub',   url: 'https://github.com/seuusuario', ... },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/seuusuario', ... },
  ...
]
```

### Projetos

Adicione ou remova objetos no array `projects`:

```js
{
  id:           'meu-projeto',       // identificador único (sem espaços)
  title:        'Nome do Projeto',
  tagline:      'Subtítulo curto',
  description:  'Descrição detalhada...',
  objective:    'Objetivo do projeto...',
  technologies: ['Go', 'PostgreSQL'],
  features:     ['Feature 1', 'Feature 2'],
  year:         '2026',
  image:        'assets/project-01.jpg',
  github:       'https://github.com/seuusuario/meu-projeto',
  demo:         '',  // deixe vazio se não houver demo
}
```

### Imagens

Substitua os arquivos na pasta `assets/` mantendo os mesmos nomes,
ou altere o caminho nos campos `image` dos projetos e em `pageImages`.

### Stack / Skills

```js
skills: [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
  { group: 'Backend',  items: ['Go', 'Java'] },
  ...
]
```

### Experiência & Formação

```js
experience: [
  {
    period:      '2024',
    title:       'Título',
    subtitle:    'Subtítulo / Instituição',
    description: 'Descrição...',
  },
  ...
]
```

---

## Integrar formulário de contato

O formulário está pronto — apenas adicione o serviço desejado em `handleFormSubmit()` em `script.js`.

**Formspree:**

```js
fetch('https://formspree.io/f/SEU_ID', {
  method: 'POST',
  body: new FormData(dom.contactForm),
  headers: { 'Accept': 'application/json' }
}).then(showFormSuccess);
```

**EmailJS:**

```js
emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', dom.contactForm)
  .then(showFormSuccess);
```

---

## Como abrir

Abra `index.html` diretamente no browser, ou use uma extensão como **Live Server** no VS Code.

---

## Tecnologias

- HTML5 semântico
- CSS3 com Custom Properties (sem frameworks)
- JavaScript Vanilla (sem bibliotecas)
- Google Fonts — Inter
