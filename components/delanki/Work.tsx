import Image from 'next/image'
import React from 'react'
import { workData as data } from '../../utils/constant'

function Work() {
    return (
        <section className='sm:min-h-[80vh] flex flex-col items-center justify-center gap-10 max-w-7xl mx-auto w-full py-16 md:py-10 relative'>
            <div className='absolute rounded-lg w-full h-full m-0 object-cover filter saturate-200 overflow-hidden opacity-30 dark:invert'>
                <Image placeholder="blur" blurDataURL="/images/dragon1.jpg" priority={false} loading="lazy" layout='fill' style={{ zIndex: -1 }} className='' src="/images/dragon1.jpg" alt="" />
            </div>

            <div className='mx-auto'>
                <h1 className='font-medium text-gray-800 dark:text-gray-50  text-4xl sm:text-5xl 2xl:max-w-xl text-center lg:max-w-md'>Our Customized</h1>
                <h1 className='font-medium text-gray-800 dark:text-gray-50  text-4xl sm:text-5xl 2xl:max-w-xl text-center lg:max-w-md'><span className='font-montez text-red'>Work Flow</span></h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 xl:gap-y-16 p-5'>
                {data.map(({ id, title, description }) => <div key={id} className={`flex flex-col items-center gap-2 h-40`}>
                    <h1 className='text-3xl lg:text-4xl text-gray-800 dark:text-gray-50 font-medium'>
                        <span className='font-montez text-red'>0{id}</span>
                        &nbsp;{title}
                    </h1>
                    <p className='text-lg max-w-md text-gray-500 mx-auto text-center leading-relaxed'>{description}</p>
                </div>
                )}
            </div>
        </section>
    )
}

export default Work