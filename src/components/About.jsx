import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './Heading'
import LineBreak from './LineBreak'


const link=[
  {to:"",linkname:"Download Resume"},
  {to:"https://www.linkedin.com/in/vansh-kumar-patel-bb7752313/",linkname:"Linkedin"},
  {to:"https://github.com/vansh216",linkname:"Github"},
  {to:"https://www.instagram.com/vansh216_official?igsh=MXIycW5hZ3k1ZjJiag==",linkname:"Instagram"},
  {to:"https://x.com/f_world49752",linkname:"X/Twetter"},

]

const About = () => {
  return (
    <div id='about' className=' w-full flex  flex-col md:flex-row justify-between items-center md:h-screen   md:px-18 ' >
      <div className='w-3/4 md:1/2'>
        <div><h1 className='text-[#7CFF4D] underline text-7xl'>Vansh216</h1></div>
        <Heading first={"I'am"} second={"Coder"}/>
        <div className='text-gray-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Iste magnam soluta est non quaerat suscipit illum libero. Excepturi eaque maxime, doloributtons amet, pariatur tempoributtons rem cumque, maiores consequatur odit laboriosam.</div>
          <LineBreak/>
        <div className='md:flex hidden  py-5 gap-x-2'> 
        {link.map((link,index)=>{
          return(

            <Link key={index} to={link.to}
            className='bg-[#7CFF4D] hover:bg-[#67aa4f] hover:text-purple-950 hover:scale-105 text-white p-2 rounded-md'>{link.linkname}</Link>
          )
          })}
        
        </div>
      </div>
      <div className=' flex items-center justify-end md:w-1/2'>
      <div className=' w-104 h-104   flex  bg-linar-to-r from-black to-green-500  items-center  justify-center'>
        <img className=' md:w-100 md:h-100 w-70 h-70 rounded-full ' src="photo.jpg" alt="loading.." />  
      </div>\
      </div>
      </div>
      
    
  )
}

export default About
