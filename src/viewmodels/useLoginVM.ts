// src/viewmodels/useLoginVM.ts

import { useNavigate } from "react-router-dom";
import { login } from "../service/login";

export function useLoginVM() {
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    try {
      const user = await login(username, password);
      
      console.log("Usuario autenticado:", user);

      navigate("/audichek/datos-persona");
    } catch (error) {
      // Manejo de error de login
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return { handleLogin };
}
