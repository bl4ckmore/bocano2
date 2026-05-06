// ─────────────────────────────────────────────────────────────
//  SITE DATA  —  edit this file to customise your portfolio
//  All text fields are { en: '...', ge: '...' }
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Bocano Architecture',

  about: {
    headline: {
      en: 'Who We Are',
      ge: 'ჩვენს შესახებ',
    },
    body: {
      en: [
        'We are a Tbilisi-based architectural studio with more than 10 years of experience in Architecture, Urban and Spatial Design. Our work is a combination of constant dialogue with the environment, versatile exploration methods, a creative approach, and in-depth technical knowledge.',
        'We believe in lateral thinking, which provokes the ability to perceive patterns that are not obvious. Our aim is to produce work beneficial to society. With thoroughly thought, human-centered, and bespoke architectural solutions and design, we transform spaces into places.',
      ],
      ge: [
        'ჩვენ ვართ თბილისში დაფუძნებული არქიტექტურული სტუდია, 10 წელზე მეტი გამოცდილებით არქიტექტურაში, ურბანულ და სივრცით დიზაინში. ჩვენი სამუშაო არის გარემოსთან მუდმივი დიალოგის, კვლევის მრავალფეროვანი მეთოდების, შემოქმედებითი მიდგომისა და ღრმა ტექნიკური ცოდნის ერთობლიობა.',
        'ჩვენ გვჯეროდა ლატერალური აზროვნების, რომელიც ეხმარება არაუცხადო შაბლონების შეცნობაში. ჩვენი მიზანია საზოგადოებისთვის სასარგებლო სამუშაოს შექმნა. საფუძვლიანად გააზრებული, ადამიანზე ორიენტირებული და ინდივიდუალური არქიტექტურული გადაწყვეტილებებითა და დიზაინით, ჩვენ ვაქცევთ სივრცეებს ადგილებად.',
      ],
    },
    services: {
      en: 'Architectural Design, Urban Design, Spatial Design, Interior Design, and Pre-design services',
      ge: 'არქიტექტურული დიზაინი, ურბანული დიზაინი, სივრცითი დიზაინი, ინტერიერის დიზაინი და წინასაპროექტო მომსახურება',
    },
  },

  contact: {
    phone: '+995 598 43 63 39',
    email: 'support@bocano.ge',
    city: { en: 'Tbilisi, Georgia', ge: 'თბილისი, საქართველო' },
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
}

// ─────────────────────────────────────────────────────────────
//  PROJECTS
//  name and type are { en: '...', ge: '...' }
//  cover    → main photo shown in the grid  (put file in /public/images/)
//  gallery  → array of photos shown inside the project page
// ─────────────────────────────────────────────────────────────  
export const PROJECTS = [
  {
    id: 1,
    name: { en: 'Villa Bulachauri', ge: 'ვილა ბულაჩაური' },
    year: '2024',
    type: { en: 'Residential', ge: 'საცხოვრებელი' },
    cover: '/images/villa-tbilisi/b002.png',
    gallery: [
      '/images/villa-tbilisi/b002.png',
      '/images/villa-tbilisi/b001.png',
      '/images/villa-tbilisi/b014.png',
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
    name: { en: 'A Residential Development of 3 Villas', ge: '3 ვილის საცხოვრებელი განვითარება' },
    year: '2024',
    type: { en: 'Residential', ge: 'საცხოვრებელი' },
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
    name: { en: 'Ice Cream House', ge: 'ნაყინის სახლი' },
    year: '2023',
    type: { en: 'Private', ge: 'პირადი' },
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
    name: { en: 'White Spring', ge: 'თეთრი წყარო' },
    year: '2024',
    type: { en: 'Residential', ge: 'საცხოვრებელი' },
    cover: '/images/project-4/k02.png',
    gallery: [
      '/images/project-4/k02.png',
      '/images/project-4/k01.png',
      '/images/project-4/k03.png',
      '/images/project-4/k04.png',
      '/images/project-4/k05.png',
      '/images/project-4/k06.png',
      '/images/project-4/k07.png',
    ],
  },
  {
    id: 5,
    name: { en: "Two Brother's House", ge: 'ორი ძმის სახლი' },
    year: '2024',
    type: { en: 'Residential', ge: 'საცხოვრებელი' },
    cover: '/images/project-5/an10.png',
    gallery: [
      '/images/project-5/an10.png',
      '/images/project-5/an01.png',
      '/images/project-5/an02.png',
      '/images/project-5/an03.png',
      '/images/project-5/an04.png',
      '/images/project-5/an05.png',
      '/images/project-5/an06.png',
      '/images/project-5/an07.png',
      '/images/project-5/an08.png',
      '/images/project-5/an09.png',
      '/images/project-5/an10.png',
    ],
  },
  {
    id: 6,
    name: { en: 'Red House', ge: 'წითელი სახლი' },
    year: '2024',
    type: { en: 'Residential', ge: 'საცხოვრებელი' },
    cover: '/images/project-6/ann02.png',
    gallery: [
      '/images/project-6/ann02.png',
      '/images/project-6/ann01.png',
      '/images/project-6/ann03.png',
      '/images/project-6/ano04.png',
    ],
  },
]
