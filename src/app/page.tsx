import Image from 'next/image'
import styles from './page.module.css'
import bg from '../../public/assets/home.png'
import FooterHome from '@/components/footerHome/Footer'
export default function Home() {
  return (
  <>
     <main className={styles.mainBackground}>    
   </main>
   <div className={styles.footer}>
      <FooterHome/>
   </div>  
  </>
 
  
  )
}
