import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {getUser}  from "../service/getUser";
import { updateUser } from "../service/UpdateUser";
import Usuario from "../models/Usuario";
type Inputs = {
  username: string;
  email: string;
  birthdate: string;
  gender: string;
  occupation: string;
};
export function useEditUserVM() {
  
    const getAutenticateUser = async () => {
        let username: string = localStorage.getItem("email") || "";
        const user = await getUser(username);
        const userInput = <Inputs>{
            username: user.userName,
            email: user.email,
            birthdate: user.fechaNacimiento.toString(),
            gender: user.genero,
            occupation: user.ocupacion,
        };
        return userInput;
    }

    const sendUserData = async (data: Usuario) => {
        const user = data;
        console.log("Usuario actualizado:", user);
        await updateUser(data.userName, user);
        if (user) {
            // Aquí puedes realizar la lógica para actualizar el usuario
            console.log("Usuario actualizado:", user);
        } else {
            console.log("Usuario no encontrado");
        }
    }

    return { 
        getAutenticateUser, 
        sendUserData };


}