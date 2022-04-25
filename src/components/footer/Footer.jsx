import React from 'react';
import './footer.scss';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='social-list'>
        <li className='social-list_item'>
          <a
            href='https://www.linkedin.com/in/aman-pardeshi-49073019a/'
            className='social-list_link'
          >
            <FontAwesomeIcon icon={brands('linkedin')} className='icon' />
          </a>
        </li>
        <li className='social-list_item'>
          <a
            href='https://github.com/snow-leopard01'
            className='social-list_link'
          >
            <FontAwesomeIcon icon={brands('github')} className='icon' />
          </a>
        </li>
        <li className='social-list_item'>
          <a
            href='https://twitter.com/amanpardeshi15'
            className='social-list_link'
          >
            <FontAwesomeIcon icon={brands('twitter')} className='icon' />
          </a>
        </li>
        <li className='social-list_item'>
          <a
            href='https://www.instagram.com/_aman.ap/'
            className='social-list_link'
          >
            <FontAwesomeIcon icon={brands('instagram')} className='icon' />
          </a>
        </li>
        <li className='social-list_item'>
          <a
            href='https://www.facebook.com/aman.pardeshi.37'
            className='social-list_link'
          >
            <FontAwesomeIcon icon={brands('facebook')} className='icon' />
          </a>
        </li>
      </ul>
      <p className='copywrite'> Copyright &copy; 2022 Aman Pardeshi</p>
    </div>
  );
};

export default Footer;
