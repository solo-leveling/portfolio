// ---------------------------------------------------------------------------
// All portfolio content lives here. Text fields that appear on the site in
// both languages are objects of the form { en: '...', ja: '...' }. Fields
// that don't need translation (links, dates, tech stack names) are plain
// strings/arrays shared by both languages.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Hein Htet',
  role: { en: 'IT / Web Developer', ja: 'IT / Webエンジニア' },
  location: { en: 'Osaka, Japan', ja: '大阪, 日本' },
  tagline: {
    en: 'Web developer based in Osaka, building with JavaScript, PHP/Laravel, and React — currently learning cloud infrastructure (AWS, Terraform, Kubernetes) and looking for IT / Software Engineer opportunities in Japan.',
    ja: '大阪を拠点に、JavaScript・PHP（Laravel）・Reactを使ってWebアプリケーションを開発しているエンジニアです。現在はAWS・Terraform・Kubernetesなどのクラウド技術を学びながら、日本国内でのITエンジニア/ソフトウェアエンジニアのポジションを探しています。',
  },
  email: 'littleshadow.mdy@gmail.com',
  github: 'https://github.com/solo-leveling',
  linkedin: 'https://www.linkedin.com/in/hein-htet-b88388383/',
  // Redacted resume PDF (no phone, address, birthdate, or gender) — see
  // scripts/generate_resume_pdf.py. Re-run that script after editing this
  // file if you want the PDF to stay in sync with the site content.
  resumeUrl: '/resume.pdf',
}

export const about = {
  paragraphs: [
    {
      en: "I'm a web developer based in Osaka, Japan, with hands-on experience across JavaScript, PHP/Laravel, and React. I enjoy building clean, functional web applications and I'm currently expanding into cloud and infrastructure engineering with AWS, Terraform, and Kubernetes.",
      ja: '大阪を拠点に活動しているWeb開発者で、JavaScript・PHP（Laravel）・Reactを用いた開発の実務経験があります。シンプルで実用的なWebアプリケーションを作ることが好きで、現在はAWS・Terraform・Kubernetesなどのクラウド・インフラ技術にも学習の幅を広げています。',
    },
    {
      en: "I studied AI Business / AI Technology at Ehle Institute of Technology (専門学校) and hold JLPT N1, so I'm comfortable working and communicating in a Japanese business environment. I'm currently looking for IT / Software Engineer opportunities in Japan.",
      ja: 'エール学園ict校でAIビジネス／AI技術活用コースを専攻しており、日本語能力試験N1を保有しているため、日本のビジネス環境でも問題なく業務やコミュニケーションを行うことができます。現在、日本国内でのITエンジニア/ソフトウェアエンジニアの機会を探しています。',
    },
    {
      en: "My strength is being able to keep learning independently. When I run into something I don't understand, I start with official documentation and technical articles rather than jumping straight to an answer, and I use AI tools to help me understand the reasoning rather than just copy a solution. I publish what I learn on GitHub, and I'm comfortable working across Japanese, English, and Burmese in multicultural teams.",
      ja: '私の強みは、自分で調べながら学び続けられることです。分からないことがあっても、まず公式ドキュメントや技術記事を調べ、AIも活用しながら「なぜこの書き方になるのか」を理解するようにしています。学んだことはGitHubで公開しており、日本語・英語・ビルマ語の3言語で多文化のチームでも問題なくコミュニケーションができます。',
    },
  ],
}

export const skillGroups = [
  {
    label: { en: 'Languages', ja: '言語' },
    items: ['JavaScript', 'PHP', 'HTML', 'CSS'],
  },
  {
    label: { en: 'Frameworks & Tools', ja: 'フレームワーク・ツール' },
    items: ['React', 'Node.js', 'Express.js', 'Laravel', 'REST APIs'],
  },
  {
    label: { en: 'Databases', ja: 'データベース' },
    items: ['MongoDB', 'MySQL'],
  },
  {
    label: { en: 'Cloud & Infrastructure', ja: 'クラウド・インフラ' },
    items: ['AWS', 'Terraform', 'Kubernetes'],
  },
]

export const projects = [
  {
    title: { en: 'Notes App', ja: 'ノートアプリ（個人開発）' },
    description: {
      en: 'A full-stack personal notes application with JWT authentication and full CRUD via a REST API. Built solo end-to-end — requirements, design, implementation, testing, and deployment.',
      ja: 'JWT認証とREST APIによるCRUD機能を備えた、フルスタックの個人向けメモ管理アプリです。要件定義から設計・実装・テスト・デプロイまで、すべて一人で開発しました。',
    },
    stack: ['React', 'Vite', 'TanStack Query', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT Auth'],
    github: 'https://github.com/solo-leveling/notes',
    demo: 'https://notes-kmistryys-projects.vercel.app/login',
  },
  {
    title: { en: 'DevHub — Personal Developer Portal', ja: 'DevHub － 個人開発者ポータル' },
    description: {
      en: 'A full-stack developer portfolio platform with a public site and a private admin dashboard (JWT auth) for managing projects, blog posts, certificates, and skills.',
      ja: 'プロジェクト・ブログ・資格・スキルを管理できる非公開の管理画面（JWT認証）を備えた、フルスタックの開発者ポートフォリオプラットフォームです。',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/solo-leveling/devhub',
    demo: '',
  },
  {
    title: { en: 'Laravel Practice Projects', ja: 'Laravel 学習プロジェクト' },
    description: {
      en: 'A collection of PHP/Laravel practice projects, including an HR management system covering Eloquent ORM relationships, middleware, and authentication.',
      ja: 'Eloquent ORMのリレーション、ミドルウェア、認証機能などを学んだ、人事管理システムを含むPHP/Laravelの学習用プロジェクト集です。',
    },
    stack: ['PHP', 'Laravel', 'Eloquent ORM'],
    github: 'https://github.com/solo-leveling/laravel-demo',
    demo: '',
  },
]

export const experience = [
  {
    role: { en: 'Web Application Engineer', ja: 'Webアプリケーションエンジニア' },
    company: 'Scala Next Inc. (Mandalay Branch)',
    period: '2020/1 – 2022/4',
    description: {
      en: 'Completed a one-year training program in PHP (Laravel) web application development, covering design, implementation, and testing. Afterward, joined an in-house recipe web service project, taking over and maintaining an existing codebase from a senior engineer: understanding legacy specifications, writing and running unit tests, investigating and fixing bugs, and implementing frontend and backend features in PHP (Laravel).',
      ja: 'PHP（Laravel）を用いたWebアプリケーション開発の研修（設計・実装・テスト）を1年間修了。その後、社内の料理関連Webサービスプロジェクトに配属され、前任者から引き継いだ既存システムの保守を担当。仕様理解、単体テストの作成、バグ調査・修正、PHP（Laravel）でのフロントエンド／バックエンド実装・改修に従事した。',
    },
  },
]

export const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: { en: 'Amazon Web Services', ja: 'Amazon Web Services' },
    date: '2026/9/11',
  },
  {
    name: 'TOEIC Listening & Reading — 790',
    issuer: { en: 'ETS', ja: 'ETS' },
    date: '2026/2',
  },
  {
    name: 'JLPT N1',
    issuer: {
      en: 'Japan Foundation / Japan Educational Exchanges and Services',
      ja: '国際交流基金・日本国際教育支援協会',
    },
    date: '2024/7',
  },
  {
    name: 'IT Passport',
    issuer: {
      en: 'IPA (Information-technology Promotion Agency, Japan)',
      ja: 'IPA（独立行政法人情報処理推進機構）',
    },
    date: '2018/6',
  },
]

export const education = [
  {
    school: 'Conqueror Academy of Education (Myanmar)',
    program: { en: 'High School Diploma', ja: '高等学校 卒業' },
    period: '2015/3',
  },
  {
    school: 'Mandalay University of Foreign Languages',
    program: { en: 'German Language Program (withdrawn)', ja: 'ドイツ語学科（中途退学）' },
    period: '2015/12 – 2017/3',
  },
  {
    school: 'Metro IT and Japanese Language Center (Myanmar)',
    program: { en: 'IT & Japanese Language Program', ja: '専門学校 卒業' },
    period: '2017/12 – 2019/12',
  },
  {
    school: 'メリック日本語学校',
    program: { en: 'Japanese Language Program', ja: '日本語学校 卒業' },
    period: '2022/10 – 2024/3',
  },
  {
    school: 'エール学園 (Yale Gakuen)',
    program: {
      en: 'Applied Japanese Language, National/Public University Prep Course',
      ja: '応用日本語学科 国公立進学コース',
    },
    period: '2024/4 – 2025/3',
  },
  {
    school: 'エール学園ict校 (Yale Gakuen ICT)',
    program: {
      en: 'AI Business / AI Technology Application Course (in progress)',
      ja: 'AIビジネス学科 AI技術活用コース（在学中）',
    },
    period: '2025/4 – 2027/3',
  },
]

// UI strings that aren't part of the content sections above (nav, buttons,
// section headings, footer).
export const ui = {
  nav: {
    about: { en: 'About', ja: '自己紹介' },
    skills: { en: 'Skills', ja: 'スキル' },
    projects: { en: 'Projects', ja: 'プロジェクト' },
    experience: { en: 'Experience', ja: '職歴' },
    certifications: { en: 'Certifications', ja: '資格' },
    education: { en: 'Education', ja: '学歴' },
    contact: { en: 'Contact', ja: 'お問い合わせ' },
  },
  hero: {
    ctaContact: { en: 'Get in touch', ja: 'お問い合わせ' },
    ctaGithub: { en: 'View GitHub', ja: 'GitHubを見る' },
    ctaResume: { en: 'Download Resume', ja: '履歴書をダウンロード' },
  },
  sections: {
    about: { eyebrow: { en: 'About', ja: '自己紹介' }, title: { en: 'About Me', ja: '私について' } },
    skills: { eyebrow: { en: 'Skills', ja: 'スキル' }, title: { en: 'Technical Skills', ja: '技術スキル' } },
    projects: {
      eyebrow: { en: 'Projects', ja: 'プロジェクト' },
      title: { en: 'Selected Projects', ja: '主なプロジェクト' },
    },
    experience: {
      eyebrow: { en: 'Experience', ja: '職歴' },
      title: { en: 'Work Experience', ja: '職務経歴' },
    },
    certifications: {
      eyebrow: { en: 'Certifications', ja: '資格' },
      title: { en: 'Certifications', ja: '保有資格' },
    },
    education: { eyebrow: { en: 'Education', ja: '学歴' }, title: { en: 'Education', ja: '学歴' } },
    contact: { eyebrow: { en: 'Contact', ja: 'お問い合わせ' }, title: { en: 'Get In Touch', ja: 'お問い合わせ' } },
  },
  projectLinks: {
    github: { en: 'GitHub →', ja: 'GitHub →' },
    demo: { en: 'Live Demo →', ja: 'デモを見る →' },
  },
  contact: {
    blurb: {
      en: "I'm currently looking for IT / Software Engineer opportunities in Japan. Feel free to reach out — I'm happy to talk in either English or Japanese.",
      ja: '現在、日本国内でのITエンジニア/ソフトウェアエンジニアの機会を探しています。日本語・英語どちらでも対応可能ですので、お気軽にご連絡ください。',
    },
    emailBtn: { en: 'Email Me', ja: 'メールを送る' },
    githubBtn: { en: 'GitHub', ja: 'GitHub' },
    linkedinBtn: { en: 'LinkedIn', ja: 'LinkedIn' },
  },
  footer: {
    builtWith: { en: 'Built with React & Tailwind CSS.', ja: 'React と Tailwind CSS で構築。' },
  },
}
