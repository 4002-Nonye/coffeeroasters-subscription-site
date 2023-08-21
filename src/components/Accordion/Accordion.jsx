import React from 'react';
import PropTypes from 'prop-types';
import styles from './Accordion.module.css';
import Tab from '../Tab/Tab';

function Accordion({ faqs }) {
  return (
    <div className={styles.accordion}>
      {faqs.map((faq) => (
        <>
          <h3 className={styles.question}>{faq.question}</h3>

          <Tab tab={faq.answer} />
        </>
      ))}
    </div>
  );
}

export default Accordion;

Accordion.propTypes = {
  faqs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
