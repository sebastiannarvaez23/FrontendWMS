import React from "react";
import './PickingItem.css';

function PickingItem(props) {
    return (
        <div onClick={()=>{
            props.setPickingSelected(props.id);
            props.setOpenPickingMonitor(true);
        }} className="picking-item">
            <span>{props.id}</span>
            <span>{props.status}</span>
            <span>{props.responsible}</span>
            <span>{props.dateModified}</span>
        </div>
    );
}

export { PickingItem };