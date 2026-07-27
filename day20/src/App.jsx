import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount]=useState(0);

  function ExpensiveTask(num)
  {
    console.log("hello")
    for (let i =0; i<100000000;i++)
    {}
    return num*2
  }

  let doublevalue = useMemo(()=>ExpensiveTask(count),[count])
 

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increamnet</button>
     <div>
      count:{count}
     </div>
     <div>
      Double:{doublevalue}
     </div>
      

    </div>
  )
}

export default App
