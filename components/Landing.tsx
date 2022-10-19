import React from 'react'

function Landing() {
    return (
        <header className='min-h-screen w-full p-5 lg:p-10'>
            <h1 className='font-bold text-center text-gray-800 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 2xl:max-w-2xl tracking-wider max-w-lg lg:max-w-xl mx-auto'>Build your <span className='font-montez text-red'>Product</span> with Nian Devs</h1>
            <p className='text-gray-500 text-center text-lg lg:text-xl my-4 max-w-xl lg:max-w-3xl mx-auto'>Nian Devs deliverers blazing fast development, striking word solutions and turns your idea into reality 🚀</p>
            <div className='mx-auto -mt-10 sm:-mt-32 lg:-mt-44 max-w-4xl relative'>
                {/* <div className='absolute bottom-6 sm:bottom-10 md:bottom-20 lg:bottom-32 left-0 right-0 w-full h-40 bg-gradient-to-t from-white to-transparent'></div> */}
                <img src="/dragon-animate.svg" className='w-full object-cover' alt="" />
            </div>
        </header>
    )
}

export default Landing