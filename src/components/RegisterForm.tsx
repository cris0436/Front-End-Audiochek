import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

          {/* Campos existentes */}
          {/* ... username, email, birthdate, gender, occupation ... */}

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
            <details className="mb-2">
              <summary className="text-primary" style={{ cursor: "pointer" }}>
                Tratamiento de Datos Personales
              </summary>
              <div className="mt-2 text-secondary" style={{ fontSize: "0.9rem", maxHeight: "200px", overflowY: "auto" }}>
                <p>En el desarrollo del proyecto AudiCheck, se reconoce la importancia de la protección de los datos personales de los usuarios. Por ello, se ha adoptado un enfoque responsable, ético y conforme a lo establecido en la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013, que regulan el tratamiento de datos personales en Colombia. El proyecto se guía por los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad.</p>
                <p>Los datos recolectados a través de la aplicación, tales como nombre, correo electrónico, fecha de nacimiento, género y ocupación, son utilizados exclusivamente con fines académicos y de investigación en el marco del análisis auditivo propuesto. Esta información es almacenada de forma segura en una base de datos protegida, y su tratamiento se limita estrictamente a los fines previamente informados al usuario, garantizando en todo momento su confidencialidad, integridad y disponibilidad.</p>
                <p>Para proteger los datos personales durante su transmisión, se implementa el uso de protocolos de encriptación como SSL/TLS. Asimismo, se han establecido mecanismos de seguridad en el almacenamiento, restringiendo el acceso únicamente a los miembros autorizados del equipo de desarrollo del proyecto, conforme al principio de seguridad.</p>
                <p>De acuerdo con el principio de autorización previa e informada, los usuarios son informados de manera clara sobre el tipo de datos que serán recolectados, la finalidad de su uso, y sus derechos como titulares, tales como el acceso, corrección, supresión, revocatoria de la autorización y oposición al tratamiento de sus datos. En ningún caso se compartirán los datos personales con terceros sin el consentimiento expreso del titular.</p>
                <p>Este tratamiento se ajusta no solo a la legislación colombiana vigente, sino también a las mejores prácticas internacionales en materia de protección de datos personales en entornos digitales.</p>
              </div>
            </details>

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
