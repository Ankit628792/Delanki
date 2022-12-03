import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import DevCard from './DevCard';

function Team() {
    const [devs, setDevs] = useState([]);

    const fetchDevs = async () => {
        let res = await fetch(`/api/user?limit=4`).then(res => res.json())
        if (res.length)
            setDevs(res)
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
                        devs.slice(0, 3).map((dev: Dev) => <DevCard key={dev._id} dev={dev} />)
                    }
                </div>
                {devs.length > 3 && <div className='grid place-items-center py-4'>
                    <Link href="/user/team"><button type='button' role="button" aria-label="View All" className='text-lg bg-red text-white py-1.5 px-6 rounded-xl hover:scale-x-105 transition-transform duration-200 ease-in-out'>View All</button></Link>
                </div>}
            </section>
        </>
    )
}

export default Team