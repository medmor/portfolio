import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    description:
      'A personal portfolio to showcase my coding projects, resume, and skills.',
    thumbnail: '/images/projects/portfolio/cover.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/medmor/portfolio'
      },
      {
        type: 'live',
        url: 'https://portfolio-sigma-nine-29.vercel.app/'
      }
    ]
  },
  {
    name: 'LandingPage template',
    description: 'A respensive landing page template.',
    thumbnail: '/images/projects/landingPage/cover.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/medmor/svt20-landing-page-template'
      },
      {
        type: 'live',
        url: 'https://landing-page-template-iota.vercel.app/en'
      }
    ]
  },
  {
    name: 'SVT20',
    description: 'My first website. Present a collection of science ressources',
    thumbnail: '/images/projects/svt20/cover.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/medmor'
      },
      {
        type: 'live',
        url: 'https://www.svt20.com/'
      }
    ]
  },
  {
    name: 'Taallam',
    description:
      'A website for my kids, where they can learn and share their learning.',
    thumbnail: '/images/projects/taallam/cover.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/medmor'
      },
      {
        type: 'live',
        url: 'https://www.taallam.xyz/'
      }
    ]
  },
  {
    name: 'Eco-friendly Product Marketplace',
    description:
      'An e-commerce platform dedicated to eco-friendly products where users can buy, sell, and learn about sustainable living.',
    thumbnail: '/images/projects/eco_marketplace/cover.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/'
      },
      {
        type: 'live',
        url: 'https://example.com/'
      }
    ]
  },
  {
    name: 'Interactive Coding Tutorial Site',
    description:
      'A website offering interactive coding tutorials and challenges to help users learn programming languages through practice.',
    thumbnail: '/images/projects/coding_tutorials/cover.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/'
      },
      {
        type: 'live',
        url: 'https://example.com/'
      }
    ]
  }
];

export { projects };
