import React from 'react';

import { useDarkMode } from '../../hooks/dark-mode.hook';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className='navbar'>
      <h1>Crypto Tracker</h1>
      <div className='dark-mode__toggle'>
        <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
      </div>
    </nav>
  );
};

export { Navbar };
