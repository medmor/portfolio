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
    thumbnail: '/images/projects/recipe_app/cover.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/medmor/svt20-landing-page-template'
      },
      {
        type: 'live',
        url: 'https://example.com/'
      }
    ]
  },
  {
    name: 'Virtual Study Group Platform',
    description:
      'A platform where students can form virtual study groups, schedule sessions, and share resources in real-time.',
    thumbnail: '/images/projects/study_group/cover.jpg',
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
    name: 'Fitness Tracker App',
    description:
      'A mobile app that helps users track their fitness activities, set goals, and monitor progress with motivational tools.',
    thumbnail: '/images/projects/fitness_tracker/cover.jpg',
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
