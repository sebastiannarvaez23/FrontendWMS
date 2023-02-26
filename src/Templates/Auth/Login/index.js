import React, { Fragment } from "react";
import { Signup } from "./Signup";
import { TitleLogin } from './LoginTitle';
import { FormLogin } from './LoginForm';
import './Login.css';

export const Login = () => {
  return (
    <Fragment>
      <Signup>
        <TitleLogin />
        <FormLogin />
      </Signup>
    </Fragment>
  );
}