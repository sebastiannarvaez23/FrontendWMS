import React, { Fragment } from "react";
import { Signup } from "./Signup";
import { TitleLogin } from './LoginTitle';
import { FormLogin } from './LoginForm';
import './Login.css';
import { useAuth } from "../../../Context/auth-context";

export const Login = () => {
  const {
    showCredentialError
  } = useAuth();

  return (
    <Fragment>
      <Signup showCredentialError={showCredentialError}>
        <TitleLogin />
        <FormLogin />
      </Signup>
    </Fragment>
  );
}