import React from "react";
import "./BoxItem.css"

export const BoxItem = (props) => {
    return (
        <div className="item-ref-pack">
            <span>{props.id}</span>
            <span>{props.reference}</span>
            <span>{props.modelsize}</span>
            <span>{props.color}</span>
            <span>{props.quantity}</span>
            <span><i className='bx bx-trash' onClick={(event)=>{
                event.stopPropagation();
                alert('Eliminando referencia en caja ' + props.reference);
            }}></i></span>
        </div>
    );
}