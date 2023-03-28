import React, { createContext, useContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {

    // Signin

    const [user, setUser] = useState();
    const [username, setUsername] = useState('manager');
    const [password, setPassword] = useState('admin123');
    const [showCredentialError, setShowCredentialError] = useState(false);
    const [domain, setDomain] = useState("");

    // Signup Company

    const [companyNit, setCompanyNit] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyCountry, setCompanyCountry] = useState("");
    const [companyState, setCompanyState] = useState("");
    const [companyCity, setCompanyCity] = useState("");
    const [company, setCompany] = useState({
        id: "",
        schema_name: "",
        nit: "",
        name: "",
        address: "",
        country: "",
        state: "",
        city: ""
    });
    
    // Signup User

    const [userEmail, setUserEmail] = useState("narvaezsebas23@gmail.com");
    const [userNames, setUserNames] = useState("prueba interfaz 1");
    const [userLastNames, setUserLastNames] = useState("apellidos");
    const [userTelephone, setUserTelephone] = useState("213321123321");
    const [userUsername, setUserUsername] = useState("sabastiannarvaez23");
    const [userPassword, setUserPassword] = useState("Pruebapass23");
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("Pruebapass23");
    const [userEqualPasswords, setUserEqualPassword] = useState(false);

    // Contries, states and cities

    const [countries, setContries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const value = useMemo(() => {
        return ({
            user, setUser,
            username, setUsername,
            password, setPassword,
            showCredentialError, setShowCredentialError,
            domain, setDomain,
            companyNit, setCompanyNit,
            companyName, setCompanyName,
            companyAddress, setCompanyAddress,
            companyCountry, setCompanyCountry,
            companyState, setCompanyState,
            companyCity, setCompanyCity,
            company, setCompany,
            userEmail, setUserEmail,
            userNames, setUserNames,
            userLastNames, setUserLastNames,
            userTelephone, setUserTelephone,
            userUsername, setUserUsername,
            userPassword, setUserPassword,
            userPasswordConfirmation, setUserPasswordConfirmation,
            userEqualPasswords, setUserEqualPassword,
            countries, setContries,
            states, setStates,
            cities, setCities
        })
    }, [
        user,
        username,
        password,
        showCredentialError,
        domain,
        companyNit,
        companyName,
        companyAddress,
        companyCountry,
        companyState,
        companyCity,
        company,
        userEmail,
        userNames,
        userLastNames,
        userTelephone,
        userUsername,
        userPassword,
        userPasswordConfirmation,
        userEqualPasswords,
        countries,
        states,
        cities
    ])
    return <AuthContext.Provider value={value} {...props} />
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe estar dentro del Proveedor AuthContext');
    }
    return context;
}