import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/globals.css'
import Header from './Components/Header/header'
import Hero from './Components/Hero/hero'
import About from './Components/About/about'
import Services from './Components/Services/services'
import Stacks from './Components/Stack/stacks'
import Contact from './Components/Contact/contact'

function App() {

  return (
    <>
    <Header />
    <Hero />
    <About/>
    <Services />
    <Stacks />
    <Contact />
    </>
  )
}

export default App
