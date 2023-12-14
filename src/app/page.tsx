import Image from 'next/image'
import styles from './page.module.css'
import bg from '../../public/assets/home.jpg'
export default function Home() {
  return (
  <main className={styles.mainBackground}>
    <Image 
  src={bg}
  fill
  style={{objectFit:"cover"}}
  alt="Background image"
/>
   </main>

  )
}
