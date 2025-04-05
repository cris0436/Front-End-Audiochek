import { useState } from 'react'
import RouteProtect from '../components/router'
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
