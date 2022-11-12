import '../styles/globals.css'
import '../styles/menu.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  return (<>
    <Head>
      <title>Nian Devs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  </>)
}

export default MyApp
