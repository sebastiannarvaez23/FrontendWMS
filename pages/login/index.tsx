import React, { useState } from "react";
import FooterAuth from "../../components/FooterAuth";
import { CheckRememberCredential, ContainCheckRememberCredential, ExtButton, ExtContainFirstLevel, ExtInput, Title } from "./styled";

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
      <div>
        <form onSubmit={handleSubmit}>
          <div className="inp-login"><ExtInput onChange={onLoginUser} value={username} placeholder="usuario" /></div>
          <div className="inp-login"><ExtInput onChange={onLoginPass} value={password} placeholder="contraseña" type={"password"} /></div>
          <ContainCheckRememberCredential>
            <CheckRememberCredential type="checkbox" />
            <p>Recordar credenciales</p>
          </ContainCheckRememberCredential>
          <div><ExtButton type={"submit"}>Iniciar Sesion</ExtButton></div>
        </form>
        <div><ExtButton>¿Olvidaste la contraseña?</ExtButton></div>
      </div>
      <FooterAuth />
    </ExtContainFirstLevel>
  );
}

export default Login;