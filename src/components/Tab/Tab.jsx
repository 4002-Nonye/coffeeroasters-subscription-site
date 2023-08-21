import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './Tab.module.css';
import Card from '../Card/Card';

function Tab({ tab }) {
  return (
    <div className={styles.tabContainer}>
      {' '}
      { tab.map((ans) => (
        <Card
          key={nanoid()}
          className={`${styles.holder} `}
          title={ans.answerTitle}
          content={ans.answerDescription}
        />
      ))}

    </div>

  );
}

export default Tab;

Tab.propTypes = {
  tab: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

// ${styles.selected}
