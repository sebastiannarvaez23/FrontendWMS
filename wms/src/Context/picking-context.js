import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { getPickings } from "../api/picking";

export const PickingContext = createContext();

export function PickingProvider(props) {
    
    // Information Indicators
    const [indicatorsPicking, setIndicatorsPicking] = useState({
        picking_quantity_by_customer: "",
        request_quantity_by_customer: "",
        picking_quantity_by_saleorder: "",
        request_quantity_by_saleorder: ""
    })
    const [pickings, setPickings] = useState([]);
    const [loadedPicking, setLoadedPicking] = useState(false);
    const [loadedIndicator, setloadedIndicator] = useState(true);
    const [pickingSelected, setPickingSelected] = useState("");

    const value = useMemo(() => {
        return ({
            indicatorsPicking,
            pickings,
            loadedPicking,
            loadedIndicator,
            pickingSelected,
            setIndicatorsPicking,
            setPickings,
            setLoadedPicking,
            setloadedIndicator,
            setPickingSelected
        })
    }, [indicatorsPicking,
        pickings,
        loadedPicking,
        loadedIndicator,
        pickingSelected,
        setIndicatorsPicking,
        setPickings,
        setLoadedPicking,
        setloadedIndicator,
        setPickingSelected
    ])

    return <PickingContext.Provider value={value} {...props} />
}

export function usePicking() {
    const context = useContext(PickingContext);
    if (!context) {
        throw new Error('usePicking debe estar dentro del Proveedor PickingContext')
    }
    return context;
}