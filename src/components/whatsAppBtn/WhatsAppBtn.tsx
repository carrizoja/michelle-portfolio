'use client'

import React from 'react'
import styles from '@/components/whatsAppBtn/whatsAppBtn.module.css'
import {motion} from "framer-motion";
import {IoLogoWhatsapp} from 'react-icons/io5'
function WhatsAppBtn() {
  return (
    <>
        <div className={styles.container__whatsApp}>
          <motion.a href="https://api.whatsapp.com/send?phone=5491149601488&text=Hola, ¿cómo estás? Tengo una consulta para hacerte." className={[styles.float, styles.animate__animated, styles.animate__bounceInDown].join(" ")}  rel="noreferrer" target="_blank" whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 900, damping: 20 }
          }}>
            <IoLogoWhatsapp className= {styles.contact__whatsApp_logo}/>
          </motion.a>
        </div> 
    </>
  )
}

export default WhatsAppBtn