// src/viewmodels/useLoginVM.ts

import { useNavigate } from "react-router-dom";
import { login } from "../service/login";

export function useLoginVM() {
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    try {
      const user = await login(username , password);
      
      console.log("Usuario autenticado:", user.access_token);
      localStorage.setItem("token",  JSON.stringify(user.access_token));
      
      navigate("/audichek/datos-persona");
    } catch ( error) {
      console.error("Error en el login:", error);
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return { handleLogin };
}
