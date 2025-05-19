import { useNavigate } from "react-router-dom";

export function useSession() {
  const navigate = useNavigate();

  async function getSession(): Promise<unknown> {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const token = localStorage.getItem("token");
        console.log("Token:", token);
      if (!token) {
        console.error("No se encontró el token. Redirigiendo...");
        navigate("/"); // Manteniendo el uso correcto de React Router
        return null;
      }

      const response = await fetch(`${apiUrl}/users/get-session/`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token.replace(/"/g, '')}`, // Eliminamos comillas extra
            "Content-Type": "application/json",
        },
        });

        console.log("Response:", response);

      if (!response.ok) {
        navigate("/"); // Manteniendo el uso correcto de React Router
        localStorage.removeItem("token");
        throw new Error(`Error al obtener la sesión: ${response.statusText}`);
        
      }

      return await response.json();
    } catch (error) {

      console.error("Error en getSession:", error);
      throw error;
    }
  }

  return { getSession };
}
