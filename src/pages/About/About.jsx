/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import coffee from '../../assets/images/coffee.jpg';
import man from '../../assets/images/man.jpg';
import Card from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav';
import styles from './About.module.css';
import Box from '../../components/Box/Box';
import Layout from '../../components/Layout/Layout';
import Address from '../../components/Address/Address';

function About({ locations }) {
  return (
    <>
      <Nav />
      <main>
        {' '}
        <Layout className={styles.heroImg}>
          <Box
            head="About Us"
            content=" Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment."
          />
        </Layout>
        <Layout className={styles.commit}>
          <div>
            <img src={man} alt="man" className={styles.manJpg} />
          </div>
          <div className={styles.commitContent}>
            <h3>Our commitment</h3>
            <p>
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </p>
          </div>
        </Layout>
        <Layout className={styles.quality}>
          <div className={styles.qualityContent}>
            <h3>Uncompromising quality</h3>
            <p>
              {' '}
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>

          <div>
            <img src={coffee} alt="coffee" className={styles.coffeeJpg} />
          </div>
        </Layout>
        <Layout className={styles.headquarter}>
          <div className={styles.headquarterContent}>
            <h3 className={styles.head}>Our headquarters</h3>

            <div>
              {locations.map((location) => (
                <Card
                  className={styles.locationHead}
                  key={nanoid()}
                  position="top"
                  title={location.title}
                  content={<Address address={location.content} />}
                >
                  <img src={location.src} alt="coffee" />
                </Card>
              ))}
            </div>
          </div>
        </Layout>
      </main>
      <Footer />
    </>
  );
}

export default About;
