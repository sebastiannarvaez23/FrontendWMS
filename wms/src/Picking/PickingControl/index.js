import React from "react";
import './PickingControl.css';

export const PickingControl = (props) => {
    return (
        <div className="picking-control">
            {props.children}
        </div>
    );
}