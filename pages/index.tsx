import type { GetServerSidePropsContext, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { AppContext } from 'next/app'
import { About, Footer, Landing, Navbar, Products, ScrollToTop, Work, Devs } from '../components'
import dynamic from 'next/dynamic';

const Techs = dynamic(() => import('../components/Techs'), {
  ssr: false
});
const Home: NextPage = () => {
  return (
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
      <Devs />
      <Footer />
      <div id='connect' />
      <ScrollToTop />
    </main>
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