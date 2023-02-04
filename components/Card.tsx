import Image from 'next/image'
import React from 'react'

function Card({ card }: any) {
    return (
        <div className='flex items-center mx-2 my-5 space-x-4 rounded-xl cursor-pointer transition-transform hover:scale-105 ease-out duration-300 hover:bg-gray-100 p-2'>
            <div className='h-16 w-16 relative'>
                <Image
                    src={card.featuredImage.url}
                    alt={card.name}
                    unoptimized
                    width={1000}
                    height={1000}
                    className='w-full h-full rounded-xl'
                />
            </div>
            <div className='flex flex-col items-start space-y-1'>
                <h2 className='text-lg font-medium'>
                    {card.name}
                </h2>
                <p className='text-gray-500'>
                    {card.time} drive
                </p>
            </div>
        </div>
    )
}

export default Card
