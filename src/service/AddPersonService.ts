// src/services/personService.ts
import Usuario  from "../models/Usuario";

export default async function registerPerson(data: Usuario ): Promise<any> {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      console.log("API URL:", apiUrl);
/*
      const response = await fetch(`${apiUrl}/api/persons`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Error registrando persona");
      }
  
      return await response.json();*/
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.error("Error adding person:", error);
      throw error;
    }
  }
  