import React, { useState } from "react";
import { createBoxItem } from "../../../api/boxitem";

export function PanelItemReferencePack(props) {

    const [inpReference, setInpReference] = useState("");
    const [quantity, setQuantity] = useState("");

    let defaultDataBoxItem = {
        id: 2,
        reference: inpReference,
        quantity: parseInt(quantity, 10),
        box: props.boxSelected
    }

    return (
        <div className="ref-admin">
            <h3>Administración de las referencias</h3>
            <input onChange={(e) => {setInpReference(e.target.value)}} value={inpReference} className="inp-ref inp-set-ref" placeholder="Cod. Barras o ref." />
            <input onChange={(e) => { setQuantity(e.target.value) }} value={quantity} className="inp-ref inp-set-cant" placeholder="Cantidad" />
            <button onClick={() => { createBoxItem(props.setReferencesPack, props.setLoadedBoxItem, props.boxSelected, defaultDataBoxItem) }} className="btn-pack">Empacar</button>
            <div className="ref-list">
                <div className="headers-list-ref">
                    <span>#</span>
                    <span>Referencia</span>
                    <span>Talla</span>
                    <span>Color</span>
                    <span>Cantidad</span>
                </div>
                {props.children}
            </div>
        </div>
    )
}
