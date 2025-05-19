import React from "react";
import { UpdateUserForm } from "./UpdateUserForm";
import { UpdateUserVM } from "../../viewmodels/useEditUserVM";
import Usuario from "../../models/Usuario";
import { useEffect, useState } from "react";

type Inputs = {
  cedula: string;
  password: string;
  username: string;
  email: string;
  birthdate: string;
  gender: string;
  occupation: string;
};
function EditUserPage() {
  const [user, setUser] = useState<Inputs | null>(null);
  const { updateUserVM, getSessionVM } = UpdateUserVM();
  useEffect(() => {
    getSessionVM().then((data) => {
      const getUs :Inputs = {
        cedula: data.person.cedula || "", // Ensure cedula is provided
        username: data.username,
        email: data.person.email,
        password: "",
        birthdate: data.person.birth_date,
        occupation: data.ocupation,
        gender: ""
      }
      setUser(getUs);
    });
  }, []);
  

  const handleUpdate = (data: Inputs) => {
    const UpdateUser = new Usuario(
      data.cedula,
      data.username,
      data.password, 
      data.email,
      data.occupation,
      new Date(data.birthdate)
    );
    updateUserVM(UpdateUser);
  };

  if (!user) return <div>Cargando...</div>;

  return <UpdateUserForm userData={user} onUpdate={handleUpdate} />;
}
export default EditUserPage;