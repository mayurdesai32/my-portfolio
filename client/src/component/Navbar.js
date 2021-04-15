import React from 'react';
import logo from '../logo/apple-touch-icon.png';
const Navbar = () => {
  return (
    <>
      <nav
        id='navbar-example2'
        className={`navbar  navbar-expand-lg fixed-top  navbar-dark  `}
      >
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* <a className='navbar-brand' href='#home'>
          <img src={logo} className='navbarIcon' alt='logo' />
        </a> */}
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <a className='nav-link' href='#home'>
                Home
              </a>
            </li>

            <li className='nav-item active'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='#work'>
                Works
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
