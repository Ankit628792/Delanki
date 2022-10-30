import React, { useEffect, useState } from 'react'

const arr = [
    {
        id: 1,
        name: 'Ankit Kumar',
        profilePic: '/images/ankit.jpg',
        designation: 'Full Stack JavaScript Developer',
        linkedin: 'https://www.linkedin.com/in/ankit628792/'
    },
    {
        id: 2,
        name: 'Nitesh Kumar',
        profilePic: '/images/nitesh.jpg',
        designation: 'Full Stack Java Developer',
        linkedin: 'https://www.linkedin.com/in/nitesh-kumar-4a223716b/'
    },
    {
        id: 3,
        name: 'Amit Kumar',
        profilePic: '/images/amit.jpg',
        designation: 'Frontend Engineer',
        linkedin: 'https://www.linkedin.com/in/amit-kumar-97884a196/'
    },
    {
        id: 4,
        name: 'Sahil Gupta',
        profilePic: '/images/sahil.jpg',
        designation: 'Full Stack Developer',
        linkedin: 'https://www.linkedin.com/in/sahilgupta04/'
    },
]


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
        setDevelopers(arr.sort(() => Math.random() - 0.5))
    }, [])

    return (
        <div className='flex flex-col items-center gap-4 py-20 bg-red'>
            <h1 className='text-4xl lg:text-5xl font-semibold text-white tracking-wide text-center'>Ready to start the project?</h1>
            <p className='text-lg lg:text-xl text-gray-200 text-center'>Let's have a discussion on it</p>
            <div className='flex flex-col sm:flex-row sm:items-center gap-8 py-6 flex-wrap justify-center'>
                {developers.map(data => <div key={data.id} className='flex items-center gap-2 bg-white py-3 px-4 rounded-lg'>
                    <img src={data.profilePic} className='w-14 h-14 object-cover rounded-full border-4 shadow-lg' alt="" />
                    <div>
                        <a target="_blank" rel="noreferrer" className='text-lg cursor-pointer text-gray-800 hover:text-blue-500 font-medium' href={data.linkedin}>{data.name}</a>
                        <p className='text-gray-500 text-sm'>{data.designation}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Devs