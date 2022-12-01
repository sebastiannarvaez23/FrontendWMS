import React from "react";
import './PickingItem.css';

// Context
import { usePicking } from "../../../../Context/picking-context";

export const PickingItem = (props) => {
    const { setPickingSelected, setOpenPickingMonitor } = usePicking();

    return (
        <div onClick={() => {
            setPickingSelected(props.id);
            setOpenPickingMonitor(true);
        }} className={"picking-item"}>
            <span>{props.id}</span>
            <span>{props.status}</span>
            <span>{props.responsible}</span>
            <span>{props.dateModified}</span>
        </div>
    );
}