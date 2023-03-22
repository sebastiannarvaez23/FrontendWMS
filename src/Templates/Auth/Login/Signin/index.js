import React from "react";
import './Signin.css';
import { useAuth } from "../../../../Context/auth-context";

export const Signin = (props) => {

    const {
        showCredentialError
      } = useAuth();

    return (
        <div className={`App content-login ${showCredentialError && 'content-login-credential-error'}`}>
            {props.children}
        </div>
    );
}