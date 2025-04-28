import Audimetria from "../models/Audimetria";
import AudiometryResults from "../models/AudiometryResults";


export default async  function guardarAudimetiria (datos: Audimetria): Promise<any> {
    const apiUrl = import.meta.env.VITE_API_URL;
    try {/*
      const response = await fetch(`${apiUrl}/audiometria`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();

      */
    } catch (error) {
      console.error('Error adding audiometry:', error);
      throw error;
    }
  }
