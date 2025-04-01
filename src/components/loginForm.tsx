import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

type Inputs = {
  username: string;
  password: string;
};

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  // Función para manejar los datos del formulario
  const handleLoginData = (data: Inputs) => {
    // Aquí puedes hacer la lógica con los datos, como enviarlos a un servidor
    console.log("Datos recibidos:", data);
    // Por ejemplo, podrías hacer un fetch a tu API de login:
    // fetch('/api/login', { method: 'POST', body: JSON.stringify(data) });
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Pasamos los datos a la función externa
    handleLoginData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl mb-4">Iniciar Sesión</h2>
      <input
        {...register("username", { required: "El usuario es obligatorio" })}
        placeholder="Usuario"
        className="block w-full p-2 mb-2 border rounded"
      />
      {errors.username && <span className="text-red-500">{errors.username.message}</span>}

      <input
        {...register("password", { required: "La contraseña es obligatoria" })}
        type="password"
        placeholder="Contraseña"
        className="block w-full p-2 mb-4 border rounded"
      />
      {errors.password && <span className="text-red-500">{errors.password.message}</span>}

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Ingresar</button>
    </form>
  );
}
