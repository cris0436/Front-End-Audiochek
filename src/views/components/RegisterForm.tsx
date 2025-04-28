// src/views/RegisterForm.tsx

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRegisterVM } from "../../viewmodels/useRegisterVM";
import 'bootstrap/dist/css/bootstrap.min.css';

type Inputs = {
  username: string;
  email: string;
  birthdate: string;
  gender: string;
  occupation: string;
  acceptPolicy: boolean;
};

const occupations = [
  "Ingeniero", "Médico", "Abogado", "Docente", "Contador", "Administrador", "Arquitecto",
  "Policía", "Bombero", "Electricista", "Plomero", "Carpintero", "Mecánico", "Enfermero",
  "Psicólogo", "Diseñador gráfico", "Periodista", "Chef", "Panadero", "Peluquero", "Vendedor",
  "Agricultor", "Taxista", "Conductor de bus", "Guardia de seguridad", "Soldador", "Tecnólogo en sistemas",
  "Operario de maquinaria", "Asistente administrativo", "Estilista"
];

export function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const { handleRegister } = useRegisterVM();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { acceptPolicy, ...personData } = data;
    handleRegister(personData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4 bg-white rounded" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4" style={{ color: "#264e86" }}>Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Usuario */}
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              {...register("username", { required: "El usuario es obligatorio" })}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              placeholder="Ingrese su usuario"
            />
            {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
          </div>

          {/* Email */}
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
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          {/* Fecha de nacimiento */}
          <div className="mb-3">
            <label className="form-label">Fecha de nacimiento</label>
            <input
              {...register("birthdate", { required: "La fecha de nacimiento es obligatoria" })}
              type="date"
              className={`form-control ${errors.birthdate ? "is-invalid" : ""}`}
            />
            {errors.birthdate && <div className="invalid-feedback">{errors.birthdate.message}</div>}
          </div>

          {/* Género */}
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
            {errors.gender && <div className="invalid-feedback">{errors.gender.message}</div>}
          </div>

          {/* Ocupación */}
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
            {errors.occupation && <div className="invalid-feedback">{errors.occupation.message}</div>}
          </div>

          {/* Tratamiento de datos */}
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className={`form-check-input ${errors.acceptPolicy ? "is-invalid" : ""}`}
                id="acceptPolicy"
                {...register("acceptPolicy", { required: "Debe aceptar las políticas de tratamiento de datos" })}
              />
              <label className="form-check-label" htmlFor="acceptPolicy">
                Acepto las políticas de tratamiento de datos personales
              </label>
              {errors.acceptPolicy && (
                <div className="invalid-feedback d-block">{errors.acceptPolicy.message}</div>
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
