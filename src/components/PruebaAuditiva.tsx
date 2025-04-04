import { useState } from "react";
import audios from "../assets/audios";
import TestAuditivo from "./TestAuditivo";
import { Navigate, useNavigate, } from "react-router-dom";


export const PruebaAuditiva: React.FC = () => {
  const FRECUENCIAS = [
    audios.sound8, audios.sound10, audios.sound12, audios.sound15, audios.sound16,
    audios.sound17, audios.sound18, audios.sound19, audios.sound20,
  ];
  const VOL = [0.005, 0.001, 0.01, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  const navigate = useNavigate();

  const [indexFrecuencias, setIndexFrecuencias] = useState(0);
  const [indexVol, setIndexVol] = useState(0);
  const [finalizado,setFinalizado] =useState(false);
  const [comienza , setComienza ] = useState(true);
  const noEscucho = () => {
    if (indexVol == VOL.length-1){
      siEscucho();
      return;
    }
    setIndexVol((prevIndex) => (prevIndex + 1) % VOL.length); // Aumenta volumen
  };
  const comenzarPrueba = () =>{
    setComienza(false);
  }
  const siEscucho = () => {
    if (indexFrecuencias == FRECUENCIAS.length-1){
      setFinalizado(true);
      setTimeout(() => { navigate("/audichek/resultados")}, 1500); // 1000 ms = 1 segundo
     
      return;
    }
    setIndexVol(0); // Reinicia volumen
    setIndexFrecuencias((prevIndex) => (prevIndex + 1) % FRECUENCIAS.length); // Cambia frecuencia
  };

  return (
    
    <div className="container mt-4">
      {comienza ?(
        <div>
          <h1>Comenzar prueba</h1>
          <button className="btn ms-2" style={{ background: "#0056b3", color: "#fff" }} onClick={comenzarPrueba}>
          Comenzar
          </button>
  
        </div>
      ):(
      <>
      {finalizado ? (
        <div className="text-center">
          <h1>✅ Prueba Finalizada</h1>
          <p>Redirigiendo a resultados...</p>
        </div>
      ) : (
        <>
      <TestAuditivo vol={VOL[indexVol]} frecuencia={FRECUENCIAS[indexFrecuencias]} />

      <div className="d-flex justify-content-center mt-3">
        <button className="btn" style={{ background: "#007bff", color: "#fff" }} onClick={noEscucho}>
          No Escucho
        </button>
        <button className="btn ms-2" style={{ background: "#0056b3", color: "#fff" }} onClick={siEscucho}>
          Sí Escucho 
        </button>
      </div></>)}</>
      )}
      
    </div>
  );
};

export default PruebaAuditiva;
