import React, { useState, useEffect } from "react";
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
  const [estadoAuditivo] = useState(0);
  const [sinDatos, setSinDatos] = useState(false);  // Nueva variable de estado

  useEffect(() => {
    // Recuperamos los datos de localStorage
    const datosGuardados = JSON.parse(localStorage.getItem("audimetria") || "{}");

    // Verificamos si hay datos en localStorage
    if (Object.keys(datosGuardados).length === 0 || !datosGuardados?.izquierda || !datosGuardados?.derecha) {
      setSinDatos(true);  // Si no hay datos, actualizamos el estado para mostrar el mensaje
    } else {
      // Procesamos los datos para obtener los promedios de decibelios por frecuencia
      const frecuencias = Object.keys(datosGuardados.derecha);
      const chartData: { x: string; y: number }[] = [];

      frecuencias.forEach((frecuencia) => {
        const dbIzquierda = datosGuardados.izquierda[frecuencia];
        const dbDerecha = datosGuardados.derecha[frecuencia];

        // Calculamos el promedio de los dos canales para cada frecuencia
        const promedio = (dbIzquierda + dbDerecha) / 2;

        // Agregamos los datos al array para la gráfica
        chartData.push({ x: frecuencia, y: promedio });
      });

      setData(chartData);
    }
  }, []);

  return (
    <div className="container py-5">
      <div className="card shadow-lg rounded-4 border-0">
        <div className="card-body">
          <h2 className="card-title text-center mb-4 text-primary fw-bold">
            🎧 Resultados Audimetría (General)
          </h2>

          {/* Si no hay datos, mostramos un mensaje */}
          {sinDatos ? (
            <div className="text-center">
              <p>🚫 Sin datos de audimetría.</p>
            </div>
          ) : (
            // Si hay datos, mostramos la gráfica
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
                  <XAxis dataKey="x" />
                  <YAxis />
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
          )}

          {/* Estado auditivo en recuadro Bootstrap moderno */}
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

export default DemostrarAudimetriaCorta;
