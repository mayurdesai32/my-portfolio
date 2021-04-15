import React from 'react';
import Title from './Title';
import '../app.css';
const Profilepage = () => {
  return (
    <div className='prfilepg' id='about'>
      <div className='container height py-5'>
        <Title
          name='about'
          subtitle='Personal Info '
          desc='Get to know more about me'
        />
        <div className='row'>
          <div className='col-md-6 py-5 '>
            <h3
              data-aos='fade-right'
              // data-aos-easing='linear'
              data-aos-duration='1500'
              className='my-4'
            >
              Hello!
            </h3>

            <p
              className='profiledetail'
              data-aos='fade-right'
              // data-aos-easing='linear'
              data-aos-duration='1500'
            >
              My name is Mayur Desai and I'm a passionate Web Developer using
              web technologies to build amazing products and focusing on solving
              problems for different niches and different industries using the
              power of technology.
            </p>
            <br />
            <p
              data-aos='fade-right'
              // data-aos-easing='linear'
              data-aos-duration='1500'
              className='profiledetail'
            >
              I will love to hear from you. Whether it's a project, job
              opportunity, or just a chat. Feel free to contact me.
            </p>
          </div>
          <div className='col-md-6 py-5 '>
            <h3
              data-aos='fade-right'
              // data-aos-easing='linear'
              data-aos-duration='1500'
              className='my-4 mx-3'
            >
              Skill
            </h3>
            <div
              data-aos='fade-right'
              // data-aos-easing='linear'
              data-aos-duration='1500'
              className='d-flex flex-wrap justify-content-start'
            >
              <div className=' h5 skill mx-3'>Javascript</div>
              <div className='h5 skill mx-3'>React</div>
              <div className='h5 skill mx-3'>Node</div>
              <div className='h5 skill mx-3'>Express</div>
              <div className='h5 skill mx-3'>Mongodb</div>
              <div className='h5 skill mx-3'>Html</div>
            </div>

            {/* 
          <span style={{ width: 80 }} className='bg-danger'>
            Reactjs
          </span> */}
            {/* 
          <span style={{ width: 80 }} className='bg-danger'>
            Reactjs
          </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
