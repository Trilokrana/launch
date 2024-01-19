'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MenuOverlay from './MenuOverlay'
import Login from './Login';
import UserProfile from '../Components/UserProfile'

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <>
            <nav className=" mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 rounded-lg">
                <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                    <Link href={'/'} className='text-2xl md:text-xl text-white font-semibold'>
                        SPACEX
                    </Link>
                    <div className="mobile-menu block md:hidden">
                        {!navbarOpen ? (
                            <button
                                onClick={() => setNavbarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        ) : (
                            <button
                                onClick={() => setNavbarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                    <div className='menu hidden md:block md:w-auto'>
                        <div className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-4 text-sm '>
                            <Link href={'/'} legacyBehavior>
                                <a className='text-white'>FALCON9</a>
                            </Link>
                            <Link href={'/'} legacyBehavior>
                                <a className='text-white'>FALCONHEAVY</a>
                            </Link>
                            <Link href={'/'} legacyBehavior>
                                <a className='text-white'>DRAGON</a>
                            </Link>
                            <Link href={'/'} legacyBehavior>
                                <a className='text-white'>STARSHIP</a>
                            </Link>
                            <Link href={'/'} legacyBehavior>
                                <a className='text-white'>SPACEFLIGHT</a>
                            </Link>
                            <Link href={'/'} legacyBehavior>
                                <a className='text-white'>RIDESHARE</a>
                            </Link>
                            <Link href={'/'} legacyBehavior>
                                <a className='text-white'>STARSHIELD</a>
                            </Link>
                            <Link href={'/'} legacyBehavior>
                                <a className='text-white'>STARLINK</a>
                            </Link>
                            <Link href={'/'} legacyBehavior>
                                <a>SHOP</a>
                            </Link>
                            <div className="mobile-menu block">
                                {!navbarOpen ? (

                                    <button
                                        onClick={() => setNavbarOpen(true)}
                                        className="flex items-center px-3 py-2 mt-[-8px] border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                                    >
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                        </svg>
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setNavbarOpen(false)}
                                        className="flex items-center px-3 py-2 mt-[-8px] border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>

                                    </button>
                                )}

                            </div>
                        </div>
                        <div className='ml-12 flex items-center'>
                            {navbarOpen && (
                                <div className='flex flex-col border-2 rounded-lg absolute top-16 right-0 bg-[#121212] bg-opacity-90'>
                                    <UserProfile />
                                    <Login />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {navbarOpen ? <MenuOverlay /> : null}
            </nav>
        </>
    )
}

export default NavBar

