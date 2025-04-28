import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {getUser}  from "../service/getUser";
import { updateUser } from "../service/updateUser";
import Usuario from "../models/Usuario";
type Inputs = {
  username: string;
  email: string;
  birthdate: string;
  gender: string;
  occupation: string;
};
type Inputs2={
    id : number;
    username: string;
    ocupation: string;
    person: {
        name: string;
        email: string;
        role: string | null;
        birth_date: string;
    }
}

export function useEditUserVM() {
  
    const getAutenticateUser = async () => {
        let user: string = localStorage.getItem("user") || "";
        
        /*const user = await getUser(username);
       */
        const us =JSON.parse(user) as Inputs2;
        console.log(typeof us);
        return us;
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
