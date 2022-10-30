import type { NextPage } from 'next'
import { About, Footer, Landing, Navbar, Products, ScrollToTop, Techs, Work, Devs } from '../components'

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
