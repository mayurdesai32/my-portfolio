import React from 'react';
import logo from '../logo/apple-touch-icon.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <img src={logo} alt='logo' className='footerIcon' />
            <div className='mb-2'>
              <a
                href='https://github.com/mayurdesai32'
                className='btn'
                target='blank'
              >
                <h4>GITHUB</h4>
              </a>
              <span>|</span>
              <a
                href='https://linkedin.com/in/mayur-desai-3801a6209'
                target='blank'
                className='btn'
              >
                <h4>LINKEDIN</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
