import React from "react";
import { useBox } from "../../../Context/box-context";
import { usePicking } from "../../../Context/picking-context";

export const ContainPickingMonitor = (props) => {

    const { setOpenPickingMonitor } = usePicking();
    const { setItemsbox } = useBox();

    return (
        <section className="picking-monitor-container">
            <button onClick={() => { setOpenPickingMonitor(false); setItemsbox([]); }} className="btn-back">&#62;</button>
            <div className="picking-monitor">
                {props.children}
            </div>
        </section>
    )
}