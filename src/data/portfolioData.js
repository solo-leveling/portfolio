// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site.
// Items marked [PLACEHOLDER] contain guessed/sample data — replace them.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Hein Htet',
  role: 'IT / Web Developer',
  location: 'Osaka, Japan',
  tagline:
    'Web developer based in Osaka, building with JavaScript, PHP/Laravel, and React — currently learning cloud infrastructure (AWS, Terraform, Kubernetes) and looking for IT / Software Engineer opportunities in Japan.',
  // [PLACEHOLDER] Replace with the email you want listed publicly.
  email: 'your-email@example.com',
  github: 'https://github.com/solo-leveling',
  // [PLACEHOLDER] Add your LinkedIn URL if you have one, or remove this field
  // and its usage in Contact.jsx.
  linkedin: '',
  // [PLACEHOLDER] Add a resume PDF to /public/resume.pdf and keep this path,
  // or remove the download button in Hero.jsx if you don't want one yet.
  resumeUrl: '/resume.pdf',
}

export const about = {
  paragraphs: [
    "I'm a web developer based in Osaka, Japan, with hands-on experience across JavaScript, PHP/Laravel, and React. I enjoy building clean, functional web applications and I'm currently expanding into cloud and infrastructure engineering with AWS, Terraform, and Kubernetes.",
    "I studied AI Business / AI Technology at Ehle Institute of Technology (専門学校) and hold JLPT N1, so I'm comfortable working and communicating in a Japanese business environment. I'm currently looking for IT / Software Engineer opportunities in Japan.",
  ],
}

export const skills = {
  languages: ['JavaScript', 'PHP', 'HTML', 'CSS'],
  frameworks: ['React', 'Node.js', 'Laravel'],
  cloud: ['AWS', 'Terraform', 'Kubernetes'],
}

export const projects = [
  {
    title: 'Japanese Learning Platform',
    // [PLACEHOLDER] This project was not found in your public GitHub repos.
    // Replace this description, tech stack, and links with the real project details.
    description:
      '[PLACEHOLDER] A web platform for learning Japanese vocabulary and grammar, built to help self-learners track progress. Replace this description with what the project actually does.',
    stack: ['[PLACEHOLDER TECH STACK]'],
    github: '',
    demo: '',
  },
  {
    title: 'Notes App',
    description:
      'A full-stack notes application for creating, organizing, and managing personal notes, with a React (Vite) frontend and a Node.js backend.',
    stack: ['React', 'Vite', 'TanStack Query', 'Node.js', 'Axios'],
    github: 'https://github.com/solo-leveling/notes',
    // [PLACEHOLDER] This live URL was set on the repo but looks like it may
    // point to someone else's Vercel account name — please verify it works
    // and points to your own deployment before sharing it, or remove it.
    demo: 'https://notes-kmistryys-projects.vercel.app/login',
  },
  {
    title: 'DevHub — Personal Developer Portal',
    description:
      'A full-stack developer portfolio platform with a public site and a private admin dashboard (JWT auth) for managing projects, blog posts, certificates, and skills.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/solo-leveling/devhub',
    demo: '',
  },
  {
    title: 'Laravel Practice Projects',
    description:
      'A collection of PHP/Laravel practice projects, including an HR management system covering Eloquent ORM relationships, middleware, and authentication.',
    stack: ['PHP', 'Laravel', 'Eloquent ORM'],
    github: 'https://github.com/solo-leveling/laravel-demo',
    demo: '',
  },
]

// [PLACEHOLDER] No work experience was provided — add your real roles here,
// or remove the Experience section from App.jsx if not applicable yet.
export const experience = [
  {
    role: '[PLACEHOLDER] Job Title',
    company: '[PLACEHOLDER] Company Name',
    period: '[PLACEHOLDER] e.g. 2024 – Present',
    description:
      '[PLACEHOLDER] Briefly describe your responsibilities and achievements in this role.',
  },
]

export const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    // [PLACEHOLDER] Add the date you earned this certification.
    date: '[PLACEHOLDER DATE]',
  },
  {
    name: 'IT Passport',
    issuer: 'IPA (Information-technology Promotion Agency, Japan)',
    date: '[PLACEHOLDER DATE]',
  },
  {
    name: 'JLPT N1',
    issuer: 'Japan Foundation / Japan Educational Exchanges and Services',
    date: '[PLACEHOLDER DATE]',
  },
]

export const education = [
  {
    school: 'Ehle Institute of Technology (専門学校)',
    program: 'AI Business / AI Technology',
    // [PLACEHOLDER] Add your enrollment/graduation dates.
    period: '[PLACEHOLDER PERIOD]',
  },
]
