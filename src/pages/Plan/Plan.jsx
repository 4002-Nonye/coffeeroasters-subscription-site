import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav/Nav';
import styles from './Plan.module.css';
import Box from '../../components/Box/Box';
import CoffeeAd from '../../components/CoffeeAd/CoffeeAd';
import Layout from '../../components/Layout/Layout';
import Selection from '../../components/Selection/Selection';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordion/Accordion';
import faqs from '../../data/data';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

function Plan({ works }) {
  const [curOpen, setIsCurOpen] = useState(0);
  const [coffeeTaste, setCoffeeTaste] = useState('______');
  const [coffeeType, setCoffeeType] = useState('______');
  const [coffeeQuantity, setcoffeeQuantity] = useState('______');
  const [coffeeGround, setCoffeeGround] = useState('______');
  const [coffeeDelivery, setCoffeeDelivery] = useState('______');
  return (
    <>
      <Nav />

      <main>
        <Layout className={styles.heroImg}>
          <Box
            head="Create a plan"
            content="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
          />
        </Layout>

        <Layout className={styles.ad}>
          <CoffeeAd works={works} />
        </Layout>
        <Layout className={styles.planOptions}>
          <Selection curOpen={curOpen} setIsCurOpen={setIsCurOpen} />
          <div className={styles.orderSummaryWrapper}>
            {' '}
            <Accordion
              faqs={faqs}
              curOpen={curOpen}
              setIsCurOpen={setIsCurOpen}
              setCoffeeTaste={setCoffeeTaste}
              setCoffeeType={setCoffeeType}
              setcoffeeQuantity={setcoffeeQuantity}
              setCoffeeGround={setCoffeeGround}
              setCoffeeDelivery={setCoffeeDelivery}
            />
            <OrderSummary
              coffeeTaste={coffeeTaste}
              coffeeType={coffeeType}
              coffeeQuantity={coffeeQuantity}
              coffeeGround={coffeeGround}
              coffeeDelivery={coffeeDelivery}
            />

          </div>

        </Layout>

      </main>
      <Footer />
    </>
  );
}

export default Plan;

Plan.propTypes = {
  works: PropTypes.instanceOf(Array).isRequired,
};
