import React from 'react';

import '../app.css';

const Title = (props) => {
  return (
    <div className='row'>
      <div className='col text-center'>
        <h5
          data-aos='zoom-in-up'
          // data-aos-easing='linear'
          data-aos-duration='1500'
          className=' text-uppercase font-wieght-bold maintitle mb-1'
        >
          <strong> {props.name}</strong>
        </h5>
        <div
          data-aos='zoom-in-right'
          // data-aos-easing='linear'
          data-aos-duration='1500'
        >
          <h1
            className='subtitle'
            data-aos='zoom-in-right'
            // data-aos-easing='linear'
            data-aos-duration='1500'
          >
            {props.subtitle}
          </h1>
        </div>
        <div
          data-aos='zoom-in-right'
          // data-aos-easing='linear'
          data-aos-duration='1500'
          className='title-underline bg-danger mb-4'
        ></div>
        <h5
          data-aos='zoom-in-right'
          data-aos-easing='linear'
          data-aos-duration='1500'
          className='mt-2 text-capitalize '
        >
          {props.desc}
        </h5>
      </div>
    </div>
  );
};
export default Title;
