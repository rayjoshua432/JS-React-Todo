import React from 'react'

const Landing = () => {
   return (
      <div className='landing-container'>
         <div className='landing-desc'>
            <h2>Hello there!</h2>
            <p>Where do you want to go?</p>  
            <button><a href='/'>Home</a></button>
            <button><a href='/todo'>Todo</a></button>
         </div>
      </div>
   )
}

export default Landing