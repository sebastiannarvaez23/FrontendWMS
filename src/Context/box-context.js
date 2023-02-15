import React, { createContext, useContext, useMemo, useState } from "react";

export const BoxContext = createContext();

export const BoxProvider = (props) => {

    const [boxItems, setBoxItems] = useState([]);
    const [boxes, setBoxes] = useState([]);
    const [loaded, setLoadedBox] = useState(false);
    const [boxSelected, setBoxSelected] = useState("");
    const [loadedBoxItem, setLoadedBoxItem] = useState(false);
    const [quantity, setQuantity] = useState("");
    const [dimensions, setDimensions] = useState([]);
    const [dimensionSelected, setDimensionSelected] = useState(1);
    const [grossWeight, setGrossWeight] = useState("");

    const value = useMemo(() => {
        return ({
            boxItems,
            boxes,
            loaded,
            boxSelected,
            loadedBoxItem,
            quantity,
            dimensions,
            dimensionSelected,
            grossWeight,
            setDimensions,
            setDimensionSelected,
            setGrossWeight,
            setQuantity,
            setBoxItems,
            setBoxes,
            setLoadedBox,
            setBoxSelected,
            setLoadedBoxItem
        })
    }, [
        boxItems,
        boxes,
        loaded,
        boxSelected,
        loadedBoxItem,
        dimensions,
        dimensionSelected,
        grossWeight
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