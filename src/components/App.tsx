import { useState } from 'react'
import RouteProtect from './router'
import Inicio from '../views/viewInicio'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouteProtect/>
    </>
  )
}

export default App
