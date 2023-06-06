import React, { useEffect, useState } from "react";
import FooterAuth from "../../../components/FooterAuth";
import { ExtButton, ExtContainFirstLevel, ExtInput } from "./styled";

const User = () => {

  const [userEmail, setUserEmail] = useState("");
  const [userNames, setUserNames] = useState("");
  const [userLastNames, setUserLastNames] = useState("");
  const [userTelephone, setUserTelephone] = useState("");
  const [userUsername, setUserUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");
  const [userEqualPasswords, setUserEqualPassword] = useState(false);
  const [domain, setDomain] = useState("");

  /* const {
    userEmail, setUserEmail,
    userNames, setUserNames,
    userLastNames, setUserLastNames,
    userTelephone, setUserTelephone,
    userUsername, setUserUsername,
    userPassword, setUserPassword,
    userPasswordConfirmation, setUserPasswordConfirmation,
    userEqualPasswords, setUserEqualPassword,
    domain
  } = useAuth(); */

  const handleSubmit = async (event) => {
    event.preventDefault();
    //signUpUserAdmin(domain, defaultInfoUserRegister);
  };

  const validateEqualPassword = (pass1, pass2) => {
    if (pass1 === pass2) {
      setUserEqualPassword(true)
    } else {
      setUserEqualPassword(false)
    }
  }

  useEffect(() => {
    validateEqualPassword(userPassword, userPasswordConfirmation)
  }, [userPassword, userPasswordConfirmation])

  let defaultInfoUserRegister = {
    "email": userEmail,
    "username": userUsername,
    "password": userPassword,
    "password_confirmation": userPasswordConfirmation,
    "first_name": userNames,
    "last_name": userLastNames,
    "telephone": userTelephone
  }

  return (
    <ExtContainFirstLevel>
      <div className="content-title-register">
        <h1>Registrar su usuario</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="inp-register"><ExtInput onChange={(e) => { setUserEmail(e.target.value) }} value={userEmail} placeholder="E-Mail" /></div>
          <div className="inp-register"><ExtInput onChange={(e) => { setUserNames(e.target.value) }} value={userNames} placeholder="Nombres" /></div>
          <div className="inp-register"><ExtInput onChange={(e) => { setUserLastNames(e.target.value) }} value={userLastNames} placeholder="Apellidos" /></div>
          <div className="inp-register"><ExtInput onChange={(e) => { setUserTelephone(e.target.value) }} value={userTelephone} placeholder="Teléfono" /></div>
          <div className="inp-register"><ExtInput onChange={(e) => { setUserUsername(e.target.value) }} value={userUsername} placeholder="Usuario" /></div>
          <div className="inp-register"><ExtInput onChange={(e) => { setUserPassword(e.target.value) }} value={userPassword} type="password" placeholder="Contraseña" /></div>
          <div className="inp-register"><ExtInput onChange={(e) => { setUserPasswordConfirmation(e.target.value) }} value={userPasswordConfirmation} type="password" placeholder="Confirmar contraseña" className={`form-control ${!userEqualPasswords ? "input-password-confirmation-error" : "input-password-confirmation-success"}`} /></div>
          <div><ExtButton className="btn-wms btn-register" type={"submit"}>Registrar Usuario</ExtButton></div>
        </form>
      </div>
      <FooterAuth />
    </ExtContainFirstLevel>
  );
}

export default User;