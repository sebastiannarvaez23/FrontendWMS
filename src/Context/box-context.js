import React, { createContext, useContext, useMemo, useState } from "react";

export const BoxContext = createContext();

export const BoxProvider = (props) => {

    const [listBoxes, setListBoxes] = useState([]);
    const [loadGetBoxes, setLoadGetBoxes] = useState(false);
    const [boxSelected, setBoxSelected] = useState("");
    const [listDimensions, setListDimensions] = useState([]);
    const [loadListDimensions, setLoadListDimensions] = useState(false);
    const [dimensionSelected, setDimensionSelected] = useState("");
    const [grossWeight, setGrossWeight] = useState("");
    const [viewModalDimension, setViewModalDimension] = useState(false);
    const [viewModalAddDimension, setViewModalAddDimension] = useState(false);

    const value = useMemo(() => {
        return ({
            listBoxes,
            loadGetBoxes,
            boxSelected,
            listDimensions,
            dimensionSelected,
            grossWeight,
            viewModalDimension,
            loadListDimensions,
            viewModalAddDimension,
            setViewModalAddDimension,
            setLoadListDimensions,
            setViewModalDimension,
            setListDimensions,
            setDimensionSelected,
            setGrossWeight,
            setBoxSelected,
            setLoadGetBoxes,
            setListBoxes,
        })
    }, [
        listBoxes,
        loadGetBoxes,
        boxSelected,
        listDimensions,
        dimensionSelected,
        grossWeight,
        viewModalDimension,
        loadListDimensions,
        viewModalAddDimension
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