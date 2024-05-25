import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Reveal from '@/components/reveal';
import { aboutConfig } from '../config';

function About() {
  const titleParts = aboutConfig.title.split(' ');
  return (
    <MotionWrap
      id="about"
    >
      {/* TODO: Redesign for horizontal */}
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex flex-col items-center lg:items-start">
          <Reveal>
            <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
              {titleParts[0]}
            </h2>
          </Reveal>
          <Reveal>
            <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
              {titleParts[1]}
            </h2>
          </Reveal>
        </div>
        <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {aboutConfig.description}
        </p>
      </div>
    </MotionWrap>
  );
}

export default About;
