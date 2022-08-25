import React, { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { ThemeContext } from '../../context/ThemeContext';
import Styles from './ThemeSwitch.module.css';

const ThemeSwitch = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={Styles.themeSwitch}
      aria-pressed={isDark}
    >
      {isDark
        ? <MdOutlineDarkMode className={Styles.themeSwitchIcon} />
        : <MdOutlineLightMode className={Styles.themeSwitchIcon} />}
    </button>
  );
};

export default ThemeSwitch;
