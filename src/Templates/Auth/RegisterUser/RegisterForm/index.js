import React, { useEffect } from "react";
import { useAuth } from "../../../../Context/auth-context";
import { signUpUserAdmin } from "../../../../ServicesConsumers/auth";
import './RegisterForm.css';

export const RegisterForm = () => {

    const {
        userEmail, setUserEmail,
        userNames, setUserNames,
        userLastNames, setUserLastNames,
        userTelephone, setUserTelephone,
        userUsername, setUserUsername,
        userPassword, setUserPassword,
        userPasswordConfirmation, setUserPasswordConfirmation,
        userEqualPasswords, setUserEqualPassword,
        domain
    } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        signUpUserAdmin(domain, defaultInfoUserRegister);
    };

    const validateEqualPassword = (pass1, pass2) => {
        if (pass1 === pass2) {
            setUserEqualPassword(true)
        } else {
            setUserEqualPassword(false)
        }
    }

    useEffect(() => {
        validateEqualPassword(userPassword, userPasswordConfirmation)
    }, [userPassword, userPasswordConfirmation])

    let defaultInfoUserRegister = {
        "email": userEmail,
        "username": userUsername,
        "password": userPassword,
        "password_confirmation": userPasswordConfirmation,
        "first_name": userNames,
        "last_name": userLastNames,
        "telephone": userTelephone
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inp-register"><input onChange={(e) => { setUserEmail(e.target.value) }} value={userEmail} placeholder="E-Mail" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserNames(e.target.value) }} value={userNames} placeholder="Nombres" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserLastNames(e.target.value) }} value={userLastNames} placeholder="Apellidos" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserTelephone(e.target.value) }} value={userTelephone} placeholder="Teléfono" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserUsername(e.target.value) }} value={userUsername} placeholder="Usuario" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserPassword(e.target.value) }} value={userPassword} type="password" placeholder="Contraseña" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserPasswordConfirmation(e.target.value) }} value={userPasswordConfirmation} type="password" placeholder="Confirmar contraseña" className={`form-control ${!userEqualPasswords ? "input-password-confirmation-error" : "input-password-confirmation-success"}`} /></div>
                <div><button className="btn-wms btn-register" type={"submit"}>Registrar Usuario</button></div>
            </form>

            <div className="footer-register">
                <span>Más información</span> • <span>API</span> • <span>Migraciones</span> • <span>Integraciones</span> • <span>Sugerencias y Recomendaciones</span> • <span>Privacidad y Seguridad</span>
            </div>
        </div>
    )
}