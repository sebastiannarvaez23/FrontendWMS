import React, { createContext, useContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {

    // Signin

    const [user, setUser] = useState();
    const [username, setUsername] = useState('manager');
    const [password, setPassword] = useState('admin123');
    const [showCredentialError, setShowCredentialError] = React.useState(false);

    // Signup Company

    const [companyNit, setCompanyNit] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyCountry, setCompanyCountry] = useState("");
    const [companyState, setCompanyState] = useState("");
    const [companyCity, setCompanyCity] = useState("");
    
    // Signup User

    const [userEmail, setUserEmail] = useState("");
    const [userNames, setUserNames] = useState("");
    const [userLastNames, setUserLastNames] = useState("");
    const [userTelephone, setUserTelephone] = useState("");
    const [userUsername, setUserUsername] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");
    const [userEqualPasswords, setUserEqualPassword] = useState(false);

    const value = useMemo(() => {
        return ({
            user, setUser,
            username, setUsername,
            password, setPassword,
            showCredentialError, setShowCredentialError,
            companyNit, setCompanyNit,
            companyName, setCompanyName,
            companyAddress, setCompanyAddress,
            companyCountry, setCompanyCountry,
            companyState, setCompanyState,
            companyCity, setCompanyCity,
            userEmail, setUserEmail,
            userNames, setUserNames,
            userLastNames, setUserLastNames,
            userTelephone, setUserTelephone,
            userUsername, setUserUsername,
            userPassword, setUserPassword,
            userPasswordConfirmation, setUserPasswordConfirmation,
            userEqualPasswords, setUserEqualPassword
        })
    }, [
        user,
        username,
        password,
        showCredentialError,
        companyNit,
        companyName,
        companyAddress,
        companyCountry,
        companyState,
        companyCity,
        userEmail,
        userNames,
        userLastNames,
        userTelephone,
        userUsername,
        userPassword,
        userPasswordConfirmation,
        userEqualPasswords
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