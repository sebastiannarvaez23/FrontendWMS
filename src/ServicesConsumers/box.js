import axios from 'axios';
import { API } from './api/base.js';

// Dimension

export const getDimensions = async (setDimensions) => {
    axios.get(API + "box/dimension/")
        .then(response => {
            setDimensions(response.data);
        })
        .catch(err => console.log(err))
        .finally()
}

// Box

export const getBoxes = async (setBoxes, setLoadedBox, pickingSelected) => {
    if (pickingSelected !== "") {
        axios.get(API + "box/box/" + pickingSelected)
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
    axios.post(API + "box/", data)
        .then((response) => {
            const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getBoxes(setBoxes, setLoadedBox, idPicking))
}

export const updateBox = async (data, setBoxes, setLoadedBox, boxSelected, idPicking) => {
    axios.put(API + "box/update/" + boxSelected, data)
        .then((response) => {
            const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getBoxes(setBoxes, setLoadedBox, idPicking))
}