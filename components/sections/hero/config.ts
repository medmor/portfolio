import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description:
    'I am a science teacher and I love to build beautiful websites. Welcome to my portfolio.'
};

export { hero };
