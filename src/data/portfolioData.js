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
  email: 'littleshadow.mdy@gmail.com',
  github: 'https://github.com/solo-leveling',
  linkedin: 'https://www.linkedin.com/in/hein-htet-b88388383/',
  // [PLACEHOLDER] No resume file exists yet at public/resume.pdf — this field
  // isn't linked from any component yet. Add the PDF and wire up a download
  // button in Hero.jsx if you want one.
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
  frameworks: ['React', 'Node.js', 'Express.js', 'Laravel', 'REST APIs'],
  databases: ['MongoDB', 'MySQL'],
  cloud: ['AWS', 'Terraform', 'Kubernetes'],
}

export const projects = [
  {
    title: 'Notes App',
    description:
      'A full-stack personal notes application with JWT authentication and full CRUD via a REST API. Built solo end-to-end — requirements, design, implementation, testing, and deployment.',
    stack: ['React', 'Vite', 'TanStack Query', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT Auth'],
    github: 'https://github.com/solo-leveling/notes',
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

export const experience = [
  {
    role: 'Web Application Engineer',
    company: 'Scala Next Inc. (Mandalay Branch)',
    period: '2020/1 – 2022/4',
    description:
      'Completed a one-year training program in PHP (Laravel) web application development, covering design, implementation, and testing. Afterward, joined an in-house recipe web service project, taking over and maintaining an existing codebase from a senior engineer: understanding legacy specifications, writing and running unit tests, investigating and fixing bugs, and implementing frontend and backend features in PHP (Laravel).',
  },
]

export const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2026/9/11',
  },
  {
    name: 'IT Passport',
    issuer: 'IPA (Information-technology Promotion Agency, Japan)',
    date: '2018/6',
  },
  {
    name: 'JLPT N1',
    issuer: 'Japan Foundation / Japan Educational Exchanges and Services',
    date: '2024/7',
  },
]

export const education = [
  {
    school: 'Ehle Institute of Technology (専門学校)',
    program: 'AI Business / AI Technology',
    period: '2025/4 - 2027/3',
  },
]
