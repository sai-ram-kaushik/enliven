import React from 'react'

const Psychologists = () => {
    return (
        <div>
            <div className='flex justify-center items-center py-20 flex-col gap-4'>
                <h1 className='text-4xl'>Search A Psychologist</h1>
                <input type="text" placeholder='search psychologists' className='p-3 w-3/4 border-2 border-[#6eae2c] focus:outline-none rounded-xl'/>
                <h1 className='text-4xl'>Or Explore Below</h1>
            </div>
        </div>
    )
}

export default Psychologists
