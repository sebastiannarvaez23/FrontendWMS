import React, { useEffect, useState } from "react";
import { getDimensions, updateBox } from "../../api/box";
import { createBox } from "../../api/box";
import { useBox } from "../../Context/box-context";
import { usePicking } from "../../Context/picking-context";
import './AdminBox.css';


let now = new Date();
let date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + " " + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

export const AdminBox = (props) => {

    const { setGrossWeight, setDimensionSelected, setDimensions, setBoxes, setLoadedBox, boxSelected, dimensions, dimensionSelected, grossWeight } = useBox();
    const { pickingSelected } = usePicking();

    let boxDefaultData = {
        id: boxSelected,
        last_modification: date,
        gross_weight: parseInt(grossWeight, 10),
        responsible: "Sebastian Narvaez",
        dimension: dimensionSelected,
        picking: pickingSelected
    }

    useEffect(() => {
        getDimensions(setDimensions);
    }, [])

    return (
        <div>
            <div className="box-admin">
                <h3>Administración de Cajas</h3>
                <span>Modificar caja seleccionada</span>
                <div className="update-box-functions">
                    <input onChange={(e) => { setGrossWeight(e.target.value) }} value={grossWeight} placeholder="Peso" />
                    <select onChange={(e) => { setDimensionSelected(e.target.value) }}>
                        <option value=""> - Seleccione Dimensión - </option>
                        {dimensions.map(dimension => (
                            <option key={dimension.id} value={dimension.id}> {dimension.name} {dimension.dimension} </option>
                        ))}
                    </select>
                    <button onClick={() => { updateBox(boxDefaultData, setBoxes, setLoadedBox, boxSelected, pickingSelected) }} className="btn-update">Modificar</button>
                </div>
                <button onClick={() => { createBox(boxDefaultData, setBoxes, setLoadedBox, pickingSelected) }} className="btn-create-box">+</button>

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
            </div>
        </div>
    );
}