import React from "react";
import ReactDOM from "react-dom";
import { useBox } from "../../../../../Context/box-context";
import { createDimension } from "../../../../../ServicesConsumers/box";
import "./AddDimension.css";

export const AddDimension = () => {

    const {
        setViewModalAddDimension,
        setGrossWeightBoxDimension,
        grossWeightBoxDimension,
        heightBoxDimension,
        widthDimension,
        lengthBoxDimension,
        setHeightBoxDimension,
        setWidthDimension,
        setLengthBoxDimension,
        nameNewBoxDimension,
        setNameNewBoxDimension,
        setListDimensions,
        setLoadListDimensions
    } = useBox();

    let defaultDataDimension = {
        "name": nameNewBoxDimension,
        "dimension_height": heightBoxDimension,
        "dimension_width": widthDimension,
        "dimension_length": lengthBoxDimension,
        "weight": grossWeightBoxDimension,
        "is_delete": false
      }

    const handleFrontLayerClick = (event) => {
        if (event.target.classList.contains('front-layer-add-listDimensions')) {
            setViewModalAddDimension(false);
            setHeightBoxDimension("");
            setWidthDimension("");
            setLengthBoxDimension("");
            setGrossWeightBoxDimension("");
            setNameNewBoxDimension("");
        }
    }

    const onFormatValueDecimalInput = (e, setFunction) => {
        const regex = /^\d{0,3}(\.\d{0,2})?$/; // Expresión regular para validar que solo sean números y puntos
        const newValue = e.target.value;
        if (regex.test(newValue) || newValue === '') {
            setFunction(newValue);
        }
    }

    return ReactDOM.createPortal(
        <div className="front-layer-add-listDimensions" onClick={handleFrontLayerClick}>
            <div className="contain-add-dimension">
                <h2>Agregue una dimensión</h2>
                <input onChange={(e) => {setNameNewBoxDimension(e.target.value)}} value={nameNewBoxDimension} placeholder="Nombre (DHL Grande)" />
                <input onChange={(e) => {onFormatValueDecimalInput(e, setHeightBoxDimension)}} value={heightBoxDimension} placeholder="Alto (mts 1.3)" />
                <input onChange={(e) => {onFormatValueDecimalInput(e, setWidthDimension)}} value={widthDimension} placeholder="Ancho (mts 1.3)" />
                <input onChange={(e) => {onFormatValueDecimalInput(e, setLengthBoxDimension)}} value={lengthBoxDimension} placeholder="Largo (mts 1.3)" />
                <input onChange={(e) => {onFormatValueDecimalInput(e, setGrossWeightBoxDimension)}} value={grossWeightBoxDimension} placeholder="Peso Bruto (kg 1.2)" />

                <div className="contain-bottom">
                    <button className="btn-wms btn-add-dimension" onClick={()=>{createDimension(setListDimensions, setLoadListDimensions, setViewModalAddDimension, defaultDataDimension)}}>Agregar dimensión</button>
                </div>
            </div>
        </div>,
        document.getElementById("addDimension")
    )
}