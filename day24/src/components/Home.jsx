import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>HOME</h2>
      <Link to ="profile"> profile</Link>
      <br />
      <Link to = "setting"> setting</Link>
      <br />
      <Outlet />


    </div>
  )
}

export default Home