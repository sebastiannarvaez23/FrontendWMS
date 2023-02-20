import React, { useEffect } from "react";
import { getDimensions, updateBox, createBox } from "../../../ServicesConsumers/box";
import { useBox } from "../../../Context/box-context";
import { usePicking } from "../../../Context/picking-context";
import './AdminBox.css';

export const AdminBox = (props) => {

    const {
        setGrossWeight,
        setDimensionSelected,
        setDimensions,
        setBoxes,
        setLoadedBox,
        boxSelected,
        dimensions,
        dimensionSelected,
        grossWeight
    } = useBox();
    
    const { pickingSelected } = usePicking();

    let boxDefaultData = {
        responsible: 2,
        gross_weight: grossWeight,
        dimension: dimensionSelected,
        picking: pickingSelected
    }

    useEffect(() => {
        getDimensions(setDimensions);
    }, [])

    return (
        <div>
            <div className="box-admin">
                <h3 className="head-contain-box">Administración de Cajas</h3>
                <span className="head-contain-box">Seleccione una caja o cree una</span>
                <div className="update-box-functions">
                    <input onChange={(e) => {
                        const regex = /^\d{0,3}(\.\d{0,2})?$/; // Expresión regular para validar que solo sean números y puntos
                        const newValue = e.target.value;
                        if (regex.test(newValue) || newValue === '') {
                            setGrossWeight(newValue);
                        }
                    }} value={grossWeight} placeholder="Peso" disabled={!boxSelected} />
                    <select  value={dimensionSelected} onChange={(e) => { setDimensionSelected(e.target.value) }}>
                        <option value=""> - Seleccione Dimensión - </option>
                        {dimensions.map(dimension => (
                            <option key={dimension.id} value={dimension.id}> {dimension.name} {dimension.dimension} </option>
                        ))}
                    </select>
                </div>
                <button onClick={() => { createBox(setGrossWeight, setDimensionSelected, setBoxes, setLoadedBox, pickingSelected, boxDefaultData) }} className="btn-create-box">+</button>

                <div className="box-list">
                    <div className="headers-list-box">
                        <span>#</span>
                        <span>Peso bruto</span>
                        <span>Responsable</span>
                        <span>Dimension</span>
                        <span>Ultima Mod</span>
                    </div>
                    {props.children}
                </div>
                <button onClick={() => { updateBox(setGrossWeight, setDimensionSelected, setBoxes, setLoadedBox, boxSelected, pickingSelected, boxDefaultData) }} className="btn-update">Modificar</button>
            </div>

        </div>
    );
}