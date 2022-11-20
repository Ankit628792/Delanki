import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useState } from 'react'
import { Footer, Navbar, UserForm } from '../../../components'
import Page from '../../../components/user/page'

function User({ userData, projectData, owner }: { userData: User, projectData: Projects, owner: Boolean }) {
    const [user, setUser] = useState(userData);
    const [isEdit, setIsEdit] = useState(false);
    return (
        <>
            <Head>
                <title>Nian Devs | {userData.name}</title>
            </Head>
            <section className='flex flex-col justify-between min-h-screen w-full dark:bg-slate-900'>
                {
                    Boolean(user.verified) ?
                        <>
                            <Page user={user} projectData={projectData} owner={owner} setUser={setUser} setUserEdit={''} />
                        </>
                        :
                        <>
                            <Navbar />
                            <div className='w-full flex-grow p-5 md:p-10'>
                                <h1 className="font-extrabold tracking-wide leading-9 text-center text-gray-800 dark:text-gray-100 text-4xl sm:leading-10 md:text-6xl md:leading-14">
                                    Welcome,&nbsp;<br className='inline-block sm:hidden' /><span className='text-red'>{user.name}</span>
                                </h1>
                                <p className='text-center text-xl text-gray-800 my-3'>Submit your profile to get full access of Nian Devs</p>
                                {owner ? <button aria-label='Edit Profile' role="button" type='button' className='py-2 px-5 rounded-3xl text-white font-medium bg-red block mx-auto' onClick={() => setIsEdit(true)}>Add Details</button> : <></>}
                            </div>
                        </>
                }
                <Footer />
            </section>
            {isEdit ? <UserForm user={user} setIsEdit={setIsEdit} setUser={setUser} /> : <></>}
        </>
    )
}

export default User


export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    let userData = await fetch(`${process.env.host}/api/user/${query.id}`).then(res => res.json()).catch(e => console.log("User Not found"));
    let session = await getSession({ req })
    if (!userData) {
        return {
            notFound: true,
        }
    }
    let projectData = await fetch(`${process.env.host}/api/project/${userData._id}`).then(res => res.json()).catch(e => console.log("User Not found"));
    return {
        props: {
            userData,
            projectData,
            //  @ts-ignore
            owner: false
        }
    }
} 