import { Footer, Navbar } from '../components'
import Contact from '../components/delanki/Contact'
import Head from 'next/head'



function index() {
    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            <section className='flex flex-col justify-between min-h-screen w-full '>
                <Navbar />
                <Contact />
                <Footer />
            </section>
        </>
    )
}

export default index