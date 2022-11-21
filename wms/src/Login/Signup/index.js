import React from "react";
import './Signup.css';
function Signup(props) {
    return (
        <div className={`content-login ${props.showCredentialError && 'content-login-credential-error'}`}>
            {props.children}
        </div>
    );
}

export {Signup}