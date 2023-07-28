import type { GetServerSidePropsContext, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { About, Footer, Landing, Navbar, Products, ScrollToTop, Work, Devs, Team } from '../components'
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Techs = dynamic(() => import('../components/delanki/Techs'), {
  ssr: false
});
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Delanki - A product development company</title>
        <meta name="description" content="Delanki - A team of experts that are dedicated to making modern and intelligent Apps for tomorrow. Hire us to convert your idea into reality, we'r always ready to hear you" />
        <meta name="keywords" content="Delanki, delanki website development, web development company, product development company, java developers, create product, hire developers, hire developers india, hire programmers"></meta>
        <meta property="og:image" content={process.env.host + "/android-chrome-512x512.png"} />
        <meta property="og:title" content="Delanki" />
        <meta property="og:description" content="Delanki - A team of experts that are dedicated to making modern and intelligent Apps for tomorrow. Hire us to convert your idea into reality, we'r always ready to hear you" />
        <meta property="og:url" content={process.env.host} />
        <meta property="twitter:image" content={process.env.host + "/android-chrome-512x512.png"} />
        <meta property="twitter:title" content="Delanki" />
        <meta property="twitter:description" content="Delanki - A team of experts that are dedicated to making modern and intelligent Apps for tomorrow. Hire us to convert your idea into reality, we'r always ready to hear you" />
        <meta property="twitter:url" content={process.env.host} />
      </Head>
      <main className="min-h-screen w-full dark:bg-slate-900">
        <img style={{ zIndex: -1 }} className='absolute p-10 w-full h-full m-0 object-contain filter saturate-200 overflow-hidden' src="/ani.svg" alt="" />
        <Navbar />
        <Landing />
        <div id='aboutUs' />
        <About />
        <div id='products' />
        <Products />
        <div id='work' />
        <Work />
        <Techs />
        <Team />
        <Devs />
        <Footer />
        <div id='connect' />
        <ScrollToTop />
      </main>
    </>
  )
}

export default Home

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  return {
    props: {
      session
    }
  }
}