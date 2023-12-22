'use client'

import React from 'react'
import styles from '@/app/contact/page.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className= {styles.container__contact}>
    <div className = {styles.container__title}>
      <h1 className={styles.section__title}>CONTACT</h1>
    </div>
    <div className= {styles.container__text__contact}>
      <h2 className={styles.container__text__contact__title}>
        {`Get in touch and let's bring your ideas to life. Together, we'll breathe life into your concepts.`}
      </h2>
      <p className={styles.container__text__contact__description}>
      {`Whether you're interested in our design services, have a project in mind, or just want to say hello, 
      we're here to connect. Get in touch, and let's start a conversation about turning your vision into reality`}
      </p>
      <div className={styles.container__text__icons}>
        <motion.a href="https://api.whatsapp.com/send?phone=5491141768429&text=Hola, ¿cómo estás? Tengo una consulta para hacerte." target='_blank' rel='noreferrer'
         whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 900, damping: 20 }
          }}><FaWhatsapp className={styles.whatsAppIcon}/></motion.a>
        <motion.a href="mailto:contacto@circularid.com.ar" target='_blank' rel='noreferrer'
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 900, damping: 20 }
          }}
         >
        <AiOutlineMail className={styles.mailIcon}/>
        </motion.a>
      </div>
    </div> 
  </section>
  )
}

export default Contact