import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'

function Footer() {
    const { data: session } = useSession();

    return (
        <footer>
            <div className='px-5 py-10 text-white bg-gradient-to-t from-black to-slate-900 '>
                <div className='flex flex-col sm:flex-row items-start justify-between w-full gap-y-6 max-w-7xl mx-auto py-4'>
                    <div className="text-3xl font-semibold text-white flex-shrink-0 cursor-pointer" onClick={() => Router.push("/")}>
                        Delanki
                    </div>
                    <div className='space-y-4'>
                        <p className='text-xl max-w-lg text-left sm:text-right text-gray-100'>Contact our team to connect and schedule call with your future product team</p>
                        <div className='flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 w-full justify-start sm:justify-end'>
                            {/* @ts-ignore */}
                            <Link href={session?.user ? `/user/${session.user._id}` : "/signin"} className='text-lg text-left sm:text-right text-gray-100 cursor-pointer hover-red'>Developer Portal</Link>
                            <Link href="/tnc" className='text-lg text-left sm:text-right text-gray-100 cursor-pointer hover-red'>Term &amp; Conditions</Link>
                            <Link href="/privacy_policy" className='text-lg text-left sm:text-right text-gray-100 cursor-pointer hover-red'>Privacy Policy</Link>
                            <Link href="/refund_policy" className='text-lg text-left sm:text-right text-gray-100 cursor-pointer hover-red'>Refund Policy</Link>
                        </div>
                    </div>
                </div>

                <hr className='text-gray-300 my-4 max-w-7xl mx-auto' />

                <h1 className='text-center text-lg tracking-wider'>Copyright &copy; 2022, Delanki</h1>
            </div>
        </footer>
    )
}

export default Footer
