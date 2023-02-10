import React from "react";
import './Signup.css';

export const Signup = (props) => {
    return (
        <div className={`content-login ${props.showCredentialError && 'content-login-credential-error'}`}>
            {props.children}
        </div>
    );
}