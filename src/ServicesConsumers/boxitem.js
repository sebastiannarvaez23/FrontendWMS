import axios from 'axios';
import { API } from './api/base.js';

export const getBoxesItem = async (setBoxItems, setLoadedBoxItem, idBox) => {
    if (idBox != "") {
        axios.get(API + "boxitem/" + idBox)
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
    axios.post(API + "box/createboxitem/", data)
        .then((response) => {
            const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getBoxesItem(setBoxItems, setLoadedBoxItem, idBox))
}