// src/viewmodels/useRegisterVM.ts

import { useNavigate } from "react-router-dom";
import registerPerson  from "../service/addPersonService";
import Usuario from "../models/Usuario";

export function useRegisterVM() {
  const navigate = useNavigate();

  const handleRegister = async (data: Usuario) => {
    try {
      await registerPerson(data);
      navigate("/audichek/recomendaciones");
    } catch (error) {
      alert("Error registrando. Por favor, intenta nuevamente.");
    }
  };

  return { handleRegister };
}
