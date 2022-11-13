import { GetServerSideProps } from 'next'
import React from 'react'
import { Footer, Navbar } from '../../components'

function User({ user, verified }: { user: any, verified: boolean }) {
  return (
    <>
      <section className='flex flex-col justify-between min-h-screen w-full '>
        <Navbar />
        {
          verified ?
            <>
            </>
            :
            <div className='w-full flex-grow p-5 md:p-10'>
              <h1 className="font-extrabold tracking-wide leading-9 text-center text-gray-800 dark:text-gray-100 text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Welcome,&nbsp;<br className='inline-block sm:hidden'/><span className='text-red'>{user.name}</span>
              </h1>
              <p className='text-center text-xl text-gray-800 my-3'>Submit your profile to get full access of Nian Devs</p>
              <button aria-label='Edit Profile' role="button" type='button' className='py-2 px-5 rounded-3xl text-white font-medium bg-red block mx-auto'>Coming Soon</button>
            </div>
        }
        <Footer />
      </section>
    </>
  )
}

export default User


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let user = await fetch(`${process.env.HOST}/api/user/${query.id}`).then(res => res.json()).catch(e => console.log("User Not found"));

  if (!user) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      user,
      verified: Boolean(user.verified)
    }
  }
} 