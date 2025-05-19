import Audimetria from "../models/Audimetria";
import {useSession} from "../service/getSession";


export  function guardarAudimetiriaDb (){
  const apiUrl = import.meta.env.VITE_API_URL;
  const { getSession } = useSession();
  const addAudiometry = async (datos: Audimetria) => {
      try {
        const user = await getSession();
        if (!user) {
          throw new Error("No se pudo obtener la sesión del usuario");
        }
        const userId = user["id"]; // Asegúrate de que el ID del usuario esté disponible
        const audimetriaData={
          user_id:userId,
          decibel_frequencies: datos.getAudiometryResults().map((result) => ({
            frequency: result.getFrequency(),
            decibel: result.getDecibel(),
            ear: result.getEar(),
            is_ear: result.getIsEar(),
          })),
        }
        console.log("Datos de la audiometría:", audimetriaData);
        // Realiza la solicitud POST a la API
         const token = localStorage.getItem("token");
        const response = await fetch(`${apiUrl}/audiometries/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(audimetriaData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

      return await response.json();
        
      } catch (error) {
        console.error('Error adding audiometry:', error);
        throw error;
      }
  }
  return{ addAudiometry}
  }
