import React from "react";
import './PickingItem.css';

function PickingItem({id, status, responsible, dateModified}) {
    return(
        <div className="picking-item">
            <span>{id}</span>
            <span>{status}</span>
            <span>{responsible}</span>
            <span>{dateModified}</span>
        </div>
    );
}

export { PickingItem };