import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Display from './Components/Display'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Counter  setCount={setCount}/>
      <Display count = {count}/>
    </div>
    
    </>
  )
}

export default App
