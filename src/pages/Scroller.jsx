import { motion, useScroll } from 'motion/react'
import React from 'react'

function Scroller() {

    const { scrollYProgress } = useScroll()
    
  return (
    <motion.div
    style={{ scaleX: scrollYProgress }}
    
    className='bg-white h-2 w-full origin-left fixed z-[999]'></motion.div>
  )
}

export default Scroller