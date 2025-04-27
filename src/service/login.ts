// src/services/authService.ts

export async function login(username: string, password: string): Promise<any> {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: username, password }),
      });
  
      if (!response.ok) {
        throw new Error("Login failed");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error authenticating user:", error);
      throw error;
    }
  }
  