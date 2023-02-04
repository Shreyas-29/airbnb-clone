import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';
import { HiOutlineGlobeAlt, HiMenu, HiOutlineUserCircle } from 'react-icons/hi';


function Header() {
    return (
        <header className='sticky top-0 z-50 bg-white py-4 px-5 md:px-10 lg:px-20 w-full shadow-md'>
            <div className='hidden md:flex items-center justify-between w-full my-auto'>

                <Link href={'/'}>
                    <div className='flex ites-center justify-center space-x-2 w-20 md:w-28'>
                        <Image
                            src={'/airbnb.svg'}
                            alt='aribnb'
                            width={1000}
                            height={1000}
                            className='w-full h-auto'
                        />
                    </div>
                </Link>

                <div className='flex items-center md:border rounded-full pl-5 py-2 md:shadow md:hover:shadow-md'>
                    <input type="text" placeholder='Search destination' className='flex-grow lg:w-80 outline-none text-gray-600 placeholder:text-gray-400' />
                    <IoSearch className='bg-primary rounded-full p-1.5 text-white w-8 h-8 cursor-pointer hidden md:inline-flex mx-2' style={{ fontWeight: 'bolder' }} />
                </div>

                <div className='flex items-center justify-end space-x-4'>
                    <p className='hidden md:inline'>Become a host</p>
                    <HiOutlineGlobeAlt className='h-6 w-6 cursor-pointer' />
                    <div className='flex items-center space-x-2 border p-2 rounded-full'>
                        <HiMenu className='h-6 w-6 cursor-pointer' />
                        <HiOutlineUserCircle className='h-6 w-6 cursor-pointer' />
                    </div>
                </div>

            </div>
            <div className='flex md:hidden flex-col items-center justify-between w-full space-y-4'>

                <div className='flex items-center justify-between w-full'>
                    <Link href={'/'}>
                        <div className='flex ites-center justify-center space-x-2 w-24 md:w-28'>
                            <Image
                                src={'/airbnb.svg'}
                                alt='aribnb'
                                width={1000}
                                height={1000}
                                className='w-full h-auto'
                            />
                        </div>
                    </Link>

                    <div className='flex items-center justify-end space-x-4'>
                        <p className='hidden md:inline cursor-pointer'>Become a host</p>
                        <HiOutlineGlobeAlt className='h-6 w-6 cursor-pointer text-gray-700' />
                        <div className='flex items-center space-x-2 border p-2 rounded-full'>
                            <HiMenu className='h-6 w-6 cursor-pointer text-gray-700' />
                            <HiOutlineUserCircle className='h-6 w-6 cursor-pointer text-gray-700' />
                        </div>
                    </div>
                </div>

                <div className='flex items-center ring-1 ring-gray-200 active:ring-red-500  focus:ring-red-500 rounded-full w-full pl-5 py-2'>
                    <input type="text" placeholder='Search your destination' className='flex-grow outline-none text-gray-600 placeholder:text-gray-400 mx-1' />
                    <IoSearch className='bg-primary rounded-full p-1.5 text-white w-8 h-8 cursor-pointer mx-2' style={{ fontWeight: 'bolder' }} />
                </div>

            </div>
        </header>
    )
}

export default Header
