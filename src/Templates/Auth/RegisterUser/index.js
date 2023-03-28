import React, { Fragment, useEffect } from "react";
import { RegisterTitle } from './RegisterTitle';
import { RegisterForm } from './RegisterForm';
import { SignUp } from "./SignUp";
import './Register.css';
import { useAuth } from "../../../Context/auth-context";
import { useNavigate } from "react-router-dom";
import { alertWithConfirm, alertWithInput } from "../../../Alerts/SweetAlerts";
import { API, APIPUBLIC } from "../../../ServicesConsumers/api/conf";

export const RegisterUser = () => {

    const navigate = useNavigate();

    const {
        company, setCompany,
        setDomain,
    } = useAuth();

    useEffect(() => {
        if (company.id === "") {
            let api = APIPUBLIC + 'company/';
            alertWithConfirm("¿Ya registraste una empresa para continuar con este registro?", "Sí", 'No, aún no', () => {
                alertWithInput("Ingresa el NIT de la empresa", api, "El NIT ingresado no existe", (companyResponse) => {
                    setCompany(companyResponse);
                    setDomain(companyResponse.schema_name)
                }, () => navigate('/signup/company'))
            }, () => navigate('/signup/company'))
        }
    }, [])

    return (
        <Fragment>
            <SignUp>
                <RegisterTitle />
                <RegisterForm />
            </SignUp>
        </Fragment>
    )
}