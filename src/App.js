import React from 'react'
import './index.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';  
import Days from './Component/Days'


const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Days/>
    </div>
  )
}

export default App
