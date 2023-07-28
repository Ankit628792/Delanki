import React, { useEffect, useState } from 'react'
import { DevArray as arr } from '../../utils/constant'
import Link from 'next/link';

interface Developer {
    id: number,
    name: string,
    profilePic: string,
    designation: string,
    linkedin: string
}


function Devs() {
    const [developers, setDevelopers] = useState<Array<Developer>>([]);
    useEffect(() => {
        setDevelopers(arr.sort(() => Math.random() - 0.5).slice(0, 4))
    }, [])

    return (
        <div className='flex flex-col items-center justify-center gap-4 py-20 bg-red min-h-[60vh]'>
            <h1 className='text-4xl lg:text-5xl font-semibold text-white tracking-wide text-center'>Ready to start the project?</h1>
            <p className='text-lg mb-3 lg:text-xl text-gray-200 text-center'>We convert your idea into reality, let's have a discussion on it</p>
            <Link href={'/contact-us'}>
                <button className='bg-white py-2 px-6 rounded-lg font-medium text-lg'>
                    Contact Us
                </button>
            </Link>
            {/* <div className='flex flex-col sm:flex-row sm:items-center gap-8 py-6 flex-wrap justify-center'>
                {developers.map((data: Developer) => <div key={data.id} className='flex items-center gap-2 bg-white py-3 px-4 rounded-lg relative'>
                    <div className='relative flex-shrink-0 w-14 h-14 rounded-full'>
                        <Image placeholder="blur" blurDataURL={data.profilePic} layout="responsive" priority={false} loading="lazy" width={56} height={56} src={data.profilePic} className='rounded-full object-cover border-4 shadow-lg' alt="" />
                    </div>
                    <div>
                        <a target="_blank" rel="noreferrer" className='text-lg cursor-pointer text-gray-800 hover:text-blue-500 font-medium' href={data.linkedin}>{data.name}</a>
                        <p className='text-gray-500 text-sm'>{data.designation}</p>
                    </div>
                </div>
                )}
            </div> */}
        </div>
    )
}

export default Devs