import React from "react";
import './SignUp.css';

export const SignUp = (props) => {
    return (
        <div className={"content-register-user"}>
            {props.children}
        </div>
    )
}