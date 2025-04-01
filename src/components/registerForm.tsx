import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  // Función para manejar los datos del formulario
  const handleRegisterData = (data: Inputs) => {
    console.log("Datos recibidos:", data);
    // Aquí puedes manejar la lógica para el registro de usuario
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleRegisterData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container p-4">
      <h2 className="text-center mb-4">Registro</h2>

      {/* Usuario */}
      <div className="mb-3">
        <input
          {...register("username", { required: "El usuario es obligatorio" })}
          placeholder="Usuario"
          className="form-control"
        />
        {errors.username && <span className="text-danger">{errors.username.message}</span>}
      </div>

      {/* Correo electrónico */}
      <div className="mb-3">
        <input
          {...register("email", { required: "El correo es obligatorio", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Correo no válido" } })}
          placeholder="Correo Electrónico"
          type="email"
          className="form-control"
        />
        {errors.email && <span className="text-danger">{errors.email.message}</span>}
      </div>

      {/* Fecha de nacimiento */}
      <div className="mb-3">
        <input
          {...register("birthdate", { required: "La fecha de nacimiento es obligatoria" })}
          type="date"
          className="form-control"
        />
        {errors.birthdate && <span className="text-danger">{errors.birthdate.message}</span>}
      </div>

      {/* Género */}
      <div className="mb-3">
        <select {...register("gender", { required: "Seleccione un género" })} className="form-control">
          <option value="">Seleccione su género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
      </div>

      {/* Ocupación */}
      <div className="mb-3">
        <select {...register("occupation", { required: "Seleccione una ocupación" })} className="form-control">
          <option value="">Seleccione su ocupación</option>
          {occupations.map((occ, index) => (
            <option key={index} value={occ}>{occ}</option>
          ))}
        </select>
        {errors.occupation && <span className="text-danger">{errors.occupation.message}</span>}
      </div>

      {/* Botón de registro */}
      <button type="submit" className="btn btn-primary w-100">Registrarse</button>
    </form>
  );
}
