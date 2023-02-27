import React, { Fragment } from "react";
import { Signin } from "./Signin";
import { TitleLogin } from './LoginTitle';
import { FormLogin } from './LoginForm';
import './Login.css';

export const Login = () => {
  return (
    <Fragment>
      <Signin>
        <TitleLogin />
        <FormLogin />
      </Signin>
    </Fragment>
  );
}