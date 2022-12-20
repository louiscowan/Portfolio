import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/index.jsx'
import Index from './fileSelector/index'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/file-selector' element={<Index />} />
      </Routes>
    </>
  )
}

export default App
