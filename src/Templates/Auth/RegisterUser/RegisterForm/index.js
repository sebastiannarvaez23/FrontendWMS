import React from "react";

export const RegisterForm = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inp-register"><input onChange={""} value={""} placeholder="E-Mail" className="form-control" /></div>
                <div className="inp-register"><input onChange={""} value={""} placeholder="Nombres" className="form-control" /></div>
                <div className="inp-register"><input onChange={""} value={""} placeholder="Apellidos" className="form-control" /></div>
                <div className="inp-register"><input onChange={""} value={""} placeholder="Teléfono" className="form-control" /></div>
                <div className="inp-register"><input onChange={""} value={""} placeholder="Usuario" className="form-control" /></div>
                <div className="inp-register"><input onChange={""} value={""} placeholder="Contraseña" className="form-control" /></div>
                <div className="inp-register"><input onChange={""} value={""} type="password" placeholder="Confirmar contraseña" className="form-control" /></div>
                <div><button className="btn-wms btn-register" type={"submit"}>Registrar Usuario</button></div>
            </form>

            <div className="footer-register">
                <span>Más información</span> • <span>API</span> • <span>Migraciones</span> • <span>Integraciones</span> • <span>Sugerencias y Recomendaciones</span> • <span>Privacidad y Seguridad</span>
            </div>
        </div>
    )
}