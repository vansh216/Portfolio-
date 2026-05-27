import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './Heading'
import LineBreak from './LineBreak'
import { motion } from 'framer-motion'

const link=[
  {to:"",linkname:"Download Resume"},
  {to:"https://www.linkedin.com/in/vansh-kumar-patel-bb7752313/",linkname: "Linkedin"},
  {to:"https://github.com/vansh216",linkname:"Github"},
  {to:"https://www.instagram.com/vansh216_official?igsh=MXIycW5hZ3k1ZjJiag==",linkname:"Instagram"},
  {to:"https://x.com/f_world49752",linkname:"X/Twitter"},
]

const About = () => {
  return (
    <div id='about' className='w-full flex flex-col md:flex-row justify-between items-center md:h-screen md:px-18'>
      
      <div className='w-3/4 md:w-1/2'>

        {/* Name with gradient */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className='underline text-7xl font-bold bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent'>
            Vansh216
          </h1>
        </motion.div>

        {/* I'm Coder heading */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <Heading first={"I'am"} second={"Coder"} />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className='bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent text-base leading-relaxed'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste magnam soluta est non quaerat suscipit illum libero. Excepturi eaque maxime,
          doloributtons amet, pariatur tempoributtons rem cumque, maiores consequatur odit laboriosam.
        </motion.div>

        <LineBreak />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className='md:flex hidden py-5 gap-x-2'
        >
          {link.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.to}
                className='bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-500 hover:to-slate-700 text-slate-200 p-2 rounded-md block transition-all duration-300'
              >
                {link.linkname}
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className='flex items-center justify-end md:w-1/2'
      >
        <div className='w-104 h-104 flex items-center justify-center'>
          <img
            className='md:w-100 md:h-100 w-70 h-70 rounded-full ring-4 ring-slate-600'
            src="photo.jpg"
            alt="Vansh Kumar Patel"
          />
        </div>
      </motion.div>

    </div>
  )
}

export default About