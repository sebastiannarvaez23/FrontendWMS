import React from "react";
import { usePicking } from "../../../../Context/picking-context";
import './PickingItem.css';

function PickingItem(props) {
    const {setPickingSelected} = usePicking();

    return (
        <div onClick={() => {
            setPickingSelected(props.id);
            props.setOpenPickingMonitor(true);
        }} className={"picking-item"}>
            <span>{props.id}</span>
            <span>{props.status}</span>
            <span>{props.responsible}</span>
            <span>{props.dateModified}</span>
        </div>
    );
}

export { PickingItem };