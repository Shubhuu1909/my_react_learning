import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Dash from './components/Dash'
import Course from './components/Course'
import Test from './components/Test'
import Profile from './components/Profile'
import Setting from './components/Setting'




const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>,
      children:[
        {
          path:"profile",
          element:<Profile/>
        },
        {
          path:"setting",
          element:<Setting/>
        }
      ]
      
    },
    { 
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>,

    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:"courses",
          element:<Course/>
        },
        {
          path:"test",
          element:<Test/>

        }
      ]

    },
    {

      path:"/dashboard/student/:id",
      element:<>
      <Navbar/>
      <Dash/>
      </>

    }

    



  ])

function App() { 
 

  return (
    
      <>
     <RouterProvider router={router}/>
     
      
      
      
      
      </>
  )
}
 
export default App;
