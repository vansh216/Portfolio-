import React from 'react'

const Input = ({ label,name, type,placeholder, register, errors }) => {
    return (
        <div>
            <div className="flex flex-col gap-1.5">

          <label className='text-2xl  font-semibold' htmlFor={name}>{label}</label>
              <textarea 
              { ...(register?register(name,{required:{value:true,message: "Please fill it..."}}):{})}
               className="  trandition-all duration-300 text-base border-2 px-4 py-2 md:min-w-87 rounded     border-black"  
               type={type} 
               name={name}
                placeholder={placeholder}/>
                {errors && errors[name] && <div className='text-red-700'>{errors[name].message}</div>}
          </div>
        </div>
    )
}

export default Input
