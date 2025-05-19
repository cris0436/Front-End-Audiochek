import Usuario from "../models/Usuario";
import { useSession } from "../service/getSession.ts";
import { useNavigate } from "react-router-dom";
export function useUserUpdater() {
  const { getSession } = useSession();
  const navigate = useNavigate();
  async function updateUser( data: Usuario) {
    try {
      const user = await getSession();
      if (!user) {
        throw new Error("No se pudo obtener la sesión del usuario.");
      }
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No se encontró el token. Redirigiendo...");
        navigate("/"); // Manteniendo el uso correcto de React Router
        return null;
      }
      const userId = user["id"];
      const dataRequest = {
        cedula: data.cedula,
        name: data.userName,
        email: data.getEmail(),
        birth_date: data.fechaNacimiento,
        username: data.userName,
        password: data.getPassword(),
        ocupation: data.ocupacion,
        rol: "user",
      };

      console.log("Data request:", dataRequest);

      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/users/${parseInt(userId)}`, {
        method: "PUT",
        headers: { 
            "Authorization": `Bearer ${token.replace(/"/g, '')}`, // Eliminamos comillas extra
            "Content-Type": "application/json",},
        body: JSON.stringify(dataRequest),
      });

      if (!response.ok) {
        throw new Error(`Error al actualizar usuario: ${response.statusText}`);
      }
       

      return await response.json();
    } catch (error) {
      console.error("Error en updateUser:", error);
      return null;
    }
  }

  return { updateUser };
}
