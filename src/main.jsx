import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Passo 2: envolva o <App /> com o <BrowserRouter>.
// Passo 5: envolva também com o <FestivalProvider>.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
