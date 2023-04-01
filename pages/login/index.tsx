import React, { useState } from "react";
import FooterAuth from "../../components/FooterAuth";
import { ExtContainFirstLevel, Title } from "./styled";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    //loginUser(username, password, setUser, navigate);
  };

  const onLoginUser = (event) => {
    //console.log(event.target.value);
    setUsername(event.target.value);
  }

  const onLoginPass = (event) => {
    setPassword(event.target.value);
  }

  return (
    <ExtContainFirstLevel>
      <div>
        <Title>W Machine</Title>
        <h2>Iniciar Sesion</h2>
      </div>
      <div className="contain-form-login">
        <form onSubmit={handleSubmit}>
          <div className="inp-login"><input onChange={onLoginUser} value={username} placeholder="usuario" className="form-control" /></div>
          <div className="inp-login"><input onChange={onLoginPass} value={password} placeholder="contraseña" className="form-control" type={"password"} /></div>
          <div className="contain-check-remember-cerdentials"><input className="checkbox-remember-credentials" type="checkbox" /> <p>Recordar credenciales</p></div>
          <div><button className="btn-wms btn-login" type={"submit"}>Iniciar Sesion</button></div>
        </form>
        <div><button className="btn-wms btn-login">¿Olvidaste la contraseña?</button></div>
        <FooterAuth />
      </div>
    </ExtContainFirstLevel>
  );
}

export default Login;