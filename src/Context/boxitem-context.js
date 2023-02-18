import React, { createContext, useContext, useMemo, useState } from "react";

export const BoxItemContext = createContext();

export const BoxItemProvider = (props) => {

    const [boxItems, setBoxItems] = useState([]);
    const [loadedBoxItem, setLoadedBoxItem] = useState(false);
    const [quantity, setQuantity] = useState("");

    const value = useMemo(() => {
        return ({
            boxItems,
            loadedBoxItem,
            quantity,
            setQuantity,
            setBoxItems,
            setLoadedBoxItem
        })
    }, [
        boxItems,
        loadedBoxItem,
        quantity
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