import React from 'react'
import { Link } from 'react-router-dom'

import Heading from './Heading'
import Title from './Title'
import Paragraph from './Paragraph'

const Experience = () => {
  return (
    <div id='experience'
     className='w-full flex  px-16 flex-col  md:gap-3  gap-2 h-screen md:px-18'>
      <Heading  first={"My"} second={"Experience"}/>  
      <div className='md:px-3   py-3 rounded-2xl bg-slate-900 flex md:flex-row flex-col gap-2'>
        
        <div className='flex flex-col px-3 gap-4 text-gray-50'>
          <Title
           title={"winner hackthons"}/>
          <Paragraph 
          discription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam soluta est non quaerat suscipit illum libero. Excepturi eaque maxime, doloributtons amet, pariatur tempori"}/>
          <Link to={""}
          className='border-2  max-w-30 text-center bg-red-700 hover:border-green-400 transition-all duration-300 px-6 py-1 rounded-md'>Certificate</Link>        
        </div>
        <img src="exp1.png" className='w-120  rounded h-60' alt="" />
      </div>
      
    </div>
  )
}

export default Experience
