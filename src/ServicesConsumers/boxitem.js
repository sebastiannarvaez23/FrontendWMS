import axios from 'axios';
import { API } from './api/base.js';

export const getBoxesItem = async (setBoxItems, setLoadedBoxItem, idBox) => {
    if (idBox !== "") {
        await axios.get(API + "boxitem/" + idBox + "/")
            .then(response => {
                setBoxItems(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoadedBoxItem(true))
    } else {
        setLoadedBoxItem(true);
    }
}

export const createBoxItem = async (setBoxItems, setLoadedBoxItem, idBox, data) => {
    await axios.post(API + "boxitem/", data)
        .then(() => {
            getBoxesItem(setBoxItems, setLoadedBoxItem, idBox);
        })
        .catch(err => console.log(err))
        .finally(() => {})
}