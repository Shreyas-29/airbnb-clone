import React from 'react'

function Footer() {
    return (
        <footer className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 md:gap-x-0 px-8 sm:px-16 md:px-32 py-14 rounded-t-2xl bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-600'>
                <h5 className='font-bold'>ABOUT</h5>
                <p className='cursor-pointer hover:text-gray-800'>How Airbnb Works</p>
                <p className='cursor-pointer hover:text-gray-800'>Newsroom</p>
                <p className='cursor-pointer hover:text-gray-800'>Investors</p>
                <p className='cursor-pointer hover:text-gray-800'>Airbnb Plus</p>
                <p className='cursor-pointer hover:text-gray-800'>Airbnb Luxe</p>
            </div>
            <div className='space-y-4 text-xs text-gray-600'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p className='cursor-pointer hover:text-gray-800'>Accessibility</p>
                <p className='cursor-pointer hover:text-gray-800'>This is not a real</p>
                <p className='cursor-pointer hover:text-gray-800'>Its Preety Clone</p>
                <p className='cursor-pointer hover:text-gray-800'>Referrals Accepted</p>
                <p className='cursor-pointer hover:text-gray-800'>Webtech</p>
            </div>
            <div className='space-y-4 text-xs text-gray-600'>
                <h5 className='font-bold'>HOST</h5>
                <p className='cursor-pointer hover:text-gray-800'>Nextjs</p>
                <p className='cursor-pointer hover:text-gray-800'>Presents</p>
                <p className='cursor-pointer hover:text-gray-800'>Airbnb</p>
                <p className='cursor-pointer hover:text-gray-800'>Clone</p>
                <p className='cursor-pointer hover:text-gray-800'>with Shreyas</p>
            </div>
            <div className='space-y-4 text-xs text-gray-600'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p className='cursor-pointer hover:text-gray-800'>Help Center</p>
                <p className='cursor-pointer hover:text-gray-800'>Trust & Safety</p>
                <p className='cursor-pointer hover:text-gray-800'>Say Hi</p>
                <p className='cursor-pointer hover:text-gray-800'>Easter Gggs</p>
                <p className='cursor-pointer hover:text-gray-800'>For the Win</p>
            </div>
        </footer>
    )
}

export default Footer
