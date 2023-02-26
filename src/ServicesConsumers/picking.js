import axios from 'axios';
import { API } from './api/base.js';
import Cookies from 'js-cookie';

export const getPickings = async (setPickings, setLoadedPicking, noSaleOrder) => {

    if (noSaleOrder !== "") {
        await axios.get(API + "picking/" + noSaleOrder, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Token ${Cookies.get('token')}`
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
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
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
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            //const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getPickings(setPickings, setLoadedPicking, noSaleOrder))
}
