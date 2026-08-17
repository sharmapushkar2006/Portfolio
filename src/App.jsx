import { useState } from 'react'
import Top from './components/Top.jsx';
import './App.css'

function App() {

  return (
    <>
     <div className='bg-gray-200 fixed top-0 left-0 margin-0 w-full h-12 text-center flex flex-row justify-center items-center gap-8'>
      <Top name="About Me" link="#aboutme"/>
      <Top name="Skills" link="#skills"/>
      <Top name="Projects" link="#projects"/>
      <Top name="Contact" link="#contact"/>
     </div>
     <div className='min-h-screen flex flex-col items-center justify-center px-4 pt-16'>
      <h1 className='text-left text-4xl font-serif text-gray-900'>Hi visiter! I am,</h1>
      <h1 className='typewriter text-center text-black bg-white'>Pushkar Sharma</h1>
      <h2 className='text-center text-lg font-sans text-gray-600'>JAVA & PYTHON BACKEND | FLUTTER APP DEVELOPMENT | REACT AND JAVASCRIPT</h2>
     </div>
     <div id="aboutme" className='min-h-screen flex items-center justify-center px-4 pt-16'>
      <h1 className='text-center text-4xl font-serif text-gray-900'>About Me</h1>
     </div>
    </>
  )
}

export default App
