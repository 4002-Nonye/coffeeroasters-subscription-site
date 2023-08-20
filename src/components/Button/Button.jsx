import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, className, onClick }) {
  return (
    <button type="button" className={`${styles.default} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};

Button.defaultProps = {
  children: [],
  className: '',
  onClick: () => {},
};
