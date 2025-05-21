import React from 'react'

function Project() {
  return (
   <div className='overflow-hidden'>

     <section className="py-20" id="projects">
  <div className="container mx-auto px-10 md:px-20">
    {/* Section heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-['Matter'] mb-4 text-[#51483f] satisfy-regular">
        Project Overview
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Showcasing some of my recent work and creative solutions
      </p>
    </div>
    {/* Project items */}
    <div className="space-y-32">
      {/* Project 1 - Text left, image right */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold">Ochi Design Clone</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            A visually striking, animated portfolio site inspired by Ochi
            Design. Built using modern frontend frameworks with smooth
            page transitions, scroll-based animations, and custom cursor
            interactions to deliver a premium design experience.
          </p>
          <div className="flex items-center space-x-6 pt-4">
            <a href="https://ochi-design-wheat.vercel.app" target="_blank" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-eye-line text-xl mr-2" />
              <span>View Live</span>
            </a>
            <a href="#" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-github-fill text-xl mr-2" />
              <span>Source Code</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">GSAP</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">React</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Framer Motion</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Tailwind CSS</span>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="rounded-xl overflow-hidden">
            <img data-scroll data-scroll-speed="-.5" src="https://images.unsplash.com/photo-1688103920333-117afda88518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Ochi Design Clone" className="w-full h-[70vh] transform rounded-md transition-transform" />
          </div>
        </div>
      </div>
      {/* Project 2 - Image left, text right */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="rounded-2xl">
            <img data-scroll data-scroll-speed="-.5" src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Cuberto Clone" className="w-full h-[70vh] transform transition-transform" />
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold">Cuberto Clone</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            An advanced UI/UX portfolio clone inspired by Cuberto Studio.
            It features smooth parallax effects, mouse-driven
            interactions, fullscreen transitions, and bold typography,
            showcasing high-end frontend skills and animation mastery.
          </p>
          <div className="flex items-center space-x-6 pt-4">
            <a href="https://cuberto-new.vercel.app" target="_blank" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-eye-line text-xl mr-2" />
              <span>View Live</span>
            </a>
            <a href="#" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-github-fill text-xl mr-2" />
              <span>Source Code</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">JavaScript</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Locomotive Scroll</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">GSAP</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Next.js</span>
          </div>
        </div>
      </div>
      {/* Project 3 - Text left, image right */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold">Design Pattern Clone</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            A modern design studio website that mimics the style of
            top-tier branding agencies. It includes scroll-triggered
            animations, stylish hover effects, and project showcase
            sections. Ideal for highlighting modern web aesthetics.
          </p>
          <div className="flex items-center space-x-6 pt-4">
            <a href="https://design-pattern-sus.vercel.app" target="_blank" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-eye-line text-xl mr-2" />
              <span>View Live</span>
            </a>
            <a href="#" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-github-fill text-xl mr-2" />
              <span>Source Code</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">React</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">CSS3</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">ScrollTrigger</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Responsive Design</span>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="rounded-2xl">
            <img data-scroll data-scroll-speed="-.5" src="https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Design Pattern Clone" className="w-full h-[70vh] transform transition-transform" />
          </div>
        </div>
      </div>
      {/* Project 4 - Image left, text right */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="rounded-2xl">
            <img data-scroll data-scroll-speed="-.5" src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Thirtysix Clone" className="w-full h-[70vh] transform transition-transform" />
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold">Thirtysix Clone</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            A minimal and elegant clone of the Thirtysix design studio
            site. The layout relies heavily on whitespace, large
            typography, and fluid transitions. Great demonstration of
            clean design implementation using modern frontend stacks.
          </p>
          <div className="flex items-center space-x-6 pt-4">
            <a href="https://thirysix.vercel.app" target="_blank" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-eye-line text-xl mr-2" />
              <span>View Live</span>
            </a>
            <a href="#" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-github-fill text-xl mr-2" />
              <span>Source Code</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">HTML5</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">CSS3</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">JavaScript</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Minimal Design</span>
          </div>
        </div>
      </div>
      {/* Project 5 - Text left, image right */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold">Expo Ape Clone</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            A sleek and dark-themed animated site inspired by Web3/NFT
            culture. Uses rich motion design and futuristic typography to
            showcase a project or product, demonstrating strong visual
            storytelling.
          </p>
          <div className="flex items-center space-x-6 pt-4">
            <a href="https://expo-ape.vercel.app" target="_blank" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-eye-line text-xl mr-2" />
              <span>View Live</span>
            </a>
            <a href="#" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-github-fill text-xl mr-2" />
              <span>Source Code</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Three.js</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">WebGL</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">GSAP</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">React</span>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="rounded-2xl">
            <img data-scroll data-scroll-speed="-.5" src="https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Expo Ape Clone" className="w-full h-[70vh] transform transition-transform" />
          </div>
        </div>
      </div>
      {/* Project 6 - Image left, text right */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="rounded-2xl">
            <img data-scroll data-scroll-speed="-.5" src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Personal Portfolio – Abhishek" className="w-full h-[70vh] transform transition-transform" />
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold">
            Personal Portfolio – Abhishek
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            A personal portfolio website built to showcase your work,
            skills, and resume. Features smooth transitions, clean layout,
            and project showcases. Ideal for applying to jobs and
            freelance opportunities.
          </p>
          <div className="flex items-center space-x-6 pt-4">
            <a href="https://abhishek-developer.vercel.app" target="_blank" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-eye-line text-xl mr-2" />
              <span>View Live</span>
            </a>
            <a href="#" className="flex items-center text-[#51483f] hover:text-black transition-colors">
              <i className="ri-github-fill text-xl mr-2" />
              <span>Source Code</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Next.js</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Vercel</span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Responsive Design</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   </div>

  )
}

export default Project