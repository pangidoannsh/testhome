import React from 'react';
import logo from './logo.png'
const Navbar = ({ valuesRef, workRef, contactRef }) => {
    const handleNav = ref => {
        ref.current?.scrollIntoView({
            top: 0,
            behavior: 'smooth', // gives an ease-in-out effect to our scroll
        });
    }
    return (
        <div className="navbar bg-base-100 md:px-12 sticky top-0 left-0 z-20 shadow-md">
            <div className="flex-1">
                <img src={logo} alt="" className='w-52' />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0} className="md:px-1">
                        <span className='group active:bg-sky-400'>
                            About
                            <svg className="fill-current group-hover:opacity-100 opacity-0 duration-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </span>
                        <ul className="p-2 bg-base-100">
                            <li><a className='active:bg-sky-400 focus:text-white focus:bg-sky-400'>History</a></li>
                            <li><a className='active:bg-sky-400 focus:text-white focus:bg-sky-400'>Vision Mission</a></li>
                        </ul>
                    </li>
                    <li className="md:px-1"><button className='active:bg-sky-400 focus:text-white focus:bg-sky-400' onClick={() => handleNav(valuesRef)}>Our Values</button></li>
                    <li className="md:px-1"><button className='active:bg-sky-400 focus:text-white focus:bg-sky-400' onClick={() => handleNav(contactRef)}>Contact</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
