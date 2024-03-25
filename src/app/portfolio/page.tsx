"use client";
import React from "react";
import styles from "@/app/portfolio/page.module.css";
import globalStyles from "@/app/page.module.css";
import WhatsAppBtn from "@/components/whatsAppBtn/WhatsAppBtn";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import app from "../../firebase.js";
import Link from "next/link";
import { PuffLoader } from "react-spinners";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<
    {
      id: string;
      title: string;
      services: string;
      shortDescription: string;
      longDescription: string;
      mainImage: string;
      img1: string;
    }[]
  >([]);

  const db = getFirestore(app);
  const itemsCollection = collection(db, "projects");
  getDocs(itemsCollection).then((querySnapshot) => {
    if (querySnapshot.empty) {
      console.log("There are no projects");
    } else {
      setProjects(
        querySnapshot.docs.map(
          (doc) =>
            ({ id: doc.id, ...doc.data() } as {
              id: string;
              title: string;
              services: string;
              shortDescription: string;
              longDescription: string;
              mainImage: string;
              img1: string;
            })
        )
      );
      setLoading(false);
    }
  });

  return (
    <>
      <WhatsAppBtn />
      {/* Main Container start */}
      <section className={globalStyles.container__main}>
        <div className={globalStyles.container__main__title}>
          <h1 className={globalStyles.section__title}>PORTFOLIO</h1>
        </div>
        {/* Container projects start */}
        <div className={styles.container__projects}>
          {/* Container list projects start */}
          <div className={styles.container__listProjects}>
            {loading ? (
              <>
              <div className={styles.container_hashLoader}>
              <PuffLoader color="#6C6B6B"className='spinner' role="status"/>
              </div>          
              </>
            ) : (
              projects.map((project) => (
                <div key={project.id} className={styles.project}>
                  <Link
                    href={`/portfolio#${project.longDescription}`}
                   >
                  <h2 className={styles.project_title}>{project.title}</h2>
                  <h3 className={styles.project_services}>
                    {project.services}
                  </h3>
                  </Link>
             
                  <p className={styles.project_shortDescription}>
                    {project.shortDescription}
                  </p>
                </div>
              ))
            )}
          </div>
          {/* vertical line */}
          <figure className={styles.verticalLine}></figure>
          {/* container projects description start */}
          <div className={styles.container__projects__description}>
            {loading ? (
                      <>
                      <div className={styles.container_hashLoader}>
                      <PuffLoader color="#6C6B6B" className='spinner' role="status"/>
                      </div>
                      </>
            ) : (
              projects.map((project) => (
                <>
                  <div className={styles.container__proyect__description}>
                    <figure className={styles.verticalLine}></figure>
                    <div
                      key={project.id}
                      className={styles.project__description}
                      id={project.longDescription}
                    >
                      <img
                        className={styles.project_mainImage}
                        src={project.mainImage}
                        alt={project.title}
                      />
                      <div className={styles.project_text_container}>
                        <h2 className={styles.project_main_title}>CLIENT</h2>
                        <h3 className={styles.project_title}>
                          {project.title}
                        </h3>
                        <p className={styles.project_longDescription}>
                          {project.longDescription}
                        </p>
                      </div>
                      <img
                        className={styles.proyect_img1}
                        src={project.img1}
                        alt={project.title}
                      />
                    </div>
                  </div>
                </>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
