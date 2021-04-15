import React, { useState } from 'react';

import Title from './Title';
import '../app.css';
const Contact = () => {
  const [user, setuser] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const Postdata = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = user;
    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);
    // window.alert(data.status);
    if (data.error === 'please filled all field') {
      window.alert('please filled all field');
    } else if (data.status === 'ERROR') {
      window.alert('message not send');
    } else {
      window.alert('message send ');
    }
  };

  return (
    <div className='CONTACT' id='contact'>
      <div className='container height  py-5'>
        <Title
          name='CONTACT'
          subtitle='Personal Info '
          desc='Have a question or want to work together?'
        />
        <div className='row ml-2'>
          <div className='col-md-7 py-5 px-4'>
            <div className='card-body contactinput'>
              <form>
                <div className='form-group mt-3 '>
                  <input
                    type='text'
                    className='form-control form-control-lg contactinput'
                    id='name'
                    onChange={handleInput}
                    name='name'
                    value={user.name}
                    placeholder='Name'
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <input
                    type='email'
                    className='form-control contactinput'
                    id='email'
                    onChange={handleInput}
                    name='email'
                    value={user.email}
                    placeholder='Email'
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <input
                    type='text'
                    className='form-control  form-control-lg contactinput'
                    id='subject'
                    onChange={handleInput}
                    name='subject'
                    value={user.subject}
                    placeholder='Subject'
                    required
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control contactinput'
                    rows='5'
                    id='Message'
                    placeholder='Message'
                    required
                    onChange={handleInput}
                    name='message'
                    value={user.message}
                  ></textarea>
                </div>
                <button
                  href='/'
                  className='btn btn-block btn-success text-uppercase'
                  onClick={Postdata}
                >
                  submit
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-5 py-5 px-5'>
            <form className='ml-4'>
              <div className='form-group contactinput mt-5'>
                <h5 className=' text-uppercase text-dark mb-1'>phone</h5>
                <p className='h5 text-uppercase  mt-2 mb-1'>
                  mobile: (+91) 7745811201
                </p>
              </div>

              <div className='form-group mt-4'>
                <h5 className=' text-uppercase text-dark mb-1'>email </h5>
                <p className='h5 mt-2'>msdesai32@gmail.com</p>
              </div>
              <div className='form-group mt-4'>
                <h5 className=' text-uppercase text-dark mt-2 '>ADDRESS</h5>
                <p className=''>
                  <span className='h5 mb-4'>Mumbai,</span>
                  <br /> <span className='h5'> Maharashtra, India</span>
                </p>
                <p className=''></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
