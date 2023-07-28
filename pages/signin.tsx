import { GetServerSideProps } from 'next'
import { getProviders, getSession, signIn } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Navbar } from '../components'

function SignIn({ providers }: any) {
    const router = useRouter()

    return (
        <> <Head>
            <title>Delanki | SignIn</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <meta name="description" content="Join the team of delanki to enhance your skills and learn from our experts to create and work on the real world products. We're evolving in the product market that is going to impact the world" />
            <meta name="keywords" content="Delanki, full stack developer service, contact delanki, join delanki, work with delanki"></meta>
            <meta property="og:image" content={process.env.host + "/android-chrome-512x512.png"} />
            <meta property="og:title" content="Delanki - Developer Connect" />
            <meta property="og:description" content="Join the team of delanki to enhance your skills and learn from our experts to create and work on the real world products. We're evolving in the product market that is going to impact the world" />
            <meta property="og:url" content={process.env.host} />
            <meta property="twitter:image" content={process.env.host + "/android-chrome-512x512.png"} />
            <meta property="twitter:title" content="Delanki - Developer Connect" />
            <meta property="twitter:description" content="Join the team of delanki to enhance your skills and learn from our experts to create and work on the real world products. We're evolving in the product market that is going to impact the world" />
            <meta property="twitter:url" content={process.env.host} />

        </Head>
            <Navbar />
            <div className="flex flex-col items-center justify-center p-2 sm:px-14 text-center">
                <img onClick={() => router.push('/')} className="max-h-96 mb-4 mt-10 sm:-mt-6" src="/images/connect.svg" alt=" " />
                <p className="text-xl max-w-md text-gray-600 dark:text-gray-400">Made for developers <br /> by the developer</p>
                <div className="mt-10">
                    {Object.values(providers).map((provider: any) => (
                        <div key={provider.name}>
                            <button aria-label='Signin with google' role="button" type='button' className="bg-red rounded-lg text-white py-3 px-5 font-medium text-lg shadow-red" onClick={() => signIn(provider.id)}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SignIn

export async function getServerSideProps(context: GetServerSideProps) {
    const { req }: any = context;
    const session = await getSession({ req });

    if (session) {
        return {
            // @ts-ignore 
            redirect: { destination: `/user/${session?.user?._id}` },
        };
    }
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}