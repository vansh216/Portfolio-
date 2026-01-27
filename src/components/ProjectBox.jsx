import React from 'react'
import SmallName from './SmallName'
import LineBreak from './LineBreak'
import { Link } from 'react-router-dom'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Title from './Title'


const technly1=[
  "reactjs",
  "Tailwind",
  "WebSocket",
  "WebRTC"
]

const ProjectBox = (prop) => {
  return (
   <div className="flex gap-5 md:flex-row flex-col justify-center items-center">
    



      <div className='text-white w-3/4'>
              
            <div className="md:px-3">
            <h1 className=" text-9xl pb-2">{prop.number}</h1> 
             <Title title={prop.title}/>
            <Paragraph discription={prop.discription}/>
              </div>
              <div className="flex gap-x-3 md:pt-2 md:px-3">
                {technly1.map(name=>(

                <SmallName name={name}/>
                ))}
               
                </div>
                 <LineBreak/> 
                 <div className="px-3 flex gap-x-5" >
                  <Link to={prop.link}>
                   <img className="  transition duration-500 ease-in-out w-13 h-13  hover:content-[url('www.png')]"  src="rightArrow.png " alt="" />
                  </Link>
                  <Link to={prop.githubLink}><img src="github.png" alt="" /></Link>
                  
                 </div>
      </div>
      <div className='bg-slate-900 flex md:flex-col items-center justify-center px-3 h-6/7 rounded-2xl '>
      <img className='  rounded-2xl'  src={prop.img} alt="Loading" /></div>
       </div>
        
  )
}

export default ProjectBox
