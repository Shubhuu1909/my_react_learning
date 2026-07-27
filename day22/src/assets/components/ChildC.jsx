import React from 'react'
import { useContext } from 'react'
import {createContext} from 'react'
import { usercontext } from '../../App'


const ChildC = () => {

    const {name,age} = useContext(usercontext)
    
  
    



  return (
    <div>ChildC

        <h1>user name : {name}</h1>
        <h2>user age : {age}</h2>
    </div>
  )
}

export default ChildC