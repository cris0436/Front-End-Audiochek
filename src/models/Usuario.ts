
class Usuario {
    private _cedula: string;
    private _userName: string;
    private _email: string;
    private _contrasena: string;
    private _ocupacion: string;
    private _fechaNacimiento: Date;
    
    getPassword() {
       return this._contrasena;
    }
    getEmail() {
      return this._email;
    }
    constructor(
      cedula: string,
      userName: string, 
      contrasena: string | undefined, 
      email:string, 
      ocupacion: string, 
      fechaNacimiento: Date) 
      
      {
      if (typeof contrasena === "undefined") {
      // Caso en el que no se proporciona contraseña
      this._cedula = cedula;
      this._userName = userName;
      this._email = email;
      this._ocupacion = ocupacion;
      this.fechaNacimiento = fechaNacimiento; 
      } else {
      // Caso en el que se proporciona contraseña
      this._cedula = cedula;
      this._userName = userName;
      this._contrasena = contrasena;
      this._email = email;
      this._ocupacion = ocupacion;
      this.fechaNacimiento = fechaNacimiento; 
      }
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

        // Getter and Setter for _cedula
      get cedula(): string {
          return this._cedula;
      }
      set cedula(value: string) {
          this._cedula = value;
      }
      // Getter and Setter for _email
      get email(): string {
          return this._email;
      }
      set email(value: string) {
          this._email = value;
      }
  
  }
  export default Usuario;
  