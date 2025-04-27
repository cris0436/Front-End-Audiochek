import Usuario from '../models/Usuario.ts';

class GetUser {
  async getUser(id: string): Promise<Usuario> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    
    // Extraer y transformar los datos necesarios para crear el objeto Usuario
    const userName = data.username || "DefaultUser"; // Ajusta según el JSON de la API
    const ocupacion = data.ocupacion?.name || "Sin ocupación"; // Ajusta según el JSON de la API
    const fechaNacimiento = data.ocupacion?.birthdate || undefined; // Ajusta según el JSON de la API

    // Crear instancia de Usuario
    const usuario = new Usuario(userName,undefined, ocupacion, fechaNacimiento);

    return usuario;
  }
}
export default GetUser;


