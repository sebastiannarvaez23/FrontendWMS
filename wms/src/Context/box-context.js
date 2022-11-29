import React, { createContext, useContext, useMemo, useState } from "react";

export const BoxContext = createContext();

export const BoxProvider = (props) => {

    const [referencesPack, setReferencesPack] = useState([]);

    const value = useMemo(() => {
        return ({
            referencesPack,
            setReferencesPack
        })
    }, [
        referencesPack,
        setReferencesPack
    ])
    return <BoxContext.Provider value={value} {...props} />
}

export const useBox = () => {
    const context = useContext(BoxContext);
    if (!context) {
        throw new Error('useBox debe estar dentro del Proveedor BoxContext');
    }
    return context;
}