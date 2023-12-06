import React from "react";
import styles from "@/app/about/page.module.css";

const About = () => {
  return (
    <section className={styles.container__about}>
      <div className={styles.container__title}>
        <h1 className={styles.section__title}>ABOUT ME</h1>
      </div>
      <div className={styles.container__text__about}>
        <p className={styles.container__text__about__description}>
          I am fashion and UX/UI designer with a formal education and over 7
          years of diverse design experience, spanning fashion, graphic, and web
          design, as well as brand management. Additionally, I've delved into
          psychology-oriented astrology and painting studies. This unique
          combination equips me with the ability to intuitively and
          psychologically understand needs. On one hand, I bring a keen insight
          into human behavior, and on the other, I possess the skills to design
          projects, brands, interfaces adhering to design systems with a strong
          sense of aesthetics.
        </p>
        <h2 className={styles.container__text__about__title}>
          Eager to delve deeper into my philosophy? Read my manifesto
        </h2>
      </div>
    </section>
  );
};

export default About;
