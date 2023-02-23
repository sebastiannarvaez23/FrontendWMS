import React from "react";
import { useBox } from "../../../../Context/box-context";
import { deleteDimension } from "../../../../ServicesConsumers/box";
import "./DimensionItem.css";

export const DimensionItem = (props) => {

    const {
        setListDimensions,
        setLoadListDimensions
    } = useBox();

    return (
        <div className="dimension-item">
            <span>{props.name}</span>
            <span>{props.dimension_height} x {props.dimension_width} x {props.dimension_length} cms</span>
            <span>{props.weight} kg</span>
            <span><i className='bx bx-trash' onClick={(event)=>{deleteDimension(setListDimensions, setLoadListDimensions, props.id)}}></i></span>
        </div>
    )
}