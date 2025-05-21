import AudimeetryResults from "./AudiometryResults"; // Clase Audiometría

class Audimetria {
    private audiometryResults: Set<AudimeetryResults> = new Set(); // Set para evitar duplicados

    public addAudiometryResult(audiometryResult: AudimeetryResults): void {
        this.audiometryResults.add(audiometryResult); // Agregar sin permitir duplicados
    }

    public getAudiometryResults(): AudimeetryResults[] {
        return Array.from(this.audiometryResults); // Convertir Set a Array si necesitas iterarlo
    }
}

export default Audimetria;