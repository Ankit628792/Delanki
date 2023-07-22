import '../styles/globals.css'
import '../styles/menu.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";
import { Toaster } from 'react-hot-toast'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
  size: 4,
  color: '#f22952',
  className: "z-50",
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  return (<>
    <Head>
      <title>Delanki Pvt Ltd</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <>
          <div><Toaster /></div>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </SessionProvider>
  </>)
}

export default MyApp
