import React from 'react'
import {Link as ScrollLink} from "react-scroll"
import LineBreak from './LineBreak';
import Heading from './Heading';

const Footer = () => {

   const navLinks = [ 
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "project", label: "Project" },
    { to: "experience", label: "Experience" },
    
    { to: "contact", label: "Contact" },
  ];
  return (
    <div id='footer' className=' w-full flex  flex-col     '>

    <div className=' bg-black text-gray-300 '>
      <div  id='footer' className="footer grid grid-cols-1  md:grid-cols-3  items-center bottom-0  justify-center px-20 md:px-40 pt-20 pb-5 ">
        <div>
          <Heading first={"Vansh Kumar"} second={"Portpholio"}/>
        </div>
        <div className='flex flex-col items-center '>
          <h1 className='text-gray-50 text-2xl underline'>Quick access</h1>
          <ul className='flex  flex-col gap-y-2 '>
              {navLinks.map((link) => (
            <li className=' text-slate-500 hover:scale-105 cursor-pointer hover:text-gray-200'  >
            <ScrollLink
              key={link.to}
              to={link.to}          
              smooth={true}
              duration={500}
              offset={-70}          
              spy={true}
              activeClass="text-green-500  underline"
              className="cursor-pointer text-gray-100 hover:text-[#7CFF4D] text-lg"
            >
              {link.label}
            </ScrollLink>
          </li>
          ))}
            
          </ul>
        </div>
        <div className='flex flex-col  items-center justify-start'>
          <h1 className='text-gray-50 text-2xl mb-2 underline'>Contact Us</h1>
          <p className=' text-slate-500 hover:scale-105 cursor-pointer hover:text-gray-200'>8957511120</p>
          <p className=' text-slate-500 hover:scale-105 cursor-pointer hover:text-gray-200'>8795899391</p>
          <p className=' text-slate-500 hover:scale-105 cursor-pointer hover:text-gray-200'>vanshkumarp5@gmail</p>
        </div>
         
      </div>
      <LineBreak/>
            <div className='flex items-start justify-center py-2 '> &copy; Vansh Protpholio, Inc. All rigths reserved</div>
    </div>
    </div>
  )
}

export default Footer
