import { useState } from 'react'
import RouteProtect from './Router.tsx'
import Inicio from '../views/ViewInicio.tsx'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <RouteProtect/>
      </div>
      
      
    </>
  )
}

export default App
