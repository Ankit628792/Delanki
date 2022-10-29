import Script from 'next/script';
import React, { useEffect, useState } from 'react'
import useWindowSize from '../utils/useWindowSize';

let arr = [
    {
        id: 1,
        title: 'HTML',
        icon: '/icons/html.svg'
    },
    {
        id: 2,
        title: 'CSS',
        icon: '/icons/css.svg'
    },
    {
        id: 3,
        title: 'JavaScript',
        icon: '/icons/js.svg'
    },
    {
        id: 4,
        title: 'Bootstrap',
        icon: '/icons/bootstrap.svg'
    },
    {
        id: 5,
        title: 'Material UI',
        icon: '/icons/material.png'
    },
    {
        id: 6,
        title: 'Tailwind CSS',
        icon: '/icons/tailwind.svg'
    },
    {
        id: 7,
        title: 'Express JS',
        icon: '/icons/express.svg'
    },
    {
        id: 8,
        title: 'Node JS',
        icon: '/icons/node.svg'
    },
    {
        id: 9,
        title: 'React JS',
        icon: '/icons/react.svg'
    },
    {
        id: 10,
        title: 'Redux',
        icon: '/icons/redux.svg'
    },
    {
        id: 11,
        title: 'Next JS',
        icon: '/icons/next.svg'
    },
    {
        id: 12,
        title: 'MongoDB',
        icon: '/icons/mongo.svg'
    },
    {
        id: 13,
        title: 'Firebase',
        icon: '/icons/firebase.png'
    },
    {
        id: 14,
        title: 'Angular',
        icon: '/icons/angular.svg'
    },
    {
        id: 15,
        title: 'Docker',
        icon: '/icons/docker.svg'
    },
    {
        id: 16,
        title: 'GraphQL',
        icon: '/icons/graphql.svg'
    },
    {
        id: 17,
        title: 'Hibernate',
        icon: '/icons/hibernate.svg'
    },
    {
        id: 18,
        title: 'TypeScript',
        icon: '/icons/typescript.svg'
    },
    {
        id: 19,
        title: 'Microservice',
        icon: '/icons/microservice.png'
    },
    {
        id: 20,
        title: 'Java',
        icon: '/icons/java.svg'
    },
    {
        id: 21,
        title: 'Spring Boot',
        icon: '/icons/spring.svg'
    },
    {
        id: 22,
        title: 'Postgresql',
        icon: '/icons/postgresql.svg'
    },
    {
        id: 23,
        title: 'MySQL',
        icon: '/icons/mysql.svg'
    },
    {
        id: 24,
        title: 'Electron JS',
        icon: '/icons/electron.svg'
    },
]

interface Technology {
    id: number,
    title: string,
    icon: string
}

function Techs() {

    const size = useWindowSize();

    const [data, setData] = useState<Array<Technology>>(arr);
    useEffect(() => {
        setData(arr.sort(() => Math.random() - 0.5))
    }, [])

    return (
        <>{
            size.width ?
                <>
                    <section className='sm:min-h-[80vh] max-w-7xl mx-auto w-full'>
                        {size.width! < 769 ?
                            <>
                                <div className='mx-auto pt-10 pb-10'>
                                    <h1 className='font-medium text-gray-800 dark:text-gray-50 text-4xl sm:text-5xl 2xl:max-w-xl text-center lg:max-w-md'>Using the latest</h1>
                                    <h1 className='font-medium text-gray-800 dark:text-gray-50 text-4xl sm:text-5xl 2xl:max-w-xl text-center lg:max-w-md'><span className='font-montez text-red'>Technologies</span></h1>
                                </div>

                                <div className='w-full flex items-center justify-center flex-wrap gap-8 pb-10'>
                                    {
                                        data.map(({ id, title, icon }) => <div key={id} className={`w-20 h-20 relative skill group p-3 bg-white rounded-full shadow-lg border cursor-pointer`}>
                                            <img src={icon} className="w-full h-full object-contain" alt="" />
                                            <div className='absolute left-1/2 -top-1/2 transform -translate-x-1/2 bg-white p-1 px-3 rounded-2xl min-w-max hidden group-hover:inline-block shadow-lg'>
                                                <h1 className='text-red'>{title}</h1>
                                                <div className='absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 bg-white w-3 h-3 rotate-45'></div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </>
                            : <Floating size={size} data={data} />}
                    </section>
                </>
                :
                <></>}
        </>
    )
}

export default Techs

const Floating = ({ size, data }: { size: any, data: Array<Technology> }) => {
    return <div className='min-h-screen p-5 w-full max-w-7xl overflow-hidden gap-5 relative'>
        <h1 className='font-medium text-gray-800 dark:text-gray-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-4xl sm:text-5xl 2xl:max-w-xl text-center lg:max-w-md mx-auto'>Using the latest <span className='font-montez text-red'>Technologies</span></h1>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full'>
            {
                data.map(({ id, title, icon }) => <div key={id} className={`w-20 h-20 relative group tech_icon skill inline-block mx-auto m-4 p-3 bg-white rounded-full shadow-lg dark:shadow-gray-500 border cursor-pointer z-50`}>
                    <img src={icon} className="w-full h-full object-contain" alt="" />
                    <div className='absolute left-1/2 -top-1/2 transform -translate-x-1/2 bg-white p-1 px-3 rounded-2xl min-w-max hidden group-hover:inline-block shadow-lg'>
                        <h1 className='text-red'>{title}</h1>
                        <div className='absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 bg-white w-3 h-3 rotate-45'></div>
                    </div>
                </div>)
            }
        </div>
        <Script strategy='afterInteractive' dangerouslySetInnerHTML={{
            __html: `
            var MR = function (X) { return Math.random() * X }, TwL = TweenLite, G = document.querySelectorAll('.tech_icon');

            function BTweens() {
                var W = window.innerWidth - ${size.width! > 1024 ? size.width! > 1290 ? 700 : 400 : 200} , H = window.innerHeight - 200, C = 400;
                TwL.killDelayedCallsTo(BTweens); 
                TwL.delayedCall(C * 2, BTweens);
                for (var i = G.length; i--;) {
                    var c = C, BA = [], GWidth = G[i].offsetWidth, GHeight = G[i].offsetHeight;
                    while (c--) { 
                        var SO = MR(1); 
                        BA.push({ x: MR(W - GWidth - 500), y: MR(H - GHeight - 50)}); 
                    };
                    if (G[i].T) { 
                        G[i].T.kill() 
                    }
                    G[i].T = TweenMax.to(G[i], C * 2, { bezier: { timeResolution: 0, type: "soft", values: BA }, delay: i * 0.25, ease: Linear.easeNone });
                }
            };
            BTweens();
            window.onresize = function () {
                // TwL.killDelayedCallsTo(BTweens); 
                // TwL.delayedCall(0.4, BTweens);
                BTweens();
            };
            `
        }}>

        </Script>
    </div>
}