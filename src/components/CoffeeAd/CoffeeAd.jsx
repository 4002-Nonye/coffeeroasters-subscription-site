import React from 'react';
import PropTypes from 'prop-types';
import styles from './CoffeeAd.module.css';
import TimeLine from '../TimeLine/TimeLine';
import Card from '../Card/Card';

function CoffeeAd({ works }) {
  return (
    <>
      {' '}
      <TimeLine />
      <div className={styles.container}>
        {works.map((work, index) => (
          <Card
            className={styles.content}
            key={work.title}
            title={work.title}
            content={work.content}
          >
            <p className={styles.number}>
              0
              {index + 1}
            </p>
          </Card>
        ))}
      </div>
    </>

  );
}

export default CoffeeAd;

CoffeeAd.propTypes = {
  works: PropTypes.instanceOf(Array).isRequired,

};
