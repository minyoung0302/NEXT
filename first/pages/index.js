import Head from 'next/head'
import styles from '../styles/main/header.module.css'
import NavigaterBar from '../components/NavigaterBar'
import Logo from '../components/main/Logo'
import Search from '../components/main/search'
import BestChampions from '../components/main/BestChampions'


export default function Home() {
  return (
    <>
      <div className={`${styles.header}`} >
        <h1>LOL.ZR</h1>
      </div>
      <div className={`${styles.body}`} >
        <NavigaterBar />
        <Logo />
        <Search />
        <BestChampions />
      </div>
    </>
  )
}