import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Experience from "../components/Experience"
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div className= ' h-100% bg-[#050B18]'>
      <Navbar/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      
      <Contact/>
      <Footer/>

    </div>
  )
}

export default Landing
