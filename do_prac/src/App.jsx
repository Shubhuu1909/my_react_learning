import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const use_eff = useEffect(()=>{
    console.log("hello what is happening....")
  },[count])

  const ref_use =useRef(0)

  function focus_input ()
  {
    ref_use.current.value = 2
  }

  




  return (

    <>
    <h1>{count}</h1>
    <button onClick = {()=>{
      setCount(count+1)
    }}> increase </button>

    <div>
      <input type="text"  ref={ref_use} />
      <button onClick={focus_input}>focus</button>
    </div>
    
    </>


  )
}

export default App
