import axios from 'axios';
import { API } from './api/base.js';
import { confRequest } from './api/base.js';

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
                //const { data } = response;
            })
            .catch(err => console.log(err))
            .finally(() => getPickings(setPickings, setLoadedPicking, noSaleOrder))
    }
}

export const deletePicking = async (idPicking, setPickings, setLoadedPicking, noSaleOrder) => {
    await axios.delete(API + "picking/" + idPicking, confRequest)
        .then((response) => {
            //const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getPickings(setPickings, setLoadedPicking, noSaleOrder))
}
