import { useState } from 'react'
import {RegisterForm } from '../components/registerForm'
import MenuIncicio from '../components/menuIncio'
import "../styles/menuIncio.css"
import "../styles/inicio.css"

function ViewRegistro() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MenuIncicio/>
      <RegisterForm/>

    </>
  )
}

export default ViewRegistro