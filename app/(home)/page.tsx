import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'

export default function page() {
  return (
    <div className='min-h-[400vh] bg-black'>
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative'>
        <div className='max-w-7xl mx-auto p-5'>
          <Navbar />
          <HeroSection />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50px',
            background: 'linear-gradient(to bottom, transparent, black)'
          }}></div>
        </div>

        <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0'></div>
      </div>

      <div className='max-w-7xl mx-auto mt-20'>
        <Skills />
      </div>
    </div>
  )
}
