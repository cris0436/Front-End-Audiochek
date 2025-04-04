import { useState } from 'react'
import DemostrarAudimetriaLarga from "./DemostrarAudimetriaLarga.tsx"
import RouteProtect from './router'
import Inicio from '../views/viewInicio'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DemostrarAudimetriaLarga/>
    </>
  )
}

export default App
