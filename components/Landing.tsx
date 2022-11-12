import Image from 'next/image'
import React from 'react'

function Landing() {
    return (
        <header className='lg:min-h-screen w-full p-5 lg:p-10'>
            <h1 className='font-bold text-center text-gray-800 dark:text-gray-50 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 2xl:max-w-2xl tracking-wider max-w-lg lg:max-w-xl mx-auto mt-16 lg:mt-4'>Build your <span className='font-montez text-red'>Product</span> with Nian Devs</h1>
            <p className='text-gray-500 text-center text-lg lg:text-xl my-4 max-w-xl lg:max-w-3xl mx-auto'>Nian Devs deliverers blazing fast development, striking word solutions and turns your idea into reality 🚀</p>
            <div className='mx-auto -mt-16 lg:-mt-28 w-full max-w-4xl h-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] xl:min-h-[550px] 2xl:min-h-[600px] relative'>
                {/* <div className='absolute bottom-6 sm:bottom-10 md:bottom-20 lg:bottom-32 left-0 right-0 w-full h-40 bg-gradient-to-t from-white to-transparent'></div> */}
                {/* <img src="/images/dragon-animate.svg" className='w-full object-cover drop-shadow' alt="" /> */}
                <Image src="/images/dragon-animate.svg" className='w-full drop-shadow' alt='' layout="fill" />
            </div>
        </header>
    )
}

export default Landing