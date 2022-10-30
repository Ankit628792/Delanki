import React from 'react'
import { Footer, Navbar } from '../components'

function Error() {
  return (
    <section className='flex flex-col justify-between min-h-screen w-full '>
      <Navbar />
      <img src='/404.svg' className='max-h-[500px] mx-5 my-20 sm:m-16' alt='404' />
      <Footer />
    </section>
  )
}

export default Error