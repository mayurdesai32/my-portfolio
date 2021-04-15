import React from 'react';
import '../app.css';

const Firstpage = () => {
  return (
    <>
      <header id='home' className='bg-dark body '>
        <div className='container '>
          <div className='row  height justify-content-center align-items-center'>
            <div className='col  text-center '>
              <h1 className='text-light  text-uppercase  '>
                hello, I'm
                <strong className='text-danger'> Mayur desai.</strong>
              </h1>
              <h1 className='text-light text-uppercase  font-italic'>
                <strong>I'm a full stack Developer</strong>
                <small className='text-light'></small>
              </h1>

              <a
                href='#work'
                className='btn btn-outline-danger  btn-lg m-2 text-capitalize '
              >
                view my work
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Firstpage;
