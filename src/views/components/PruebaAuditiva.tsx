import React from "react";
import TestAuditivo from "../components/TestAuditivo";
import { usePruebaAuditivaVM } from "../../viewmodels/usePruebaAuditivaVM";

export const PruebaAuditiva: React.FC = () => {
  const {
    comenzarPrueba,
    noEscucho,
    siEscucho,
    canal,
    frecuenciaActual,
    volumenActual,
    comienza,
    finalizado,
  } = usePruebaAuditivaVM();

  return (
    <div className="container mt-4">
      {comienza ? (
        <div>
          <h1>Comenzar prueba</h1>
          <button className="btn ms-2" style={{ background: "#0056b3", color: "#fff" }} onClick={comenzarPrueba}>
            Comenzar
          </button>
        </div>
      ) : finalizado ? (
        <div className="text-center">
          <h1>✅ Prueba Finalizada</h1>
          <p>Redirigiendo a resultados...</p>
        </div>
      ) : (
        <>
          <TestAuditivo
            vol={volumenActual}
            frecuencia={frecuenciaActual}
            canal={canal}
          />
          <div className="d-flex justify-content-center mt-3">
            <button className="btn" style={{ background: "#007bff", color: "#fff" }} onClick={noEscucho}>
              No Escucho
            </button>
            <button className="btn ms-2" style={{ background: "#0056b3", color: "#fff" }} onClick={siEscucho}>
              Sí Escucho
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PruebaAuditiva;
