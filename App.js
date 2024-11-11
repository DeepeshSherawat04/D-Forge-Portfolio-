import React, { useState, useEffect } from 'react';
import Spinner from './components/spinner'; // Import the Spinner component
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />; 
  }

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[3000px]'></div>
    </div>
  );
};

export default App;
