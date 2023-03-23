import React from "react";
import "./RegisterForm.css";

export const RegisterForm = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <div className="contain-form-register">
            <form onSubmit={handleSubmit}>
                <div className="inp-register"><input onChange={""} value={""} placeholder="NIT" className="form-control" /></div>
                <div className="inp-register"><input onChange={""} value={""} placeholder="Nombre" className="form-control" /></div>
                <div className="inp-register"><input onChange={""} value={""} placeholder="Dirección" className="form-control" /></div>
                <div className="inp-register">
                    <select onChange={""} value={""} placeholder="Pais" className="form-control">
                        <option>- Seleccione país -</option>
                    </select>
                </div>
                <div className="inp-register">
                    <select onChange={""} value={""} placeholder="Estado/Región" className="form-control">
                        <option>- Seleccione región/estado -</option>
                    </select>
                </div>
                <div className="inp-register">
                    <select onChange={""} value={""} placeholder="Ciudad" className="form-control">
                        <option>- Seleccione ciudad -</option>
                    </select>
                </div>
                <div><button className="btn-wms btn-register" type={"submit"}>Registrar empresa</button></div>
            </form>

            <div className="footer-register">
                <span>Más información</span> • <span>API</span> • <span>Migraciones</span> • <span>Integraciones</span> • <span>Sugerencias y Recomendaciones</span> • <span>Privacidad y Seguridad</span>
            </div>
        </div>
    )
}