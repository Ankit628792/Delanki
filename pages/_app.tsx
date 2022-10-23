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
      <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/gsap.min.js' integrity="sha512-gmwBmiTVER57N3jYS3LinA9eb8aHrJua5iQD7yqYCKa5x6Jjc7VDVaEA0je0Lu0bP9j7tEjV3+1qUm6loO99Kw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
