import React, { useState } from "react";
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
  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 25 },
    { x: 3, y: 15 },
    { x: 4, y: 40 },
    { x: 5, y: 30 },
  ];

  const [estadoAuditivo, setEstadoAuditivo] = useState(0);

  return (
    <div className="container py-5">
      <div className="card shadow-lg rounded-4 border-0">
        <div className="card-body">
          <h2 className="card-title text-center mb-4 text-primary fw-bold">
          🎧 Resultados Audimetría Corta
          </h2>

          {/* Gráfica */}
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

          {/* Estado auditivo en recuadro Bootstrap moderno */}
          <div className="d-flex justify-content-center mt-5">
            <div className="bg-white border-start border-5 border-primary rounded-3 p-4 shadow text-center" style={{ minWidth: "280px" }}>
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
