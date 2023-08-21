import React from 'react';
import { nanoid } from 'nanoid';
import styles from './Address.module.css';

function Address({ address }) {
  const add = address.map((ad) => (
    <span className={styles.address} key={nanoid()}>
      {ad}
    </span>
  ));
  return add;
}

export default Address;
