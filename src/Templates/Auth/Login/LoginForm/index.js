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

  const onLoginUser = (event) => {
    //console.log(event.target.value);
    setUsername(event.target.value);
  }

  const onLoginPass = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div className="contain-form-login">
      <form onSubmit={handleSubmit}>
        <div className="inp-login"><input onChange={onLoginUser} value={username} placeholder="usuario" className="form-control" /></div>
        <div className="inp-login"><input onChange={onLoginPass} value={password} placeholder="contraseña" className="form-control" type={"password"} /></div>
        <div className="contain-check-remember-cerdentials"><input className="checkbox-remember-credentials" type="checkbox" /> <p>Recordar credenciales</p></div>
        {props.children}
        <div><button className="btn-wms btn-login" type={"submit"}>Iniciar Sesion</button></div>
      </form>
      <div><button className="btn-wms btn-login">¿Olvidaste la contraseña?</button></div>
      <div className="footer-login">
        <span>Más información</span> • <span>API</span> • <span>Migraciones</span> • <span>Integraciones</span> • <span>Recomendaciones</span> • <span>Privacidad y Seguridad</span>
      </div>
    </div>
  );
}