import React from "react";
import './PickingControl.css';

function PickingControl(props) {
    return (
        <div className="picking-control">
            {props.children}
        </div>
    );
}

export { PickingControl };