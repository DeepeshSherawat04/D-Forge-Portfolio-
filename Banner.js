import React from 'react';
import Image from '../assets/avatar.svg';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';



const Banner = () => {
  return ( 
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center mt-[-2rem]' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
      lg:gap-x-8'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.3)} 
          initial='hidden' 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}} 
           className='text-[55px] font-semibold leading-[0.85] lg:text-[110px]
          -mt-14 '>
            DEEPESH <span>SHERAWAT</span>
          </motion.h1>

          <motion.div 
          variants={fadeIn('up', 0.4)} 
          initial='hidden' 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary 
          font-semibold uppercase leading-[1]'>

            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Front-End Developer',
              2000,
              'UI Designer',
              2000,
              'UX Engineer',
              2000,
            ]}
            speed={50}
            className='text-lightCyan'
            wrapper='span'
            repeat={Infinity} 
            />
            </motion.div>

            <motion.p 
            variants={fadeIn('up', 0.5)} 
            initial='hidden' 
            whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>Welcome! I'm a front-end developer driven by innovation and aesthetic precision. I transform complex ideas into intuitive, responsive interfaces 
              that not only look stunning but offer a seamless user experience. My work fuses creativity with performance. Explore my services below, and let’s create the next engaging digital experience together!
              </motion.p>

              <motion.div
              variants={fadeIn('up', 0.6)} 
              initial='hidden' 
              whileInView={'show'}
               viewport={{once: false, amount: 0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12
              mx-auto lg:mx-0 bottom-6'>
                <button className='btn btn-lg'>Contact me</button>
                <a href='#' className='text-gradient btn-link'>
                  My Portfolio</a>
              </motion.div>
              <motion.div
              variants={fadeIn('left', 0.55)} 
              initial='hidden' 
              whileInView={'show'}
               viewport={{once: false, amount: 0.7}}
              
              
              className='flex text-[20px] gap-x-6 max-w-max mx-auto
              lg:mx-0'>
                <a href='https://www.linkedin.com/in/deepesh-sherawat-1a595523b'>
                  <FaLinkedin />
                  </a>
                  <a href='#'>
                  <FaGithub />
                  </a>
                  <a href='#'>
                  <FaInstagram />
                  </a>

                
              </motion.div>  
        </div>

        {/*Image section */}

        <motion.div 
        variants={fadeIn('down', 0.5)} 
        initial='hidden' 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}}
        className='absolute hidden lg:flex flex-1 max-w-[320px] lg:max-w-[424px]
         left-1/2 ml-80 bottom-12'>
          <img src={Image} alt='' />
        </motion.div>
      </div>
    </div>
    </section>
  );
  };

export default Banner;
