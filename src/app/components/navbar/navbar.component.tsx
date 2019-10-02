import React from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(false);
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
