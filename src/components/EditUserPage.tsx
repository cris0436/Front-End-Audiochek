import React from "react";
import { UpdateUserForm } from "./UpdateUserForm.tsx";

const user = {
  username: "Maria123",
  email: "maria@example.com",
  birthdate: "1990-05-20",
  gender: "Femenino",
  occupation: "Docente"
};

export default function EditUserPage() {
  const handleUpdate = () => {
    console.log("Datos actualizados:", );
    // Aquí podrías enviar los datos a tu backend
  };

  return <UpdateUserForm userData={user} onUpdate={handleUpdate} />;
}