import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, className = '' }) {
  return (
    <button type="button" className={`${styles.default} ${className}`}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

Button.defaultProps = {
  children: [],
  className: '',
};
