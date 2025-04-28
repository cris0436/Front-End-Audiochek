import { useState } from "react";
import { useNavigate } from "react-router-dom";
import audios from "../assets/audios";
import Audimetria from "../models/Audimetria";
import AudimetryResults from "../models/audiometryResults";
import guardarAudimetiria from "../service/AddAudiometry";
export function usePruebaAuditivaVM() {
  const FRECUENCIAS = [
    audios.sound8, audios.sound10, audios.sound12, audios.sound15,
    audios.sound16, audios.sound17, audios.sound18, audios.sound19, audios.sound20,
  ];
  const VOL = [0.0000894335192, 0.00028281, 0.000894335, 0.00282813, 0.00894335, 0.02828136, 0.089433519, 0.28283, 0.8943];
  const db = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const navigate = useNavigate();
  const [audimetria] = useState(new Audimetria());
  const [canal, setCanal] = useState<"izquierda" | "derecha">("izquierda");
  const [indexFrecuencias, setIndexFrecuencias] = useState(0);
  const [indexVol, setIndexVol] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [comienza, setComienza] = useState(true);

  const comenzarPrueba = () => setComienza(false);

  const noEscucho = () => {
    if (indexVol === VOL.length - 1) {
      siEscucho(); // fuerza a guardar si ya está en el máximo
      return;
    }
    setIndexVol(prev => prev + 1);
  };

  const siEscucho = () => {
    guardarAudimetria(true);

    if (indexFrecuencias === FRECUENCIAS.length - 1 && canal === "derecha") {
      setFinalizado(true);
      const datos = JSON.stringify(audimetria);
      localStorage.setItem("audimetria", JSON.stringify(datos));
      guardarAudimetiria(audimetria)
      setTimeout(() => navigate("/audichek/resultados"), 1500);
      return;
    }

    if (indexFrecuencias === FRECUENCIAS.length - 1 && canal === "izquierda") {
      setCanal("derecha");
      setIndexFrecuencias(0);
    } else {
      setIndexFrecuencias(prev => prev + 1);
    }

    setIndexVol(0);
  };

  const ajustarfomratoFrecuencia = (frecuencia: string) => {
    const match = frecuencia.match(/\/src\/assets\/(\d+)\.wav/);
    return match ? match[1] : ""; 
  }

  const guardarAudimetria = (escucho: boolean) => {
    const respuestaDb = db[indexVol];
    const frecuencia = ajustarfomratoFrecuencia(FRECUENCIAS[indexFrecuencias]);
    const nuevoResultado = new AudimetryResults(frecuencia, respuestaDb, canal === "derecha", canal === "derecha", escucho);
    audimetria.addAudiometryResult(nuevoResultado);
  };

  return {
    comenzarPrueba,
    noEscucho,
    siEscucho,
    canal,
    frecuenciaActual: FRECUENCIAS[indexFrecuencias],
    volumenActual: VOL[indexVol],
    comienza,
    finalizado,
  };
}
