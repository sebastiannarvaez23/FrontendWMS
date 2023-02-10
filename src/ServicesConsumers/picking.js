import axios from 'axios';
import { API } from './api/base.js';

export const getPickings = async (setPickings, setLoadedPicking, noSaleOrder) => {
    if (noSaleOrder != "") {
        axios.get(API + "picking/" + noSaleOrder)
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
    axios.post(API + "picking/create/", data)
        .then((response) => {
            const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getPickings(setPickings, setLoadedPicking, noSaleOrder))
}
