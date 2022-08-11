import NavigaterBar from '../components/NavigaterBar'
import styles from '../styles/main/header.module.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <h1>LOL.ZR</h1>
  <NavigaterBar />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
