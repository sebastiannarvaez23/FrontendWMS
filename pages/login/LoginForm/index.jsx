import React, { useState } from "react";

const LoginForm = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const onLoginUser = (event) => {
    setUsername(event.target.value);
  }

  const onLoginPass = (event) => {
    setPassword(event.target.value);
  }

  return (
    <>
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
    </>
  );
}

export default LoginForm;