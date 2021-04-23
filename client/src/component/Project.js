import React, { useState } from 'react';

const Project = (props) => {
  const [readmore, setreadmore] = useState(false);
  const { title, img, desc, link, code } = props.element;
  const key = props.element.id;
  return (
    <>
      <div key={key} className='project col-md-6 col-lg-4 my-4 '>
        <div
          key={key}
          // data-aos={(index % 2) === 0) ?'flip-up':'flip-down'}
          data-aos='flip-right'
          // data-aos-easing='linear'
          data-aos-duration='1500'
          className='card card-5'
        >
          <img src={img} alt={title} className='card-img-top' />
          <div className='card-body'>
            <h5 className='card-title text-center text-capitalize'>{title}</h5>
            <p className='card-text'>
              {readmore ? desc : `${desc.substring(0, 50)}`}
              {/* {desc} */}
              <button
                className='project_readmore'
                onClick={() => {
                  setreadmore(!readmore);
                }}
              >
                {readmore ? 'show less' : 'show more'}
              </button>
            </p>

            <div className='project_Link_flex '>
              <a href={code} className='btn  btn-success text-uppercase'>
                SEE code
              </a>
              <a href={link} className='btn  btn-success  text-uppercase'>
                SEE LIVE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
