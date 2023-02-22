import React from "react";
import ReactDOM from "react-dom";
import { useBox } from "../../../Context/box-context";
import "./ModalDimension.css";

export const ModalDimension = (props) => {

    const {
        setViewModalDimension,
        setViewModalAddDimension
    } = useBox();

    const handleFrontLayerClick = (event) => {
        if (event.target.classList.contains('front-layer-listDimensions')) {
            setViewModalDimension(false);
        }
    }

    return ReactDOM.createPortal(
        <div className="front-layer-listDimensions" onClick={handleFrontLayerClick}>
            <div className="contain-listDimensions">
                <h2>Dimensiones</h2>
                <input className="inp-search-listDimensions" placeholder="Buscar dimension.." />
                <div className="list-listDimensions">
                    <div className="head-list-listDimensions">
                        <span>Nombre</span>
                        <span>Dimension</span>
                        <span>Peso</span>
                        <span></span>
                    </div>
                    {props.children}
                </div>
                <div>
                    <button className="btn button-create-dimension" onClick={()=>{setViewModalAddDimension(true)}}>Crear dimensión</button>
                </div>
            </div>
        </div>
        ,
        document.getElementById("listDimensions")
    )
}