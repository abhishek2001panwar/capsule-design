import React, { useEffect } from 'react'
import Hero from './pages/Hero'
import About from './pages/About'
import Discover from './pages/Discover'
import Marquee from './pages/Marquee'
import Cta from './pages/Cta'
import Whyus from './pages/Whyus'
import Adventure from './pages/Adventure'
import Footer from './pages/Footer'
import Scroller from './pages/Scroller'
import LocomotiveScroll from 'locomotive-scroll'
import Project from './pages/Project'

function App() {

    const locomotiveScroll = new LocomotiveScroll();



  return (
    <div className='bg-[#181717] text-white overflow-hidden'>
      <Scroller />
      <Hero />
      <About />
      <Discover />
      {/* <Project/> */}
      <Marquee  />
      <Cta />
      <Whyus  />  
      <Adventure />
      <Footer />
    </div>
  )
}

export default App