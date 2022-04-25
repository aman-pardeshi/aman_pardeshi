import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './toggle.scss';

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };

  const darkMode = theme.state.darkMode;
  return (
    <div className='t'>
      <FontAwesomeIcon icon='fa-solid fa-sun' />
      <FontAwesomeIcon
        icon='fa-solid fa-moon'
        style={{ color: darkMode && '#333' }}
      />
      <div
        className='t-button'
        onClick={handleClick}
        style={{ left: darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
