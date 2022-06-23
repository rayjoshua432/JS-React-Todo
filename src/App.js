// Import libraries
import React from 'react'
import {Routes, Route} from 'react-router-dom'

// Styles
import './styles/main.css'

import LandingPage from './components/landing'
import Todo from './components/todo'

const App = () => {
   return (
      <div className='main-container'>
         < Routes>
            < Route path="/" element = {< LandingPage />} />
            < Route path="/landing" element = {< LandingPage />} />
            < Route path="/todo" element = {< Todo />} />
         </Routes>
      </div>
   )
}

export default App