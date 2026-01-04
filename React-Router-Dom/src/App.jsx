import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/About'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      {/* <h1>Hi</h1> */}
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App