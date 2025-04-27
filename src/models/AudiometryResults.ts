
class AudimeetryResults {
    private _frecuency: string;
    private _decibel: number;
    private _right_ear: boolean;
    private _left_ear: boolean;
    private _escucho: boolean ;
    
    constructor(frecuency: string, decibel: number, right_ear: boolean, left_ear: boolean, escucho: boolean) {
        this._frecuency = frecuency;
        this._decibel = decibel;
        this._right_ear = right_ear;
        this._left_ear = left_ear;
        this._escucho = escucho;
    }

    public get frecuency(): string {
        return this._frecuency;
    }

    public set frecuency(value: string) {
        this._frecuency = value;
    }

    public get decibel(): number {
        return this._decibel;
    }

    public set decibel(value: number) {
        this._decibel = value;
    }

    public get right_ear(): boolean {
        return this._right_ear;
    }

    public set right_ear(value: boolean) {
        this._right_ear = value;
    }

    public get left_ear(): boolean {
        return this._left_ear;
    }

    public set left_ear(value: boolean) {
        this._left_ear = value;
    }


}
export default AudimeetryResults;