import React, { Fragment } from "react";
import Signin from "./Signin";
import LoginTitle from "./LoginTitle";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Fragment>
      <Signin>
        <LoginTitle />
        <LoginForm />
      </Signin>
    </Fragment>
  );
}

export default Login; 