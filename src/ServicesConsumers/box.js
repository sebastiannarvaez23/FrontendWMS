import axios from 'axios';
import { API } from './api/base.js';

// Dimension

export const getDimensions = async (setDimensions) => {
    await axios.get(API + "box/dimension/")
        .then(response => {
            setDimensions(response.data);
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

export const createBox = async (data, setBoxes, setLoadedBox, idPicking) => {
    if (data.gross_weight === '') { data.gross_weight = 0 };
    await axios.post(API + "box/box/", data)
        .then((response) => {
            //const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getBoxes(setBoxes, setLoadedBox, idPicking))
}

export const updateBox = async (data, setBoxes, setLoadedBox, boxSelected, idPicking) => {
    if (data.gross_weight === '') { data.gross_weight = 0 };
    await axios.patch(API + "box/box/" + boxSelected, data)
        .then((response) => {
            //const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getBoxes(setBoxes, setLoadedBox, idPicking))
}