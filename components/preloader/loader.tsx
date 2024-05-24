'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const steps = [
  '10%',
  '20%',
  '30%',
  '40%',
  '50%',
  '60%',
  '70%',
  '80%',
  '90%',
  '100%'
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, [dimension]);

  useEffect(() => {
    if (index == steps.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);


  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-[100vh] w-[100vw] flex fixed z-50 bg-white"
    >
      {dimension.width > 0 && (
        <>
          <motion.p className='absolute z-10 bottom-4 right-10 text-9xl' variants={opacity} initial="initial" animate="enter">
            {steps[index]}
          </motion.p>
        </>
      )}
    </motion.div>
  );
}
