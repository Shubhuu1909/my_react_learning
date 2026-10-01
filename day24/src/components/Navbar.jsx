import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>


        <ul>
            <li>
                <Link to="/">home</Link>
                
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>


            <li>
                <Link to="/dashboard">dashboard</Link>
            </li>

            <li>
                <Link to="/dashboard/student/id:444">dashboard</Link>
            </li>

          
        </ul>


        
    </div>
  )
}

export default Navbar