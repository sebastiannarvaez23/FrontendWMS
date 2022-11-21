import React from "react";
import "./ItemBox.css"

function ItemBox(props) {
    let className = "box-item";
    if (props.boxSelected == props.id) {
        className += "-selected";
    }
    return (
        <div className={className} onClick={()=>{
            props.setBoxSelected(props.id);
        }}>
            <span>{props.id}</span>
            <span>{props.gross_weight}</span>
            <span>{props.responsible}</span>
            <span>{props.dimension}</span>
            <span>{props.last_modification}</span>
        </div>
    );
}

export { ItemBox }