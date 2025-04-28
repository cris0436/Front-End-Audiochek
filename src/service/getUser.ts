import Usuario from '../models/Usuario.ts';


export async function getUser(userName: string): Promise<Usuario> {

    const apiUrl = import.meta.env.VITE_API_URL;
    console.log("API URL:", apiUrl);
    try {
   /* const response = await fetch(`${apiUrl}/users/${userName}`);
    const data = await response.json();
    const fetchedUserName = data.username || "DefaultUser"; 
    const ocupacion = data.ocupacion?.name || "Sin ocupación"; 
    const fechaNacimiento = data.ocupacion?.birthdate || undefined;
    const usuario = new Usuario(fetchedUserName, undefined, ocupacion, fechaNacimiento);*/
    const usuario = {
      username: "Maria123",
      email: "maria@example.com",
      birthdate: "1990-05-20",
      gender: "Femenino",
      occupation: "Docente"
    };
    const usuario1 = new Usuario(
      usuario.username,
      undefined,
      usuario.email, 
      usuario.occupation, 
      new Date(usuario.birthdate))
      
    localStorage.setItem("user", JSON.stringify(usuario1));
    localStorage.setItem("email",JSON.stringify(usuario1.email)) // Guardar el usuario en localStorage
    return usuario1;
    
    }
    catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }


  }



