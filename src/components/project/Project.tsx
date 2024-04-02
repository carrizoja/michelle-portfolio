import { useState } from 'react';
import styles from './project.module.css';


export const circleResult: any | null = null;

const Project = ({ id, title, services, shortDescription, mainImage, longDescription, img1, selectedProjectTitle, setSelectedProjectTitle}: { id: string, title: string, services: string, shortDescription:string, mainImage:string, longDescription:string, img1:string, selectedProjectTitle: any | null, setSelectedProjectTitle: any | null
}) => {

  const [isDivEnabled, setIsDivEnabled] = useState(true);
  /* const [topCircleResult, setTopCircleResult] = useState<any | null>(null); */

  const handleButtonClick = ( event: { currentTarget: any; } | undefined) => {

    setIsDivEnabled(!isDivEnabled);
     // Set the selected project title 
     if (event) {
      const titleElement = event.currentTarget;
      const cardElement = titleElement.parentNode;
      const cardTop = cardElement.offsetTop;
      console.log(cardTop);
      const titleHeight = titleElement.offsetHeight;
      console.log(titleHeight);
      const circleResult = cardTop + (titleHeight / 2) - 10;
      console.log(circleResult);
      setSelectedProjectTitle(circleResult);
      console.log(selectedProjectTitle);
    };
    
  };

  return (
    <div key={id} className={styles.project}>
    <button
      className={styles.project_button}
      onClick={handleButtonClick}
    >
        <h2 className={styles.project_main_title_mobile}>
          {title}
        </h2>
        <h3 className={styles.project_services}>
          {services}
        </h3>
     
    </button>
    <p className={styles.project_shortDescription}>
      {shortDescription}
    </p>
    <div
  
      className={`${styles.project__description} ${
        isDivEnabled ? "disabled" : "enabled"
      }`}
   
    >
      <img
        className={styles.project_mainImage}
        src={mainImage}
        alt={title}
      />
      <div className={styles.project_text_container}>
        <h2 className={styles.project_main_title}>
          CLIENT
        </h2>
        <h3 className={styles.project_title}>
          {title}
        </h3>
        <p className={styles.project_longDescription}>
          {longDescription}
        </p>
      </div>
      <img
        className={styles.proyect_img1}
        src={img1}
        alt={title}
      />
    </div>
  </div>

  );

 
};



export default Project;
