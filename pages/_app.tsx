import '../styles/globals.css'
import '../styles/menu.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Nian Devs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}

export default MyApp
