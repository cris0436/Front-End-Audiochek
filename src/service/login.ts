// src/services/authService.ts

/// <reference types="vite/client" />
import Usuario from "../models/Usuario";

export async function login(username: string, password: string): Promise<any> {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      console.log("API URL:", apiUrl);
      const response = await fetch(`${apiUrl}/users/auth/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          "username": username,
          "password": password }),
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
  