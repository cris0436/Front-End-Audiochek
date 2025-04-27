// src/services/personService.ts

export type PersonData = {
    username: string;
    email: string;
    birthdate: string;
    gender: string;
    occupation: string;
  };
  
export default async function registerPerson(data: PersonData): Promise<any> {
    try {
      const response = await fetch("http://localhost:8080/api/persons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Error registrando persona");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error adding person:", error);
      throw error;
    }
  }
  