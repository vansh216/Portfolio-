import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Experience from "../components/Experience"
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import LiquidEther from '../components/Liquid';

const Landing = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#050B18' }}>

      {/* Full screen fixed background - covers EVERYTHING including navbar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        opacity: 0.55,
        pointerEvents: 'none'
      }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B497CF']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B497CF"
        />
      </div>

      {/* Navbar sits ON TOP of animation */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
      </div>

      {/* All other sections also on top */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <About />
        <Skills />
        <Project />
        <Experience />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default Landing