import React from "react";
import { useBox } from "../../../Context/box-context";
import "./ModalAgregarDimension.css";

export const ModalAgregarDimension = () => {

    const {
        setModalDimension
    } = useBox();

    const handleFrontLayerClick = (event) => {
        if (event.target.classList.contains('contain-modal-add-dimension')) {
            setModalDimension(false);
        }
    }

    return (
        <div className="contain-modal-add-dimension" onClick={handleFrontLayerClick}>
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
        </div>
    )
}