import { useState } from 'react'
import Inicio  from '../views/viewInicio'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inicio/>
    </>
  )
}

export default App
