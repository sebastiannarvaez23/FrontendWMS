import React, { createContext, useContext, useMemo, useState } from "react";

export const BoxItemContext = createContext();

export const BoxItemProvider = (props) => {

    const [boxItems, setBoxItems] = useState([]);
    const [loadedBoxItem, setLoadedBoxItem] = useState(false);
    const [inpReference, setInpReference] = useState("");
    const [quantity, setQuantity] = useState("");

    const value = useMemo(() => {
        return ({
            boxItems,
            loadedBoxItem,
            quantity,
            inpReference,
            setInpReference,
            setQuantity,
            setBoxItems,
            setLoadedBoxItem
        })
    }, [
        boxItems,
        loadedBoxItem,
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