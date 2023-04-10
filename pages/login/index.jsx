// React
import React, { useState, useEffect } from "react";

// Redux
import { addCredential } from "../../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";

// Components
import {
  CheckRememberCredential,
  ContainCheckRememberCredential,
  ExtButton, ExtContainFirstLevel,
  ExtInput,
  Title
} from "./styled";
import FooterAuth from "../../components/FooterAuth";

const Login = () => {

  const credential = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addCredential({ username, password }));
    console.log(credential);
    //loginUser(username, password, setUser, navigate);
  };

  const onLoginUser = (event) => {
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