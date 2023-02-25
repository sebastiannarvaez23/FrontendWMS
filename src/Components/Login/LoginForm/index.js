import React, { useState } from "react";
import axios from 'axios';
import './LoginForm.css';
import { useNavigate } from "react-router-dom";
import { API } from "../../../ServicesConsumers/api/base";
import Cookies from 'js-cookie';

export const FormLogin = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(API + "registration/users/login/",  { "username": username, "password": password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }, { withCredentials: true })
      .then((response) => {
        const { data } = response;
        if (response.data.status === 200) {
          Cookies.set('token', response.data.token, { httpOnly: true });
          navigate("/picking");
        }
      })
      .catch(err => console.log(err))
      .finally(() => { })
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
        {error && <div>{error}</div>}
      </form>
      <div><button onClick={cleanForm} className="btn btn-login">Limpiar</button></div>
      <div className="contain-contact-manager"><a href="https://wa.me/573106418293" target={"_blank"}>Contactar al administrador</a></div>
      <div className="contain-contact-manager"><a href="http://localhost:8000/admin/" target={"_blank"}>Gestionar Usuarios</a></div>
    </div>
  );
}