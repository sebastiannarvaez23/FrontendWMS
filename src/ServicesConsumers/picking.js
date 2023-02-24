import axios from 'axios';
import { API } from './api/base.js';

export const getPickings = async (setPickings, setLoadedPicking, noSaleOrder) => {
    if (noSaleOrder !== "") {
        await axios.get(API + "picking/" + noSaleOrder, {
            headers: {
                "Authorization": "Token 65e4067fb71f7f60c5311862cc4ecc41788e2713"
            }
        })
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
        await axios.post(API + "picking/", data, {
            headers: {
                "Authorization": "Token 65e4067fb71f7f60c5311862cc4ecc41788e2713"
            }
        })
            .then((response) => {
                //const { data } = response;
            })
            .catch(err => console.log(err))
            .finally(() => getPickings(setPickings, setLoadedPicking, noSaleOrder))
    }
}

export const deletePicking = async (idPicking, setPickings, setLoadedPicking, noSaleOrder) => {
    await axios.delete(API + "picking/" + idPicking, {
        headers: {
            "Authorization": "Token 65e4067fb71f7f60c5311862cc4ecc41788e2713"
        }
    })
        .then((response) => {
            //const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getPickings(setPickings, setLoadedPicking, noSaleOrder))
}
