import React from 'react'

function Footer() {

    return (
        <footer>
            <div className='px-5 py-10 bg-slate-900 text-white'>
                <div className='flex flex-col sm:flex-row items-start justify-between w-full gap-y-6 max-w-7xl mx-auto py-4'>
                    <div className="text-3xl font-semibold text-white flex-shrink-0">
                        Nian Devs
                    </div>

                    <p className='text-xl max-w-lg text-left sm:text-right text-gray-100'>Contact our team to connect and schedule call with your future product team</p>
                </div>

                <hr className='text-gray-300 my-4 max-w-7xl mx-auto' />

                <h1 className='text-center text-lg tracking-wider'>Copyright &copy; 2022, Nain Devs</h1>
            </div>
        </footer>
    )
}

export default Footer