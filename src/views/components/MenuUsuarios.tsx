import { Link } from "react-router-dom";

// Importa los íconos desde react-icons
import { FiMapPin, FiHeadphones, FiFolder, FiBarChart, FiLogOut } from "react-icons/fi";
import React from "react";

const MenuUsuarios = () => {
  return (
    <nav className="barra_inicio">
      <ul>
        <li>
          <Link to="/audichek/recomendaciones">
            <FiMapPin /> Recomendaciones
          </Link>
        </li>
        <li>
          <Link to="/audichek/testauditivo">
            <FiHeadphones /> Test Auditivo
          </Link>
        </li>
        <li>
          <Link to="/audichek/datos-persona">
            <FiFolder /> Mis Datos
          </Link>
        </li>
        <li>
          <Link to="/audichek/resultados">
            <FiBarChart /> Resultados
          </Link>
        </li>
        <li>
          <Link to="/">
            <FiLogOut /> Salir
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuUsuarios;
