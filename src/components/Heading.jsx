import React from 'react'
import LineBreak from './LineBreak'

const Heading = ({first,second}) => {
  return (
    <div>
        <div className=' py-7'> <span className='text-white  text-4xl md:text-6xl pr-1'>{first}</span><span className='text-[#7CFF4D] pl-1  text-4xl md:text-6xl'>{second}</span></div>
      
    </div>
  )
}

export default Heading
