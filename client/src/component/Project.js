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
            <h4 className='text-center text-primary text-capitalize'>
              {title}
            </h4>
            <center>
              <h5>Technologies:-</h5>
            </center>
            <p className='project_detail'>{detail}</p>
            <div style={readmoretext}>
              <h5 className='text-center'>Summary</h5>
              <p> {readmore ? desc : ''}</p>
            </div>
            {/* {readmore ? desc : `${desc.substring(0, 50)}`} */}
            <button
              className='project_readmore '
              onClick={() => {
                setreadmore(!readmore);
              }}
            >
              <p>{readmore ? 'show less' : 'show more'}</p>
            </button>
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
