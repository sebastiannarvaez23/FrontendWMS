import React, { createContext, useContext, useMemo, useState } from "react";

export const SaleOrderContext = createContext();

export const SaleOrderProvider = (props) => {
    const [noSaleOrder, setNoSaleOrder] = useState("");
    const [saleOrderItems, setSaleOrderItems] = useState([]);
    const [saleOrderModal, setSaleOrderModal] = useState(false);
    const [referencesRequest, setReferencesRequest] = useState([]);
    const [loadedSaleOrderItems, setLoadedSaleOrderItems] = useState(false);

    // Information Sale Order
    const [saleOrder, setSaleOrder] = useState({
        publication_date: "",
        delivery_date: "",
        doc_date: "",
        po_comments: "",
        customer_name: "",
        delivery_address: "",
        pay_term: "",
        collection: ""
    });
    // --

    const value = useMemo(() => {
        return ({
            saleOrder,
            noSaleOrder,
            saleOrderItems,
            saleOrderModal,
            referencesRequest,
            loadedSaleOrderItems,
            setSaleOrder,
            setNoSaleOrder,
            setSaleOrderItems,
            setSaleOrderModal,
            setReferencesRequest,
            setLoadedSaleOrderItems
        })
    }, [
        saleOrder,
        noSaleOrder,
        saleOrderItems,
        saleOrderModal,
        referencesRequest,
        loadedSaleOrderItems
    ])
    return <SaleOrderContext.Provider value={value} {...props} />
}

export const useSaleOrder = () => {
    const context = useContext(SaleOrderContext);
    if (!context) {
        throw new Error('useSaleOrder debe estar dentro del Proveedor SaleOrderContext');
    }
    return context;
}