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
} from "recharts";

const DemostrarAudimetriaCorta = () => {
  const [data, setData] = useState<{ x: string; y: number }[]>([]);
  const [estadoAuditivo, setEstadoAuditivo] = useState(0);
  const [sinDatos, setSinDatos] = useState(false);
  const { getAudiometryData } = GetAudiometry();

  useEffect(() => {
    const fetchData = async () => {
      const datosGuardados = await getAudiometryData();

      if (
        Object.keys(datosGuardados).length === 0 ||
        !datosGuardados?.[0] ||
        !datosGuardados?.[2]
      ) {
        setSinDatos(true);
      } else {
        const frecuencias = datosGuardados[2];
        const chartData: { x: string; y: number }[] = [];

        for (let i = 0; i < frecuencias.length; i++) {
          const dbIzquierda = datosGuardados[0][i];
          const dbDerecha = datosGuardados[1][i];
          const promedio = (dbIzquierda + dbDerecha) / 2;
          chartData.push({ x: frecuencias[i], y: promedio });
        }

        setData(chartData);
        setEstadoAuditivo(datosGuardados[3] || 0);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container py-5">
      <div className="card shadow-lg rounded-4 border-0">
        <div className="card-body">
          <h2 className="card-title text-center mb-4 text-primary fw-bold">
            🎧 Resultados Audimetría (General)
          </h2>

          {/* Texto explicativo */}
          <p className="text-center text-muted">
            Esta gráfica representa las frecuencias que acabas de escuchar junto con sus respectivos niveles de volumen (en decibelios).
            Con esta información se analiza tu capacidad auditiva para determinar si se encuentra dentro del rango esperado según tu edad.
          </p>

          {sinDatos ? (
            <div className="text-center">
              <p>🚫 Sin datos de audimetría.</p>
            </div>
          ) : (
            <>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
                  <XAxis dataKey="x" label={{ value: "Frecuencia (Hz)", position: "insideBottom", offset: -5 }} />
                  <YAxis label={{ value: "Decibelios (dB)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="y"
                    stroke="#0d6efd"
                    strokeWidth={3}
                    dot={{ r: 5, stroke: "#0d6efd", strokeWidth: 2, fill: "#fff" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          
          {/* Estado auditivo en porcentaje */}
          <div className="mt-5 d-flex justify-content-center">
            <div
              className="bg-white border border-primary rounded-4 p-4 shadow text-center w-100"
              style={{ maxWidth: "300px" }}
            >
              <p className="mb-1 text-muted">Estado auditivo</p>
              <h3 className="fw-bold text-primary mb-0">
                {estadoAuditivo.toFixed(2)}%
              </h3>
            </div>
          </div>
          </>)}

        </div>
      </div>
    </div>
  );
};

export default DemostrarAudimetriaCorta;
