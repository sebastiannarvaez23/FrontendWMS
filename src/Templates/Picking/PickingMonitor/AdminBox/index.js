import React, { useEffect } from "react";
import { getDimensions, updateBox, createBox } from "../../../../ServicesConsumers/box";
import { useBox } from "../../../../Context/box-context";
import { usePicking } from "../../../../Context/picking-context";
import { useAuth } from "../../../../Context/auth-context";
import './AdminBox.css';

export const AdminBox = (props) => {

    const { user } = useAuth();

    const {
        setGrossWeight,
        setDimensionSelected,
        setListDimensions,
        setListBoxes,
        setLoadGetBoxes,
        boxSelected,
        listDimensions,
        dimensionSelected,
        grossWeight,
        setViewModalDimension,
        setLoadListDimensions,
        viewModalDimension
    } = useBox();
    
    const { pickingSelected } = usePicking();

    let boxDefaultData = {
        responsible: user.id,
        gross_weight: grossWeight,
        dimension: dimensionSelected,
        picking: pickingSelected
    }

    useEffect(() => {
        getDimensions(setListDimensions, setLoadListDimensions);
    }, [viewModalDimension])

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
                        {listDimensions.map(dimension => (
                            <option key={dimension.id} value={dimension.id}> {dimension.name} {dimension.dimension} </option>
                        ))}
                    </select>
                    <button onClick={() => {setViewModalDimension(true)}} className="btn-wms btn-create-dimension">+</button>
                </div>
                <button onClick={() => { createBox(setGrossWeight, setDimensionSelected, setListBoxes, setLoadGetBoxes, pickingSelected, boxDefaultData) }} className="btn-create-box">+</button>

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
                <button onClick={() => { updateBox(setGrossWeight, setDimensionSelected, setListBoxes, setLoadGetBoxes, boxSelected, pickingSelected, boxDefaultData) }} className="btn-update">Modificar</button>
            </div>

        </div>
    );
}