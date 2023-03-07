import axios from 'axios';
import { alertEventSuccess, alertSmallTopCenter } from '../Alerts/SweetAlerts.js';
import { API } from './api/base.js';
import { confRequest } from './api/base.js';

// Dimension

export const getDimensions = async (setListDimensions, setLoadListDimensions) => {
    await axios.get(API + "box/dimension/", confRequest)
        .then(response => {
            setListDimensions(response.data);
            setLoadListDimensions(true);
        })
        .catch(err => console.log(err))
        .finally()
}

export const createDimension = async (setListDimensions, setLoadListDimensions, setViewModalAddDimension, data) => {
    await axios.post(API + "box/dimension/", data, confRequest)
        .then(response => {
            getDimensions(setListDimensions, setLoadListDimensions);
            setViewModalAddDimension(false);
            alertEventSuccess("¡Dimensión creada!", "success");
        })
        .catch(err => console.log(err))
        .finally(() => {})
}

export const deleteDimension = async (setListDimensions, setLoadListDimensions, idDimension) => {
    await axios.delete(API + "box/dimension/" + idDimension, confRequest)
        .then(response => {
            getDimensions(setListDimensions, setLoadListDimensions);
            alertEventSuccess("¡Dimensión eliminada!", "success");
        })
        .catch(err => console.log(err))
        .finally(() => {})
}

// Box

export const getBoxes = async (setListBoxes, setLoadGetBoxes, pickingSelected) => {
    if (pickingSelected !== "") {
        await axios.get(API + "box/box/" + pickingSelected + "/", confRequest)
            .then(response => {
                setListBoxes(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoadGetBoxes(true))
    } else {
        setLoadGetBoxes(true);
    }
}

export const createBox = async (setGrossWeight, setDimensionSelected, setListBoxes, setLoadGetBoxes, idPicking, data) => {

    if (data.gross_weight === '') { data.gross_weight = 0 };

    if (data.dimension === '') {
        alertSmallTopCenter('Debe seleccionar una dimension', 'info');
        return;
    }

    await axios.post(API + "box/box/", data, confRequest)
        .then((response) => {
            //const { data } = response;
            getBoxes(setListBoxes, setLoadGetBoxes, idPicking);
            setDimensionSelected("");
            setGrossWeight("");
            alertEventSuccess("¡Caja creada con éxito!", "success");
        })
        .catch(err => console.log(err))
        .finally(() => {})
}

export const updateBox = async (setGrossWeight, setDimensionSelected, setListBoxes, setLoadGetBoxes, boxSelected, idPicking, data) => {
    if (boxSelected === '') {
        alertSmallTopCenter('Debe seleccionar una caja para modificarla', 'info');
        return;
    };
    
    if (data.gross_weight === '') {
        alertSmallTopCenter('Debe ingresar el peso de la caja', 'info');
        return;
    };

    if (data.dimension === '') {
        alertSmallTopCenter('Debe seleccionar una dimension', 'info');
        return;
    }

    await axios.patch(API + "box/box/" + boxSelected, data, confRequest)
        .then((response) => {
            //const { data } = response;
            getBoxes(setListBoxes, setLoadGetBoxes, idPicking);
            setDimensionSelected("");
            setGrossWeight("");
            alertEventSuccess("¡Caja modificada con éxito!", "success");
        })
        .catch(err => console.log(err))
        .finally(() => {})
}

export const deleteBox = async (idBox, setListBoxes, setLoadGetBoxes, idPicking, setBoxSelected) => {
    await axios.delete(API + "box/box/" + idBox, confRequest)
        .then((response) => {
            //const { data } = response;
            getBoxes(setListBoxes, setLoadGetBoxes, idPicking);
            setBoxSelected("");
            alertEventSuccess("¡Caja eliminada con éxito!", "success");
        })
        .catch(err => console.log(err))
        .finally(() => {})
}