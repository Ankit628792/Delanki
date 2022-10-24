import type { NextPage } from 'next'
import About from '../components/About'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import ScrollToTop from '../components/ScrollToTop'
import Techs from '../components/Techs'
import Work from '../components/Work'

const Home: NextPage = () => {
  return (
    <main className="min-h-screen w-full">
      <img style={{ zIndex: -1 }} className='absolute p-10 w-full h-full m-0 object-contain filter saturate-200 overflow-hidden' src="/ani.svg" alt="" />
      <Navbar />
      <Landing />
      <About />
      <Products />
      <Work />
      <Techs />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default Home

// TechSolutions collaborates with hardware and software leaders to provide enterprise-class solutions for small and mid-sized businesses