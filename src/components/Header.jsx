import React from 'react';
import styles from './../styles/Header.module.css';
import logo from './../assets/logo.svg';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}><img src={logo} alt="logo" /></div>
    <nav className={styles.nav}>
      <a href="/">Главная</a>
      <a href="/">Музыка</a>
      <a href="/">Сообщества</a>
      <a href="/">Друзья</a>
    </nav>
  </header>
);

export default Header;