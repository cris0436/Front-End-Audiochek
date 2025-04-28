import React from "react";
import MenuUsuarios from "../components/MenuUsuarios";
import PruebaAudtiva from "../components/PruebaAuditiva"; // Corrección en el nombre
import EditUserPage from "../components/EditUserPage";
import ResultadosAudiometria from "../components/ResultadosAudiometria"
import Recommendation from "../components/Recommendation";
interface Props {
  com: string;
}

const LayoutUsuarios: React.FC<Props> = ({ com }) => {
  // Diccionario de componentes
  const componentes: Record<string, React.FC> = {
    PruebaAudtiva,EditUserPage,ResultadosAudiometria,Recommendation
  };

  // Validación de componente seleccionado
  const ComponenteSeleccionado = componentes[com] ?? (() => (
    <p className="text-center mt-3 text-danger">⚠️ Selecciona un patrón válido</p>
  ));

  return (
    <div className="d-flex flex-column min-vh-100">
      <MenuUsuarios />
      <div className="container flex-grow-1 d-flex justify-content-center align-items-center mt-3">
        <ComponenteSeleccionado />
      </div>
    </div>
  );
};

export default LayoutUsuarios;
