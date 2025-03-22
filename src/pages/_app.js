import '@/styles/globals.css'
import { Navbar, Footer } from '../../Comopnents'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
