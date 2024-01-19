import React from 'react'
import Link from 'next/link'
const MenuOverlay = () => {
    return (
        <ul className='md:hidden'>
            <li className='flex flex-col text-center text-sm'>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>FALCON9</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>FALCONHEAVY</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>DRAGON</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>STARSHIP</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>SPACEFLIGHT</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>RIDESHARE</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>STARSHIELD</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>STARLINK</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>MISSION</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>LAUNCHES</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>CARRERS</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>UPDATES</a>
                </Link>
                <Link href={'/'} legacyBehavior>
                    <a className='text-white p-2'>SHOP</a>
                </Link>
            </li>
        </ul>
    )
}

export default MenuOverlay