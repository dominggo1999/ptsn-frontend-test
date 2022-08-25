import React from 'react';
import { Brand, ThemeSwitch } from '../../common';
import Styles from './Header.module.css';

const Header = () => {
  return (
    <header className={Styles.header}>
      <Brand />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
