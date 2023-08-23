import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.module.css';
import Card from '../Card/Card';

function Tab({
  // eslint-disable-next-line no-unused-vars
  tab,
  curOpen,
  setCoffeeTaste,
  setCoffeeType,
  setcoffeeQuantity,
  setCoffeeGround,
  setCoffeeDelivery,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSelection = (ans) => {
    switch (curOpen) {
      case 0:
        setCoffeeTaste(ans.answerTitle);

        break;
      case 1:
        setCoffeeType(ans.answerTitle);
        break;
      case 2:
        setcoffeeQuantity(ans.answerTitle);
        break;
      case 3:
        setCoffeeGround(ans.answerTitle);
        break;
      case 4:
        setCoffeeDelivery(ans.answerTitle);
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles.tabContainer}>
      {tab.map((ans, i) => (
        <div
          onClick={() => {
            handleSelection(ans);
            setActiveIndex(i);
          }}
          tabIndex={0}
          role="button"
          aria-hidden
          key={ans.answerTitle}
        >
          <Card
            className={`${styles.holder} ${activeIndex === i ? styles.selected : styles.hovered}`}
            title={ans.answerTitle}
            content={ans.answerDescription}
          />
        </div>
      ))}
    </div>
  );
}

export default Tab;

Tab.propTypes = {
  tab: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  setCoffeeTaste: PropTypes.func,
  setCoffeeType: PropTypes.func,
  setcoffeeQuantity: PropTypes.func,
  setCoffeeGround: PropTypes.func,
  setCoffeeDelivery: PropTypes.func,
  curOpen: PropTypes.number,
};

Tab.defaultProps = {
  setCoffeeTaste: () => {},
  setCoffeeType: () => {},
  setcoffeeQuantity: () => {},
  setCoffeeGround: () => {},
  setCoffeeDelivery: () => {},
  curOpen: Number,
};

// ${styles.selected}
