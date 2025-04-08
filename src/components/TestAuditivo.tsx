import React, { useRef, useEffect, useState } from "react";

interface TestAuditivoProps {
  vol: number;
  frecuencia: string;
  canal: "izquierda" | "derecha";
}

const TestAuditivo: React.FC<TestAuditivoProps> = ({ vol, frecuencia, canal }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);  // Estado para el tiempo restante
  const [duration, setDuration] = useState<number>(0);  // Estado para la duración total del audio
  const [progress, setProgress] = useState<number>(0);  // Estado para la barra de progreso

  useEffect(() => {
    // Inicializar el audio cuando cambian las propiedades de vol, frecuencia, o canal
    if (audioRef.current) {
      audioRef.current.pause();  // Pausar cualquier audio en reproducción
      audioRef.current.load();  // Recargar el nuevo audio
      audioRef.current.volume = vol;  // Establecer el volumen
      audioRef.current.play();  // Reproducir el nuevo audio
    }
  }, [vol, frecuencia, canal]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;  // Tiempo actual de reproducción
      const totalDuration = audioRef.current.duration;  // Duración total del audio
      setTimeLeft(totalDuration - currentTime);  // Calcular el tiempo restante
      setProgress((currentTime / totalDuration) * 100);  // Calcular el progreso en porcentaje
    }
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={frecuencia}
        preload="auto"
        loop
        onTimeUpdate={handleTimeUpdate}  // Actualizar el tiempo restante y el progreso
      />
      <div className="progress mt-3">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {Math.round(timeLeft)}s restantes
        </div>
      </div>
    </div>
  );
};

export default TestAuditivo;
