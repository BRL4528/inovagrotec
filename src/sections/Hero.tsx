/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
    //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        {/* <motion.h1 variants={textVariant({delay: 1.1})}
          className={styles.heroHeading}
        >
          Paulista
        </motion.h1> */}

        <motion.div
          variants={textVariant({delay: 1.2})}
          className="flex flex-row justify-center items-center"
        >
{/* 
          <h1 className={styles.heroHeading}>Tintas</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1> */}
          <img
          src="/inova.svg"
          alt="cover"
          className="w-5/6 sm:h-[180px] h-[150px] z-10 relative"
        />
          {/* <img
          src="/subNome.svg"
          alt="cover"
          className="w-full sm:h-[120px] h-[120px] z-10 relative"
        /> */}
        </motion.div>
      </div>
      <motion.div
        variants={slideIn({direction: 'right', type: 'tween', delay: 0.2, duration: 1})}
        className="relative w-full md:-mt-[20px]-mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/banner.jpg"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h[155px] h-[100px] object-contain"
            />

          </div>
        </a>

      </motion.div>

    </motion.div>

  </section>
);

export default Hero;
