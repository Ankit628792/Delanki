import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <>
            <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 min-h-[70vh]`}>
                    <div className='flex-grow'>
                        <h1 className='font-medium text-gray-800 dark:text-gray-50 text-4xl sm:text-5xl my-3 text-center lg:text-left lg:max-w-md'>We are the <span className='font-montez text-red'>brand</span> builders for better <span className='font-montez text-red'>tomorrow.</span></h1>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>It is a long established fact that an application that does not keep their users engaged, will be less chanced to be preferred to others.</p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>Advances in technology, let us make more useful products. But it's first when they connect with us emotionally they have the power to become loved digital experiences.</p>
                    </div>
                    <div className='max-w-lg w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden flex-grow relative'>
                        {/* <img src="/images/team.svg" className='w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="" /> */}
                        <Image src="/images/team.svg" className='hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="" layout="fill" />
                    </div>
                </div>
            </section>

            <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row-reverse items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-20 min-h-[80vh]`}>
                    <div className='flex-grow'>
                        <h1 className='font-medium text-gray-800 dark:text-gray-50 text-4xl sm:text-5xl my-3 text-center lg:text-left lg:max-w-md'>Before we <span className='font-montez text-red'>jumped in</span>,<br className='inline-block sm:hidden' /> we <span className='font-montez text-red'>underwent.</span></h1>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>We focus on what we do best, and for all other matters we've developed a high quality network of partners on anything from mobile apps, to web application or even desktop application. We'll make sure it all fits</p>
                        <div className='sm:flex items-center gap-4 max-w-md mx-auto lg:mx-0 mt-4 lg:mt-2'>
                            <div className='flex items-center my-2 gap-2 max-w-[300px] mx-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 flex-shrink-0 rounded-full bg-yellow-300 text-yellow-500 p-2 shadow-yellow">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                                <p className='text-gray-500 dark:text-gray-400 max-w-xs text-sm'>Shape unique ideas into unforgettable unicorns</p>
                            </div>
                            <div className='flex items-center my-2 gap-2 max-w-[300px] mx-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 flex-shrink-0 rounded-full bg-yellow-300 text-yellow-500 p-2 shadow-yellow">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                                <p className='text-gray-500 dark:text-gray-400 max-w-xs text-sm'> Turning great ideas into unique experiences</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-lg w-full h-72 sm:h-96 rounded-2xl overflow-hidden flex-grow relative'>
                        {/* <img src="/images/friends.svg" className='w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="" /> */}
                        <Image src="/images/friends.svg" className='hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="" layout="fill" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About