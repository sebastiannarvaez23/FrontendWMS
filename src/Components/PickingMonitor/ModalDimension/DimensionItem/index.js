import React from "react";
import "./DimensionItem.css";

export const DimensionItem = (props) => {
    return (
        <div className="dimension-item">
            <span>{props.name}</span>
            <span>{props.dimension_height} x {props.dimension_width} x {props.dimension_length} cms</span>
            <span>{props.weight} kg</span>
            <span><i className='bx bx-trash' onClick={(event)=>{}}></i></span>
        </div>
    )
}