import React from "react";
import "./ItemsReferencePack.css"

export function ItemReferencePack(props){
    return (
        <div className="item-ref-pack">
            <span>{props.id}</span>
            <span>{props.reference}</span>
            <span>{props.modelsize}</span>
            <span>{props.color}</span>
            <span>{props.quantity}</span>
        </div>
    );
}