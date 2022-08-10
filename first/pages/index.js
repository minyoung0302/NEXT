import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/main/header.module.css'

export default function Home() {
  return (
    <>
      <div className={`${styles.header}`} />
      <div className={`${styles.body}`} />
    </>
  )
}