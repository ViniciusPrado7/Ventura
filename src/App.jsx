import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home'
import Usuarios from './pages/Usuarios'
import Tarefas from './pages/Tarefas'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='usuarios' element={<Usuarios />} />
      <Route path='tarefas' element={<Tarefas />} /> 
    </Routes>
  )
}

export default App
