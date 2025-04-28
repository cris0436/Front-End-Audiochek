import React, { useState, useEffect } from "react";
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
  const [estadoAuditivo, setEstadoAuditivo] = useState(0);
  const [sinDatos, setSinDatos] = useState(false);  // Nueva variable de estado

  useEffect(() => {
    // Recuperamos los datos de localStorage
    const datosGuardados = JSON.parse(localStorage.getItem("audimetria") || "{}");

    // Verificamos si hay datos en localStorage
    if (Object.keys(datosGuardados).length === 0 || !datosGuardados?.izquierda || !datosGuardados?.derecha) {
      setSinDatos(true);  // Si no hay datos, actualizamos el estado para mostrar el mensaje
    } else {
      // Procesamos los datos para crear las dos líneas de la gráfica (derecha e izquierda)
      const frecuencias = Object.keys(datosGuardados.derecha);
      let chartData: { x: string; derecho: number; izquierdo: number }[] = [];

      frecuencias.forEach((frecuencia) => {
        const dbIzquierda = datosGuardados.izquierda[frecuencia];
        const dbDerecha = datosGuardados.derecha[frecuencia];

        // Agregamos los datos de cada frecuencia en la gráfica
        chartData.push({
          x: frecuencia,
          derecho: dbDerecha,
          izquierdo: dbIzquierda,
        });
      });

      setData(chartData);
    }
  }, []);

  return (
    <div className="container py-5 d-flex flex-column align-items-center">
      <div className="card shadow-lg rounded-4 border-0" style={{ width: "100%", maxWidth: "650px" }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-4 text-primary fw-bold">
            🎧 Resultados Audimetría (oido derecho y izqueido)
          </h2>

          {/* Si no hay datos, mostramos un mensaje */}
          {sinDatos ? (
            <div className="text-center">
              <p>🚫 Sin datos de audimetría.</p>
            </div>
          ) : (
            // Si hay datos, mostramos la gráfica
            <div style={{ width: "100%", height: 350 }}>
              <ResponsiveContainer>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
                  <XAxis dataKey="x" />
                  <YAxis />
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

          {/* Estado auditivo centrado */}
          <div className="mt-5 d-flex justify-content-center">
            <div
              className="bg-white border border-primary rounded-4 p-4 shadow text-center w-100"
              style={{ maxWidth: "300px" }}
            >
              <p className="mb-1 text-muted">Estado auditivo</p>
              <h3 className="fw-bold text-primary mb-0">{estadoAuditivo}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemostrarAudimetriaLarga;
