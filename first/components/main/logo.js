import Image from 'next/image'
import styles from '../../styles/main/logo.module.css'

export default function Home() {
  return (
    <>
        <div className={`${styles.logo}`}>
        <Image src="/cats.jpg" alt="Vercel Logo" width={800} height={300} />
        </div>
    </>
    
  )
}