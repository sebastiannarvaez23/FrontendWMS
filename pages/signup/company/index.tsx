import React, { useEffect, useState } from "react";
import FooterAuth from "../../../components/FooterAuth";
import { ExtButton, ExtContainFirstLevel, ExtInput, ExtSelect } from "./styled";
import { AuthProvider, useAuth } from "../../../src/Context/auth-context";

const Company = () => {

  /* const [companyNit, setCompanyNit] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyCountry, setCompanyCountry] = useState("");
  const [companyState, setCompanyState] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const [countries, setContries] = useState([]); */

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
    //signUpCompany(setCompany, setDomain, navigate, generateSchemaName(companyName));
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
    //getCountries(setContries);
  }, [])

  return (
      <ExtContainFirstLevel>
        <div className="contain-title-register">
          <h1>Registrar Empresa</h1>
          <p>¡Para registrarse debe primero registrar una empresa!</p>
        </div>
        <div className="contain-form-register">
          <form onSubmit={handleSubmit}>
            <div className="inp-register"><ExtInput onChange={(e) => { setCompanyNit(e.target.value) }} value={companyNit} placeholder="NIT" /></div>
            <div className="inp-register"><ExtInput onChange={(e) => { setCompanyName(e.target.value) }} value={companyName} placeholder="Nombre" /></div>
            <div className="inp-register"><ExtInput onChange={(e) => { setCompanyAddress(e.target.value) }} value={companyAddress} placeholder="Dirección" /></div>
            <div className="inp-register">
              <ExtSelect onChange={(e) => { setCompanyCountry(e.target.value) }} value={companyCountry} placeholder="Pais">
                <option>- Seleccione país -</option>
                {!!countries && countries.map((country) => (
                  <option>{country.name}</option>
                ))}
              </ExtSelect>
            </div>
            <div className="inp-register">
              <ExtSelect onChange={(e) => { setCompanyState(e.target.value) }} value={companyState} placeholder="Estado/Región">
                <option>- Seleccione región/estado -</option>
                <option>- Marcela A -</option>
                <option>- Marcela A -</option>
                <option>- Marcela A -</option>
                <option>- Marcela A -</option>
                <option>- Marcela A -</option>
              </ExtSelect>
            </div>
            <div className="inp-register">
              <ExtSelect onChange={(e) => { setCompanyCity(e.target.value) }} value={companyCity} placeholder="Ciudad">
                <option>- Seleccione ciudad -</option>
              </ExtSelect>
            </div>
            <div><ExtButton className="btn-wms btn-register" type={"submit"}>Registrar empresa</ExtButton></div>
          </form>
        </div>
        <FooterAuth />
      </ExtContainFirstLevel>
  );
}

export default Company;