import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { uploadImage } from '../../utils'

function ProjectForm({ user, isEdit, setIsEdit, setProjects }: { user: User, isEdit: Function | Project | any, setIsEdit: Function, setProjects: Function }) {
  const [data, setData] = useState({
    title: isEdit?.title || '',
    description: isEdit?.description || '',
    portrait: isEdit?.portrait || '',
    landscape: isEdit?.landscape || '',
    link: isEdit?.link || '',
    techs: isEdit?.techs?.join(",") || '',
    userId: user._id,
  })

  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setData({ ...data, [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value })
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      if (data.title?.length < 3)
        return toast.error('Please enter a valid Title', { id: 'error' })
      else if (data.description?.length < 10)
        return toast.error('Please enter more details about project', { id: 'error' })
      else if (!data.link)
        return toast.error('Please enter project link', { id: 'error' })
      else if (!data.landscape)
        return toast.error('Please add landscape image', { id: 'error' })
      else if (!data.portrait)
        return toast.error('Please add portrait image', { id: 'error' })

      let formData = { ...data, techs: data.techs.split(",") } as Project
      if (isEdit?.title) {
        formData["_id"] = isEdit._id
      }
      let res = await fetch(`/api/project/${user._id}`, {
        method: isEdit?.title ? 'PATCH' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (res.status == 200) {
        res = await res.json();
        setProjects((prev: any) => [...prev, res])
        toast.success(`Project ${isEdit?.title ? 'Updated' : 'Added'} Successfully!`, { id: 'success' });
        setIsEdit(false)
      } else {
        toast.error("Something went wrong", { id: "error" })
      }
    } catch (error) {
      toast.error(`Unable to ${isEdit?.title ? 'Update' : 'Add'} Details`, { id: "error" })
    }
  }
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement | any>) => {
    if (e.target.files[0]) {
      const url = await uploadImage(e.target.files[0])
      setData({ ...data, [(e.target as HTMLInputElement).id]: url })
    }
  }

  return (
    <>
      <div className='fixed inset-0 min-h-screen overflow-hidden grid place-items-center p-5' style={{ zIndex: 100 }}>
        <div className='absolute inset-0 w-full min-h-screen bg-black bg-opacity-50 filter backdrop-blur-sm z-40 cursor-pointer' onClick={() => setIsEdit(false)} />
        <form onSubmit={handleSubmit} className='w-full max-w-xl rounded-lg bg-white dark:bg-slate-900 dark:bg-opacity-75 border dark:border-gray-800 p-5 sm:p-10 lg:px-12 z-50 text-gray-800 dark:text-gray-200 relative'>
          <h1 className='text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 pb-2 border-b'>{isEdit.title ? 'Edit' : 'Add'} Project</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => setIsEdit(false)} className="absolute cursor-pointer top-5 sm:top-10 right-5 sm:right-10 w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

          <div className='mt-4'>
            <label htmlFor="title" className='font-medium'>Title <span className='text-red mx-0.5'>*</span></label>
            <div className='w-full bg-white text-gray-800 rounded border'>
              <input type={"text"} placeholder="Project Title" value={data.title} onChange={handleChange} minLength={3} id='title' className='px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor="techs" className='font-medium'>Tech Stack <span className='text-red mx-0.5'>*</span></label>
            <div className='w-full bg-white text-gray-800 rounded border'>
              <input type={"text"} placeholder="Separated by coma" value={data.techs} onChange={handleChange} minLength={5} id='techs' className='px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor="portrait" className='font-medium'>Portrait View <span className='mx-1 text-xl text-red cursor-pointer'>+</span></label>
            <div className='w-full bg-white text-gray-800 rounded border'>
              <input type="url" disabled readOnly value={data.portrait} placeholder="Click plus icon to add image *" className='px-2 py-1.5 bg-transparent w-full focus:outline-rose-400 text-sm' />
              <input ref={fileRef} type="file" accept='image/*' value={''} onChange={(e: React.ChangeEvent<HTMLInputElement | any>) => {
                if (!e.target.files[0].type.includes("image")) {
                  toast.error("Invalid Image Type")
                }
                else if (Number(e.target.files[0].size) > Number(10534250)) {
                  toast.error("Image size should be less than 10MB")
                }
                else {
                  handleFile(e);
                }
              }} id='portrait' className='hidden px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor="landscape" className='font-medium'>Landscape View <span className='mx-1 text-xl text-red cursor-pointer'>+</span></label>
            <div className='w-full bg-white text-gray-800 rounded border'>
              <input type="url" disabled readOnly value={data.landscape} placeholder="Click plus icon to add image *" className='px-2 py-1.5 bg-transparent w-full focus:outline-rose-400 text-sm' />
              <input ref={fileRef} type="file" value={''} accept='image/*' onChange={(e: React.ChangeEvent<HTMLInputElement | any>) => {
                if (!e.target.files[0].type.includes("image")) {
                  toast.error("Invalid Image Type")
                }
                else if (Number(e.target.files[0].size) > Number(10534250)) {
                  toast.error("Image size should be less than 10MB")
                }
                else {
                  handleFile(e);
                }
              }} id='landscape' className='hidden px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor="link" className='font-medium'>Link <span className='text-red mx-0.5'>*</span></label>
            <div className='w-full bg-white text-gray-800 rounded border'>
              <input type="url" placeholder='application url, github, demo, etc.' value={data.link} onChange={handleChange} id='link' className='px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor="description" className='font-medium'>Description <span className='text-red mx-0.5'>*</span></label>
            <div className='w-full bg-white text-gray-800 rounded border h-16'>
              <textarea id='description' placeholder='a little description about the project...' value={data.description} onChange={handleChange} minLength={10} maxLength={200} className='px-2 py-1 bg-transparent w-full focus:outline-rose-400 resize-none h-16'></textarea>
            </div>
          </div>

          <div className='flex flex-wrap items-center justify-start gap-8 w-full pt-8'>
            <button type={'submit'} role="button" aria-label='Save' className='text-lg bg-blue-500 rounded-lg text-white py-1.5 px-5 font-medium'>Save</button>
            <button type={"reset"} role="button" aria-label='Cancel' onClick={() => setIsEdit(false)} className='text-lg bg-gray-800 rounded-lg text-white py-1.5 px-5 font-medium'>Cancel</button>
          </div>
        </form>

      </div>

    </>
  )
}

export default ProjectForm