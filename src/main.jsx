import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/index.jsx'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer/index.jsx'
import theme from './Theme.js'
import { ThemeProvider } from '@mui/material'
import { CarrinhoProvider } from './context/CarrinhoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="app-container">
        <CarrinhoProvider>

     
        <ThemeProvider theme={theme}>
        <NavBar />
        <main>
          <App />
        </main>
        <ToastContainer position='top-center' />
        <Footer />
        </ThemeProvider>
          </CarrinhoProvider>
      </div>
    </BrowserRouter>
  </StrictMode>
)

 