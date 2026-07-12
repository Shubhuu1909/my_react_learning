import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



{/*function Hero(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <h1>{props.lastname}</h1>
      <h1>{props.age}</h1>
    </div>
  )
}

function Even(){
  
return(
    <>

  <Hero name="shubham"
  lastname="jadhav"
  age="22"/>

  <Hero name="surya"
  lastname="jadhav"
  age="22"/>

  </>
)
}
)*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>)

