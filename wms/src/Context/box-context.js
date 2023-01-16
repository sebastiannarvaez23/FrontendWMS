import React, { createContext, useContext, useMemo, useState } from "react";

export const BoxContext = createContext();

export const BoxProvider = (props) => {

    const [itemsBox, setItemsbox] = useState([]);
    const [boxes, setBoxes] = useState([]);
    const [loaded, setLoadedBox] = useState(false);
    const [boxSelected, setBoxSelected] = useState("");
    const [referencesRequest, setReferencesRequest] = useState([]);
    const [loadedSaleOrderItems, setLoadedSaleOrderItems] = useState(false);
    const [loadedBoxItem, setLoadedBoxItem] = useState(false);
    const [inpReference, setInpReference] = useState("");
    const [quantity, setQuantity] = useState("");
    const [dimensions, setDimensions] = useState([]);
    const [dimensionSelected, setDimensionSelected] = useState(1);
    const [grossWeight, setGrossWeight] = useState(0.00);

    const value = useMemo(() => {
        return ({
            itemsBox,
            boxes,
            loaded,
            boxSelected,
            referencesRequest,
            loadedSaleOrderItems,
            loadedBoxItem,
            inpReference,
            quantity,
            dimensions,
            dimensionSelected,
            grossWeight,
            setDimensions,
            setDimensionSelected,
            setGrossWeight,
            setInpReference,
            setQuantity,
            setItemsbox,
            setBoxes,
            setLoadedBox,
            setBoxSelected,
            setReferencesRequest,
            setLoadedSaleOrderItems,
            setLoadedBoxItem
        })
    }, [
        itemsBox,
        boxes,
        loaded,
        boxSelected,
        referencesRequest,
        loadedSaleOrderItems,
        loadedBoxItem,
        dimensions,
        dimensionSelected,
        grossWeight,
        setDimensions,
        setDimensionSelected,
        setGrossWeight,
        setItemsbox,
        setBoxes,
        setLoadedBox,
        setBoxSelected,
        setReferencesRequest,
        setLoadedSaleOrderItems,
        setLoadedBoxItem
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