import React, { useContext } from 'react';
import { themeContext } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const ballStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2em',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  };

  return (
    <div className={`header ${theme}`} style={headerStyle}>
      <h1>FIFA</h1>
      <span style={ballStyle} onClick={toggleTheme}>
        ⚽
      </span>
    </div>
  );
};

export default Header;
