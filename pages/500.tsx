import Head from 'next/head'
import React from 'react'
import { Footer, Navbar } from '../components'

function Error() {
  return (
    <>
      <Head>
        <title>Delanki | Internal Server Error</title>
      </Head>
      <section className='flex flex-col justify-between min-h-screen w-full '>
        <Navbar />
        <img src='/500.svg' className='max-h-[500px] mx-5 my-20 sm:m-16' alt='500' />
        <Footer />
      </section>
    </>
  )
}

export default Error