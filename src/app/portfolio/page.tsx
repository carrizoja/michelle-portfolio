"use client";
import React from "react";
import styles from "@/app/portfolio/page.module.css";
import globalStyles from "@/app/page.module.css";
import Project from "@/components/project/Project";
import ProjectDesktop from "@/components/projectDesktop/ProjectDesktop";
import WhatsAppBtn from "@/components/whatsAppBtn/WhatsAppBtn";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import app from "../../firebase.js";
import { PuffLoader } from "react-spinners";
import Footer from "@/components/footer/Footer";
import selectedProjectTile from '../../components/project/Project';


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
      isDefault: boolean;
    }[]
  >([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<any | null>(null); // State to keep track of selected project title
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isLoaded) {
          const db = getFirestore(app);
          const itemsCollection = collection(db, "projects");
          const querySnapshot = await getDocs(itemsCollection);
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
                    isDefault: boolean;
                  })
              )
            );
            setLoading(false);
            setIsLoaded(true);
          }
        }
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };
    fetchData();
  }, [isLoaded]);
  /* if screen width < 768 */
  if (typeof window !== "undefined") {
    if (window.innerWidth < 768) {
      return (
        <>
          <WhatsAppBtn />
          <section className={globalStyles.container__main}>
            <div className={globalStyles.container__main__title}>
              <h1 className={globalStyles.section__title}>PORTFOLIO</h1>
            </div>
            <div className={styles.container__projects}>
              <figure className={styles.verticalLine}>
              <figure
                 className={styles.pointer}
                 style={{top: selectedProjectTitle ? `${selectedProjectTitle}px` : 248 }}
                 ></figure>
              </figure>
              <div className={styles.container__projects__description}>
                {loading ? (
                  <>
                    <div className={styles.container_hashLoader}>
                      <PuffLoader
                        color="#6C6B6B"
                        className="spinner"
                        role="status"
                      />
                    </div>
                  </>
                ) : (
                  projects.map((project) => (
                    <>
                      <div className={styles.container__proyect__description}>
                        <Project
                          id={project.id}
                          title={project.title}
                          services={project.services}
                          shortDescription={project.shortDescription}
                          mainImage={project.mainImage}
                          longDescription={project.longDescription}
                          img1={project.img1}
                          setSelectedProjectTitle = {setSelectedProjectTitle}
                          selectedProjectTitle = {selectedProjectTile}                    
                        ></Project>
                      </div>
                    </>
                  ))
                )}
              </div>
            </div>
          </section>
          <div className={styles.footer}>
            <Footer></Footer>
          </div>
        </>
      );
    } else {
     
      const enableDivById = (id: string, event: { currentTarget: any; } | undefined) => {
        // Set the selected project title 
        if (event) {
          const titleElement = event.currentTarget;
          const cardElement = titleElement.parentNode;
          const cardTop = cardElement.offsetTop;
          const titleHeight = titleElement.offsetHeight;
          const circleTop = cardTop + (titleHeight / 2) - 34;
          setSelectedProjectTitle(circleTop);
        }
        
        // Create a new array with the updated project
        const updatedProjects = projects.map((project) => {
          if (project.id === id) {
            // This is the project we want to update, return a new object with the updated values
            return {
              ...project, // copy all the existing properties
              isDefault: true, // update the value of isDefault
              // add any other properties you want to update here
              
            };
              
          } else {
            // This is not the project we want to update, return it as is
            return {
              ...project,
              isDefault: false, // rest of the project will be false
            };
          }
        });
        // Update the state with the new array
        setProjects(updatedProjects);
        
        
      
        
      };


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
                      <PuffLoader
                        color="#6C6B6B"
                        className="spinner"
                        role="status"
                      />
                    </div>
                  </>
                ) : (
                  projects.map((project) => (
                    <div key={project.id} className={styles.project}>
                      <button
                        onClick={(event) => enableDivById(project.id, event)}
                        className={styles.project_button}
                      >
                        <h2 className={styles.project_title}>
                          {project.title}
                        </h2>
                        <h3 className={styles.project_services}>
                          {project.services}
                        </h3>
                      </button>
                      <p className={styles.project_shortDescription}>
                        {project.shortDescription}
                      </p>
                    </div>
                  ))
                )}
              </div>
              {/* vertical line */}
              <figure className={styles.verticalLine}>
                <figure
                 className={styles.pointer}
                 style={{top: selectedProjectTitle ? `${selectedProjectTitle}px` : 285 }}
                 ></figure>
              </figure>
              {/* container projects description start */}
              <div className={styles.container__projects__description}>
                {loading ? (
                  <>
                    <div className={styles.container_hashLoader}>
                      <PuffLoader
                        color="#6C6B6B"
                        className="spinner"
                        role="status"
                      />
                    </div>
                  </>
                ) : (
                  projects.map((project) => (
                    <>
                      {project.isDefault === true && (
                        <div className={styles.container__proyect__description}>
                          <ProjectDesktop
                            id={project.id}
                            title={project.title}
                            mainImage={project.mainImage}
                            longDescription={project.longDescription}
                            img1={project.img1}
                          ></ProjectDesktop>
                        </div>
                      )}
                    </>
                  ))
                )}
              </div>
            </div>
          </section>
          <Footer></Footer>
        </>
      );
    }
  }
};

export default Portfolio;
