// src/services/personService.ts

/// <reference types="vite/client" />
import Usuario  from "../models/Usuario";

export default async function registerPerson(data: Usuario ): Promise<any> {
    try {
      
      const dataRequest = new URLSearchParams();
      dataRequest.append("name", data.userName);
      dataRequest.append("email", data.getEmail());
      dataRequest.append("birth_date", "1990-01-01");
      dataRequest.append("username", data.userName);
      dataRequest.append("password", data.getPassword());
      dataRequest.append("ocupation", data.ocupacion);
      dataRequest.append("rol", "user");
      
      console.log(JSON.stringify(dataRequest));
      const apiUrl = import.meta.env.VITE_API_URL;
      console.log("API URL:", apiUrl);

      const response = await fetch(`${apiUrl}/users`, {
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
  
