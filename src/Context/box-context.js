import React, { createContext, useContext, useMemo, useState } from "react";

export const BoxContext = createContext();

export const BoxProvider = (props) => {

    const [listBoxes, setListBoxes] = useState([]);
    const [loadGetBoxes, setLoadGetBoxes] = useState(false);
    const [boxSelected, setBoxSelected] = useState("");
    const [grossWeight, setGrossWeight] = useState("");
    
    // dimensions
    
    const [viewModalAddDimension, setViewModalAddDimension] = useState(false);
    const [viewModalDimension, setViewModalDimension] = useState(false);
    const [dimensionSelected, setDimensionSelected] = useState("");
    const [loadListDimensions, setLoadListDimensions] = useState(false);
    const [listDimensions, setListDimensions] = useState([]);
    const [grossWeightBoxDimension, setGrossWeightBoxDimension] = useState("");
    const [heightBoxDimension, setHeightBoxDimension] = useState("");
    const [widthDimension, setWidthDimension] = useState("");
    const [lengthBoxDimension, setLengthBoxDimension] = useState("");
    const [nameNewBoxDimension, setNameNewBoxDimension] = useState("");

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
            grossWeightBoxDimension,
            heightBoxDimension,
            widthDimension,
            lengthBoxDimension,
            nameNewBoxDimension,
            setNameNewBoxDimension,
            setLengthBoxDimension,
            setWidthDimension,
            setHeightBoxDimension,
            setGrossWeightBoxDimension,
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
        viewModalAddDimension,
        grossWeightBoxDimension,
        heightBoxDimension,
        widthDimension,
        lengthBoxDimension,
        nameNewBoxDimension
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