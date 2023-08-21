import React, { useState } from 'react';
import styles from './Selection.module.css';

const options = [
  'preferences',
  'Bean Type',
  'Quantity',
  'Grind option',
  'Deliveries',
];

function Selection() {
  const [isActive, setIsActive] = useState(null);

  const handleIsActive = (index) => {
    setIsActive(index);
  };

  return (
    <div className={styles.optionsTab}>
      {options.map((option, index) => (

        <p
          className={`${styles.optionText}  ${isActive !== index ? styles.disabled : ''}`}
          onClick={() => handleIsActive(index)}
          aria-hidden="true"
        >
          <span className={`${styles.span}  ${isActive !== index ? styles.disabled : ''}`}>
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
