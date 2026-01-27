import React from 'react'

const Input = ({ label, name, type, placeholder, register, errors }) => {
    return (
        <div>
            <div className='flex flex-col'>
                <label className='text-2xl  font-semibold' htmlFor={name}>
                    {label}
                </label>
                <input
                    id={name}
                    name={name}
                    className='text-base border-2    trandition-all duration-300 bg-transparent border-black  rounded  w-full  md:my-2 md:w-screen   p-2 max-w-87'
                    type={type}

                    
                    placeholder={placeholder}
                    {...(register ? register(name, { required: { value: true, message: "Please fill it..." } }) : {})}
                />
                {errors && errors[name] && <div className='text-red-700'>{errors[name].message}</div>}
            </div>
        </div>
    )
}

export default Input
