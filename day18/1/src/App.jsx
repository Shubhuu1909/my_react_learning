import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'


function Timer(){
  
 const timmerid=useRef(null)



 const [seconds,setSeconds]=useState(0)

 function starttimer(){
  timmerid.current = setInterval(() => {setSeconds(s=>s+1)
    
  }, 1000);
 }
 function stoptimer(){
  clearInterval(timmerid.current)
 }
 return(
  <>
  <p>sec:{seconds}</p>
  <button onClick={starttimer}>start</button>
  <button onClick={stoptimer}>stop</button>
  </>
 )
}




const App = () => {
  return (
    <div>Timer
      <Timer/>
    </div>
  )
}

export default App