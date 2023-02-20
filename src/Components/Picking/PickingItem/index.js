import React, { useRef } from "react";
import './PickingItem.css';

// Context
import { usePicking } from "../../../Context/picking-context";

export const PickingItem = (props) => {

    const { setPickingSelected, setOpenPickingMonitor } = usePicking();
    const pickingItemRef = useRef(null);

    return (
        <div ref={pickingItemRef} onClick={() => {
            setPickingSelected(props.id);
            setOpenPickingMonitor(true);
        }} className={"picking-item"}>
            <span>{props.id}</span>
            <span>{props.status}</span>
            <span>{props.responsible}</span>
            <span>{props.dateModified}</span>
            <span><i className='bx bx-trash' onClick={()=>{alert('Eliminando Picking ' + props.id)}}></i></span>
        </div>
    );
}