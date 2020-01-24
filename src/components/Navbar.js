import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container navbar'>
      <Link to='/'>Home</Link>
      <nav className='nav-links'>
        <Link to='/teams'>Teams</Link>
        <Link to='/players'>Players</Link>
      </nav>
    </div>
  );
};

export default Navbar;
