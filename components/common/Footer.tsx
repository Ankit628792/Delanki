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
                    <div>

                        <div className="text-3xl font-semibold text-white flex-shrink-0 cursor-pointer" onClick={() => Router.push("/")}>
                            Delanki
                        </div>
                        <p className='text-lg mt-1 max-w-md text-left text-gray-100'>Contact us and schedule a call with your future product team, we're ready to hear you</p>

                    </div>
                    <div className='space-y-4'>
                        <div className='flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 w-full justify-start sm:justify-end max-w-md'>
                            {/* @ts-ignore */}
                            <Link href="/terms-and-conditions" className='text-lg text-left sm:text-right text-gray-100 cursor-pointer hover-red'>Terms &amp; Conditions</Link>
                            <Link href="/privacy-policy" className='text-lg text-left sm:text-right text-gray-100 cursor-pointer hover-red'>Privacy Policy</Link>
                            <Link href="/refund-policy" className='text-lg text-left sm:text-right text-gray-100 cursor-pointer hover-red'>Refund Policy</Link>
                            {/* @ts-ignore */}
                            <Link href={session?.user ? `/user/${session.user?._id}` : "/signin"} className='text-lg text-left sm:text-right text-gray-100 cursor-pointer hover-red'>Developer Portal</Link>
                            <Link href="/contact-us" className='text-lg text-left sm:text-right text-gray-100 cursor-pointer hover-red'>Contact Us</Link>
                            <Link href="https://www.linkedin.com/company/delanki/" target='_blank' rel='noreferrer' className='text-lg text-left sm:text-right text-gray-100 cursor-pointer hover-red'>LinkedIn</Link>
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
