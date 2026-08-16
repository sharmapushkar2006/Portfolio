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
     <div className='min-h-screen flex items-center justify-center px-4 pt-16'>
      <h1 className='text-center text-4xl font-serif text-gray-900'>Hi, I'm</h1>
      <h1 className='typewriter text-center'>Pushkar Sharma</h1>
     </div>
    </>
  )
}

export default App
