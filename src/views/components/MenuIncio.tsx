import { Link } from 'react-router-dom';
// Importa íconos de react-icons (ejemplo: FaHome, FaSignInAlt, FaUserPlus)
import { FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import React from 'react';

export const MenuIncio = () => {
  return (
    <nav className="barra_inicio">
      <ul>
        <li>
          <Link to="/">
            <FaHome /> Inicio
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Iniciar sesión
          </Link>
        </li>
        <li>
          <Link to="/sign-up">
            <FaUserPlus /> Registrarte
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuIncio;
