import React from "react";
import "./ItemBox.css"

function ItemBox(props) {

    return (
        <div className="box-item" onClick={()=>{
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