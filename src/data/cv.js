// Todo el contenido del CV vive aquí: para actualizar la web basta con editar este archivo.

export const profile = {
  name: 'Javier Triguero Pomares',
  firstName: 'Javier',
  lastName: 'Triguero Pomares',
  title: 'Desarrollador Full Stack',
  roles: ['Java & Spring Boot', 'React & PrimeReact', 'Arquitectura desde cero', 'Liderazgo técnico', 'IA aplicada con LLMs'],
  location: 'Elche / Alicante',
  email: 'javiertrigueropomares@gmail.com',
  website: 'https://javiertriguero.dev',
  github: 'https://github.com/JavierTriguero',
  githubUser: 'JavierTriguero',
  // Foto en /public/foto.png (fondo transparente); si no existe se muestran las iniciales.
  photo: 'foto.png',
  available: true,
  about:
    'Desarrollador Full Stack con más de 6 años de experiencia en Java/Spring y React, en proyectos para clientes como Iberdrola y Zurich. He diseñado arquitecturas desde cero, coordinado equipos de desarrollo y modernizado aplicaciones heredadas. Trabajo a diario con IA (GitHub Copilot, Claude Code) y la integro en aplicaciones mediante LLMs.',
}

export const stats = [
  { value: 6, suffix: '+', label: 'años de experiencia' },
  { value: 4, suffix: '', label: 'empresas' },
  { value: 8, suffix: '', label: 'devs coordinados' },
  { value: 2, suffix: '', label: 'grandes clientes: Iberdrola y Zurich' },
]

export const experience = [
  {
    role: 'Desarrollador Full Stack',
    company: 'Soltel',
    period: 'Ago 2024 – Ago 2026',
    stack: ['Java 21', 'Spring Boot', 'React', 'PrimeReact', 'Keycloak', 'Oracle', 'GitLab'],
    highlight: 'Arquitectura y liderazgo de equipo',
    points: [
      'Parte del equipo fundador del departamento de Proyectos Internos (16 personas): diseñé la arquitectura y lideré el arranque técnico de una herramienta de estimación de costes de proyectos.',
      'Coordiné el equipo de desarrollo (8 personas): reparto de tareas según el perfil de cada miembro, seguimiento de entregas y revisión de código.',
      'Configuré la autenticación y autorización con Keycloak, securizando la API REST con control de acceso por roles.',
      'Desarrollé una aplicación de gestión de usuarios para Inpro con Spring Boot y React, con un módulo de informes extensible (patrón Strategy) y exportación a CSV, XLSX y PDF.',
      'Responsable del repositorio en GitLab: estrategia de ramas y supervisión del flujo de trabajo del equipo.',
    ],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Computelx',
    period: 'May 2023 – Abr 2024',
    stack: ['JavaScript', 'PHP', 'HTML/CSS'],
    highlight: 'Modernización de aplicaciones',
    points: [
      'Modernicé la experiencia de usuario de aplicaciones web desarrolladas en PHP nativo, rediseñando el frontend con JavaScript.',
      'Optimicé el rendimiento y refactoricé código heredado para hacerlo más mantenible.',
      'Trabajé en contacto directo con el cliente para recoger necesidades y validar las mejoras.',
    ],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Aditelsa',
    client: 'Iberdrola',
    period: 'Sep 2021 – May 2023',
    stack: ['Java 11', 'Backbone.js', 'Marionette.js', 'Handlebars', 'jQuery', 'PL/SQL', 'Figma'],
    highlight: 'Sintra · aplicación web de Iberdrola',
    points: [
      'Desarrollé nuevas funcionalidades full stack, con Java 11 en el backend y Backbone/Marionette en el frontend.',
      'Resolví los errores recurrentes del diagrama de acciones, una de las principales quejas del cliente en cada despliegue: reestructuré la construcción de los SVG para garantizar su estabilidad entre versiones.',
      'Propuse y lideré la migración de Adobe XD a Figma, trasladando los diseños existentes y adaptando el flujo de trabajo del equipo.',
      'Implementé procedimientos PL/SQL para validar datos y prevenir inconsistencias en la base de datos.',
      'Apoyé y formé a compañeros del equipo en el uso del sistema y las tecnologías del proyecto.',
    ],
  },
  {
    role: 'Desarrollador Backend',
    company: 'NTT Data',
    client: 'Zurich',
    period: 'Feb 2019 – Sep 2021',
    stack: ['Java', 'Spring', 'Jira'],
    highlight: 'Aplicación europea de Zurich',
    points: [
      'Desarrollé y mantuve el backend de la aplicación europea de Zurich con Java y Spring.',
      'Automaticé procesos y realicé análisis de datos para mejorar la operativa del sistema.',
    ],
  },
]

export const skills = [
  {
    area: 'Backend',
    icon: 'server',
    items: ['Java 11/21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Maven', 'Gradle'],
  },
  {
    area: 'Frontend',
    icon: 'layout',
    items: ['JavaScript', 'React', 'PrimeReact', 'Backbone.js', 'Marionette.js', 'Bootstrap', 'Tailwind', 'HTML/CSS'],
  },
  {
    area: 'Bases de datos',
    icon: 'database',
    items: ['SQL Server', 'Oracle (PL/SQL)', 'MySQL'],
  },
  {
    area: 'Cloud y herramientas',
    icon: 'cloud',
    items: ['Azure', 'Keycloak', 'Git', 'GitLab', 'SVN', 'Jira', 'Figma', 'Bash'],
  },
  {
    area: 'Inteligencia artificial',
    icon: 'spark',
    items: ['GitHub Copilot', 'Claude Code', 'Integración de LLMs vía API'],
  },
]

export const education = [
  { title: 'FP Desarrollo de Aplicaciones Web', place: 'IES Macia Abela · Crevillente', kind: 'Titulación' },
  { title: 'FP Sistemas Microinformáticos', place: 'IES Severo Ochoa · Elche', kind: 'Titulación' },
  { title: 'React', place: 'Curso de especialización', kind: 'Curso' },
  { title: 'Spring Framework 6 & Spring Boot 3', place: 'Curso de especialización', kind: 'Curso' },
  { title: 'Microsoft Azure Fundamentals (AZ-900)', place: 'Curso de certificación', kind: 'Curso' },
]

export const extras = [
  { label: 'Castellano', value: 'Nativo' },
  { label: 'Inglés', value: 'B1' },
  { label: 'Carné de conducir', value: 'Y vehículo propio' },
  { label: 'Disponibilidad', value: 'Inmediata' },
]
