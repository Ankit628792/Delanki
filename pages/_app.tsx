import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Nian Devs</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Montez&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
