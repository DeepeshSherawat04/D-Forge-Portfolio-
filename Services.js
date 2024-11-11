import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion'; 
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Responsive Web Development',
    description: 'I design and develop websites that seamlessly adapt to any device size, providing an engaging experience whether on desktop, tablet, or mobile.',
    link: 'Learn more',
  },
  {
    name: 'UI/UX Design Integration',
    description: 'I translate design concepts into dynamic, user-friendly interfaces. Using modern tools like React and CSS frameworks, I bring designs to life with pixel-perfect precision.',
    link: 'Learn more',
  },
  {
    name: 'Interactive Animations and Transitions',
    description: 'Adding subtle animations and smooth transitions, I use Framer Motion and CSS to make websites more engaging without sacrificing performance.',
    link: 'Learn more',
  },
  {
    name: 'Version Control and Collaboration',
    description: 'Experienced in Git and GitHub workflows, I’m skilled in managing code and collaborating effectively with teams. This knowledge fosters smooth project progress.',
    link: 'Learn more',
  },

];

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend mb-12
        lg:mb-0'>
          <h2 className='h2 text-accent mb-6 mt-6'>What I Do</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
            I'm a dedicated front-end developer 
            with over 2 years of experience.
          </h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div> 

        {/*Services*/}
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          {/*services list*/}
          <div>
            {services.map((service, index)=> {
              // destruction service
              const {name, description, link} = service;
              return( 
              <div className='border-b border-white/20 h-[146px] mb-[40px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary 
                  font-semibold mb-6 mt-7'>
                    {name}
                    </h4>
                  <p className='font-secondary leading-tight'>
                    {description}
                    </p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='#' className='btn w-9 h-9 mb-[42px] mt-5 flex justify-center
                  items-center'
                  >
                    <BsArrowUpRight />
                  </a>
                  <a href='#' className='text-gradient text-sm'>
                    {link}
                    </a>
                </div>
              </div>
              );
            })}
          </div>
          </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Services;
