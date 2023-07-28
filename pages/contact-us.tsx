import { Footer, Navbar } from '../components'
import Contact from '../components/delanki/Contact'
import Head from 'next/head'


function index() {
    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <title>Delanki | Contact Us</title>
                <meta name="description" content="Get your product ready with us, contact now to discuss the idea with us. We are leading the world with our product" />
                <meta name="keywords" content="Delanki, contact delanki, delanki support, delanki"></meta>
                <meta property="og:image" content={process.env.host + "/android-chrome-512x512.png"} />
                <meta property="og:title" content="Delanki - Contact Us" />
                <meta property="og:description" content="Get your product ready with us, contact now to discuss the idea with us. We are leading the world with our product" />
                <meta property="og:url" content={process.env.host} />
                <meta property="twitter:image" content={process.env.host + "/android-chrome-512x512.png"} />
                <meta property="twitter:title" content="Delanki - Contact Us" />
                <meta property="twitter:description" content="Get your product ready with us, contact now to discuss the idea with us. We are leading the world with our product" />
                <meta property="twitter:url" content={process.env.host} />
            </Head>
            <section className='flex flex-col justify-between min-h-screen w-full dark:bg-slate-900'>
                <Navbar />
                <Contact />
                <Footer />
            </section>
        </>
    )
}

export default index