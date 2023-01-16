import React from "react";
import './PickingIndicatorsList.css';

export const PickingIndicatorsList = (props) => {
    return (
        <div className="indicators-picking">
            <h4>Indicador de despacho</h4>
            {props.children}
        </div>
    );
}