import React, { useState } from 'react';

const Project = (props) => {
  const [readmore, setreadmore] = useState(false);
  const { title, img, desc, detail, link, code } = props.element;
  const key = props.element.id;
  let readmoretext;
  if (readmore) {
    readmoretext = { visibility: 'visible' };
  } else {
    readmoretext = { visibility: 'hidden' };
  }

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
          <img src={img} alt={title} className='card-img-top Project_img' />
          <div className='card-body'>
            <h5 className='card-title text-center text-capitalize'>{title}</h5>
            <p className='card-text'>
              <center>
                <h6>Technologies:-</h6>
              </center>
              <p>{detail}</p>
              <p style={readmoretext}>
                <center>
                  <h6>Summary</h6>
                </center>
                {readmore ? desc : ''}
              </p>
              {/* {readmore ? desc : `${desc.substring(0, 50)}`} */}
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
              <a
                href={code}
                className='btn  btn-success text-uppercase'
                target='blank'
              >
                SEE code
              </a>
              <a
                href={link}
                className='btn  btn-success  text-uppercase'
                target='blank'
              >
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
