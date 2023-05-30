import axios from 'axios';
import { alertEventSuccess, alertSmallTopCenter } from '../Alerts/SweetAlerts.js';
import { API } from './api/conf.js';
import { confRequest } from './api/conf.js';

// Dimension

export const getDimensions = async (domain, setListDimensions, setLoadListDimensions) => {
    await axios.get(API(domain) + "box/dimension/", confRequest)
        .then(response => {
            setListDimensions(response.data);
            setLoadListDimensions(true);
        })
        .catch(err => console.log(err))
        .finally()
}

export const createDimension = async (domain, setListDimensions, setLoadListDimensions, setViewModalAddDimension, data) => {
    await axios.post(API(domain) + "box/dimension/", data, confRequest)
        .then(response => {
            getDimensions(setListDimensions, setLoadListDimensions);
            setViewModalAddDimension(false);
            alertEventSuccess("¡Dimensión creada!", "success");
        })
        .catch(err => console.log(err))
        .finally(() => {})
}

export const deleteDimension = async (domain, setListDimensions, setLoadListDimensions, idDimension) => {
    await axios.delete(API(domain) + "box/dimension/" + idDimension, confRequest)
        .then(response => {
            getDimensions(setListDimensions, setLoadListDimensions);
            alertEventSuccess("¡Dimensión eliminada!", "success");
        })
        .catch(err => console.log(err))
        .finally(() => {})
}

// Box

export const getBoxes = async (domain, setListBoxes, setLoadGetBoxes, pickingSelected) => {
    if (pickingSelected !== "") {
        await axios.get(API(domain) + "box/box/" + pickingSelected + "/", confRequest)
            .then(response => {
                setListBoxes(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoadGetBoxes(true))
    } else {
        setLoadGetBoxes(true);
    }
}

export const createBox = async (domain, setGrossWeight, setDimensionSelected, setListBoxes, setLoadGetBoxes, idPicking, data) => {

    if (data.gross_weight === '') { data.gross_weight = 0 };

    if (data.dimension === '') {
        alertSmallTopCenter('Debe seleccionar una dimension', 'info');
        return;
    }

    await axios.post(API(domain) + "box/box/", data, confRequest)
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

export const updateBox = async (domain, setGrossWeight, setDimensionSelected, setListBoxes, setLoadGetBoxes, boxSelected, idPicking, data) => {
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

    await axios.patch(API(domain) + "box/box/" + boxSelected, data, confRequest)
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

export const deleteBox = async (domain, idBox, setListBoxes, setLoadGetBoxes, idPicking, setBoxSelected) => {
    await axios.delete(API(domain) + "box/box/" + idBox, confRequest)
        .then((response) => {
            //const { data } = response;
            getBoxes(setListBoxes, setLoadGetBoxes, idPicking);
            setBoxSelected("");
            alertEventSuccess("¡Caja eliminada con éxito!", "success");
        })
        .catch(err => console.log(err))
        .finally(() => {})
}