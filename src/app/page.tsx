import Image from 'next/image'
import styles from './page.module.css'
import bg from '../../public/assets/home.png'
export default function Home() {
  return (
  <main className={styles.mainBackground}>
    <Image
  fill
  src={bg}
  style={{objectFit:'cover'}}
  alt="Background image"
/>
   </main>

  )
}
