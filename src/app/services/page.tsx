import React from "react";
import styles from "@/app/services/page.module.css";
import globalStyles from "@/app/page.module.css";
import { promises as fs } from "fs";
import WhatsAppBtn from "@/components/whatsAppBtn/WhatsAppBtn";

const Services = async () => {
  const file = await fs.readFile(
    process.cwd() + "/src/app/json/data.json",
    "utf-8"
  );
  const data = JSON.parse(file);
  return (
    <>
      <WhatsAppBtn />
      <section className={globalStyles.container__main}>
        <div className={globalStyles.container__main__title}>
          <h1 className={globalStyles.section__title}>SERVICES</h1>
        </div>
        <div className={styles.container__listServices}>
        {/*   <figure className={styles.verticalLine}></figure> */}
          <div>
            {data.map((service: any) => (
              <div key={service.id} className={styles.container__service}>
                <figure className={styles.verticalLine}></figure>
                <div className={styles.service__item}>
                  <h2 className={styles.service_title}>
                    {service.service_title}
                  </h2>
                  <p className={styles.service_description}>
                    {service.service_description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
