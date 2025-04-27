// src/viewmodels/useRegisterVM.ts

import { useNavigate } from "react-router-dom";
import registerPerson, { PersonData } from "../service/AddPersonService";

export function useRegisterVM() {
  const navigate = useNavigate();

  const handleRegister = async (data: PersonData) => {
    try {
      await registerPerson(data);
      navigate("/audichek/recomendaciones");
    } catch (error) {
      alert("Error registrando. Por favor, intenta nuevamente.");
    }
  };

  return { handleRegister };
}
