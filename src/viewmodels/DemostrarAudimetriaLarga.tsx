import React, { useState, useEffect } from "react";
import { GetAudiometry } from "../service/getAudiometry";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const DemostrarAudimetriaLarga = () => {
  const [data, setData] = useState<{ x: string; derecho: number; izquierdo: number }[]>([]);
  const [estadoAuditivo_left, setEstadoAuditivo_left] = useState(0);
  const [estadoAuditivo_right, setEstadoAuditivo_right] = useState(0);
  const [sinDatos, setSinDatos] = useState(false);
  const { getAudiometryData } = GetAudiometry();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datosGuardados = await getAudiometryData();

        if (!datosGuardados || !datosGuardados[0] || !datosGuardados[2]) {
          setSinDatos(true);
          return;
        }

        const frecuencias = datosGuardados[2];
        let chartData: { x: string; derecho: number; izquierdo: number }[] = [];

        for (let i = 0; i < frecuencias.length; i++) {
          const dbIzquierda = datosGuardados[0][i];
          const dbDerecha = datosGuardados[1][i];
          chartData.push({ x: String(frecuencias[i]), derecho: dbDerecha, izquierdo: dbIzquierda });
        }

        setData(chartData);
        setEstadoAuditivo_left(datosGuardados[4][0] || 0);
        setEstadoAuditivo_right(datosGuardados[4][1] || 0);
      } catch (error) {
        console.error("Error obteniendo los datos de audiometría:", error);
        setSinDatos(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container py-5 d-flex flex-column align-items-center">
      <div className="card shadow-lg rounded-4 border-0" style={{ width: "100%", maxWidth: "650px" }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-4 text-primary fw-bold">
            🎧 Resultados Audimetría (Oído derecho e izquierdo)
          </h2>

          {/* Texto explicativo */}
          <p className="text-center text-muted">
            Esta gráfica representa las frecuencias sonoras que lograste percibir con cada oído, junto con los niveles de volumen en decibelios.
            Esta información permite evaluar si tu capacidad auditiva se encuentra dentro de los parámetros esperados según tu edad.
          </p>

          {sinDatos ? (
            <div className="text-center">
              <p>🚫 Sin datos de audimetría.</p>
            </div>
          ) : (
            <div style={{ width: "100%", height: 350 }}>
              <ResponsiveContainer>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
                  <XAxis
                    dataKey="x"
                    label={{ value: "Frecuencia (Hz)", position: "insideBottom", offset: -5 }}
                  />
                  <YAxis
                    label={{ value: "Decibelios (dB)", angle: -90, position: "insideLeft" }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="derecho"
                    stroke="#0d6efd"
                    strokeWidth={3}
                    dot={{ r: 5, stroke: "#0d6efd", strokeWidth: 2, fill: "#fff" }}
                    name="Oído Derecho"
                  />
                  <Line
                    type="monotone"
                    dataKey="izquierdo"
                    stroke="#dc3545"
                    strokeWidth={3}
                    dot={{ r: 5, stroke: "#dc3545", strokeWidth: 2, fill: "#fff" }}
                    name="Oído Izquierdo"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Estado auditivo derecho */}
          <div className="mt-5 d-flex justify-content-center">
            <div className="bg-white border border-primary rounded-4 p-4 shadow text-center w-100" style={{ maxWidth: "300px" }}>
              <p className="mb-1 text-muted">Estado auditivo derecha</p>
              <h3 className="fw-bold text-primary mb-0">{estadoAuditivo_right.toFixed(2)}%</h3>
            </div>
            <div className="bg-white border border-primary rounded-4 p-4 shadow text-center w-100" style={{ maxWidth: "300px" }}>
              <p className="mb-1 text-muted">Estado auditivo izquierda</p>
              <h3 className="fw-bold text-primary mb-0">{estadoAuditivo_left.toFixed(2)}%</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DemostrarAudimetriaLarga;
