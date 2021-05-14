import React from 'react';
import logo from '../logo/new/logod.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <img src={logo} alt='logo' className='footerIcon' />
            <div>
              <a
                href='https://github.com/mayurdesai32'
                className='footer_link'
                target='blank'
              >
                GITHUB
              </a>
              |
              <a
                href='https://linkedin.com/in/mayur-desai-3801a6209'
                target='blank'
                className='footer_link'
              >
                LINKEDIN
              </a>
            </div>

            <p className='footer_trademark'>Handcrafted by © Mayur Desai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
