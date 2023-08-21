import React from 'react';
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

function Plan({ works }) {
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
          <Selection />
          <Accordion faqs={faqs} />
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
