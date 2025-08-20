import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home'
import Usuarios from './pages/Usuarios'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='usuarios' element={<Usuarios />} />
    </Routes>
  )
}

export default App
