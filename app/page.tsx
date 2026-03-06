'use client'
import React from 'react'
import Hero from './Components/Hero/page'
import Projects from './Components/Projects/page'
import Technical from './Components/Technical/page'
import About from './Components/About/page'
import Experience from './Components/Experience/page'
import Contact from './Components/Contact/page'
import Footer from './Components/Footer/page'
import { useTheme } from './Components/themeContext'

const Home = () => {
  const { lightMode } = useTheme();
  return (
    <div className={`${lightMode ? 'bg-white text-black' : 'bg-[#101F22] text-white'} transition-colors duration-300`}>
      <Hero />
      <Technical />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home