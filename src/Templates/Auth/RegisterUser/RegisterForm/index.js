import React from "react";
import { useAuth } from "../../../../Context/auth-context";

export const RegisterForm = () => {

    const {
        userEmail, setUserEmail,
        userNames, setUserNames,
        userLastNames, setUserLastNames,
        userTelephone, setUserTelephone,
        userUsername, setUserUsername,
        userPassword, setUserPassword,
        userPasswordConfirmation, setUserPasswordConfirmation,
        userEqualPasswords, setUserEqualPassword
    } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inp-register"><input onChange={(e) => { setUserEmail(e.target.value) }} value={userEmail} placeholder="E-Mail" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserNames(e.target.value) }} value={userNames} placeholder="Nombres" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserLastNames(e.target.value) }} value={userLastNames} placeholder="Apellidos" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserTelephone(e.target.value) }} value={userTelephone} placeholder="Teléfono" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserUsername(e.target.value) }} value={userUsername} placeholder="Usuario" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserPassword(e.target.value) }} value={userPassword} placeholder="Contraseña" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setUserPasswordConfirmation(e.target.value) }} value={userPasswordConfirmation} type="password" placeholder="Confirmar contraseña" className="form-control" /></div>
                <div><button className="btn-wms btn-register" type={"submit"}>Registrar Usuario</button></div>
            </form>

            <div className="footer-register">
                <span>Más información</span> • <span>API</span> • <span>Migraciones</span> • <span>Integraciones</span> • <span>Sugerencias y Recomendaciones</span> • <span>Privacidad y Seguridad</span>
            </div>
        </div>
    )
}