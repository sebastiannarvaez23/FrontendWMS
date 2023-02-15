import React from "react";
import { useBox } from "../../../Context/box-context";
import { useBoxItem } from "../../../Context/boxitem-context";
import { usePicking } from "../../../Context/picking-context";

export const ContainPickingMonitor = (props) => {

    const { setOpenPickingMonitor, setPickingSelected} = usePicking();
    const { setBoxSelected, setLoadedBox } = useBox();
    const { setBoxItems } = useBoxItem();

    return (
        <section className="picking-monitor-container">
            <button onClick={() => { 
                setLoadedBox(false);
                setBoxItems([]);
                setPickingSelected("");
                setBoxSelected("");
                setOpenPickingMonitor(false);
            }} className="btn-back">&#62;</button>
            <div className="picking-monitor">
                {props.children}
            </div>
        </section>
    )
}