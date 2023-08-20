import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import Logo from '../Logo/Logo';
import ham from '../../assets/images/ham.svg';
import coffeeLogo from '../../assets/images/logo.svg';

function Nav() {
  return (
    <div className={styles.nav}>
      <Logo src={coffeeLogo} />
      <ul className={styles.linksContainer}>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to="/plan">CREATE YOUR PLAN</NavLink>
        </li>
      </ul>
      <img src={ham} alt="ham" className={styles.ham} />
    </div>
  );
}

export default Nav;
