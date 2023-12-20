import React from "react";
import styles from "@/app/portfolio/page.module.css";
import Image from "next/image";
import portada from "../../../public/assets/portada1.png";

const Portfolio = () => {
  return (
    <>
      {/* Main Container start */}
      <section className={styles.container__portfolio}>
        <div className={styles.container__title}>
          <h1 className={styles.section__title}>PORTFOLIO</h1>
        </div>
        {/* Container projects start */}
        <div className={styles.container__projects}>
          {/* Container list projects start */}
          <div className={styles.container__listProjects}>
            <div className={styles.project}>
              <h2 className={styles.project_name}>CIRCULAR ID</h2>
              <h3 className={styles.project_type}>WEBSITE DESIGN</h3>
              <p className={styles.project_summary}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                ullam non possimus facere molestiae dolorum officiis, mollitia
                quod quasi incidunt quo, libero unde inventore illum tenetur
                quos sequi atque sed.
              </p>
            </div>
            <div className={styles.project}>
              <h2 className={styles.project_name}>FILL THE VOID</h2>
              <h3 className={styles.project_type}>FASHION DESIGN</h3>
              <p className={styles.project_summary}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                ullam non possimus facere molestiae dolorum officiis, mollitia
                quod quasi incidunt quo, libero unde inventore illum tenetur
                quos sequi atque sed.
              </p>
            </div>
          </div>
          {/* vertical line */}
          <figure className={styles.verticalLine}>
          </figure>
          {/* container projects description start */}
          <div className={styles.container__projects__description}>
            <div className={styles.project__description}>
              <Image
                src= {portada}
                alt="Circular ID"
                width={500}
                height={500}
              >
              </Image>
              <div className={styles.project_text_container}>
                <h2 className={styles.project_title}>CLIENT</h2>
                <h3 className={styles.project_name}>WEBSITE DESIGN</h3>
                <p className={styles.project_briefing}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  ullam non possimus facere molestiae dolorum officiis,
                  mollitia quod quasi incidunt quo, libero unde inventore illum
                  tenetur quos sequi atque sed.
                </p>
              </div>
              <iframe  src="https://www.youtube.com/embed/DAtYk-pZLHw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              <iframe src="https://giphy.com/embed/b2ZMVxPvworgk" width="480" height="288" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/riffsngifs-design-art-b2ZMVxPvworgk">via GIPHY</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
