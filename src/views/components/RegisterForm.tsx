import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRegisterVM } from "../../viewmodels/useRegisterVM";
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuario from "../../models/Usuario";

type Inputs = {
  cedula: string;
  username: string;
  email: string;
  birthdate: string;
  gender: string;
  occupation: string;
  password: string;
  confirmPassword: string;
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
  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm<Inputs>({
    mode: "onChange"
  });

  const { handleRegister } = useRegisterVM();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { acceptPolicy, ...personData } = data;
    const person = new Usuario(
      personData.cedula,
      personData.username,
      personData.password,
      personData.email,
      personData.occupation,
      new Date(personData.birthdate)
    );
    handleRegister(person);
  };

  const password = watch("password");

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4 bg-white rounded" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4" style={{ color: "#264e86" }}>Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Cédula */}
          <div className="mb-3">
            <label className="form-label">Cédula</label>
            <input
              {...register("cedula", { required: "La cédula es obligatoria" })}
              className={`form-control ${errors.cedula ? "is-invalid" : ""}`}
              placeholder="Ingrese su cédula"
            />
            {errors.cedula && <div className="invalid-feedback">{errors.cedula.message}</div>}
          </div>

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

          {/* Fecha de nacimiento con validación personalizada */}
          <div className="mb-3">
            <label className="form-label">Fecha de nacimiento</label>
            <input
              {...register("birthdate", {
                required: "La fecha de nacimiento es obligatoria",
                validate: (value) => {
                  const inputDate = new Date(value);
                  const today = new Date();
                  return inputDate <= today || "La fecha no puede ser mayor a la actual";
                }
              })}
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
          <div className="mb-3">
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

          {/* Contraseña */}
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              {...register("password", { required: "La contraseña es obligatoria" })}
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Ingrese su contraseña"
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          {/* Confirmar contraseña */}
          <div className="mb-3">
            <label className="form-label">Confirmar contraseña</label>
            <input
              {...register("confirmPassword", {
                required: "Confirme su contraseña",
                validate: value =>
                  value === password || "Las contraseñas no coinciden"
              })}
              type="password"
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
              placeholder="Confirme su contraseña"
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
          </div>

          {/* Tratamiento de datos */}
          <div className="mb-4">
            <div className="form-check">
              <input
                type="checkbox"
                className={`form-check-input ${errors.acceptPolicy ? "is-invalid" : ""}`}
                id="acceptPolicy"
                {...register("acceptPolicy", { required: "Debe aceptar las políticas de tratamiento de datos" })}
              />
              <label className="form-check-label" htmlFor="acceptPolicy">
                Acepto las <a href="/politicas" target="_blank" rel="noopener noreferrer">políticas de tratamiento de datos personales</a>
              </label>
            </div>
            {errors.acceptPolicy && (
              <div className="invalid-feedback d-block">{errors.acceptPolicy.message}</div>
            )}
            <small className="text-muted d-block mt-2">
              Tus datos personales serán tratados conforme a la ley vigente de protección de datos. 
              Al aceptar, autorizas su uso para fines administrativos, de contacto, y mejora de servicios.
            </small>
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={!isValid}>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
