import React from "react";
import './CredentialError.css';

export const CredentialError = ({showCredentialError}, {setShowCredentialError}) => {
    
    return (
        <div className="content-alert-credential-error">
            <div className="alert alert-danger d-flex align-items-center" role="alert">
                <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use href="#exclamation-triangle-fill" /></svg>
                <div>
                    Las credenciales que estás ingresando son erroneas. Si el error persiste Comuniquese con el administrador.
                </div>
            </div>
        </div>
    );
}