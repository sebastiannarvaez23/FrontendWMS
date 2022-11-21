import React from "react";
import './IndicatorsPicking.css';

function IndicatorsPicking(props) {
    return (
        <div className="indicators-picking">
            <h4>Indicador de despacho</h4>
            {props.children}
        </div>
    );
}

export { IndicatorsPicking };