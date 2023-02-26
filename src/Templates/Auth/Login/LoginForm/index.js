import React from "react";
import './LoginForm.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/auth-context";
import { loginUser } from "../../../../ServicesConsumers/auth";

export const FormLogin = (props) => {
  
  const navigate = useNavigate();

  const {
    username, setUsername,
    password, setPassword,
    setUser
  } = useAuth();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser(username, password, setUser, navigate);
  };

  function cleanForm() {
    setUsername('');
    setPassword('');
    props.setShowCredentialError(false);
  }

  const onLoginUser = (event) => {
    //console.log(event.target.value);
    setUsername(event.target.value);
  }

  const onLoginPass = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inp-login"><input onChange={onLoginUser} value={username} placeholder="usuario" className="form-control" /></div>
        <div className="inp-login"><input onChange={onLoginPass} value={password} placeholder="contraseña" className="form-control" type={"password"} /></div>
        {props.children}
        <div><button className="btn btn-login" type={"submit"}>Iniciar Sesion</button></div>
      </form>
      <div><button onClick={cleanForm} className="btn btn-login">Limpiar</button></div>
      <div className="contain-contact-manager"><a href="https://wa.me/573106418293" target={"_blank"}>Contactar al administrador</a></div>
      <div className="contain-contact-manager"><a href="http://localhost:8000/admin/" target={"_blank"}>Gestionar Usuarios</a></div>
    </div>
  );
}