import AudiometryResults from "../models/AudiometryResults";

class addAudiometryResult {
  private AudiometyResults: AudiometryResults[] = []; // Cambiado a string[] para almacenar resultados de audiometría como cadenas
  
  public addAudiometryResult(audiometryResult: AudiometryResults): void {
    this.AudiometyResults.push(audiometryResult);
  }
  public obtenerDatosParaGuardar() {
    return this.AudiometyResults.map((result) => ({
      frecuency: result.frecuency,
      decibel: result.decibel,
      right_ear: result.right_ear,
      left_ear: result.left_ear,
    }));
  }

  async guardarAudimetiria(datos: any): Promise<any> {
    try {
      const response = await fetch('http://localhost:8080/api/audiometria', {
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
    } catch (error) {
      console.error('Error adding audiometry:', error);
      throw error;
    }
  }
}