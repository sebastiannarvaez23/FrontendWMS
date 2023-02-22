import axios from 'axios';
import { API } from './api/base.js';

// Dimension

export const getDimensions = async (setDimensions, setLoadDimensions) => {
    await axios.get(API + "box/dimension/")
        .then(response => {
            setDimensions(response.data);
            setLoadDimensions(true);
        })
        .catch(err => console.log(err))
        .finally()
}

// Box

export const getBoxes = async (setBoxes, setLoadedBox, pickingSelected) => {
    if (pickingSelected !== "") {
        await axios.get(API + "box/box/" + pickingSelected + "/")
            .then(response => {
                setBoxes(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoadedBox(true))
    } else {
        setLoadedBox(true);
    }
}

export const createBox = async (setGrossWeight, setDimensionSelected, setBoxes, setLoadedBox, idPicking, data) => {
    
    if (data.gross_weight === '') { data.gross_weight = 0 };

    if (data.dimension === '') {
        alert('Debe seleccionar una dimension');
        return;
    }

    await axios.post(API + "box/box/", data)
        .then((response) => {
            //const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => {
            getBoxes(setBoxes, setLoadedBox, idPicking);
            setDimensionSelected("");
            setGrossWeight("")
        })
}

export const updateBox = async (setGrossWeight, setDimensionSelected, setBoxes, setLoadedBox, boxSelected, idPicking, data) => {
    if (data.gross_weight === '') { 
        alert('Debe ingresar el peso de la caja');
        return;
    };
    
    if (data.dimension === '') {
        alert('Debe seleccionar una dimension');
        return;
    }
    
    await axios.patch(API + "box/box/" + boxSelected, data)
        .then((response) => {
            //const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => {
            getBoxes(setBoxes, setLoadedBox, idPicking);
            setDimensionSelected("");
            setGrossWeight("")
        })
}

export const deleteBox = async (idBox, setBoxes, setLoadedBox, idPicking, setBoxSelected) => {
    await axios.delete(API + "box/box/" + idBox)
        .then((response) => {
            //const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => {
            getBoxes(setBoxes, setLoadedBox, idPicking);
            setBoxSelected("");
        })
}