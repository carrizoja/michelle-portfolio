import React from 'react'
import styles from './footer.module.css'


/* import Image from 'next/image' */
const Footer = () => {
  return (
    <div className={styles.container}>    
      <div className={styles.containerText}>
        <p>All rights reserved.</p>
        <p>Michelle Mugrabi</p>
      </div>
    </div>
  )
}

export default Footer