
class AudiometryResults {
    private frequency: number;
    private decibel: number;
    private ear: boolean;
    private isEar: boolean; // Convención de nombres en camelCase
    
    constructor(frecuency: number, decibel: number, ear: boolean, isEar: boolean) {
        this.frequency = frecuency;
        this.decibel = decibel;
        this.ear = ear;
        this.isEar = isEar;
    }

    // Getters
    public getFrequency(): number {
        return this.frequency;
    }

    public getDecibel(): number {
        return this.decibel;
    }

    public getEar(): boolean {
        return this.ear;
    }

    public getIsEar(): boolean {
        return this.isEar;
    }

    // Setters
    public setFrequency(frequency: number): void {
        this.frequency = frequency;
    }

    public setDecibel(decibel: number): void {
        this.decibel = decibel;
    }

    public setEar(ear: boolean): void {
        this.ear = ear;
    }

    public setIsEar(isEar: boolean): void {
        this.isEar = isEar;
    }
}

export default AudiometryResults;
