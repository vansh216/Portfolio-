import React from 'react'

const SkillBox = ({ index, img}) => {
  return (
    
         <div key={index} className='px-3 pt-4 flex  '>
                  <div className=' bg-slate-900 w-50 h-50  flex justify-center items-center rounded '>
                    <img className='p-10' src={img} alt="noo" />
                  </div>
        </div>
      
    
  )
}

export default SkillBox
