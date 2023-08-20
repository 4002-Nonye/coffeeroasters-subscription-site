import React from 'react';
import Nav from '../../components/Nav/Nav';
import styles from './Plan.module.css'
import Box from '../../components/Box/Box';
function Plan() {
  return (
    <>
      <Nav />

<main>
  <section className={styles.heroImg}>
  <Box head='Create a plan' content='Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'/>
  </section>
  
</main>
    </>
  
  );
}

export default Plan;
