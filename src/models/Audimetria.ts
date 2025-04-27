import AudimeetryResults from "./AudiometryResults" // Clase Audimetria (modificada)
class Audimetria {
    private AudiometyResults: AudimeetryResults[] = []; // Cambiado a string[] para almacenar resultados de audiometría como cadenas
    
    public addAudiometryResult(audiometryResult: AudimeetryResults): void {
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

    
  }
export default Audimetria  