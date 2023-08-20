import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';

function Logo({ src }) {
  return <img src={src} alt="logo" className={styles.logo} />;
}
export default Logo;

Logo.propTypes = {
  src: PropTypes.string.isRequired,
};
