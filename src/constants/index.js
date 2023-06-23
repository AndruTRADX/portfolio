import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  postgres,
  express,
  nestjs,
  nextjsauth,
  socketIO,
  nextjs,
  vitejs,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre mí',
  },
  {
    id: 'work',
    title: 'Trabajo',
  },
  {
    id: 'contact',
    title: 'Contacto',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Figma Designer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express JS',
    icon: express,
  },
  {
    name: 'Socket.IO',
    icon: socketIO,
  },
  {
    name: 'Nest JS',
    icon: nestjs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'PostgreSQL',
    icon: postgres,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Nest JS Auth',
    icon: nextjsauth,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Vite JS',
    icon: vitejs,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

// Experiences template
/* const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
] */

const experiences = [
  {
    title: 'Aprendizaje autodidacta',
    company_name: 'Esta es una aventura que apenas estoy empezando',
    icon: web,
    iconBg: '#383E56',
    date: '1 de enero de 2022',
    points: [
      'Dominio de HTML, CSS y JavaScript a través de aprendizaje autodidacta.',
      'Desarrollo avanzado de aplicaciones frontend con React.js en platzi y profundicé mis conocimientos en JavaScript, CSS, Tailwind y TypeScript',
      'Experiencia en la creación de aplicaciones backend en Node.js, incluyendo comunicación en tiempo real con Socket.IO y el uso de NestJS para una arquitectura escalable y robusta.',
      'Capacidad para crear aplicaciones fullstack completas utilizando Next.js, combinando frontend y backend de manera eficiente.',
    ],
  },
]

// Testimonials template
/* const experiences = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
] */
const testimonials = [
  {
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Nombre genérico',
    designation: 'CFO',
    company: 'Ejemplo Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Nombre genérico',
    designation: 'CFO',
    company: 'Ejemplo Co',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Nombre genérico',
    designation: 'CFO',
    company: 'Ejemplo Co',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Fullstack Tables',
    description:
      'Plataforma CRUD fullstack con autenticación con una expreriencia de usuario agradable.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://i.ibb.co/TL7QJ8L/imagen-2023-06-23-105521126.png',
    source_code_link: 'https://github.com/AndruTRADX/fullstack-products-crud',
    soure_project_link: 'https://fullstack-products-crud.vercel.app/'
  },
  {
    name: 'Promptopia',
    description:
      'Plataforma CRUD fullstack con autenticación en google auth en la que puedes compartir tus mejores prompts para IA´s.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://i.ibb.co/JHBpj1Y/imagen-2023-06-23-105557194.png',
    source_code_link: 'https://github.com/AndruTRADX/promptopia',
    soure_project_link: 'https://nextjs-promptopia-seven.vercel.app/'
  },
  {
    name: 'Metaversus',
    description:
      'Aplicación UI con React y Framer Motion',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'FramerMotion',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://i.ibb.co/SBS1Gff/imagen-2023-06-23-105633430.png',
    source_code_link: 'https://github.com/AndruTRADX/metaversus',
    soure_project_link: 'https://metaversus-andrutradx.vercel.app/'
  },
]

const fullstackProjects = [
  {
    name: 'Fullstack Tables',
    description:
      'Plataforma CRUD fullstack con autenticación con una expreriencia de usuario agradable.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://i.ibb.co/TL7QJ8L/imagen-2023-06-23-105521126.png',
    source_code_link: 'https://github.com/AndruTRADX/fullstack-products-crud',
    soure_project_link: 'https://fullstack-products-crud.vercel.app/'
  },
  {
    name: 'Promptopia',
    description:
      'Plataforma CRUD fullstack con autenticación en google auth en la que puedes compartir tus mejores prompts para IA´s.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://i.ibb.co/JHBpj1Y/imagen-2023-06-23-105557194.png',
    source_code_link: 'https://github.com/AndruTRADX/promptopia',
    soure_project_link: 'https://nextjs-promptopia-seven.vercel.app/'
  },
]

const backendProjects = [
  {
    name: 'Nest mongo API',
    description:
      'API crud con autenticación, JWT y mucho más',
    tags: [
      {
        name: 'Nest',
        color: 'orange-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Docker',
        color: 'blue-text-gradient',
      },
    ],
    image: 'https://codigofacilito.com/courses/default_thumbs/backend-profesional.jpg',
    source_code_link: 'https://github.com/AndruTRADX/nestjs-mongo',
  },
  {
    name: 'Nest postgres API',
    description:
      'API crud en Nest y Postgres',
    tags: [
      {
        name: 'Nest',
        color: 'orange-text-gradient',
      },
      {
        name: 'Postgress',
        color: 'green-text-gradient',
      },
      {
        name: 'Docker',
        color: 'blue-text-gradient',
      },
    ],
    image: 'https://codigofacilito.com/courses/default_thumbs/backend-profesional.jpg',
    source_code_link: 'https://github.com/AndruTRADX/nest-typeorm',
  },
  {
    name: 'My store API',
    description:
      'API crud con autenticación y JWT hecha en express y node',
    tags: [
      {
        name: 'Express',
        color: 'green-text-gradient',
      },
      {
        name: 'NodeJS',
        color: 'green-text-gradient',
      },
      {
        name: 'Docker',
        color: 'blue-text-gradient',
      },
    ],
    image: 'https://codigofacilito.com/courses/default_thumbs/backend-profesional.jpg',
    source_code_link: 'https://github.com/AndruTRADX/my_store_api',
  },
  {
    name: 'Webchat',
    description:
      'Aplicación de chat en tiempo real que permite enviar mensajes desde el localhost.',
    tags: [
      {
        name: 'Express',
        color: 'green-text-gradient',
      },
      {
        name: 'Socket.IO',
        color: 'green-text-gradient',
      },
      {
        name: 'CookieParser',
        color: 'blue-text-gradient',
      },
    ],
    image: 'https://codigofacilito.com/courses/default_thumbs/backend-profesional.jpg',
    source_code_link: 'https://github.com/AndruTRADX/web-chat',
  },
]

const frontendProjects = [
  {
    name: 'Metaversus',
    description:
      'Aplicación UI con React y Framer Motion',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'FramerMotion',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://i.ibb.co/SBS1Gff/imagen-2023-06-23-105633430.png',
    source_code_link: 'https://github.com/AndruTRADX/metaversus',
    soure_project_link: 'https://metaversus-andrutradx.vercel.app/'
  },
  {
    name: 'Modern bank UI',
    description:
      'Aplicación UI con NextJS',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://i.ibb.co/L1mCs2v/imagen-2023-06-23-105653514.png',
    source_code_link: 'https://github.com/AndruTRADX/modern-bank-ui',
    soure_project_link: 'https://modern-bank-ui-tan.vercel.app/'
  },
  {
    name: 'Tables TS',
    description:
      'Plataforma en TypeScript donde puedes hacer CRUD con tablas en una interfaz bonita.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://i.ibb.co/kyp00nP/imagen-2023-06-23-105716170.png',
    source_code_link: 'https://github.com/AndruTRADX/tables-ts',
    soure_project_link: 'https://andrutradx.github.io/tables-ts/'
  },
  {
    name: 'Pokedux',
    description:
      'Aplicación donde podras ver los pokemones de primera generación y sus detalles.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Vite',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://i.ibb.co/xMr2fCV/imagen-2023-06-23-105742529.png',
    source_code_link: 'https://github.com/AndruTRADX/pokedux',
    soure_project_link: 'https://andrutradx.github.io/pokedux/'
  },
  {
    name: 'TS Videogame',
    description:
      'Videojuego sencillo hecho en Canvas y TypeScript que recuerda a la UI de la Wii.. maybe.',
    tags: [
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Vite',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://i.ibb.co/n8Lc4by/imagen-2023-06-23-105818167.png',
    source_code_link: 'https://github.com/AndruTRADX/ts-juego-laberinto',
    soure_project_link: 'https://andrutradx.github.io/ts-juego-laberinto/'
  },
]

const projectsTypes = ['mvp', 'fullstack', 'backend', 'frontend']

export { services, technologies, experiences, testimonials, projects, fullstackProjects, backendProjects, frontendProjects, projectsTypes }