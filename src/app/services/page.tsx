import React from "react";
import styles from "@/app/services/page.module.css";
import { promises as fs } from "fs";

const Services = async () => {
  const file = await fs.readFile(
    process.cwd() + "/src/app/json/data.json",
    "utf-8"
  );
  const data = JSON.parse(file);
  return (
    <>
      <section className={styles.container__services}>
        <div className={styles.container__title}>
          <h1 className={styles.section__title}>SERVICES</h1>
        </div>
        <div className={styles.container__listServices}>
          {data.map((service: any) => (
            <div key={service.id} className={styles.container__service}>
              <div className={styles.service__item}>
                <h2>{service.service_title}</h2>
                <p>{service.service_description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
