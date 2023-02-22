import axios from 'axios';
import { API } from './api/base.js';

export const getBoxesItem = async (setBoxItems, setLoadGetBoxItems, idBox) => {
    if (idBox !== "") {
        await axios.get(API + "boxitem/" + idBox + "/")
            .then(response => {
                setBoxItems(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoadGetBoxItems(true);
            })
    } else {
        setBoxItems([])
        setLoadGetBoxItems(true);
    }
}

export const createBoxItem = async (setBoxItems, setLoadGetBoxItems, setQuantity, setInpReference, data) => {
    await axios.post(API + "boxitem/", data)
        .then((response) => {
            getBoxesItem(setBoxItems, setLoadGetBoxItems, data.box);
            setQuantity("");
            setInpReference("");
        })
        .catch(err => console.log(err))
        .finally(() => {})
}

export const deleteBoxItem = async (idBoxItem, setBoxItems, setLoadGetBoxItems, idBox) => {
    await axios.delete(API + "boxitem/" + idBoxItem)
        .then((response) => {
            getBoxesItem(setBoxItems, setLoadGetBoxItems, idBox);
        })
        .catch(err => console.log(err))
        .finally(() => {})
}