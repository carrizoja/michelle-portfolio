"use client";

import React from "react";
import styles from "@/app/about/manifesto/page.module.css";
import globalStyles from "@/app/page.module.css";
import Footer from "@/components/footer/Footer";

const Manifesto = () => {
  return (
    <>
      <section className={globalStyles.container__main}>
        <div className={globalStyles.container__main__title}>
          <h1 className={globalStyles.section__title}>MANIFESTO</h1>
        </div>
        <div className={styles.container__text__manifesto}>
          <p className={styles.container__text__manifesto__description}>
            {`We are made of the words we say, 
as well as of the ones we don't
Of the decisions we make, 
and also, of the ones left aside.`}
          </p>
          <p className={styles.container__text__manifesto__description}>
            {` We are made of the new places we get to know, 
and of those we've known since forever. 
Of the people that walk by us, 
and of those who've always been by our sides;
We are also made of those people who came into our lives,
and already left, having transformed a piece of us.`}
          </p>
          <p className={styles.container__text__manifesto__description}>
            {`And it’s right there, in those moments of transition.
A place I call “the nowhere”
where nothing really exists by itself.
Where I’m no longer neither what I have always been, 
nor what I will become. It is where I find myself in a symbiosis.`}
          </p>

          <p className={styles.container__text__manifesto__description}>
            {` I like to to think that in each of my pieces there is a fragment of the universe.`}
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Manifesto;
