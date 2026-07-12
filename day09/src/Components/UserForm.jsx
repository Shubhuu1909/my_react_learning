import React from 'react'
import { useState } from 'react'

function UserForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0)

    function Handler(e)
                 {

                    setName(e.target.value)
                
                 }

    function agechanged(e)
                 {

                    setAge(e.target.value)
                
                 }

    function Handler(e)
                 {

                    setName(e.target.value)
                
                 }
  return (
        <div>
            <div>
                <form action="">
                    <h2>USER FROM</h2>
                    <label htmlFor="">username:</label>
                    <input type="text" 
                    value={name}
                    onChange={Handler} 
                    />
                    <div>
                    <label htmlFor="">age:</label>
                    <input type="text" value={age}
                    onChange={agechanged} />
                    </div>
                </form>
            </div>
        
            
            <p>your name:{name}</p>
            <p>your name:{age}</p>
            
        </div>
  )
}

export default UserForm