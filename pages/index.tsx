import type { GetServerSidePropsContext, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { AppContext } from 'next/app'
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
        <meta name="description" content="Delanki - A team of experts that are dedicated to making modern and intelligent Apps for tomorrow." />
        <meta name="keywords" content="Delanki, HTML, CSS, JavaScript, Bootstrap, Material UI, Tailwind CSS, Express JS, Node JS, React JS, React Native, Redux, NextJS, MongoDB, Firebase, angular, docker, java, hibernate, graphql, typescript, microservice, sql, postgresql,electron js, freelance, startup, tech, dev, delanki," />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:title" content="Delanki" />
        <meta property="og:description" content="Delanki description" />
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