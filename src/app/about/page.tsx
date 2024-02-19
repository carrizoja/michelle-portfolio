import React from "react";
import styles from "@/app/about/page.module.css";
import globalStyles from "@/app/page.module.css";
import WhatsAppBtn from "@/components/whatsAppBtn/WhatsAppBtn";

const About = () => {
  return (
    <>
      <WhatsAppBtn />
      <section className={globalStyles.container__main}>
        <div className={globalStyles.container__main__title}>
          <h1 className={globalStyles.section__title}>ABOUT</h1>
        </div>
        <div className={styles.container__text__about}>
          <p className={styles.container__text__about__description}>
            {`
          I am fashion and UX/UI designer with a formal education and over 7
          years of diverse design experience, spanning fashion, graphic, and web
          design, as well as brand management. Additionally, I've delved into
          psychology-oriented astrology and painting studies. This unique
          combination equips me with the ability to intuitively and
          psychologically understand needs. On one hand, I bring a keen insight
          into human behavior, and on the other, I possess the skills to design
          projects, brands, interfaces adhering to design systems with a strong
          sense of aesthetics.`}
          </p>
          <p className={styles.container__text__about__description_paragraph}>
            {`
          I am a combination of many things; diverse universes, stories
          coexisting in only one body. I have always believed that what really
          gives richness to life are indeed mixtures. The idea of fusioning
          together unfamiliar universes; I have always liked to observe these
          transformations, and try to understand how and why these elements
          stay together over time.
          Because many of that has to do with ourselves; if we stop for a while
          and think about what really makes us what we are: We are fragments of
          the universe, finding each other.
          `}
          </p>
          <p className={styles.container__text__about__description_paragraph}>
            {`
          Everything is hybrid, constantly changing and building itself, and at
          the same time just being itself. We are in fact, a transition between
          what has been and what will be. We ourselves are a process...as are my
          creations.
          I think of this when I go back to my roots; I come from a family with
          multiple origins, therefore I am the result of endless combinations
          that will eternally keep re-discovering each other.
          `}
          </p>
          <p className={styles.container__text__about__description_paragraph}>
            {`
          Ever since my beginnings I’ve studied painting. I am a fashion
          designer who graduated from the University of Buenos Aires in 2018, a
          UX/UI Designer and an Astrology student since that same year. The
          combination between these two apparently very different disciplines,
          is another proof of the beauty of contrasts. Astrology teaches me to
          observe and try to understand the deep processes of human beings and
          all of the universe… and through design I bring up things to the
          world.
          `}
          </p>
          <p className={styles.container__text__about__description_paragraph}>
            {`
          At this point in humanity, the universe is asking us to be observed,
          and being able to make my contribution to this huge world, through
          design, is one of my main reasons to do what I do.
          `}
          </p>
          <p className={styles.container__text__about__description_paragraph}>
            {`
          But for sure, no one can travel alone through this journey of
          encounters and discoveries. That's why I invite you to join me along
          this road, so that when we meet, we can exchange parts of ourselves,
          just as fragments of the universe meeting each other.
          And the result...we’ll be discovering it….
          `}
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
