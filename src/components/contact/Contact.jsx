import React, { useContext, useRef, useState } from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
import Footer from '../footer/Footer';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yd6c8e9',
        'template_dsvkh7o',
        formRef.current,
        'RlFGX1Kt29mXtUwgK'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's discuss your project</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <FontAwesomeIcon
                icon='fa-solid fa-mobile-screen'
                className='c-icon'
              />
              +91 8806144892
            </div>

            <div className='c-info-item'>
              <FontAwesomeIcon icon='fa-solid fa-at' className='c-icon' />
              amanpardeshi@yahoo.co.in
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Name'
              name='user_name'
            ></input>

            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Subject'
              name='user_subject'
            ></input>

            <input
              type='text'
              style={{ backgroundColor: darkMode && '#333' }}
              placeholder='Email'
              name='user_email'
            ></input>

            <textarea
              rows='5'
              placeholder='Message'
              name='message'
              style={{ backgroundColor: darkMode && '#333' }}
            />
            <button>Submit</button>
            {done &&
              'Thank you for getting in touch. I will get back to you as soon as possible.'}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
