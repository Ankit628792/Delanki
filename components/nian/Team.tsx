import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Router from 'next/router';

function Team() {
    const [devs, setDevs] = useState([]);

    const fetchDevs = async () => {
        let res = await fetch(`/api/user`).then(res => res.json())
        if (res.length)
            setDevs(res)
        console.log(res)
    }
    useEffect(() => { fetchDevs() }, [])

    return (
        <>
            <section className='min-h-screen w-full p-5 lg:p-10'>
                <p className='text-gray-500 text-center text-lg lg:text-xl my-4 max-w-xl lg:max-w-3xl mx-auto uppercase'>Our Team</p>
                <h1 className='font-bold text-center text-gray-800 dark:text-gray-50 text-4xl lg:text-5xl 2xl:text-6xl 2xl:max-w-xl tracking-wider max-w-lg mx-auto'>A small team with <span className='font-montez text-red'>impressive</span> cred.</h1>
                <p className='lg:text-lg text-center max-w-3xl mx-auto my-4 text-gray-500'>Want to work with the enthusiastic developers and get ready your software to be used by people all over the world? Contact our team to for the open discussion</p>

                <div className='flex flex-wrap items-center justify-center gap-10 2xl:gap-x-14 py-10'>
                    {
                        devs.map((dev: any) => <div className='w-full max-w-xs rounded-lg overflow-hidden border dark:border-gray-800 group relative max-h-[25rem] bg-white dark:bg-transparent dark:bg-gradient-to-t from-black to-slate-700'>
                            <div className='relative h-40 w-full'>
                                <Image className='object-cover' src={dev.banner} alt="" layout="fill" loading='lazy' />
                            </div>
                            <div className='p-5 flex flex-col items-center justify-center gap-1 transform -translate-y-16'>
                                <div className='w-20 h-20 border-4 shadow-lg rounded-full relative cursor-pointer' onClick={() => Router.push(`/user/${dev._id}`)}>
                                    <Image className='object-cover rounded-full' src={dev.image} alt="" layout="fill" loading='lazy' />
                                </div>
                                <h1 className='text-xl font-semibold text-center cursor-pointer text-gray-800 dark:text-gray-50' onClick={() => Router.push(`/user/${dev._id}`)}>{dev.name}</h1>
                                <p className='text-gray-500 dark:text-gray-300 font-medium text-center cursor-pointer' onClick={() => Router.push(`/user/${dev._id}`)}>{dev.designation}</p>
                                <p className='text-gray-500 text-center text-sm line-clamp-3'>{dev.bio}</p>
                                <div className='flex items-center justify-center gap-6 my-4'>
                                    <a href={dev.linkedin} target="_blank" rel="noreferrer">
                                        <div className='w-10 h-10 cursor-pointer object-contain relative'>
                                            <Image priority={false} loading="lazy" src="/icons/linkedin.png" alt='' fill={true} />
                                        </div>
                                    </a>
                                    <a href={dev.github} target="_blank" rel="noreferrer">
                                        <div className='w-10 h-10 cursor-pointer object-contain relative'>
                                            <Image priority={false} loading="lazy" src="/icons/github.png" alt='' fill={true} />
                                        </div>
                                    </a>
                                    {dev.other && <a href={dev.other} target="_blank" rel="noreferrer">
                                        <div className='w-10 h-10 cursor-pointer object-contain relative'>
                                            <Image priority={false} loading="lazy" src="/icons/link.png" alt='' fill={true} />
                                        </div>
                                    </a>}
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Team