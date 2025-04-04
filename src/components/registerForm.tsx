import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

type Inputs = {
  username: string;
  email: string;
  birthdate: string;
  gender: string;
  occupation: string;
};

const occupations = [
  "Ingeniero", "Médico", "Abogado", "Docente", "Contador", "Administrador", "Arquitecto",
  "Policía", "Bombero", "Electricista", "Plomero", "Carpintero", "Mecánico", "Enfermero",
  "Psicólogo", "Diseñador gráfico", "Periodista", "Chef", "Panadero", "Peluquero", "Vendedor",
  "Agricultor", "Taxista", "Conductor de bus", "Guardia de seguridad", "Soldador", "Tecnólogo en sistemas",
  "Operario de maquinaria", "Asistente administrativo", "Estilista"
];

export function RegisterForm() {
  const {register,handleSubmit, formState: { errors },} = useForm<Inputs>();
  const navigate = useNavigate();
  const handleRegisterData = (data: Inputs) => {
    console.log("Datos recibidos:", data);
    navigate("/audichek/recomendaciones");
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleRegisterData(data);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4 bg-white rounded" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4" style={{ color: "#264e86" }}>Registro</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              {...register("username", { required: "El usuario es obligatorio" })}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              placeholder="Ingrese su usuario"
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo no válido"
                }
              })}
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="correo@ejemplo.com"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Fecha de nacimiento</label>
            <input
              {...register("birthdate", { required: "La fecha de nacimiento es obligatoria" })}
              type="date"
              className={`form-control ${errors.birthdate ? "is-invalid" : ""}`}
            />
            {errors.birthdate && (
              <div className="invalid-feedback">{errors.birthdate.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Género</label>
            <select
              {...register("gender", { required: "Seleccione un género" })}
              className={`form-select ${errors.gender ? "is-invalid" : ""}`}
            >
              <option value="">Seleccione su género</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.gender && (
              <div className="invalid-feedback">{errors.gender.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="form-label">Ocupación</label>
            <select
              {...register("occupation", { required: "Seleccione una ocupación" })}
              className={`form-select ${errors.occupation ? "is-invalid" : ""}`}
            >
              <option value="">Seleccione su ocupación</option>
              {occupations.map((occ, index) => (
                <option key={index} value={occ}>{occ}</option>
              ))}
            </select>
            {errors.occupation && (
              <div className="invalid-feedback">{errors.occupation.message}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegisterForm