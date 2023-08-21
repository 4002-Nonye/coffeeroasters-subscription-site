import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({
  children, className, onClick, type, href,
}) {
  if (type === 'buttonLink') {
    return (
      <Link to={href} className={`${styles.default} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      className={`${styles.default} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  href: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Button.defaultProps = {
  href: '',
  type: '',
  children: [],
  className: '',
  onClick: () => {},
};
