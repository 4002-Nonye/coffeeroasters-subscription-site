import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Nav.module.css'
import logo from '../../assets/images/logo.svg'
import ham from '../../assets/images/ham.svg'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <img src={logo} alt="logo" className={styles.logo}/>
      <ul className={styles.linksContainer}>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/about'>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to='/plan'>CREATE YOUR PLAN</NavLink>
        </li>
      </ul>
      <img src={ham} alt="ham"  className={styles.ham}/>
    </div>
  );
};

export default Nav;
