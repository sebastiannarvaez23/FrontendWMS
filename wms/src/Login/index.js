import React from "react";
import { Signup } from "./Signup";
import { TitleLogin } from './LoginTitle';
import { FormLogin } from './LoginForm';
import { CredentialError } from './LoginAlerts/CredentialError';
import './Login.css';

export const Login = () => {
    const [showCredentialError, setShowCredentialError] = React.useState(false);
    
    return (
      <div className="App">
        <Signup
        showCredentialError={showCredentialError}>
          <TitleLogin />
          <FormLogin
            showCredentialError={showCredentialError}
            setShowCredentialError={setShowCredentialError}
          >
            {showCredentialError && <CredentialError />}
          </FormLogin>
        </Signup>
      </div>
    );
}