import type { NextPage } from 'next'
import About from '../components/About'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home: NextPage = () => {
  return (
    <main className="min-h-screen w-full">
      <img style={{ zIndex: -1 }} className='absolute p-10 w-full h-full m-0 object-contain filter saturate-200 overflow-hidden' src="/ani.svg" alt="" />
      <Navbar />
      <Landing />
      <About />
      <Products />
    </main>
  )
}

export default Home

// TechSolutions collaborates with hardware and software leaders to provide enterprise-class solutions for small and mid-sized businesses