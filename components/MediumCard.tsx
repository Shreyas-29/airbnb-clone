import Image from 'next/image';
import React from 'react';

function MediumCard({ mediumCards }: any) {
    return (
        <div className='relative hover:scale-105 transform transition ease-out duration-300 cursor-pointer'>
            {/* mx-2 space-y-1 w-96 h-96 py-4 */}
            <div className='relative h-72 w-72'>
                <Image
                    src={mediumCards.featuredImage.url}
                    alt={mediumCards.name}
                    unoptimized
                    width={1000}
                    height={1000}
                    className='w-full h-full rounded-xl object-cover'
                />
            </div>
            <h4 className='text-lg font-semibold'>
                {mediumCards.name}
            </h4>
        </div>
    )
}

export default MediumCard
