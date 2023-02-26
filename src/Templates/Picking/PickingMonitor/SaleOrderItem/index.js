import React from "react";
import "./SaleOrderItem.css"

export const SaleOrderItem = (props) => {
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