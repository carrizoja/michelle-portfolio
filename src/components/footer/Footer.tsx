import React from 'react'
import styles from './footer.module.css'


/* import Image from 'next/image' */
const Footer = () => {
  return (
    <div className={styles.container}>    
      <div className={styles.containerText}>
        <p className={styles.textAllRightsReserved}>ALL RIGHTS RESERVED</p>
        <p className={styles.textName}>MICHELLE MUGRABI</p>
      </div>
    </div>
  )
}

export default Footer