import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/weatherStyles.css'
import { WheaterApp } from './WheaterApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WheaterApp />
  </React.StrictMode>,
)
