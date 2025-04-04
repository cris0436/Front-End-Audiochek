import { useState } from 'react'
import DemostrarResultados from "./DemostrarResultados.tsx"
import RouteProtect from './router'
import Inicio from '../views/viewInicio'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DemostrarResultados/>
    </>
  )
}

export default App
