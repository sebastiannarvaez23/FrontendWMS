import React from "react";
import "./ItemReferenceRequest.css"

export const ItemReferenceRequest = (props) => {
    return (
        <div className="item-ref-request">
            <span>{props.id}</span>
            <span>{props.reference}</span>
            <span>{props.modelsize}</span>
            <span>{props.color}</span>
            <span>{props.quantity}</span>
        </div>
    );
}