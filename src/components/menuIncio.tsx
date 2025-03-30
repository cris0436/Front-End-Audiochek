
import { BrowserRouter, Link } from 'react-router-dom';
const menuLogin = () => {

  return (
    <BrowserRouter>
      <nav className='barra_inicio'>
        <ul>
          
          <li>
            <Link to="/">Inicio</Link> {/* Enlace a la página de inicio */}
          </li>
          
          <li>
            <Link to="/login">Iniciar sesion</Link>
          </li>
          <li>
            <Link to="/signup">Registrarte</Link> 
          </li>
        </ul>
      </nav>
      
    </BrowserRouter>
    
    
  )
}

export default menuLogin