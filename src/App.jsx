import { useState } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import "./App.css"

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>  
    </>
  )
}

export default App
