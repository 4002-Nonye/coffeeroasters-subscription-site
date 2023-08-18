import React from "react";
import Nav from "../../components/Nav/Nav";
import styles from "./Home.module.css";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

const Home = ({ collections, reasons }) => {
  return (
    <>
      <Nav />

      <main>
        <section className={styles.heroImg}>
          <div className={styles.content}>
            <h1>
              Great coffee <br /> made simple.
            </h1>
            <p>
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>

            <Button className={styles.btn}>
              <Link to="plan">Create your plan</Link>
            </Button>
          </div>
        </section>
        <section className={styles.collectionSection}>
          <h2 className={styles.collection}>our collection</h2>

          <div className={styles.collectionCard}>
            {collections.map((collection, index) => (
              <>
                <Card
                  key={index}
                  position="top"
                  title={collection.title}
                  content={collection.content}
                >
                  <img src={collection.src} alt="coffee" />
                </Card>
              </>
            ))}
          </div>
        </section>

        <section className={styles.reason}>
          <h3 className={styles.head}>Why choose us?</h3>
          <p className={styles.subhead}>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>

          <div className={styles.reasonCard}>
            {reasons.map((reason, index) => (
              <>
                <Card
                className={styles.contents}
                  key={index}
                  position="top"
                  title={reason.title}
                  content={reason.content}
                >
                  <img src={reason.src} alt="coffee" />
                </Card>
              </>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
