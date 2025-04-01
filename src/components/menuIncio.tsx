
import { BrowserRouter, Link } from 'react-router-dom';
const MenuIncio = () => {

  return (
 
      <nav className='barra_inicio'>
        <ul>
          <li>
            <Link to="/">Inicio</Link> 
          </li>
          
          <li>
            <Link to="/login">Iniciar sesion</Link>
          </li>
          <li>
            <Link to="/sign up">Registrarte</Link> 
          </li>
        </ul>
      </nav>

    
    
  )
}

export default MenuIncio