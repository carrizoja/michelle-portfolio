import React from "react";
import globalStyles from "@/app/page.module.css";
import styles from "./page.module.css";
import WhatsAppBtn from "@/components/whatsAppBtn/WhatsAppBtn";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

const Collection = () => {
  return (
    <>
    <WhatsAppBtn />
    <section className={globalStyles.container__main}>
      <div className={globalStyles.container__main__title}>
        <h1 className={globalStyles.section__title}>ART COLLECTION</h1>
      </div>
      <div className={styles.container__text__art_collection}>
       <p>This section will be available soon.</p>
      </div>
    </section>
    <Footer />
  </>
  )
}

export default Collection