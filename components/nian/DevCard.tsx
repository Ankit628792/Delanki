import React from 'react'
import Image from 'next/image'
import Router from 'next/router'

function DevCard({ dev }: { dev: Dev }) {
    return (
        <>
            <div className='w-full max-w-xs rounded-lg overflow-hidden border dark:border-gray-800 group relative max-h-[25rem] bg-white dark:bg-transparent dark:bg-gradient-to-t from-black to-slate-700 shadow-lg'>
                <div className='relative h-40 w-full'>
                    <Image placeholder="blur" blurDataURL={dev.banner} src={dev.banner} alt="" layout="fill" objectFit='cover' loading='lazy' />
                </div>
                <div className='p-5 flex flex-col items-center justify-center gap-1 transform -translate-y-16'>
                    <div className='w-20 h-20 border-4 shadow-lg rounded-full relative cursor-pointer' onClick={() => Router.push(`/user/${dev._id}`)}>
                        <Image placeholder="blur" blurDataURL={dev.image} className='rounded-full' src={dev.image} alt="" layout="fill" objectFit='cover' loading='lazy' />
                    </div>
                    <h1 className='text-xl font-semibold text-center cursor-pointer text-gray-800 dark:text-gray-50' onClick={() => Router.push(`/user/${dev._id}`)}>{dev.name}</h1>
                    <p className='text-gray-500 dark:text-gray-300 font-medium text-center cursor-pointer' onClick={() => Router.push(`/user/${dev._id}`)}>{dev.designation}</p>
                    <p className='text-gray-500 text-center text-sm line-clamp-3'>{dev.bio}</p>
                    <div className='flex items-center justify-center gap-6 my-4'>
                        <a href={dev.linkedin} target="_blank" rel="noreferrer">
                            <div className='w-10 h-10 cursor-pointer relative'>
                                <Image placeholder="blur" blurDataURL="/icons/linkedin.png" priority={false} loading="lazy" src="/icons/linkedin.png" alt='' layout="fill" objectFit='contain' />
                            </div>
                        </a>
                        <a href={dev.github} target="_blank" rel="noreferrer">
                            <div className='w-10 h-10 cursor-pointer relative'>
                                <Image placeholder="blur" blurDataURL="/icons/github.png" priority={false} loading="lazy" src="/icons/github.png" alt='' layout="fill" objectFit='contain' />
                            </div>
                        </a>
                        {dev.other && <a href={dev.other} target="_blank" rel="noreferrer">
                            <div className='w-10 h-10 cursor-pointer relative'>
                                <Image placeholder="blur" blurDataURL="/icons/link.png" priority={false} loading="lazy" src="/icons/link.png" alt='' layout="fill" objectFit='contain' />
                            </div>
                        </a>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DevCard