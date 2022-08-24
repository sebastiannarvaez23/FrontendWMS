import React from "react";
import './IndicatorsPicking.css';

function IndicatorsPicking(props) {
    return (
        <div className="indicators-picking">
            {props.children}
        </div>
    );
}

export { IndicatorsPicking };