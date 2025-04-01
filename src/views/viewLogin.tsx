import { useState } from 'react'
import {LoginForm } from '../components/loginForm.tsx'
import MenuIncicio from '../components/menuIncio'
import "../styles/menuIncio.css"
import "../styles/inicio.css"

function ViewLogin() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MenuIncicio/>
      <LoginForm/>

    </>
  )
}

export default ViewLogin