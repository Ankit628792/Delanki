import React, { useState } from 'react'
import toast from 'react-hot-toast';

function UserForm({ user, setIsEdit, setUser }: { user: User, setIsEdit: Function, setUser: Function }) {
  const [data, setData] = useState({
    designation: user.designation || '',
    mobile: user.mobile || '',
    linkedin: user.linkedin || '',
    github: user.github || '',
    other: user.other || '',
    bio: user.bio || '',
    verified: true,
    level: user.level == 5 ? 4 : user.level
  })

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setData({ ...data, [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value })
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      if (data.designation?.length < 5)
        return toast.error('Please enter a valid Designation', { id: 'error' })
      else if (data.mobile?.toString()?.length !== 10)
        return toast.error('Please enter a valid contact number', { id: 'error' })
      else if (!data.linkedin?.includes('linkedin'))
        return toast.error('Please enter a valid linkedin url', { id: 'error' })
      else if (!data.github?.includes('github'))
        return toast.error('Please enter a valid github url', { id: 'error' })
      else if (data.bio?.length < 10)
        return toast.error('Please enter proper bio over 9 words', { id: 'error' })

      let res = await fetch(`/api/user/${user._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      if (res.status == 200) {
        res = await res.json();
        setUser(res)
        toast.success("Data Updated Successfully!", { id: 'success' });
        setIsEdit(false)
      } else {
        toast.error("Something went wrong", { id: "error" })
      }
    } catch (error) {
      toast.error("Unable to Update Details", { id: "error" })
    }
  }

  return (
    <>
      <div className='fixed inset-0 min-h-screen overflow-hidden grid place-items-center p-5' style={{ zIndex: 100 }}>
        <div className='absolute inset-0 w-full min-h-screen bg-black bg-opacity-50 filter backdrop-blur-sm z-40 cursor-pointer' onClick={() => setIsEdit(false)} />
        <form onSubmit={handleSubmit} className='w-full max-w-xl rounded-lg bg-white dark:bg-slate-900 dark:bg-opacity-75 border dark:border-gray-800 p-5 sm:p-10 lg:px-12 z-50 text-gray-800 dark:text-gray-200 relative'>
          <h1 className='text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 pb-2 border-b'>Add Details</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => setIsEdit(false)} className="absolute cursor-pointer top-5 sm:top-10 right-5 sm:right-10 w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

          <div className='mt-4'>
            <label htmlFor="designation" className='font-medium'>Designation <span className='text-red mx-0.5'>*</span></label>
            <div className='w-full bg-white text-gray-800 rounded border'>
              <input type={"text"} placeholder="Your designation" value={data.designation} onChange={handleChange} minLength={3} id='designation' className='px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor="mobile" className='font-medium'>Contact No <span className='text-red mx-0.5'>*</span></label>
            <div className='w-full bg-white text-gray-800 rounded border'>
              <input type={"number"} value={data.mobile} onChange={handleChange} minLength={10} maxLength={11} id='mobile' className='px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor="linkedin" className='font-medium'>LinkedIn <span className='text-red mx-0.5'>*</span></label>
            <div className='w-full bg-white text-gray-800 rounded border'>
              <input type="url" placeholder='Linkedin URL' value={data.linkedin} onChange={handleChange} id='linkedin' className='px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor="github" className='font-medium'>Github <span className='text-red mx-0.5'>*</span></label>
            <div className='w-full bg-white text-gray-800 rounded border'>
              <input type="url" placeholder='Github URL' value={data.github} onChange={handleChange} id='github' className='px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor="other" className='font-medium'>Other</label>
            <div className='w-full bg-white text-gray-800 rounded border'>
              <input type="url" placeholder='Any other link' value={data.other} onChange={handleChange} id='other' className='px-2 py-1 bg-transparent w-full focus:outline-rose-400' />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor="bio" className='font-medium'>Bio <span className='text-red mx-0.5'>*</span></label>
            <div className='w-full bg-white text-gray-800 rounded border h-20'>
              <textarea id='bio' placeholder='Tell us why are you a great developer?' value={data.bio} onChange={handleChange} minLength={10} maxLength={300} className='px-2 py-1 bg-transparent w-full focus:outline-rose-400 resize-none h-20'></textarea>
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

export default UserForm
