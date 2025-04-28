// src/viewmodels/useLoginVM.ts

import { useNavigate } from "react-router-dom";
import { login } from "../service/login";
import { getUser } from "../service/getUser";
export function useLoginVM() {
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    try {
      const user = await getUser(username);
      
      console.log("Usuario autenticado:", user);

      navigate("/audichek/datos-persona");
    } catch (error) {
      // Manejo de error de login
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return { handleLogin };
}
