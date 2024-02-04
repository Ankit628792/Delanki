import React, { useState } from 'react'

function ProjectDetail({ project, onClose }: { project: Project, onClose: Function }) {
    const [iframeError, setIframeError] = useState<any>(false);
    return (
        <section className='fixed inset-0 z-50 grid place-items-center'>
            <div onClick={() => onClose()} className='bg-slate-900 bg-opacity-50 filter backdrop-blur-sm fixed inset-0 cursor-pointer'></div>
            <div className='w-full max-w-3xl max-h-[90dvh] overflow-y-auto mx-auto rounded-lg bg-white dark:bg-slate-900 dark:bg-opacity-75 border dark:border-gray-800 p-5 sm:p-7 lg:px-8 z-50 text-gray-800 dark:text-gray-200 relative opacAnimation'>
                <div className='flex items-start justify-between gap-4'>
                    <h1 className='text-2xl lg:text-3xl 2xl:text-4xl tracking-wide font-semibold text-gray-800 dark:text-white flex-grow'>{project.title}</h1>
                    <a href={project.link} target="_blank" rel="noreferrer" className='py-1.5 px-5 text-white bg-red rounded-lg font-medium'>Open Link</a>
                </div>
                <div className='relative h-96 w-full my-3'>
                    {
                        project?.link?.includes('http')
                            ?
                            <iframe
                                src={project.link}
                                className='w-full h-96 object-cover rounded-lg overflow-hidden'
                            >
                            </iframe>
                            :
                            <img
                                src={project.landscape}
                                alt="Default Image"
                                className='w-full h-full object-cover rounded-lg'
                            />
                    }
                </div>
                <p className='text-gray-800 dark:text-gray-50 text-sm md:text-base lg:text-lg font-light my-4'>{project.description}</p>
                <div className='flex flex-wrap items-center justify-start gap-2 '>
                    {project.techs.map((tech: String, i: any) => <p key={i} className="text-xs md:text-sm py-0.5 lg:py-1 px-2 lg:px-3 bg-white border shadow-sm text-gray-800 rounded-3xl">{tech}</p>)}
                </div>
                <div className='flex items-center gap-4 my-6'>
                    <a href={project.link} target="_blank" rel="noreferrer" className='py-1.5 px-5 text-white bg-red rounded-lg font-medium lg:text-lg'>Open Link</a>
                    <button onClick={() => onClose()} className='py-1.5 px-5 text-white bg-red rounded-lg font-medium lg:text-lg'>Close</button>
                </div>
            </div>
        </section>
    )
}

export default ProjectDetail