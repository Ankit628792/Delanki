import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import React from 'react'
import { Footer, Navbar } from '../../components'
import DevCard from '../../components/nian/DevCard'

function Team({ devs }: Devs) {
    return (
        <>
            <Head>
                <title>Nian Devs | Team</title>
            </Head>
            <section className='flex flex-col justify-between min-h-screen w-full dark:bg-slate-900'>
                <Navbar />
                <div className='flex-grow px-5 py-14 lg:px-10'>
                    <h1 className='font-bold text-center text-gray-800 dark:text-gray-50 text-4xl lg:text-5xl 2xl:text-6xl 2xl:max-w-xl tracking-wider max-w-lg mx-auto'>Meet our team of <span className='font-montez text-red'>individual masters</span></h1>
                    <p className='lg:text-lg text-center max-w-3xl mx-auto my-4 text-gray-500'>
                        During office hours we're a group of hardworking and motivated developers, committed to delivering the best quality and experiences. When we're not working, things are a little different. Try unlocking our secret personalities!
                    </p>
                    <div className='flex flex-wrap items-center justify-center gap-10 2xl:gap-x-14 py-10'>
                        {
                            devs.slice(0, 3).map((dev) => <DevCard key={dev._id} dev={dev} />)
                        }
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Team

export async function getServerSideProps(context: GetServerSidePropsContext) {
    let devs = await fetch(`${process.env.host}/api/user?limit=5`).then(res => res.json()).catch(e => console.log(e))
    return {
        props: {
            devs
        }
    }
}