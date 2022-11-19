import Image from 'next/image'
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { uploadImage, useClickOutside } from '../../utils';
import ProjectForm from './ProjectForm';
import Router from 'next/router'

function Page({ user, projectData, owner, setUser }: any) {
    const [projects, setProjects] = useState(projectData);
    const [isEdit, setIsEdit] = useState(false);
    const fileRef = useRef(null)
    const deleteProject = async (id: string) => {
        let res = await fetch(`/api/project/${id}`, {
            method: 'DELETE'
        })
        if (res.status == 200) {
            toast.success("Project removed successfully!");
            let idx = projects.findIndex((item: any) => item._id == id);
            if (idx > -1) {
                let arr = [...projects];
                arr.splice(idx, 1);
                setProjects(arr)
            }
        }
        else
            toast.error('Unable to remove project')
    }

    const handleSkill = async (type: string, skill: string, callback: Function) => {
        let skills = [...user.skills]
        if (type == 'add') {
            if (!skill.length) return toast.error("Please add a skill")
            skills.push(skill)
        }
        else if (type == 'remove') {
            let idx = skills.indexOf(skill);
            skills.splice(idx, 1);
        }
        else
            return;
        setUser({ ...user, skills: skills });
        callback();
        let res = await fetch(`/api/user/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ skills: skills })
        });
        if (res.status == 200) {
            res = await res.json();
        } else {
            toast.error("Something went wrong", { id: "error" })
        }
    }

    const handleFile = async (e: React.ChangeEvent<HTMLInputElement | any>) => {
        if (e.target.files[0]) {
            const url = await uploadImage(e.target.files[0])
            let res = await fetch(`/api/user/${user._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ [e.target.id]: url })
            });
            if (res.status == 200) {
                res = await res.json();
                setUser(res);
            } else {
                toast.error("Something went wrong", { id: "error" })
            }
        }
    }

    return (
        <>
            <nav className='flex items-center justify-between fixed top-0 left-0 right-0 w-full gap-4 py-4 px-5 md:px-10 2xl:px-16 bg-gradient-to-b from-black to-transparent z-50'>
                <div className="text-3xl font-semibold text-red cursor-pointer" onClick={() => Router.push("/")}>
                    Nian <span className='text-gray-50'>Devs</span>
                </div>
                <button aria-label='Go Back' role="button" type='button' className='text-white bg-red rounded-lg py-2 px-5 font-medium' onClick={() => Router.back()}>Go Back</button>
            </nav>
            <section className='w-full pb-20'>
                <div className='h-52 sm:h-60 w-full relative'>
                    <Image priority src={user.banner || "https://ankit-resume.netlify.app/images/header-background.jpg"} className='w-full h-full object-cover' alt='' fill={true} />
                    {owner ? <label htmlFor="banner" className='p-2 w-9 h-9 rounded-full bg-white border cursor-pointer absolute bottom-2 right-2 text-blue-500 border-blue-500 z-40'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                        <input ref={fileRef} type="file" value={''} onChange={handleFile} id='banner' className='hidden px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
                    </label> : <></>}
                </div>
                <header className='flex flex-col items-center justify-center w-full transform -translate-y-12 sm:-translate-y-16 px-5'>
                    <div className='w-32 h-32 sm:w-40 sm:h-40 rounded-full bottom-4 border-4 relative'>
                        <img src={user.image} className='w-full h-full object-cover rounded-full' alt='' />
                        {owner ? <label htmlFor="image" className='p-2 w-9 h-9 rounded-full bg-white border cursor-pointer absolute top-0 right-0 text-blue-500 border-blue-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            <input ref={fileRef} type="file" value={''} onChange={handleFile} id='image' className='hidden px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
                        </label> : <></>}
                        {user.verified && <div className='p-0.5 w-9 h-9 rounded-full bg-white cursor-pointer absolute -bottom-4 right-1/2 transform translate-x-1/2 text-teal-500 shadow-lg' onClick={() => { }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                        </div>}
                    </div>
                    <div className='text-center max-w-2xl'>
                        <h1 className='text-3xl sm:text-4xl font-medium'>{user.name}</h1>
                        <h1 className='text-lg sm:text-xl my-1 sm:my-2'>{user.designation}</h1>
                        <h1 className='text-sm sm:text-base text-gray-500'>{user.bio}</h1>
                        <div className='flex items-center justify-center gap-6 my-4'>
                            <div className='w-10 h-10 cursor-pointer object-contain relative'>
                                <Image priority={false} loading="lazy" src="/icons/linkedin.png" alt='' fill={true} />
                            </div>
                            <div className='w-10 h-10 cursor-pointer object-contain relative'>
                                <Image priority={false} loading="lazy" src="/icons/github.png" alt='' fill={true} />
                            </div>
                            <div className='w-10 h-10 cursor-pointer object-contain relative'>
                                <Image priority={false} loading="lazy" src="/icons/link.png" alt='' fill={true} />
                            </div>
                        </div>
                        {owner ? <button aria-label='View Profile Preview' role="button" type='button' className='text-white text-red border border-rose-500 hover:shadow hover:bg-rose-500 transition-all duration-200 ease-out hover:text-white rounded-lg py-2 px-5 font-medium transform translate-y-4' onClick={() => Router.push(`/user/preview/${user?._id}`)}>Profile Preview</button> : <></>}
                    </div>
                </header>

                <section className='p-5 max-w-7xl mx-auto sm:px-10 -translate-y-6 sm:-translate-y-8'>
                    <div className='border-b py-2 flex items-center gap-4'>
                        <h1 className='text-3xl sm:text-4xl font-medium'>Skills</h1>
                        {owner ? <AddSkill handleSkill={handleSkill} /> : <></>}
                    </div>
                    <div className='flex flex-wrap items-center gap-x-6 gap-y-8 py-5'>
                        {
                            !user?.skills?.length ?
                                <h1 className='flex-grow text-center text-lg lg:text-xl text-gray-600'>You've not added any skill, add to make profile more recognizable</h1>
                                :
                                <>
                                    {
                                        user?.skills.map((skill: string, i: any) => <div key={i} className='text-lg font-medium tracking-wide border rounded-3xl flex items-center gap-2'>
                                            <span className='px-5 py-1 text-gray-800 dark:text-gray-200'>{skill}</span>
                                            {owner ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-red text-white rounded-3xl cursor-pointer" onClick={() => handleSkill('remove', `${skill}`, () => { })}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                            </svg> : <></>}
                                        </div>)
                                    }
                                </>
                        }
                    </div>
                </section>

                <section className='p-5 max-w-7xl mx-auto sm:px-10'>
                    <div className='border-b py-2 flex items-center gap-2'>
                        <h1 className='text-3xl sm:text-4xl font-medium'>Project Showcase</h1>
                        {owner ? <svg onClick={() => setIsEdit(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg> : <></>}
                    </div>
                    {!projects.length ?
                        <h1 className='flex-grow text-center text-lg lg:text-xl text-gray-600 py-10'>You've not added any project yet</h1>
                        :
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 py-10'>
                            {projects.map((project: any) => <Project owner={owner} key={project._id} project={project} setIsEdit={setIsEdit} deleteProject={deleteProject} />)}
                        </div>
                    }
                </section>
            </section>

            {isEdit && <ProjectForm user={user} isEdit={isEdit} setIsEdit={setIsEdit} setProjects={setProjects} />}
        </>
    )
}

export default Page

const Project = ({ owner, project, setIsEdit, deleteProject }: any) => {

    return <>
        <div className='w-full max-w-xs 2xl:max-w-sm relative'>
            {owner ? <div className='absolute -top-4 -right-2 flex items-center gap-3 z-40'>
                <div className='p-2 w-9 h-9 rounded-full bg-white border cursor-pointer text-blue-500 border-blue-500' onClick={() => setIsEdit(project)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                </div>
                <div className='p-2 w-9 h-9 rounded-full bg-white border cursor-pointer text-red-500 border-red-500' onClick={() => deleteProject(project._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
            </div> : <></>}
            <div className='w-full max-w-xs 2xl:max-w-sm rounded-lg overflow-hidden border dark:border-gray-800 group relative'>
                <div className='relative h-96 w-full'>
                    <Image className='object-cover' src={project.portrait} alt="" layout="fill" loading='lazy' />
                </div>
                <div className='bg-gradient-to-b from-transparent to-black p-5 pt-10 absolute -bottom-0.5 right-0 left-0 group-hover:hidden hidden lg:block'>
                    <h1 className='text-2xl tracking-wide font-semibold text-white hover:hidden'>{project.title}</h1>
                </div>
                <div className='bg-gradient-to-b from-transparent to-black p-5 pt-10 absolute -bottom-0.5 right-0 left-0 lg:transform lg:translate-y-96 group-hover:translate-y-0 transition-all duration-300 ease-out'>
                    <h1 className='text-2xl tracking-wide font-semibold text-white'>{project.title}</h1>
                    <p className='line-clamp-3 text-gray-50 text-sm my-2 leading-relaxed'>{project.description}</p>
                    <div className='flex flex-wrap items-center justify-start gap-3 pb-4'>
                        {project.techs.map((tech: String, i: any) => <p key={i} className="text-sm py-0.5 px-2 bg-white border shadow-sm text-gray-800 rounded-lg">{tech}</p>)}
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer" className='py-1.5 px-5 text-white bg-red rounded-lg font-medium'>Visit</a>
                </div>
            </div>
        </div>
    </>
}

const AddSkill = ({ handleSkill }: any) => {
    const [active, setActive] = useState(false);
    const [skill, setSkill] = useState('');
    const cancelRef = useRef(null);

    useClickOutside(() => setActive(false), cancelRef)

    return <>
        <div ref={cancelRef} className={`${active ? 'w-full border-gray-100' : 'w-10'} max-w-xs border border-transparent rounded-full flex items-center transform transition-all duration-100 ease-in-out bg-white dark:bg-gray-900`}>
            <input value={skill} onChange={(e) => setSkill(e.target.value)} className={`flex-grow py-2 px-5 outline-none border-none bg-transparent ${active ? '' : 'hidden'}`} type="text" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={async () => active ? handleSkill('add', skill, () => setSkill('')) : setActive(!active)} className="rounded-full w-10 h-10 text-white bg-blue-500 p-1 flex-shrink-0 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
        </div>
    </>
}