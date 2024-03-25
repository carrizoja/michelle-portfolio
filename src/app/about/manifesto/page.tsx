"use client";

import React from "react";
import styles from "@/app/about/manifesto/page.module.css";
import globalStyles from "@/app/page.module.css";
import Footer from "@/components/footer/Footer";
import WhatsAppBtn from "@/components/whatsAppBtn/WhatsAppBtn";

const Manifesto = () => {
  return (
    <>
      <section className={globalStyles.container__main}>
        <div className={globalStyles.container__main__title}>
          <h1 className={globalStyles.section__title}>MANIFESTO</h1>
        </div>
        <div className={styles.container__text__manifesto}>
          <div>
            <p>{`We are made of the words we say,`}</p>
          </div>
          <div>
            <p>{`as well as of the ones we don't`}</p>
          </div>
          <div>
            <p>{`Of the decisions we make,`}</p>
          </div>
          <div>
            <p className={styles.container__text__manifesto__paragraph}>{`and also, of the ones left aside.`}</p>
          </div>
          <div>
            <p>{`We are made of the new places we get to know,`}</p>
          </div>
          <div>
            <p>{`and of those we've known since forever.`}</p>
          </div>
          <div>
            <p>{`Of the people that walk by us,`}</p>
          </div>
          <div>
            <p>{`and of those who've always been by our sides;`}</p>
          </div>
          <div>
            <p>{`We are also made of those people who came into our lives,`}</p>
          </div>
          <div>
            <p className={styles.container__text__manifesto__paragraph}>{`and already left, having transformed a piece of us.`}</p>
          </div>
          <div>
            <p>{`And it’s right there, in those moments of transition.`}</p>
          </div>
          <div>
            <p>{`A place I call “the nowhere”`}</p>
          </div>
          <div>
            <p>{`where nothing really exists by itself.`}</p>
          </div>
          <div>
            <p>{`Where I’m no longer neither what I have always been,`}</p>
          </div>
          <div>
            <p className={styles.container__text__manifesto__paragraph}>{`nor what I will become. It is where I find myself in a symbiosis.`}</p>
          </div>
          <div>
            <p>{`I like to to think that in each of my pieces there is a fragment of the universe.`}</p>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <WhatsAppBtn></WhatsAppBtn>
    </>
  );
};

export default Manifesto;
