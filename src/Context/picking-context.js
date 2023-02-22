import React, { createContext, useContext, useMemo, useState } from "react";

export const PickingContext = createContext();

export const PickingProvider = (props) => {

    const [indicatorsPicking, setIndicatorsPicking] = useState({
        picking_quantity_by_customer: "",
        request_quantity_by_customer: "",
        picking_quantity_by_saleorder: "",
        request_quantity_by_saleorder: ""
    })
    const [pickings, setPickings] = useState([]);
    const [loadGetBoxesPicking, setLoadedPicking] = useState(false);
    const [loadGetBoxesIndicator, setloadGetBoxesIndicator] = useState(true);
    const [pickingSelected, setPickingSelected] = useState("");

    // Picking Monitor
    const [openPickingMonitor, setOpenPickingMonitor] = useState(false);

    const value = useMemo(() => {
        return ({
            indicatorsPicking,
            pickings,
            loadGetBoxesPicking,
            loadGetBoxesIndicator,
            pickingSelected,
            openPickingMonitor,
            setOpenPickingMonitor,
            setIndicatorsPicking,
            setPickings,
            setLoadedPicking,
            setloadGetBoxesIndicator,
            setPickingSelected
        })
    }, [
        indicatorsPicking,
        pickings,
        loadGetBoxesPicking,
        loadGetBoxesIndicator,
        pickingSelected,
        openPickingMonitor,
    ])
    return <PickingContext.Provider value={value} {...props} />
}

export const usePicking = () => {
    const context = useContext(PickingContext);
    if (!context) {
        throw new Error('usePicking debe estar dentro del Proveedor PickingContext');
    }
    return context;
}