import axios from 'axios';
import { alertEventSuccess } from '../Alerts/SweetAlerts';
import { API } from './api/conf.js';
import { confRequest } from './api/conf.js';

export const getPickings = async (setPickings, setLoadedPicking, noSaleOrder) => {
    if (noSaleOrder !== "") {
        await axios.get(API + "picking/" + noSaleOrder, confRequest)
            .then(response => {
                setPickings(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoadedPicking(true))
    } else {
        setLoadedPicking(true);
    }
}

export const createPicking = async (data, setPickings, setLoadedPicking, noSaleOrder) => {
    if (noSaleOrder !== "") {
        await axios.post(API + "picking/", data, confRequest)
            .then((response) => {
                getPickings(setPickings, setLoadedPicking, noSaleOrder);
                alertEventSuccess("¡Picking creado con éxito!", "success");
            })
            .catch(err => console.log(err))
            .finally(() => {})
    }
}

export const deletePicking = async (idPicking, setPickings, setLoadedPicking, noSaleOrder) => {
    await axios.delete(API + "picking/" + idPicking, confRequest)
        .then((response) => {
            getPickings(setPickings, setLoadedPicking, noSaleOrder);
            alertEventSuccess("¡Picking eliminado correctamente!", "success");
        })
        .catch(err => console.log(err))
        .finally(() => {})
}
