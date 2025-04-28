import Usuario from "../models/Usuario";



export async function updateUser(username: string, data: Usuario) {
    try {

        const apiUrl = import.meta.env.VITE_API_URL;
        /*
        const response = await fetch(`${apiUrl}/api/persons/${username}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        });
    
        if (!response.ok) {
        throw new Error("Error updating user data");
        }*/
       localStorage.setItem("user", JSON.stringify(data));
       localStorage.setItem("email", JSON.stringify(data.getEmail())); // Guardar el usuario en localStorage
    
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
}