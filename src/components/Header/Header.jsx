import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex item-center justify-between'> 
            <div className='inline-flex items-center'>
                <BoltIcon className="h-6 w-6 text-blue-500" />
                <Link className='ml-2 text-xl font-bold tracking-wide' to='/'>nextPage</Link>
            </div>
            <ul className='item-center hidden space-x-8 lg:flex'>
                <li>
                <NavLink to='/' className={({isActive})=>(isActive ? 'active' : 'default')}>Home</NavLink>
                </li>
                <li>
                <NavLink to='/books' className={({isActive})=>(isActive ? 'active' : 'default')}>Books</NavLink>
                </li>
                <li>
                <NavLink to='/about' className={({isActive})=>(isActive ? 'active' : 'default')}>About</NavLink>
                </li>
                </ul>
                {/* Mobile Navbar */}
                <div className='lg:hidden'>
                    {/* Dropdown open menu */}
                    <button 
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={()=> setIsMenuOpen(true)}>
                        <Bars3BottomRightIcon className="w-5 text-gray-600"/>
                    </button>
                    
                    {isMenuOpen && (
                        // conditional rendaring
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                            {/* logo & button section */}
                            <div className='flex items-center justify-between mb-4'>
                                <div>
                                    <Link to='/' className='inline-flex items-center'>
                                    <BoltIcon className='h-6 w-6 text-blue-500'/>
                                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>nextPage
                                    </span>
                                    </Link>
                                </div>
                                <div>
                                    {/* Close down menu */}
                                    <button
                                    aria-label='Close Menu'
                                    title='Close Menu'
                                    onClick={()=> setIsMenuOpen(false)}
                                    >
                                    <XMarkIcon className="w-5 text-gray-600"/>
                                    </button>
                                </div>
                            </div>
                            <nav>
                                <ul className='space-y-4'>
                                    <li>
                                        <Link to='/' className='default'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/books' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>Books</Link>
                                    </li>
                                    <Link to='/about' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>About</Link>
                                </ul>
                            </nav>
                            </div>

                        </div>
                    )}
                </div>
        </div>

        </div>
    );
};

export default Header;