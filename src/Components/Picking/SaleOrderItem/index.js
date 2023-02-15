import React from "react";
import "./SaleOrderItem.css";

export const SaleOrderItem = (props) => {
    return (
        <div className="saleorder-item">
            <span>{props.id}</span>
            <span>{props.reference}</span>
            <span>{props.balance}</span>
            <span>{props.quantity}</span>
            <span>{props.modelsize}</span>
            <span>{props.color}</span>
        </div>
    );
}