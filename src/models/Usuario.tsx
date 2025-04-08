class Usuario {
    private _userName: string;
    private _contrasena: string;
    private _ocupacion: string;
    private _fechaNacimiento: Date;
  
    constructor(userName: string, contrasena: string, ocupacion: string, fechaNacimiento: Date) {
      this._userName = userName;
      this._contrasena = contrasena;
      this._ocupacion = ocupacion;
      this.fechaNacimiento = fechaNacimiento; // Uso del setter para validar la fecha
    }
  
    // Getter para el nombre de usuario
    get userName(): string {
      return this._userName;
    }
  
    // Setter para el nombre de usuario
    set userName(nuevoUserName: string) {
      this._userName = nuevoUserName;
    }
  
    // Getter para la contraseña
    get contrasena(): string {
      return this._contrasena;
    }
  
    // Setter para la contraseña
    set contrasena(nuevaContrasena: string) {
      this._contrasena = nuevaContrasena;
    }
  
    // Getter para la ocupación
    get ocupacion(): string {
      return this._ocupacion;
    }
  
    // Setter para la ocupación
    set ocupacion(nuevaOcupacion: string) {
      this._ocupacion = nuevaOcupacion;
    }
  
    // Getter para la fecha de nacimiento
    get fechaNacimiento(): Date {
      return this._fechaNacimiento;
    }
  
    // Setter para la fecha de nacimiento con validación
    set fechaNacimiento(nuevaFechaNacimiento: Date) {
      const fechaActual = new Date();
      if (nuevaFechaNacimiento < fechaActual) {
        this._fechaNacimiento = nuevaFechaNacimiento;
      } else {
        throw new Error("La fecha de nacimiento debe ser anterior a la fecha actual.");
      }
    }
  }
  