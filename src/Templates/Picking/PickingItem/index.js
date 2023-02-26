import React from "react";
import './PickingItem.css';

// Context
import { usePicking } from "../../../Context/picking-context";
import { useSaleOrder } from "../../../Context/saleorder-context";

// API
import { deletePicking } from "../../../ServicesConsumers/picking";

export const PickingItem = (props) => {

    const {
        noSaleOrder
    } = useSaleOrder();

    const {
        setPickingSelected,
        setPickings,
        setOpenPickingMonitor,
        setLoadedPicking
    } = usePicking();
    
    return (
        <div onClick={() => {
            setPickingSelected(props.id);
            setOpenPickingMonitor(true);
        }} className={"picking-item"}>
            <span>{props.id}</span>
            <span>{props.status}</span>
            <span>{props.responsible}</span>
            <span>{props.dateModified}</span>
            <span><i className='bx bx-trash' onClick={(event)=>{
                event.stopPropagation();
                deletePicking(props.id, setPickings, setLoadedPicking, noSaleOrder)
            }}></i></span>
        </div>
    );
}