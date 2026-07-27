import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
import ChildC from './assets/components/ChildC'

export const usercontext = createContext()

function App() 
{

  const user ={
    name : "don",
    age : 20
  }



  const [count, setCount] = useState(0)

  return (

    <div>

      <usercontext.Provider value={user}>
        <ChildC/>
      </usercontext.Provider>


    </div>
     


    

  )
}

export default App

