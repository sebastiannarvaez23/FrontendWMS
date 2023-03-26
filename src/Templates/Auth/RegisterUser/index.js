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
        company, setCompany
    } = useAuth();

    useEffect(() => {
        if (company.id === "") {
            let api = APIPUBLIC + 'company/';
            alertWithConfirm("¿Ya registraste una empresa para continuar con este registro?", "Sí", () => {
                alertWithInput("Ingresa el NIT de la empresa", api, (companyResponse) => {
                    setCompany(companyResponse);
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