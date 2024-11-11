import React from 'react';
import logo from "../assets/logo.svg"


const Header = () => {
  return <header className='py-8'>
  <div classname="container mx-auto">
    <div className='flex justify-between items-center'>
      <a href='#'>
        <img src={logo} alt='' />
      </a>

      <button className='btn btn-sm -translate-y-10 mr-2'>Let's work together</button>
    </div>
  </div>
  </header>;
};

export default Header;