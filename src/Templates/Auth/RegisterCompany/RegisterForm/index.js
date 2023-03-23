import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/auth-context";
import { signUpCompany } from "../../../../ServicesConsumers/auth";
import "./RegisterForm.css";

export const RegisterForm = () => {

    const navigate = useNavigate();

    const {
        companyNit, setCompanyNit,
        companyName, setCompanyName,
        companyAddress, setCompanyAddress,
        companyCountry, setCompanyCountry,
        companyState, setCompanyState,
        companyCity, setCompanyCity,
        company, setCompany,
    } = useAuth();

    let defaultInfoCompany = {
        schema_name: "hola1",
        nit: companyNit,
        name: companyName,
        address: companyAddress,
        country: "p",
        state: "p",
        city: "p"
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        signUpCompany(setCompany, navigate, defaultInfoCompany);
    };

    return (
        <div className="contain-form-register">
            <form onSubmit={handleSubmit}>
                <div className="inp-register"><input onChange={(e) => { setCompanyNit(e.target.value) }} value={companyNit} placeholder="NIT" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setCompanyName(e.target.value) }} value={companyName} placeholder="Nombre" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setCompanyAddress(e.target.value) }} value={companyAddress} placeholder="Dirección" className="form-control" /></div>
                <div className="inp-register">
                    <select onChange={(e) => { setCompanyCountry(e.target.value) }} value={companyCountry} placeholder="Pais" className="form-control">
                        <option>- Seleccione país -</option>
                    </select>
                </div>
                <div className="inp-register">
                    <select onChange={(e) => { setCompanyState(e.target.value) }} value={companyState} placeholder="Estado/Región" className="form-control">
                        <option>- Seleccione región/estado -</option>
                    </select>
                </div>
                <div className="inp-register">
                    <select onChange={(e) => { setCompanyCity(e.target.value) }} value={companyCity} placeholder="Ciudad" className="form-control">
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