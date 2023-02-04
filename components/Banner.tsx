import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className='relative mb-4'>
            <Image src={'https://links.papareact.com/0fm'} unoptimized alt='banner' width={1000} height={1000} className='w-full h-[240px] sm:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] object-cover object-center lg:object-bottom' />

            <div className='flex flex-col items-center justify-center space-y-3 md:space-y-5 absolute top-[40%] sm:top-1/2 w-full text-center'>
                <p className='font-medium'>
                    Not sure where to go? Perfect.
                </p>
                <button className='bg-white md:px-8 md:py-4 px-5 py-2 text-sm md:text-base shadow-lg shadow-slate-300/30 rounded-lg text-red-500 font-medium hover:scale-110 hover:shadow-xl hover:shadow-slate-300/30 active:scale-90 transition duration-300'>
                    Let's start
                </button>
            </div>
        </div>
    )
}

export default Banner
