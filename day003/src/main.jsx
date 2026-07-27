import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




import App from './App.jsx'


export default function ExtraContent(){
  return(
    <>
    <li>
      <ul>Do you want to add CSS properties to the footer/header?</ul>
      <ul>Do you want to create a social media section in the footer?</ul>
      <ul>Do you want to use a HydroBroker design/layout?</ul>
    </li>
    </>
  )
}




createRoot(document.getElementById('root')).render(<App/>)
