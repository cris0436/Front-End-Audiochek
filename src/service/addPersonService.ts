// src/services/personService.ts

/// <reference types="vite/client" />
import Usuario  from "../models/Usuario";

export default async function registerPerson(data: Usuario ): Promise<any> {
    try {
      const dataRequest ={
        cedula: data.cedula,
        name: data.userName,
        email: data.getEmail(),
        birth_date: data.fechaNacimiento,
        username: data.userName,
        password: data.getPassword(),
        ocupation: data.ocupacion,
        rol: "user",
      }
    
      
      const apiUrl = import.meta.env.VITE_API_URL;

      const response = await fetch(`${apiUrl}/users/`, {
        method: "POST",
        
        headers: {
          "Content-Type": "application/json" },
        body: JSON.stringify(dataRequest),
      });
  
      if (!response.ok) {
        throw new Error("Error registrando persona");
      }
      localStorage.setItem("user", JSON.stringify(data));
      return await response.json();
      
    } catch (error) {
      console.error("Error adding person:", error);
      throw error;
    }
  }
  
