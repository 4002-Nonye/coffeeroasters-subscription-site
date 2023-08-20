import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.css';

function Box({ head, content, children }) {
  return (
    <div className={styles.content}>
      <h1>{head}</h1>
      <p>{content}</p>

      {children}
    </div>
  );
}

export default Box;

Box.defaultProps = {
  head: '',
  content: '',
  children: [],
};

Box.propTypes = {
  head: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  children: PropTypes.node,
};
