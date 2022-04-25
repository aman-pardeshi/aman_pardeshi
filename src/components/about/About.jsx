import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img
            src='https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='a-img'
          />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          It is a long established fact that a reader will be a readable content
        </p>
        <p className='a-desc'>
          I'm a web developer with a focus on the MERN stack, but still
          exploring other technologies and frameworks that catch my interest! if
          you're looking for a developer to add to your team, I'd love to hear
          from you!
        </p>
        <div className='a-award'>
          <img src='' alt='' className='' />
        </div>
      </div>
    </div>
  );
};

export default About;
