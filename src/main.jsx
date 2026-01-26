import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // ESSA LINHA É A QUE ESTÁ FALTANDO!
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)