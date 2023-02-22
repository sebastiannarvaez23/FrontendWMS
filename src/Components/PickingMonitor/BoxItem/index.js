import React from "react";
import "./BoxItem.css";

import { useBoxItem } from "../../../Context/boxitem-context";
import { useBox } from "../../../Context/box-context";

import { deleteBoxItem } from "../../../ServicesConsumers/boxitem";

export const BoxItem = (props) => {

    const {
        boxSelected
    } = useBox();
    
    const {
        setLoadGetBoxItems,
        setListBoxItems
    } = useBoxItem();
    
    return (
        <div className="item-ref-pack">
            <span>{props.id}</span>
            <span>{props.reference}</span>
            <span>{props.modelsize}</span>
            <span>{props.color}</span>
            <span>{props.quantity}</span>
            <span><i className='bx bx-trash' onClick={(event)=>{
                event.stopPropagation();
                deleteBoxItem(props.id, setListBoxItems, setLoadGetBoxItems, boxSelected)
            }}></i></span>
        </div>
    );
}