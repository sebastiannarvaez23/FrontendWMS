import axios from 'axios';
import { API } from './api/base.js';

// Dimension

export const getDimensions = async (setListDimensions, setLoadListDimensions) => {
    await axios.get(API + "box/dimension/", {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            setListDimensions(response.data);
            setLoadListDimensions(true);
        })
        .catch(err => console.log(err))
        .finally()
}

export const createDimension = async (setListDimensions, setLoadListDimensions, data) => {
    await axios.post(API + "box/dimension/", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {

        })
        .catch(err => console.log(err))
        .finally(() => {
            getDimensions(setListDimensions, setLoadListDimensions);
        })
}

export const deleteDimension = async (setListDimensions, setLoadListDimensions, idDimension) => {
    await axios.delete(API + "box/dimension/" + idDimension, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {

        })
        .catch(err => console.log(err))
        .finally(() => {
            getDimensions(setListDimensions, setLoadListDimensions);
        })
}

// Box

export const getBoxes = async (setListBoxes, setLoadGetBoxes, pickingSelected) => {
    if (pickingSelected !== "") {
        await axios.get(API + "box/box/" + pickingSelected + "/", {
            headers: {
                'Content-Type': 'application/json'
            }
        })
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
        alert('Debe seleccionar una dimension');
        return;
    }

    await axios.post(API + "box/box/", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            //const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => {
            getBoxes(setListBoxes, setLoadGetBoxes, idPicking);
            setDimensionSelected("");
            setGrossWeight("")
        })
}

export const updateBox = async (setGrossWeight, setDimensionSelected, setListBoxes, setLoadGetBoxes, boxSelected, idPicking, data) => {
    if (data.gross_weight === '') {
        alert('Debe ingresar el peso de la caja');
        return;
    };

    if (data.dimension === '') {
        alert('Debe seleccionar una dimension');
        return;
    }

    await axios.patch(API + "box/box/" + boxSelected, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            //const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => {
            getBoxes(setListBoxes, setLoadGetBoxes, idPicking);
            setDimensionSelected("");
            setGrossWeight("")
        })
}

export const deleteBox = async (idBox, setListBoxes, setLoadGetBoxes, idPicking, setBoxSelected) => {
    await axios.delete(API + "box/box/" + idBox, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            //const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => {
            getBoxes(setListBoxes, setLoadGetBoxes, idPicking);
            setBoxSelected("");
        })
}