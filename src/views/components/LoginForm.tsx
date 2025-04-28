// src/views/LoginForm.tsx

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLoginVM } from "../../viewmodels/useLoginVM";

type Inputs = {
  username: string;
  password: string;
};

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { handleLogin } = useLoginVM();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleLogin(data.username, data.password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4 bg-white rounded" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4" style={{ color: "#264e86" }}>Iniciar Sesión</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              {...register("username", { required: "El usuario es obligatorio" })}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              placeholder="Ingrese su usuario"
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              {...register("password", { required: "La contraseña es obligatoria" })}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Ingrese su contraseña"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
