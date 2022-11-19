import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Router from 'next/router';
import { useSession, signOut } from "next-auth/react"

const menuItems = [
    {
        id: 1,
        title: 'About Us',
        link: '#aboutUs'
    },
    {
        id: 2,
        title: 'Products',
        link: '#products'
    },
    {
        id: 3,
        title: 'Work',
        link: '#work'
    },
    {
        id: 4,
        title: 'Connect',
        link: '#connect'
    },
]

function Navbar() {
    const { data: session } = useSession()
    const [checkedSate, setCheckedSate] = useState(false);
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
        let theme = localStorage.getItem("theme");
        if (!theme) {
            setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches == true ? 'dark' : 'light')
        }
    }, [])

    if (!mounted) {
        return null
    }

    const handleCheckedSate = () => {
        checkedSate ? setCheckedSate(false) : setCheckedSate(true)
    }

    if (!theme) return <></>

    return (
        <>
            <nav className='flex items-center  justify-between sticky top-0 w-full gap-4 py-4 px-5 md:px-10 2xl:px-16 bg-white bg-gradient-to-b dark:from-black dark:to-slate-900 z-50'>
                <div className="text-3xl font-semibold text-red opacity-0 lg:opacity-100 cursor-pointer" onClick={() => Router.push("/")}>
                    Nian <span className='text-gray-900 dark:text-gray-50'>Devs</span>
                </div>

                <ul className='hidden lg:inline-flex items-center gap-10 2xl:gap-16 text-lg font-medium text-gray-700 dark:text-gray-300'>
                    {menuItems.map(({ title, id, link }) => <li key={id} className={`cursor-pointer hover-red hover:border-rose-600 border-b border-transparent`}><a href={link}>{title}</a></li>)}
                </ul>

                <div className='flex items-center gap-x-4 xl:gap-x-8'>
                    {theme && <button aria-label='Theme' role="button" type='button' className='border-none outline-none' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {theme === 'dark' ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 rounded-full bg-slate-700 text-slate-50 border border-slate-700 p-1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                            :

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 rounded-full bg-slate-900 text-slate-50 border border-slate-900 p-1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>}
                    </button>}
                    {session ? <div className='flex items-center gap-2'>
                        {/* @ts-ignore */}
                        {session.user?.image && <img src={session.user?.image} onClick={() => Router.push(`/user/${session.user?._id}`)} alt="" className='w-10 h-10 border rounded-full cursor-pointer' />}
                        <div>
                            <p className='text-xs'>Hello,</p>
                            <p className='cursor-pointer text-red text-sm font-medium' title='logout' onClick={() => signOut()}>{session.user?.name}</p>
                        </div>
                    </div>
                        : <button aria-label='Connect with Us' role="button" type='button' className='py-2 px-4 rounded-3xl text-white font-medium bg-red'><a href='#connect'>Connect <span className='hidden sm:inline-block'>with Us</span></a></button>}
                </div>
            </nav>

            {/* <!-- hamburger menu --> */}
            <nav className="hamburger-menu">
                <label>
                    <input type='checkbox' checked={checkedSate} onChange={handleCheckedSate} />
                    <span className='hamburger-inner'> <span className='hamburger-icon shadow-lg fixed'></span> </span>
                    <ul>
                        {menuItems.map(({ title, id, link }) => <li key={id} onClick={handleCheckedSate}> <a href={link}>{title}</a></li>)}
                    </ul>
                </label>
            </nav>
            {/* <!-- hamburger menu --> */}
        </>
    )
}

export default Navbar