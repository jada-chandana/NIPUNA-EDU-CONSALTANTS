import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Destination from "./Destination";
import Choose from "./Choose";
import Mission from "./Mission";
import Contact from "./Contact";
import Footer from "./Footer";
function App() {
  return (
   <>
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
   <Navbar />
   <About />
    <Services />
    <Destination />
    <Choose />
    <Mission />
    <Contact />
    <Footer />
        
   </>
  )
}

export default App
