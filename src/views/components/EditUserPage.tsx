import React from "react";
import { UpdateUserForm } from "../../viewmodels/UpdateUserForm";
import { useEditUserVM } from "../../viewmodels/useEditUserVM";
import Usuario from "../../models/Usuario";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  birthdate: string;
  gender: string;
  occupation: string;
};
function EditUserPage() {
  const [user, setUser] = useState<Inputs | null>(null);
  const { getAutenticateUser, sendUserData } = useEditUserVM();

  useEffect(() => {
    getAutenticateUser().then((data) => {
      console.log("Usuario desde backend:", data); 
      const getUs :Inputs = {
        username: data.username,
        email: data.person.email,
        birthdate: data.person.birth_date,
        occupation: data.ocupation,
        gender: ""
      }
      setUser(getUs);
    });
  }, []);
  

  const handleUpdate = (data: Inputs) => {
    const UpdateUser = new Usuario(
      data.username,
      undefined, 
      data.email,
      data.occupation,
      new Date(data.birthdate)
    );
    sendUserData(UpdateUser);
  };

  if (!user) return <div>Cargando...</div>;

  return <UpdateUserForm userData={user} onUpdate={handleUpdate} />;
}
export default EditUserPage;