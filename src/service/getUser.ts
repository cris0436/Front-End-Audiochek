import Usuario from '../models/Usuario.ts';


export async function getUser(userName: string): Promise<Usuario> {

    const apiUrl = import.meta.env.VITE_API_URL;
    console.log("API URL:", apiUrl);
    try {
   const response = await fetch(`${apiUrl}/users/${userName}`);
    const data = await response.json();
    const fetchedUserName = data.username || "DefaultUser"; 
    const email = data.email || "Sin email";
    const ocupacion = data.ocupacion?.name || "Sin ocupación"; 

    const fechaNacimiento = data.ocupacion?.birthdate || undefined;
    const usuario = new Usuario(
      fetchedUserName, 
      undefined,
      email,
      ocupacion,
      fechaNacimiento);
   
      
    localStorage.setItem("user", JSON.stringify(usuario));
    localStorage.setItem("email",JSON.stringify(usuario.getEmail())) // Guardar el usuario en localStorage
    return usuario;
    
    }
    catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }


  }



