import React, { createContext, useContext, useMemo, useState } from "react";

export const BoxItemContext = createContext();

export const BoxItemProvider = (props) => {

    const [listBoxItems, setListBoxItems] = useState([]);
    const [loadGetBoxItems, setLoadGetBoxItems] = useState(false);
    const [inpReference, setInpReference] = useState("");
    const [quantity, setQuantity] = useState("");

    const value = useMemo(() => {
        return ({
            listBoxItems,
            loadGetBoxItems,
            quantity,
            inpReference,
            setInpReference,
            setQuantity,
            setLoadGetBoxItems,
            setListBoxItems
        })
    }, [
        listBoxItems,
        loadGetBoxItems,
        quantity,
        inpReference
    ])
    return <BoxItemContext.Provider value={value} {...props} />
}

export const useBoxItem = () => {
    const context = useContext(BoxItemContext);
    if (!context) {
        throw new Error('useBoxItem debe estar dentro del Proveedor BoxContext');
    }
    return context;
}