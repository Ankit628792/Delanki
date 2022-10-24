import React from 'react'

let data = [
    {
        id: 1,
        title: 'Concept',
        description: 'Build your brand with an insight-driven product developer group that believes in taking action.'
    },
    {
        id: 2,
        title: 'Budget',
        description: 'You have enough on your plate, so let our experts handle the disbursement and reinforcement of your brand.'
    },
    {
        id: 3,
        title: 'Development',
        description: `When it comes to developing products for business, we don't leave anything to chance. We create product that produces results by specifically.`
    },
    {
        id: 4,
        title: 'Results',
        description: 'So let our tech experts handle the disbursement and reinforcement of your brand and reach to your target audience.'
    },
]

function Work() {
    return (
        <section className='sm:min-h-[80vh] flex flex-col items-center justify-center gap-10 max-w-7xl mx-auto w-full py-16 md:py-10'>
            <div className='mx-auto'>
                <h1 className='font-medium text-gray-800  text-4xl sm:text-5xl 2xl:max-w-xl text-center lg:max-w-md'>Our Customized</h1>
                <h1 className='font-medium text-gray-800  text-4xl sm:text-5xl 2xl:max-w-xl text-center lg:max-w-md'><span className='font-montez text-red'>Work Flow</span></h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 xl:gap-y-16 p-5'>
                {data.map(({ id, title, description }) => <div key={id} className={`flex flex-col items-center gap-2 h-40`}>
                    <h1 className='text-3xl lg:text-4xl text-gray-800 font-medium'>
                        <span className='font-montez text-red'>0{id}</span>
                        &nbsp;{title}
                    </h1>
                    <p className='text-lg max-w-md text-gray-500 mx-auto text-center leading-relaxed'>{description}</p>
                </div>
                )}
            </div>
        </section>
    )
}

export default Work