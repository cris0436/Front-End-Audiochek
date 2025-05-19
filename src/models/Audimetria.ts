import AudimeetryResults from "./AudiometryResults" // Clase Audimetria (modificada)
class Audimetria {
    private AudiometyResults: AudimeetryResults[] = []; // Cambiado a string[] para almacenar resultados de audiometría como cadenas
    
    public addAudiometryResult(audiometryResult: AudimeetryResults): void {
      this.AudiometyResults.push(audiometryResult);
    }
    
    public getAudiometryResults(): AudimeetryResults[] {
      return this.AudiometyResults;
    }

    
  }
export default Audimetria  