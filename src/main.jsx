import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { FestivalProvider } from './context/FestivalContext.jsx'
import './index.css'

// BrowserRouter: liga a navegação entre páginas.
// FestivalProvider: deixa o carrinho disponível em todas as páginas.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FestivalProvider>
        <App />
      </FestivalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
