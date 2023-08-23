import React from 'react';
import PropTypes from 'prop-types';
import styles from './Accordion.module.css';
import Tab from '../Tab/Tab';
import arrowUp from '../../assets/images/arrow-up.svg';
import arrowDown from '../../assets/images/arrow-down.svg';

function Accordion({
  faqs,
  curOpen,
  setIsCurOpen,
  setCoffeeTaste,
  setCoffeeType,
  setcoffeeQuantity,
  setCoffeeGround,
  setCoffeeDelivery,
}) {
  const handleOpen = (index) => {
    // if the current question is clicked twice, close it
    setIsCurOpen(index !== curOpen ? index : null);
  };

  return (
    <div className={styles.accordion}>
      {faqs.map((faq, index) => (
        <div key={faq.question}>
          <div
            aria-hidden
            className={styles.questionWrapper}
            tabIndex={0}
            role="button"
            onClick={() => {
              handleOpen(index);
            }}
          >
            <h3 className={styles.question}>{faq.question}</h3>
            <img src={curOpen === index ? arrowUp : arrowDown} alt="arrow" />
          </div>
          {curOpen === index && (
            <div>
              <Tab
                tab={faq.answer}
                curOpen={curOpen}
                setIsCurOpen={setIsCurOpen}
                setCoffeeTaste={setCoffeeTaste}
                setCoffeeType={setCoffeeType}
                setcoffeeQuantity={setcoffeeQuantity}
                setCoffeeGround={setCoffeeGround}
                setCoffeeDelivery={setCoffeeDelivery}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

Accordion.propTypes = {
  faqs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  curOpen: PropTypes.number,
  setIsCurOpen: PropTypes.func,
  setCoffeeTaste: PropTypes.func,
  setCoffeeType: PropTypes.func,
  setcoffeeQuantity: PropTypes.func,
  setCoffeeGround: PropTypes.func,
  setCoffeeDelivery: PropTypes.func,
};

Accordion.defaultProps = {
  curOpen: Number,
  setIsCurOpen: () => {},
  setCoffeeTaste: () => {},
  setCoffeeType: () => {},
  setcoffeeQuantity: () => {},
  setCoffeeGround: () => {},
  setCoffeeDelivery: () => {},
};
