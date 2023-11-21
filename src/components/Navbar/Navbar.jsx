import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between px-7 py-5 items-center bg-[#6eae2b] text-white'>
                <h1 className='text-4xl font-bold'>Enliven</h1>
                <div>
                    <ul className='flex gap-10 items-center'>
                        <li>Home</li>
                        <Link to={"/psychologists"}>Psychologists</Link>
                        <li>Learning Modules</li>
                        <li>Community</li>
                        <li>Support</li>
                        <button className='bg-black text-white px-5 py-3 shadow-[5px_5px_0px_0px_#ddd] hover:shadow-[0px_0px_0px_0px] hover:translate-x-1 hover:translate-y-1 transition-all duration-150'>Login</button>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
