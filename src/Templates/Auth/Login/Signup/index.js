import React from "react";
import './Signup.css';
import { useAuth } from "../../../../Context/auth-context";

export const Signup = (props) => {

    const {
        showCredentialError
      } = useAuth();

    return (
        <div className={`App content-login ${showCredentialError && 'content-login-credential-error'}`}>
            {props.children}
        </div>
    );
}