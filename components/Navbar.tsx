import React, { useState } from 'react'

const menuItems = [
    {
        id: 1,
        title: 'Features'
    },
    {
        id: 2,
        title: 'About Us'
    },
    {
        id: 3,
        title: 'Product'
    },
    {
        id: 4,
        title: 'Feedback'
    },
]

function Navbar() {
    const [index, setIndex] = useState<Number>(0);
    return (
        <nav className='flex items-center  justify-between sticky top-0 w-full gap-4 py-4 px-5 md:px-10 2xl:px-16 bg-white shadow-md z-50'>
            <div className="text-3xl font-semibold text-red">
                Nian Devs
            </div>

            <ul className='hidden lg:inline-flex items-center gap-10 2xl:gap-16 text-lg font-medium text-gray-700'>
                {menuItems.map(({ title, id }) => <li key={id} className={`cursor-pointer hover-red hover:border-rose-600 border-b ${id === index ? 'text-red border-rose-600' : 'border-transparent'}`} onClick={() => setIndex(id)}>{title}</li>)}
            </ul>

            <div>
                <button className='py-2 px-4 rounded-3xl text-white font-medium bg-red'>Request a Call</button>
            </div>

        </nav>
    )
}

export default Navbar