import React from 'react';
import styles from './TimeLine.module.css';

function TimeLine() {
  return (
    <div className={styles.timeline}>
      <div className={styles.event}>
        <div className={styles.circle} />
      </div>
      <div className={styles.line} />
      <div className={styles.event}>
        <div className={styles.circle} />
      </div>
      <div className={styles.line} />
      <div className={styles.event}>
        <div className={styles.circle} />
      </div>
    </div>
  );
}

export default TimeLine;
