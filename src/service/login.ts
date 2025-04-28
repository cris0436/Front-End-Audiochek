// src/services/authService.ts

/// <reference types="vite/client" />

export async function login(username: string, password: string): Promise<any> {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      console.log("API URL:", apiUrl);
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: username, password }),
      });
  
      if (!response.ok) {
        throw new Error("Login failed");
      }
      localStorage.setItem("token", response.headers.get("Authorization") || "");
      return await response.json();
    } catch (error) {
      console.error("Error authenticating user:", error);
      throw error;
    }
  }
  