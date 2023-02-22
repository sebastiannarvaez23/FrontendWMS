import React from "react";
import { useBox } from "../../../Context/box-context";
import { useBoxItem } from "../../../Context/boxitem-context";
import { usePicking } from "../../../Context/picking-context";

export const ContainPickingMonitor = (props) => {

    const { setOpenPickingMonitor, setPickingSelected} = usePicking();
    const { setBoxSelected, setLoadGetBoxes, setGrossWeight } = useBox();
    const { 
        setListBoxItems,
        setInpReference,
        setQuantity
    } = useBoxItem();

    return (
        <section className="picking-monitor-container">
            <button onClick={() => { 
                setLoadGetBoxes(false);
                setListBoxItems([]);
                setPickingSelected("");
                setBoxSelected("");
                setGrossWeight("");
                setOpenPickingMonitor(false);
                setInpReference("");
                setQuantity("");
            }} className="btn-back">&#62;</button>
            <div className="picking-monitor">
                {props.children}
            </div>
        </section>
    )
}