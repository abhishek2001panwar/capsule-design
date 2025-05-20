import React from 'react'
import Hero from './pages/Hero'
import About from './pages/About'
import Discover from './pages/Discover'
import Marquee from './pages/Marquee'
import Cta from './pages/Cta'
import Whyus from './pages/Whyus'
import Adventure from './pages/Adventure'
import Footer from './pages/Footer'

function App() {
  return (
    <div className='bg-[#181717] text-white'>
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