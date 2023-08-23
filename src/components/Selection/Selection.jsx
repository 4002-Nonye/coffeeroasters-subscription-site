import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './Selection.module.css';

const options = [
  'preferences',
  'Bean Type',
  'Quantity',
  'Grind option',
  'Deliveries',
];

function Selection({ curOpen, setIsCurOpen }) {
  const handleOpen = (index) => {
    setIsCurOpen(index !== curOpen ? index : null);
  };
  return (
    <div className={styles.optionsTab}>
      {options.map((option, index) => (
        <p
          key={nanoid()}
          className={`${styles.optionText} 
          
           ${curOpen !== index ? styles.disabled : styles.active} `}
          onClick={() => handleOpen(index)}
          aria-hidden="true"
        >
          <span
            className={`${styles.span}  ${
              curOpen !== index ? styles.disabled : ''
            }`}
          >
            0
            {index + 1}
          </span>
          {option}
        </p>
      ))}
    </div>
  );
}

export default Selection;

Selection.propTypes = {
  curOpen: PropTypes.number,
  setIsCurOpen: PropTypes.func,
};

Selection.defaultProps = {
  curOpen: Number,
  setIsCurOpen: () => {},
};
