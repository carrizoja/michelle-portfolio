"use client";

import React from "react";
import styles from "@/app/contact/page.module.css";
import globalStyles from "@/app/page.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import WhatsAppBtn from "@/components/whatsAppBtn/WhatsAppBtn";
import Footer from "@/components/footer/Footer";
const Contact = () => {
  return (
    <>
      <WhatsAppBtn />
      <section className={globalStyles.container__main}>
        <div className={globalStyles.container__main__title}>
          <h1 className={globalStyles.section__title}>CONTACT</h1>
        </div>
        <div className={styles.container__text__contact}>
          <h2 className={styles.container__text__contact__title}>
            {`Get in touch and let's bring your ideas to life. Together, we'll breathe life into your concepts.`}
          </h2>
          <p className={styles.container__text__contact__description}>
            {`Whether you're interested in our design services, have a project in mind, or just want to say hello, 
      we're here to connect. Get in touch, and let's start a conversation about turning your vision into reality.`}
          </p>
          <div className={styles.container__text__icons}>
            <motion.a
              href="https://api.whatsapp.com/send?phone=5491149601488&text=Hola, me gustaría tener más información. Gracias."
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 900, damping: 20 },
              }}
            >
              <FaWhatsapp className={styles.whatsAppIcon} />
            </motion.a>
            <motion.a
              href="mailto:michelle@mugrabimichelle.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 900, damping: 20 },
              }}
            >
              <AiOutlineMail className={styles.mailIcon} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/mugrabimichelle/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 900, damping: 20 },
              }}
            >
              <FaInstagram className={styles.instagramIcon} />
            </motion.a>
          </div>
        </div>
      </section>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
