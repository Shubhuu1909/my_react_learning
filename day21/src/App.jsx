import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'
import Child from './Child';

function App() {
  const[count,setCount]=useState(0)
  const[name,setName]=useState("")

  const handleClick = useCallback(()=>{
    console.log("button clicked");
  },[])

  return (
   <div style={{padding:"20px"}} >

    <h2>useCallbackDemo</h2>
     <h3>Count:{count}</h3>
     <button onClick={()=> setCount(count+1)}> Increment COunt</button>
      <br />
      <br />

      <input type="text"
      placeholder='type here....' 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

      <br />

     <br />    

     <Child handleClick={handleClick}/>

   </div>
  )
}

export default App
