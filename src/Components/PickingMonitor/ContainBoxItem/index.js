import React from "react";
import { createBoxItem } from "../../../ServicesConsumers/boxitem";
import { useBox } from "../../../Context/box-context";
import { useBoxItem } from "../../../Context/boxitem-context";
import "./ContainBoxItem.css";

export const ContainBoxItem = (props) => {

    const {
        boxSelected,
    } = useBox();

    const {
        quantity,
        setQuantity,
        inpReference,
        setInpReference,
        setBoxItems,
        setLoadedBoxItem
    } = useBoxItem();

    let defaultDataBoxItem = {
        reference: inpReference,
        quantity: parseInt(quantity, 10),
        box: boxSelected
    }

    return (
        <div className="ref-admin">
            <h3>Administración de las referencias</h3>
            <input onChange={(e) => { setInpReference(e.target.value) }} value={inpReference} className="inp-ref inp-set-ref" placeholder="Cod. Barras o ref." disabled={!boxSelected} />
            <input onChange={(e) => {
                const regex = /^\d{0,8}$/; // Expresión regular para validar que solo sean números
                const newValue = e.target.value;
                if (regex.test(newValue) || newValue === '') {
                    setQuantity(newValue);
                }
            }} value={quantity} className="inp-ref inp-set-cant" placeholder="Cantidad" disabled={!boxSelected} />
            <button onClick={() => { createBoxItem(setBoxItems, setLoadedBoxItem, setQuantity, setInpReference, defaultDataBoxItem) }} className="btn-pack">Empacar</button>
            <div className="ref-list-box-pack">
                <div className="headers-list-ref-boxitem">
                    <span>#</span>
                    <span>Referencia</span>
                    <span>Talla</span>
                    <span>Color</span>
                    <span>Cant</span>
                    <span></span>
                </div>
                {props.children}
            </div>
        </div>
    )
}
