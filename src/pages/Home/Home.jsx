import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Nav from "../../components/Nav/Nav";
import styles from "./Home.module.css";

function Home({ collections, reasons, works }) {
  return (
    <>
      <Nav />
      <Box />
      <main>
        <section className={styles.heroImg}>
          <Box
            head="   Great coffee made simple."
            content=" Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule."
          >
            <Button className={styles.btn}>
              <Link to="plan">Create your plan</Link>
            </Button>
          </Box>
        </section>
        <section className={styles.collectionSection}>
          <h2 className={styles.collection}>our collection</h2>

          <div className={styles.collectionCard}>
            {collections.map((collection) => (
              <Card
                key={nanoid()}
                position="top"
                title={collection.title}
                content={collection.content}
              >
                <div className={styles.imgHolder}>
                  <img src={collection.src} alt="coffee" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className={styles.reason}>
          {" "}
          <h3 className={styles.head}>Why choose us?</h3>
          <p className={styles.subhead}>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
          <div className={styles.reasonCard}>
            {reasons.map((reason) => (
              <Card
                className={styles.contents}
                key={nanoid()}
                position="top"
                title={reason.title}
                content={reason.content}
              >
                <img src={reason.src} alt="coffee" />
              </Card>
            ))}
          </div>
        </section>

        <section className={styles.works}>
          <h3>How it works</h3>
          <div>
            {works.map((work, index) => (
              <Card
                key={nanoid()}
                position="top"
                title={work.title}
                content={work.content}
              >
                <p>0{index + 1}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

Home.propTypes = {
  collections: PropTypes.instanceOf(Array).isRequired,
  works: PropTypes.instanceOf(Array).isRequired,
  reasons: PropTypes.instanceOf(Array).isRequired,
};
