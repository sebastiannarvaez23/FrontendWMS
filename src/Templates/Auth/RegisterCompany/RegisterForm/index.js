import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/auth-context";
import { signUpCompany } from "../../../../ServicesConsumers/auth";
import { getCountries } from "../../../../ServicesConsumers/battuta/apis";
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
        //company, 
        setCompany,
        setDomain,
        countries, setContries,
        //states, setStates,
        //cities, setCities,
    } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        signUpCompany(setCompany, setDomain, navigate, generateSchemaName(companyName));
    };

    const generateSchemaName = (companyName) => {
        const cleanName = companyName.toLowerCase().replace(/[^a-z]/g, '');
        const prefix = "wms";
        let randomName = "";
        
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * cleanName.length);
          randomName += cleanName.charAt(randomIndex);
        }

        let schemaName = prefix + randomName;

        let defaultInfoCompany = {
            schema_name: schemaName,
            nit: companyNit,
            name: companyName,
            address: companyAddress,
            country: "Colombia",
            state: "Departamento del Valle del Cauca",
            city: "Cali"
        }
        console.log(defaultInfoCompany);
        return defaultInfoCompany;
    }

    useEffect(() => {
        getCountries(setContries);
    }, [])

    return (
        <div className="contain-form-register">
            <form onSubmit={handleSubmit}>
                <div className="inp-register"><input onChange={(e) => { setCompanyNit(e.target.value) }} value={companyNit} placeholder="NIT" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setCompanyName(e.target.value) }} value={companyName} placeholder="Nombre" className="form-control" /></div>
                <div className="inp-register"><input onChange={(e) => { setCompanyAddress(e.target.value) }} value={companyAddress} placeholder="Dirección" className="form-control" /></div>
                <div className="inp-register">
                    <select onChange={(e) => { setCompanyCountry(e.target.value) }} value={companyCountry} placeholder="Pais" className="form-control">
                        <option>- Seleccione país -</option>
                        {!!countries && countries.map((country) => (
                            <option>{country.name}</option>
                        ))}
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