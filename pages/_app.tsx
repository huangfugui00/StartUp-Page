import 'tailwindcss/tailwind.css'
import 'animate.css';
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Layout>
      <SEO/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
