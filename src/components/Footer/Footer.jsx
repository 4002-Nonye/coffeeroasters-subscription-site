import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';
import Logo from '../Logo/Logo';
import footerLogo from '../../assets/images/logo-white.svg';
import facebook from '../../assets/images/logo-facebook.svg';
import twitter from '../../assets/images/logo-twitter.svg';
import instagram from '../../assets/images/logo-instagram.svg';

const links = [
  { to: '/', text: 'HOME' },
  { to: '/about', text: 'ABOUT US' },
  { to: '/plan', text: 'CREATE PLAN' },
];

const socialLinks = [
  { href: 'https://github.com/4002-Nonye', iconSrc: facebook },
  { href: 'https://github.com/4002-Nonye', iconSrc: twitter },
  { href: 'https://github.com/4002-Nonye', iconSrc: instagram },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.right}>
        <Logo src={footerLogo} />

        <div className={styles.linkTextContainer}>
          {links.map((link) => (
            <Link
              to={link.to}
              key={link.to}
              className={styles.linkText}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.socials}>
        {socialLinks.map((socialLink) => (
          <Link to={socialLink.href} target="blank" key={socialLink.iconSrc}>
            <img src={socialLink.iconSrc} alt="Icon" />
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
