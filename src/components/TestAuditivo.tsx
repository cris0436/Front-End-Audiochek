import React, { useRef, useEffect, useState } from "react";

interface Props {
  vol: number; // Volumen entre 0 y 1
  frecuencia: string; // URL o archivo de audio
}

export const TestAuditivo: React.FC<Props> = ({ vol, frecuencia }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = vol;
      audioRef.current.currentTime = 0; // Reiniciar audio al cambiar de frecuencia
      audioRef.current.play();

      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current?.duration || 0);
      };

      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      };
    }
  }, [vol, frecuencia]); // Se actualiza si el volumen o frecuencia cambia

  return (
    <div className="card shadow-sm p-3 rounded" style={{ background: "#f8f9fa", color: "#000" }}>
      <h4 className="text-center">Prueba Auditiva</h4>
      <p className="text-center"> </p>
      {/* Barra de sonido */}
      <audio ref={audioRef}  autoPlay loop src={frecuencia} />

      <div className="mt-3">
        <label style={{ color: "#000" }}>⏳ Progreso:</label>
        <progress className="w-100" value={currentTime} max={duration}></progress>
        <p className="text-center mt-2">
          {currentTime.toFixed(2)}s / {duration.toFixed(2)}s
        </p>
      </div>

      {/* Botones estilizados */}
      <div className="d-flex justify-content-center mt-3">
        <button className="btn-primary text-white "  onClick={() => audioRef.current?.play()}>
          ▶️ Reproducir
        </button>
        <button className="btn-primary text-white" onClick={() => audioRef.current?.pause()}>
          ⏸️ Pausar
        </button>
      </div>
    </div>
  );
};

export default TestAuditivo;
