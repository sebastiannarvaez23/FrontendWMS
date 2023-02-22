import React from "react";
import ReactDOM from "react-dom";
import { useBox } from "../../../../Context/box-context";
import "./AddDimension.css";

export const AddDimension = () => {

    const {
        setModalAddDimension
    } = useBox();

    const handleFrontLayerClick = (event) => {
        if (event.target.classList.contains('front-layer-add-dimensions')) {
            setModalAddDimension(false);
        }
    }

    return ReactDOM.createPortal(
        <div className="front-layer-add-dimensions" onClick={handleFrontLayerClick}>
            <div className="contain-add-dimension">
                <h2>Agregue una dimensión</h2>
                <input placeholder="Nombre" />
                <input placeholder="Alto" />
                <input placeholder="Ancho" />
                <input placeholder="Largo" />
                <input placeholder="Peso Bruto" />

                <div className="contain-bottom">
                    <button className="btn btn-add-dimension">Agregar dimensión</button>
                </div>
            </div>
        </div>,
        document.getElementById("addDimension")
    )
}