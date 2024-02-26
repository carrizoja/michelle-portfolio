import React from "react";
import globalStyles from "@/app/page.module.css";
import styles from "@/app/portfolio/art/page.module.css";
import WhatsAppBtn from "@/components/whatsAppBtn/WhatsAppBtn";
import Link from "next/link";

const Art = () => {
  return (
    <>
      <WhatsAppBtn />
      <section className={globalStyles.container__main}>
        <div className={globalStyles.container__main__title}>
          <h1 className={globalStyles.section__title}>ART</h1>
        </div>
        <div className={styles.container__text__art}>
            <Link href="/portfolio/art/collection"><h2>ART COLLECTION</h2></Link>
            <Link href="/portfolio/art/functional"><h2>FUNCTIONAL SCULPTURES</h2></Link> 
        </div>
      </section>
    </>
  );
};

export default Art;
