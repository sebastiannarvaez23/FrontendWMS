import React from "react";
import ReactDOM from "react-dom";
import { useBox } from "../../../Context/box-context";
import "./ModalDimension.css";

export const ModalDimension = (props) => {

    const {
        setModalDimension,
        setModalAddDimension
    } = useBox();

    const handleFrontLayerClick = (event) => {
        if (event.target.classList.contains('front-layer-dimensions')) {
            setModalDimension(false);
        }
    }

    return ReactDOM.createPortal(
        <div className="front-layer-dimensions" onClick={handleFrontLayerClick}>
            <div className="contain-dimensions">
                <h2>Dimensiones</h2>
                <input className="inp-search-dimensions" placeholder="Buscar dimension.." />
                <div className="list-dimensions">
                    <div className="head-list-dimensions">
                        <span>Nombre</span>
                        <span>Dimension</span>
                        <span>Peso</span>
                        <span></span>
                    </div>
                    {props.children}
                </div>
                <div>
                    <button className="btn button-create-dimension" onClick={()=>{setModalAddDimension(true)}}>Crear dimensión</button>
                </div>
            </div>
        </div>
        ,
        document.getElementById("dimensions")
    )
}