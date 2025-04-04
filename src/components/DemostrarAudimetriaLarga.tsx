import React, { useState } from "react";
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
  const data = [
    { x: 1, derecho: 10, izquierdo: 15 },
    { x: 2, derecho: 25, izquierdo: 20 },
    { x: 3, derecho: 15, izquierdo: 10 },
    { x: 4, derecho: 40, izquierdo: 30 },
    { x: 5, derecho: 30, izquierdo: 35 },
  ];

  const [estadoAuditivo, setEstadoAuditivo] = useState(0);

  return (
    <div className="container py-5 d-flex flex-column align-items-center">
      <div className="card shadow-lg rounded-4 border-0" style={{ width: "100%", maxWidth: "650px" }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-4 text-primary fw-bold">
            🎧 Resultados Audimetría Larga
          </h2>

          {/* Gráfica con dos funciones */}
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

          {/* Estado auditivo centrado */}
          <div className="mt-5 d-flex justify-content-center">
            <div className="bg-white border border-primary rounded-4 p-4 shadow text-center w-100" style={{ maxWidth: "300px" }}>
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