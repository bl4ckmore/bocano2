// ─────────────────────────────────────────────────────────────
//  SITE DATA  —  edit this file to customise your portfolio
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Bocano Architecture',

  about: {
    photo: '',
    headline: 'Who We Are',
    body: [
      'We are a Tbilisi-based architectural studio with more than 10 years of experience in Architecture, Urban and Spatial Design. Our work is a combination of constant dialogue with the environment, versatile exploration methods, a creative approach, and in-depth technical knowledge.',
      'We believe in lateral thinking, which provokes the ability to perceive patterns that are not obvious. Our aim is to produce work beneficial to society. With thoroughly thought, human-centered, and bespoke architectural solutions and design, we transform spaces into places.',
    ],
    services: 'Architectural Design, Urban Design, Spatial Design, Interior Design, and Pre-design services',
  },

  contact: {
    phone: '+995 598 43 63 39',
    email: 'support@bocano.ge',
    city: 'Tbilisi, Georgia',
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
}

// ─────────────────────────────────────────────────────────────
//  PROJECTS
//
//  cover    → main photo shown in the grid  (put file in /public/images/)
//  gallery  → array of photos shown inside the project page
//
//  Example with real photos:
//  cover: '/images/villa-cover.jpg',
//  gallery: [
//    '/images/villa-1.jpg',
//    '/images/villa-2.jpg',
//    '/images/villa-3.jpg',
//  ],
// ─────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1, 
    name: 'Villa Bulachauri',
    year: '2024',
    type: 'Residential',
    cover: '/images/villa-tbilisi/b014.png',
    gallery: [
      '/images/villa-tbilisi/b014.png',
      '/images/villa-tbilisi/b001.png',
      '/images/villa-tbilisi/b002.png', 
      '/images/villa-tbilisi/b003.png',
      '/images/villa-tbilisi/b004.png',
      '/images/villa-tbilisi/b005.png',
      '/images/villa-tbilisi/b006.png',
      '/images/villa-tbilisi/b007.png',
      '/images/villa-tbilisi/b008.png',
      '/images/villa-tbilisi/b009.png',
      '/images/villa-tbilisi/b010.png',
      '/images/villa-tbilisi/b011.png',
      '/images/villa-tbilisi/b012.png',
      '/images/villa-tbilisi/b013.png',
      '/images/villa-tbilisi/b015.png',
      '/images/villa-tbilisi/b016.png',
      '/images/villa-tbilisi/b017.png',
      '/images/villa-tbilisi/b018.png',
      '/images/villa-tbilisi/b019.png',
      '/images/villa-tbilisi/b020.png',
      '/images/villa-tbilisi/b021.png',
      '/images/villa-tbilisi/b022.png',
      '/images/villa-tbilisi/b023.png',
      '/images/villa-tbilisi/b024.png',
    ],
  },
  {
    id: 2,
    name: 'A Residential Development of 3 Villas',
    year: '2024',
    type: 'Residential',
    cover: '/images/glass-house/bk006.png',
    gallery: [ 
      '/images/glass-house/bk006.png',
      '/images/glass-house/bk001.png',
      '/images/glass-house/bk002.png', 
      '/images/glass-house/bk003.png',
      '/images/glass-house/bk004.png',
      '/images/glass-house/bk005.png',
    ],
  },
  {
    id: 3,
    name: 'Ice Cream House',
    year: '2023',
    type: 'Private',
    cover: '/images/hill-retreat/bok00.png',
    gallery: [
      '/images/hill-retreat/bok00.png',
      '/images/hill-retreat/bok01.png',
      '/images/hill-retreat/bok02.png', 
      '/images/hill-retreat/bok04.jpg',  
      '/images/hill-retreat/bok05.jpg',
      '/images/hill-retreat/bok06.png',
      '/images/hill-retreat/bok07.jpg',
      '/images/hill-retreat/bok08.jpg',
    ],
  },
  {
    id: 4,
    name: 'Wood Tower',
    year: '2023',
    type: 'Residential',
    cover: '',
    gallery: [],
  },
  {
    id: 5,
    name: 'Urban Hub',
    year: '2023',
    type: 'Public',
    cover: '',
    gallery: [],
  },
  {
    id: 6,
    name: 'Concrete Pavilion',
    year: '2022',
    type: 'Cultural',
    cover: '',
    gallery: [],
  },
  {
    id: 7,
    name: 'Wave Museum',
    year: '2022',
    type: 'Cultural',
    cover: '',
    gallery: [],
  },
  {
    id: 8,
    name: 'Garden House',
    year: '2021',
    type: 'Residential',
    cover: '',
    gallery: [],
  },
]

export const POSTS = [
  {
    id: 1,
    date: '15 May 2025',
    title: 'The Geometry of Sound — Architecture and Music',
    excerpt: 'Exploring the relationship and similarities between music and architecture.',
    imageSrc: '',
  },
  {
    id: 2,
    date: '28 Feb 2025',
    title: 'The Beauty of Biophilic Architecture',
    excerpt: 'How nature-inspired design shapes healthier and more liveable spaces.',
    imageSrc: '',
  },
  {
    id: 3,
    date: '17 Jan 2025',
    title: 'Job Openings',
    excerpt: 'We are looking for talented architects and designers to join our growing team.',
    imageSrc: '',
  },
]