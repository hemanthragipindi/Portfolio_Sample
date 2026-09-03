// ============================================================
// Personal Information
// ============================================================

export const personalInfo = {
  name: "Ragipindi Hemanth Reddy",

  role: "Full Stack Developer & Technical Lead",

  email: "ragipindihemanth713@gmail.com",

  resumeUrl: "https://drive.google.com/file/d/1I8XvNp0Bb8mkfbKCXUreWxzlUtCDNu4t/view?usp=sharing",

  location: "Prakasam, Andhra Pradesh, India",

  bio:
    "I build and manage reliable, scalable, and production-ready digital products across frontend, backend, APIs, databases, cloud infrastructure, and deployment.",

  introduction:
    "I'm a Full Stack Developer and Technical Lead focused on building modern web applications, designing backend systems, developing REST APIs, managing databases, testing APIs, coordinating development teams, and handling cloud and production infrastructure.",

  tagline:
    "Building, leading, and deploying reliable digital products end to end",
};


// ============================================================
// Social Links
// ============================================================

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/hemanthragipindi",
    icon: "Github",
  },

  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hemanth-reddy-r-28369929b/",
    icon: "Linkedin",
  },

  {
    id: 3,
    name: "Email",
    url: "mailto:ragipindihemanth713@gmail.com",
    icon: "Mail",
  },
];


// ============================================================
// Skills
// ============================================================

export const skills = {

  // ----------------------------------------------------------
  // Frontend Development
  // ----------------------------------------------------------

  frontend: [
    { name: "HTML", icon: "Code" },
    { name: "CSS", icon: "Palette" },
    { name: "JavaScript", icon: "Zap" },
    { name: "React", icon: "Atom" },
    { name: "Tailwind CSS", icon: "Wind" },
    { name: "Responsive UI Development", icon: "MonitorSmartphone" },
  ],


  // ----------------------------------------------------------
  // Backend Development
  // ----------------------------------------------------------

  backend: [
    { name: "Python", icon: "Code2" },
    { name: "REST APIs", icon: "Share2" },
    { name: "API Development", icon: "Server" },
    { name: "Backend Architecture", icon: "Boxes" },
    { name: "ORM Model Design", icon: "Table2" },
    { name: "Database Integration", icon: "Database" },
    { name: "PostgreSQL", icon: "Database" },
  ],


  // ----------------------------------------------------------
  // API & Testing
  // ----------------------------------------------------------

  apiTesting: [
    { name: "Swagger / OpenAPI", icon: "FileCode" },
    { name: "API Testing", icon: "TestTube" },
    { name: "REST API Testing", icon: "Globe" },
    { name: "API Documentation", icon: "BookOpen" },
    { name: "Request / Response Validation", icon: "BadgeCheck" },
  ],


  // ----------------------------------------------------------
  // DevOps & Cloud
  // ----------------------------------------------------------

  devops: [
    { name: "Git", icon: "GitBranch" },
    { name: "GitHub", icon: "Github" },
    { name: "Deployment Pipelines", icon: "GitPullRequest" },
    { name: "Pipeline Configuration", icon: "Workflow" },
    { name: "CI/CD Operations", icon: "RefreshCw" },

    { name: "DigitalOcean", icon: "Cloud" },
    { name: "Cloud Server Management", icon: "ServerCog" },

    { name: "Cloudflare", icon: "ShieldCheck" },
    { name: "Proxy Server Management", icon: "Network" },
    { name: "DNS Management", icon: "Globe2" },
    { name: "SSL / HTTPS Configuration", icon: "Lock" },

    { name: "Hostinger", icon: "Globe" },
    { name: "Domain Management", icon: "Globe2" },
    { name: "Production Deployment", icon: "Rocket" },
  ],


  // ----------------------------------------------------------
  // Project & Team Management
  // ----------------------------------------------------------

  leadership: [
    { name: "Technical Leadership", icon: "Crown" },
    { name: "Team Coordination", icon: "Users" },
    { name: "Project Management", icon: "ClipboardList" },
    { name: "Task Planning", icon: "ListChecks" },
    { name: "Code Review", icon: "GitPullRequestArrow" },
    { name: "Technical Decision Making", icon: "Brain" },
    { name: "Production Support", icon: "LifeBuoy" },
  ],


  // ----------------------------------------------------------
  // Tools
  // ----------------------------------------------------------

  tools: [
    { name: "VS Code", icon: "Code" },
    { name: "Figma", icon: "Palette" },
    { name: "Swagger", icon: "FileCode" },
    { name: "GitHub", icon: "Github" },
  ],
};


// ============================================================
// Projects
// ============================================================

export const projects = [

  // ----------------------------------------------------------
  // Sentinel
  // ----------------------------------------------------------

  {
    id: 1,

    title: "Sentinel",

    description:
      "A full-stack application focused on secure, reliable, and scalable application workflows, with backend services, REST APIs, database integration, API documentation, and production-oriented infrastructure.",

    image: "/projects/sentinel.jpg",

    technologies: [
      "React",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "ORM",
      "Swagger / OpenAPI",
      "Git",
      "Cloud Infrastructure",
    ],

    role: "Full Stack Developer & Technical Lead",

    responsibilities: [
      "Designed and developed full-stack application workflows.",
      "Developed backend APIs and database models.",
      "Created and maintained ORM models for backend data structures.",
      "Documented and tested REST APIs using Swagger / OpenAPI.",
      "Worked on deployment pipelines and production operations.",
      "Managed application infrastructure and troubleshooting.",
    ],

    outcome:
      "Delivered an end-to-end application with integrated frontend, backend, database, API documentation, testing, and deployment workflows.",

    liveUrl: "#",

    githubUrl: "#",
  },


  // ----------------------------------------------------------
  // Avani
  // ----------------------------------------------------------

  {
    id: 2,

    title: "Avani",

    description:
      "A production-oriented application platform involving frontend development, backend services, database workflows, API integration, deployment pipelines, cloud infrastructure, and production operations.",

    image: "/projects/avani.jpg",

    technologies: [
      "React",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "ORM",
      "Swagger / OpenAPI",
      "GitHub",
      "DigitalOcean",
      "Cloudflare",
    ],

    role: "Full Stack Developer Intern & Technical Lead",

    responsibilities: [
      "Worked across frontend and backend development.",
      "Designed and implemented backend ORM models.",
      "Developed and integrated REST APIs.",
      "Tested and documented APIs using Swagger / OpenAPI.",
      "Worked with PostgreSQL database workflows.",
      "Managed deployment pipelines and production releases.",
      "Managed DigitalOcean cloud infrastructure.",
      "Configured Cloudflare proxy, DNS, SSL, and domain-related services.",
      "Coordinated development tasks and technical implementation across the team.",
    ],

    outcome:
      "Contributed to the development and production operation of a full-stack application while handling development, API testing, deployment, cloud infrastructure, and technical coordination.",

    liveUrl: "https://avani.vamancropscience.com",

    githubUrl: "#",
  },


  // ----------------------------------------------------------
  // Vaman
  // ----------------------------------------------------------

  {
    id: 3,

    title: "Vaman - Crop Management System",

    description:
      "A full-stack crop management platform designed around application workflows, backend services, database management, REST APIs, API testing, deployment pipelines, and production infrastructure.",

    image: "/projects/vaman.jpg",

    technologies: [
      "React",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "ORM",
      "Swagger / OpenAPI",
      "GitHub",
      "DigitalOcean",
      "Cloudflare",
      "Hostinger",
    ],

    role: "Full Stack Developer Intern & Technical Lead",

    responsibilities: [
      "Developed and maintained frontend application components.",
      "Designed backend ORM models and database relationships.",
      "Developed REST API endpoints and backend workflows.",
      "Tested APIs and validated request / response behavior using Swagger.",
      "Worked with PostgreSQL database integration.",
      "Managed application deployment pipelines.",
      "Performed DigitalOcean server and production operations.",
      "Managed Cloudflare proxy, DNS, SSL, and domain routing.",
      "Managed Hostinger domain configuration and related DNS settings.",
      "Handled production troubleshooting and application maintenance.",
      "Coordinated technical tasks and development activities within the team.",
    ],

    outcome:
      "Worked across the complete development lifecycle from application development and database modeling to API testing, deployment, cloud infrastructure, domain management, and production operations.",

    liveUrl: "https://market.vamancropscience.com",

    githubUrl: "#",
  },
];


// ============================================================
// Experience
// ============================================================

export const experience = [

  {
    id: 1,

    company: "Avani / Vaman Crop Science",

    jobTitle: "Full Stack Developer Intern & Technical Lead",

    startDate: "2026",

    endDate: "Present",

    responsibilities: [

      // Development
      "Develop and maintain full-stack web application features across frontend and backend systems.",

      "Build REST APIs and backend application workflows using Python.",

      "Design and maintain ORM models, database relationships, and backend data structures.",

      "Work with PostgreSQL for database design, integration, queries, and application workflows.",


      // API
      "Create, document, and test REST APIs using Swagger / OpenAPI.",

      "Validate API requests, responses, authentication flows, and endpoint behavior.",


      // DevOps
      "Design and maintain deployment pipelines for application releases.",

      "Manage production deployments and troubleshoot deployment-related issues.",

      "Perform DigitalOcean server and cloud infrastructure operations.",


      // Cloudflare
      "Manage Cloudflare proxy configuration, DNS records, SSL / HTTPS, and domain routing.",

      "Configure and maintain production traffic routing through Cloudflare proxy services.",


      // Domain
      "Manage domain configuration and DNS-related operations through Hostinger and Cloudflare.",


      // Leadership
      "Coordinate development tasks and technical implementation across the project team.",

      "Review implementation approaches and assist team members with technical issues.",

      "Participate in architecture discussions, debugging, testing, deployment, and production support.",

      "Take ownership of end-to-end project execution from development through production operations.",
    ],

    achievements: [

      "Contributed to multiple production-oriented full-stack applications.",

      "Worked across frontend, backend, database, API, testing, deployment, cloud, and infrastructure layers.",

      "Took technical ownership of project implementation and coordinated development activities.",

      "Managed production infrastructure including DigitalOcean, Cloudflare, DNS, domains, and deployment pipelines.",

      "Established API testing and documentation workflows using Swagger / OpenAPI.",
    ],
  },
];


// ============================================================
// Education
// ============================================================

export const education = [
  {
    id: 1,

    degree: "Bachelor's Degree",

    field: "Computer Science and Engineering",

    institution: "Lovely Professional University",

    year: "2025-2029",

    cgpa: "CGPA: 7.42",
  },
  {
    id: 2,

    degree: "Intermediate / 12th Grade",

    field: "MPC",

    institution: "Sri Pratibha Junior College",

    year: "2021-2023",

    cgpa: "Percentage: 97.2%",
  },
  {
    id: 3,

    degree: "10th Grade / Secondary School",

    field: "General Education",

    institution: "ZP High School",

    year: "2020-2021",

    cgpa: "Percentage: 93.50%",
  },
];


// ============================================================
// Certifications
// ============================================================

export const certifications = [

  {
    id: 1,

    name: "Python Programming Certification",

    issuer: "Coursera",

    year: "2026",

    credentialId: "PLACEHOLDER",

    credentialUrl: "https://drive.google.com/file/d/1BsXJq56FxOKfXQnV6uaojMcSA96D0LRH/view?usp=sharing",

    status: "Verified certificate",
  },

  {
    id: 2,

    name: "Full Stack Web Development Certification",

    issuer: "Mind Luster",

    year: "2026",

    credentialId: "PLACEHOLDER",

    credentialUrl: "https://drive.google.com/file/d/1WxPpHGl9PyYq8HlSJyZiun2CIVg7SSk7/view?usp=sharing",

    status: "Verified certificate",
  },

  {
    id: 3,

    name: "Selenium Testing Certification",

    issuer: "Coursera",

    year: "2026",

    credentialId: "PLACEHOLDER",

    credentialUrl: "https://drive.google.com/file/d/1FWCq_a2WleFmOQXz2ueNEFUtAPajFQXl/view?usp=sharing",

    status: "Verified certificate",
  },

  {
    id: 4,

    name: "Git & GitHub Certification",

    issuer: "Coursera",

    year: "2026",

    credentialId: "PLACEHOLDER",

    credentialUrl: "https://drive.google.com/file/d/176OFyGLalD4sYEWinaw0h7xAqsHuE0vF/view?usp=sharing",

    status: "Verified certificate",
  },
];


// ============================================================
// Achievements / Stats
// ============================================================

export const achievements = [

  {
    id: 1,

    number: 3,

    label: "Major Projects",
  },

  {
    id: 2,

    number: 15,

    label: "Technologies Used",
  },

  {
    id: 3,

    number: 1,

    label: "Technical Lead",
  },

  {
    id: 4,

    number: 1,

    label: "Production Infrastructure",
  },
];


// ============================================================
// Areas of Expertise
// ============================================================

export const expertise = [

  {
    id: 1,

    title: "Full Stack Development",

    description:
      "Building complete web applications across frontend, backend, APIs, databases, and production environments.",

    icon: "Layers",
  },

  {
    id: 2,

    title: "Backend Engineering",

    description:
      "Designing backend services, REST APIs, ORM models, database relationships, and application workflows.",

    icon: "Server",
  },

  {
    id: 3,

    title: "API Development & Testing",

    description:
      "Developing, documenting, testing, and validating REST APIs using Swagger / OpenAPI.",

    icon: "FileCode",
  },

  {
    id: 4,

    title: "Cloud & DevOps",

    description:
      "Managing deployment pipelines, cloud servers, production deployments, and application infrastructure.",

    icon: "Cloud",
  },

  {
    id: 5,

    title: "Infrastructure Management",

    description:
      "Managing DigitalOcean servers, Cloudflare proxy and DNS, SSL configuration, domains, and production routing.",

    icon: "Network",
  },

  {
    id: 6,

    title: "Technical Leadership",

    description:
      "Coordinating development activities, making technical decisions, reviewing implementations, and driving project execution.",

    icon: "Users",
  },
];


// ============================================================
// Testimonials
// Keep empty until you have genuine testimonials.
// ============================================================

export const testimonials = [];


// ============================================================
// Navigation Links
// ============================================================

export const navLinks = [

  {
    id: 1,
    label: "Home",
    href: "#home",
  },

  {
    id: 2,
    label: "About",
    href: "#about",
  },

  {
    id: 3,
    label: "Skills",
    href: "#skills",
  },

  {
    id: 4,
    label: "Projects",
    href: "#projects",
  },

  {
    id: 5,
    label: "Experience",
    href: "#experience",
  },

  {
    id: 6,
    label: "Certifications",
    href: "#certifications",
  },

  {
    id: 7,
    label: "Contact",
    href: "#contact",
  },
];