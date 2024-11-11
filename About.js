import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
   <section className='section' id='about' ref={ref}>
   <div className="container mx-auto">
    <div className='flex flex-col gap-y-10 lg:flex-row 
    lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen '>
      {/*img*/}
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className='flex-1 bg-about bg-contain bg-no-repeat h-[570px] mix-blend-lighten
      bg-top'></motion.div>
      {/*text*/}
      <motion.div 
      variants={fadeIn('left', 0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className='flex-1'>
        <h2 className='h2 text-accent'>About me</h2>

        <h3 className='h3 mb-4' >I am a skilled front-end developer with 2 years of experience creating efficient, user-centric web interfaces.</h3>

        <p className='mb-6'> With expertise in HTML, CSS, JavaScript, and ReactJS, I transform complex requirements into responsive, 
          high-performance designs, delivering clean, scalable code that aligns with modern development standards. 
          I take pride in crafting solutions that not only meet design and functionality standards but also enhance 
          the end-user experience. Beyond coding, I stay up-to-date with industry trends and continuously refine 
          my approach to meet the evolving needs of users and businesses alike.</p>
          
          {/*stats*/}
          <div className='flex gap-x-16  lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-[#8bf88b] hover:text-teal-500 
              mb-2'>
                {
                  inView ? <CountUp start={0} end={2} duration={4} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
              Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-[#8bf88b] hover:text-teal-500 
              mb-2'>
                {
                  inView ? <CountUp start={0} end={2} duration={4} /> : 
                  null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed
              </div>
            </div>
            <div className='flex gap-x-9 items-center'>
              <button className='btn btn-lg'>Let's connect</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </div>    
            </motion.div>
          </div>
    </div>
    </section>
  );
};

export default About;
