import { GetServerSideProps } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { AppContext } from 'next/app'
import { useRouter } from 'next/router'
import { Navbar } from '../components'

function signin({ providers }: any) {
    const router = useRouter()

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center p-2 sm:px-14 text-center">
                <img onClick={() => router.push('/')} className="max-h-96 mb-4 mt-10 sm:-mt-6" src="/images/connect.svg" alt=" " />
                <p className="text-xl max-w-md text-gray-600 dark:text-gray-400">Made for developers <br /> by the developers</p>
                <div className="mt-10">
                    {Object.values(providers).map((provider: any) => (
                        <div key={provider.name}>
                            <button aria-label='Signin with google' role="button" type='button' className="bg-red rounded-lg text-white py-3 px-5 font-medium text-lg shadow-red" onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default signin

export async function getServerSideProps(context: GetServerSideProps) {
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}