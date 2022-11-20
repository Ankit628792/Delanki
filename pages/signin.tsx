import { GetServerSideProps } from 'next'
import {  getProviders, getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Navbar } from '../components'

function SignIn({ providers }: any) {
    const router = useRouter()

    return (
        <>
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