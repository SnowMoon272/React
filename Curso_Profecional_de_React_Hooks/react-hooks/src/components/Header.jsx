import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Header() {

  const [darkMode, setDarkMode] = useState(false);
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    theme === 'bg-ligth' ?
      updateTheme('bg-dark') :
      updateTheme('bg-ligth');
  };

  return (
    <div className='Header'>
      <h1>ReactHooks</h1>
      <button
        type='button'
        onClick={handleClick}
      >
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
      {/* Segunda forma de Reralizar la misma operacion, pero pasando el cambio de estado de forma directa. */}
      {/* <button type="button" onClick={() => setDarkMode
      (!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button> */}
    </div>
  );
}
