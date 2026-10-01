import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes , Link } from 'react-router-dom'
import About from './Component/About'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Product from './Component/Product'
import Admin from './Component/Admin.jsx'
import Users from './Component/Users.jsx'
import Login from './Component/Login.jsx'
import Dashboard from './Component/Dashboard.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <h1>hello</h1>
      <BrowserRouter>

      {/* <nav>
        <Link to ="/Home">  home </Link>
        <Link to ="/about">  About </Link>
        <Link to ="/contact">  Contact </Link>
        <Link to ="/products">  products </Link>


      </nav> */}


      


        <Routes>

          <Route path='/' element = {<Home/>} /> 
          <Route path='/about' element = {<About/>} /> 
          <Route path='/contact' element = {<Contact/>} /> 
          <Route path='/products/:id' element = {<Product/>} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>



         <Routes>

          <Route path="/admin" element={<Admin />}>

            <Route path="users" element={<Users />} />

            <Route path="products" element={<Product />} />

          </Route>

         </Routes>

        





      
      </BrowserRouter>





    </div>
  )
}

export default App
