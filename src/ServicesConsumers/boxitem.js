import axios from 'axios';
import { alertEventSuccess } from '../Alerts/SweetAlerts.js';
import { API } from './api/conf.js';
import { confRequest } from './api/conf.js';

export const getBoxesItem = async (domain, setBoxItems, setLoadGetBoxItems, idBox) => {
    if (idBox !== "") {
        await axios.get(API(domain) + "boxitem/" + idBox + "/", confRequest)
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

export const createBoxItem = async (domain, setBoxItems, setLoadGetBoxItems, setQuantity, setInpReference, data) => {
    await axios.post(API(domain) + "boxitem/", data, confRequest)
        .then((response) => {
            getBoxesItem(setBoxItems, setLoadGetBoxItems, data.box);
            setQuantity("");
            setInpReference("");
        })
        .catch(err => console.log(err))
        .finally(() => {})
}

export const deleteBoxItem = async (domain, idBoxItem, setBoxItems, setLoadGetBoxItems, idBox) => {
    await axios.delete(API(domain) + "boxitem/" + idBoxItem, confRequest)
        .then((response) => {
            getBoxesItem(setBoxItems, setLoadGetBoxItems, idBox);
            alertEventSuccess("¡Referencia eliminada de la caja!", "success")
        })
        .catch(err => console.log(err))
        .finally(() => {})
}