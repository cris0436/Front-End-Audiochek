import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/App.css'
import './styles/inicio.css'
import './styles/menuIncio.css'
import './styles/menuUsuarios.css'

import App from "./views/components/App"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
