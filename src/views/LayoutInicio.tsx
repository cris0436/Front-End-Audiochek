import React from "react";
import MenuInicio from "../components/MenuIncio";
import LoginForm from "../components/LoginForm" // Corrección en el nombre
import RegisterForm from "../components/RegisterForm"
interface Props {
  com: string;
}

const LayoutInicio: React.FC<Props> = ({ com }) => {
  // Diccionario de componentes
  const componentes: Record<string, React.FC> = {
    LoginForm,RegisterForm 
  };

  // Validación de componente seleccionado
  const ComponenteSeleccionado = componentes[com] ?? (() => (
    <p className="text-center mt-3 text-danger">⚠️ Selecciona un patrón válido</p>
  ));

  return (
    <div className="d-flex flex-column min-vh-100">
      <MenuInicio />
      <div className="container flex-grow-1 d-flex justify-content-center align-items-center mt-3">
        <ComponenteSeleccionado />
      </div>
    </div>
  );
};

export default LayoutInicio;
