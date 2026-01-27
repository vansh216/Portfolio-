import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button className='cursor-pointer rounded-2xl  hover:scale-105 hover:text-[#7CFF4D] mt-4 duration-75 shadow-md hover:shadow-[#7CFF4D] flex justify-center items-center bg-slate-700 py-2 min-w-100'>
                <h2 className='text-1xl'>{name}</h2>
            </button>
        </div>
    )
}

export default Button
