import NavigaterBar from '../components/NavigaterBar'
import '../styles/globals.css'

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
