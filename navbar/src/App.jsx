import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isOpen, setisOpen] = useState(true)

  const toggleMenu =()=>{setisOpen(!isOpen)}



  return (

    <>    
      <nav>
        <h2>Tech store</h2>

        <button  
        onClick={toggleMenu}> menu </button>
        <ul className={isOpen?"menu active":"menu"}>
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>


   

    </>
  )
}

export default App
