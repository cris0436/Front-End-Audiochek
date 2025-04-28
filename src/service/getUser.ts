import Usuario from '../models/Usuario.ts';


export async function getUser(userName: string): Promise<Usuario> {

    const apiUrl = import.meta.env.VITE_API_URL;
    try { 
    
  const user = localStorage.getItem("user");
  
  if (!user) {
      throw new Error("User not found in localStorage");
  }

  return JSON.parse(user) as Usuario;
    
    }
    catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }


  }



