import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student'

function App() {
const [name ,setname]=useState("shubh")

 

  return ( 

    <div>
      <input type="text"
    
    onChange={(e)=>setname(e.target.value)}
    onc
    
    />

    <h1>hello {name}</h1>

    </div>

  


  )

}
export default App
