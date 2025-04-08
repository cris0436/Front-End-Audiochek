// Clase Audimetria (modificada)
class Audimetria {
    private _db_derecha: { [key: string]: number } = {};
    private _db_izquierda: { [key: string]: number } = {};
  
    constructor() {}
  
    guardarRespuesta(frecuencia: string, canal: "izquierda" | "derecha", db: number) {
      if (canal === "izquierda") {
        this._db_izquierda[frecuencia] = db;
      } else {
        this._db_derecha[frecuencia] = db;
      }
    }
  
    obtenerListasPorCanal(): { izquierda: { [key: string]: number }, derecha: { [key: string]: number } } {
      return { izquierda: this._db_izquierda, derecha: this._db_derecha };
    }

    obtenerPromedioPorFrecuencia(): { [key: string]: number } {
        const frecuencias = Object.keys(this._db_izquierda); // Obtener las frecuencias guardadas
        let promedios: { [key: string]: number } = {};
    
        frecuencias.forEach((frecuencia) => {
          const dbIzquierda = this._db_izquierda[frecuencia];
          const dbDerecha = this._db_derecha[frecuencia];
    
          // Calcular el promedio entre los dos canales
          const promedio = (dbIzquierda + dbDerecha) / 2;
    
          // Guardamos el promedio para cada frecuencia
          promedios[frecuencia] = promedio;
        });
    
        return promedios;
      }
      obtenerDatosParaGuardar(): object {
        return {
          derecha: this._db_derecha,
          izquierda: this._db_izquierda
        };
      }
      restaurarDesdeDatos(datos: { derecha: { [key: string]: number }, izquierda: { [key: string]: number } }) {
        this._db_derecha = datos.derecha || {};
        this._db_izquierda = datos.izquierda || {};
      }
      
  }
export default Audimetria  