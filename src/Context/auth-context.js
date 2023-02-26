import React, { createContext, useContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {

    const [user, setUser] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showCredentialError, setShowCredentialError] = React.useState(false);

    const value = useMemo(() => {
        return ({
            user,
            username,
            password,
            showCredentialError,
            setShowCredentialError,
            setPassword,
            setUsername,
            setUser
        })
    }, [
        user,
        username,
        password,
        showCredentialError
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