import React from 'react'
import { useNavigate } from 'react-router-dom'


const Landing = () => {
   // Hook
   const navigation = useNavigate()
   const clickedButton = () => {
      navigation('/todo')
   }

   return (
      <div className='landing-container'>
         <div className='landing-main'>
            <h1>My Todo List</h1>
            <p>Create your todo list now.</p>
            <button onClick={clickedButton}>Start Now</button>
         </div>
      </div>
   )
}

export default Landing