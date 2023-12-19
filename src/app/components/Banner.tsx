"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface BannerProps {
  firstTitle?: string;
  title?: string;
  image?: string;
}

const Banner: React.FC<BannerProps> = ({ firstTitle, title, image }) => {
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const animateText = (text: string) => (
    <motion.span variants={staggerVariants} initial="hidden" animate="visible">
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <div className='bg-white  flex flex-col gap-[30px] '>
      <div
        className=" h-[100vh] w-full max-sm:h-[40vh] max-lg:h-[30vh]"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
      >
        {firstTitle && (
          <motion.p
            className='text-[50px] text-white h-[100vh] max-sm:h-[40vh] max-lg:h-[30vh] max-sm:text-[30px]  max-sm:w-full w-[75%] max-lg:w-full max-sm:pl-[20px] max-lg:pl-[70px] pl-[100px] max-lg:pt-0 pt-[180px] max-sm:pt-0 text-start justify-start items-center uppercase font-bold flex'
            style={{
              textShadow: '#000000 5px 0px 0px',
            }}
          >
            {animateText(firstTitle)}
          </motion.p>
        )}
        {title && (
          <motion.p
            className='text-white font-semibold text-[44px] max-sm:text-[44px] max-sm:pl-[20px]  pl-[100px] text-start h-[100vh] max-sm:h-[40vh] max-lg:h-[30vh] max-lg:pl-[70px] max-lg:pt-0 pt-[180px] max-sm:pt-0 justify-start items-center flex'
          >
            {animateText(title)}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Banner;
