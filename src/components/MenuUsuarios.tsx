import { Link } from "react-router-dom";
import "../styles/menuUsuarios.css"
const MenuUsuarios = () => {
  return (
    <nav className="barra_inicio">
      <ul>
        <li>
          <Link to="/">🏠 Inicio</Link>
        </li>
        <li>
          <Link to="/audichek/recomendaciones">📌 Recomendaciones</Link>
        </li>
        <li>
          <Link to="/audichek/testauditivo">🎧 Test Auditivo</Link>
        </li>
        <li>
          <Link to="/audichek/datos-persona">📂 Mis Datos</Link>
        </li>
        <li>
          <Link to="/audichek/resultados">📊 Resultados</Link>
        </li>
        <li>
          <Link to="/">🚪 Salir</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuUsuarios;
