import Image from 'next/image'
import React from 'react'

const products = [
  {
    id: 1,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 rounded-full mx-auto lg:mx-0 bg-blue-300 text-blue-600 p-2 mb-2 shadow-blue">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>,
    title: 'Mobile Applications',
    description: <>Exceptional user experiences feel intuitive. We get close to your customers to find out what they need. Then design for maximum adoption, engagement and enjoyment.</>,
    background: 'bg-blue-50 shadow-blue-100',
    image: '/images/mobile_app.png'
  },
  {
    id: 2,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 rounded-full mx-auto lg:mx-0 bg-teal-300 text-teal-600 p-2 mb-2 shadow-teal">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>,
    title: 'Desktop Applications & Softwares',
    description: <>Your online platforms need to work for your business, showing your audience what you can do for them. Great design combined with user-friendly features creates a compelling digital experience.</>,
    background: 'bg-teal-50 shadow-teal-100',
    image: '/images/desktop_app.png'
  },
  {
    id: 3,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 rounded-full mx-auto lg:mx-0 bg-rose-300 text-rose-600 p-2 mb-2 shadow-red">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>,
    title: 'Web Applications',
    description: <>A website is a long-term investment. It needs to be maintained, updated and secured. Our dedicated team will help you stay on top of security updates and continuous improvements, so you can concentrate on growing your business.</>,
    background: 'bg-rose-50 shadow-rose-100',
    image: '/images/web_app.png'
  },
]

function Products() {
  return (
    <section className='min-h-screen w-full p-5 lg:p-10'>
      <p className='text-gray-500 text-center text-lg lg:text-xl my-4 max-w-xl lg:max-w-3xl mx-auto uppercase'>Our Services</p>
      <h1 className='font-bold text-center text-gray-800 dark:text-gray-50 text-4xl lg:text-5xl 2xl:text-6xl 2xl:max-w-xl tracking-wider max-w-lg mx-auto'>Our Best <span className='font-montez text-red'>Services</span> for your <span className='font-montez text-red'>Business</span></h1>

      {products.map(product => <div key={product.id} className='sm:min-h-screen grid place-items-center'>
        <div className={`flex flex-col gap-10 xl:gap-16 ${product.id % 2 == 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 rounded-2xl  dark:shadow-gray-500 min-h-[80vh] relative`}>
          <div className={`absolute w-full h-full inset-0 filter border dark:border-gray-500 ${product.background} dark:bg-opacity-10 rounded-lg backdrop-blur-lg z-10`}></div>
          <div className='flex-grow z-20'>
            {/* Mobile Icon  */}
            {product.icon}

            <h1 className='font-medium text-gray-800 dark:text-gray-50 text-3xl lg:text-4xl 2xl:text-5xl 2xl:max-w-xl my-3 text-center lg:text-left lg:max-w-md'>{product.title}</h1>
            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl text-center lg:text-left 2xl:text-lg leading-relaxed'>{product.description}</p>
          </div>
          <div className='max-w-lg w-full md:max-w-xl 2xl:max-w-2xl h-80 sm:h-[450px] xl:h-[480px] rounded-2xl overflow-hidden z-20 relative'>
            <Image placeholder="blur" blurDataURL={product.image} src={product.image} priority={false} loading="lazy" className='hover:scale-125 transition-transform duration-500 ease-in-out' alt="" layout='fill' />
          </div>
        </div>
      </div>
      )}
      <div id='work' />
    </section >
  )
}

export default Products

