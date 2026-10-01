import React from 'react'
import { useNavigate } from 'react-router-dom'

const Course = () => {
    const navigate = useNavigate()
    function HanndleClick(){
        navigate("/dashboard/test")

    }
  return (
    <div>
        <div>Course</div>
        <button onClick={HanndleClick}>move to test</button>
    </div>

  )
}

export default Course