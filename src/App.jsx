import React from 'react'
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
import Cursor from './pages/Cursor'

function App() {

    // eslint-disable-next-line no-unused-vars
    const locomotiveScroll = new LocomotiveScroll();



  return (
    <div className='bg-[#181717] text-white overflow-hidden'>
      <Cursor/>
      <Scroller />
      <Hero />
      <About />
      <Discover />

      <Marquee  />
      <Cta />
      <Whyus  />  
      <Adventure />
      <Footer />
    </div>
  )
}

export default App