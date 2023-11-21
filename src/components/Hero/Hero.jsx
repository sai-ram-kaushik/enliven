import React from 'react'
import Front from "../../assets/FRONT.png"

const Hero = () => {
    return (
        <div className='bg-[#6eae2b] h-screen'>
            <div className='flex items-center'>
                <div className='p-40 flex flex-col gap-5'>
                    <h1 className='text-6xl font-bold text-white'>Nurturing Minds,<br /> Building Futures</h1>
                    <p className='text-xl text-[#ffd56a]'>Providing Support, Creating Resilience, <br />and Fostering Brighter Tomorrows</p>
                    <button className='bg-black text-white p-4 w-1/2 shadow-[5px_5px_0px_0px_#ddd] hover:shadow-[0px_0px_0px_0px] hover:translate-x-1 hover:translate-y-1 transition-all duration-150'>Join Enliven</button>
                </div>
                <div>
                    <img src={Front} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
