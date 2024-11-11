import React from 'react';
import { motion } from 'framer-motion'
import {fadeIn} from '../variants'
import Img2 from '../assets/portfolio-img2.png';


const Work = () => {
  return ( 
  <section className='section' id='work'>
    <div className='container mx-auto mt-96'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
        variants={fadeIn('right', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}} 
        className='flex-1 flex flex-col gap-y-11 mb-10
        lg:mb-0'>
          {/*text*/}
          <div>
            <h2 className='h2 leading-tight text-lightCyan mt-2'>
            Showcasing my front-end <br /> 
            expertise
            </h2>
            <motion.p 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='max-w-sm mb-16'>
              Here is a curated selection of my recent projects, showcasing my skills in front-end development 
              and commitment to crafting seamless, user-focused digital experiences.</motion.p>
              <button className='btn btn-sm'> <a href='https://basketbounty.netlify.app/' target='_blank' rel='noopener noreferrer'>View the project </a></button>
          </div>
          {/*image*/}
          <a href='https://basketbounty.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='group relative overflow-hidden border-2
          border-white/60 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/65 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/*link around img */}
            <img className='group-hover:scale-125 transition-all
            duration-500' src={Img2} alt='E-Commerce platform'/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24
            transition-all duration-500 z-50'>
              <span className='text-gradient'>E-Commerce Platform</span>
              </div>
          </a>
        </motion.div>
      </div>
      </div>
  </section>
  );
};

export default Work;
