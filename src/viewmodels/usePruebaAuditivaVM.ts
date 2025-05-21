import { useState } from "react";
import { useNavigate } from "react-router-dom";
import audios from "../assets/audios";
import Audimetria from "../models/Audimetria";
import AudimetryResults from "../models/AudiometryResults";
import { guardarAudimetiriaDb } from "../service/addAudiometry";

export function usePruebaAuditivaVM() {
  const FRECUENCIAS = [
    audios.sound8, audios.sound10, audios.sound12, audios.sound15,
    audios.sound16, audios.sound17, audios.sound18, audios.sound19, audios.sound20,
  ];
  const VOL = [0.0000894335192, 0.00028281, 0.000894335, 0.00282813, 0.00894335, 0.02828136, 0.089433519, 0.28283, 0.8943];
  const db = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const { addAudiometry } = guardarAudimetiriaDb();
  const navigate = useNavigate();
  const [audimetria] = useState(new Audimetria()); // Manteniendo tu enfoque original
  const [canal, setCanal] = useState<"izquierda" | "derecha">("izquierda");
  const [indexFrecuencias, setIndexFrecuencias] = useState(0);
  const [indexVol, setIndexVol] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [comienza, setComienza] = useState(true);

  const comenzarPrueba = () => setComienza(false);

  const noEscucho = () => {
    if (indexVol === VOL.length - 1) {
      guardarAudimetria(false);
      if (canal === "derecha") {
        setFinalizado(true);
        finalizarPrueba();
      } else {
        setIndexVol(0);
      }
      return;
    }
    setIndexVol(prev => prev + 1);
  };

  const siEscucho = () => {
    guardarAudimetria(true);

    if (indexFrecuencias === FRECUENCIAS.length - 1 && canal === "derecha") {
      setFinalizado(true);
      finalizarPrueba();
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

  const ajustarFormatoFrecuencia = (frecuencia: string) => {
    const match = frecuencia.match(/\d+/);
    return match ? match[0] : "";
  };

  const guardarAudimetria = (escucho: boolean) => {
    const respuestaDb = db[indexVol];
    const frecuencia = parseInt(ajustarFormatoFrecuencia(FRECUENCIAS[indexFrecuencias]), 10);
    const nuevoResultado = new AudimetryResults(frecuencia, respuestaDb, canal === "derecha", escucho);

    audimetria.addAudiometryResult(nuevoResultado);
  };

  const finalizarPrueba = () => {
    localStorage.setItem("audimetria", JSON.stringify(audimetria));
    addAudiometry(audimetria);
    setTimeout(() => navigate("/audichek/resultados"), 1500);
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
