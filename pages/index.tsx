import type { NextPage } from 'next'
import { About, Footer, Landing, Navbar, Products, ScrollToTop, Techs, Work } from '../components'

const Home: NextPage = () => {
  return (
    <main className="min-h-screen w-full">
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
      <Footer />
      <div id='connect' />
      <ScrollToTop />
    </main>
  )
}

export default Home
