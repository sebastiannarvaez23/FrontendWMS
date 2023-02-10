import React, { createContext, useContext, useMemo, useState } from "react";

export const BoxItemContext = createContext();

export const BoxItemProvider = (props) => {

    const [boxItems, setBoxItems] = useState([]);
    const [loadedBoxItem, setLoadedBoxItem] = useState(false);

    const value = useMemo(() => {
        return ({
            boxItems,
            loadedBoxItem,
            setBoxItems,
            setLoadedBoxItem
        })
    }, [
        boxItems,
        loadedBoxItem,
    ])
    return <BoxContext.Provider value={value} {...props} />
}

export const useBoxItem = () => {
    const context = useContext(BoxItemContext);
    if (!context) {
        throw new Error('useBox debe estar dentro del Proveedor BoxContext');
    }
    return context;
}